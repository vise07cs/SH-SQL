const amountEl = document.getElementById("amount");
const descriptionEl = document.getElementById("description");
const categoryEl = document.getElementById("category");
const expenseListEl = document.getElementById("expenseList");
const addBtn = document.getElementById("addExpenseBtn");

const API_URL = "http://localhost:3004/api/expenses";

let editId = null;

async function fetchExpenses() {
  try {
    const res = await axios.get(API_URL);
    renderExpenses(res.data);
  } catch (err) {
    console.error("Error fetching expenses:", err);
  }
}

function renderExpenses(expenses) {
  expenseListEl.innerHTML = "";
  expenses.forEach((exp) => {
    const div = document.createElement("div");
    div.className = "expense-item";
    div.innerHTML = `
      <span>₹${exp.amount}</span>
      <span>${exp.description}</span>
      <span>${exp.category}</span>
      <button onclick="editExpense(${exp.id}, '${exp.amount}', '${exp.description}', '${exp.category}')">Edit</button>
      <button onclick="deleteExpense(${exp.id})">Delete</button>
    `;
    expenseListEl.appendChild(div);
  });
}

async function addExpense() {
  const amount = amountEl.value.trim();
  const description = descriptionEl.value.trim();
  const category = categoryEl.value;

  if (!amount || !description || !category) {
    alert("Please fill all fields");
    return;
  }

  try {
    if (editId) {
      // Update expense
      await axios.put(`${API_URL}/${editId}`, { amount, description, category });
      editId = null;
      addBtn.textContent = "Add Expense";
    } else {
      // Create expense
      await axios.post(API_URL, { amount, description, category });
    }

    amountEl.value = "";
    descriptionEl.value = "";
    categoryEl.value = "";

    fetchExpenses();
  } catch (err) {
    console.error("Error saving expense:", err);
  }
}

async function deleteExpense(id) {
  try {
    await axios.delete(`${API_URL}/${id}`);
    fetchExpenses();
  } catch (err) {
    console.error("Error deleting expense:", err);
  }
}

function editExpense(id, amount, description, category) {
  amountEl.value = amount;
  descriptionEl.value = description;
  categoryEl.value = category;
  editId = id;
  addBtn.textContent = "Update Expense";
}

addBtn.addEventListener("click", addExpense);

// Load expenses on page load
fetchExpenses();
