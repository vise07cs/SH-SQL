 let url="http://localhost:3007/api/users"


function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };


  axios
    .post(
      url,
      userDetails
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));







  // Clearing the input fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}


window.addEventListener("DOMContentLoaded", () => {
  //  let url="https://crudcrud.com/api/d802ccb651f84c20be1933671b536f4a/appointmentData"

 let data= axios
    .get(url).then((res)=>{
      console.log(res.data);
      for(let i = 0; i < res.data.length; i++) {
        displayUserOnScreen(res.data[i]);
      }
    }).catch((err)=>{
      console.log(err);
    })
    console.log(data)
    
})







function displayUserOnScreen(userDetails) {
  const userItem = document.createElement("li");
  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    // localStorage.removeItem(userDetails.email);
    axios.delete(`${url}/${userDetails.id}`).then(()=>{
      userItem.remove();
        console.log(`Deleted user with id: ${userDetails.id}`);
    }).catch((err)=>{
      console.log(err);
    })
  });

  editBtn.addEventListener("click", function (event) {
    // userList.removeChild(event.target.parentElement);
    // localStorage.removeItem(userDetails.email);
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;


    axios.delete(`${url}/${userDetails.id}`).then(()=>{
      userItem.remove();
      console.log(`Deleted user with id: ${userDetails.id}`);
    }) .catch((err) => console.log("Error deleting during edit:", err));
  });
}


