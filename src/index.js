document.addEventListener("DOMContentLoaded", (event) => {
console.log("DOM is fully loaded");

const nameForm = document.getElementById("name-form")

nameForm.addEventListener("submit", addingUsername )

function addingUsername(e) {
    e.preventDefault();
    console.log("button clicked!!")
    
    const name = document.querySelector("input[name=name]").value;
    console.log(name)
    fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" },
        body: JSON.stringify({name: name})
     }) 
}



})