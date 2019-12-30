document.addEventListener("DOMContentLoaded", (event) => {
console.log("DOM is fully loaded");

const nameForm = document.getElementById("name-form")

nameForm.addEventListener("submit", addingUsername )

function addingUsername(e) {
    e.preventDefault();
    
    
    const name = document.querySelector("input[name=name]").value;
    
    fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" },
        body: JSON.stringify({name: name})
     }) 
}

fetch("http://localhost:3000/words").then(resp => resp.json()).then((myJSON) => { getRandomQuestions(myJSON) })

let getRandomQuestions = function(JSON) {
    let questionList = []
    for (i = 0; i < 10; i++){
        let question = JSON[Math.floor(Math.random(10) * JSON.length)];
        questionList.push(question)
        
    }

  

    questionList.forEach(q => {
        const questionContainer = document.getElementById("div2")
        const actualQuestion = document.createElement("h1")
        actualQuestion.innerText = "Add the correct vowel"
        questionContainer.appendChild(actualQuestion)

        const newWord = document.createElement("h2")
        newWord.innerText = q.partial_word
        
        questionContainer.appendChild(newWord)
        
        const aButton = document.createElement("button")
        aButton.innerHTML = "a"
        const eButton = document.createElement("button")
        eButton.innerHTML = "e"
        const iButton = document.createElement("button")
        iButton.innerHTML = "i"
        const oButton = document.createElement("button")
        oButton.innerHTML = "o"
        const uButton = document.createElement("button")
        uButton.innerHTML = "u"

        questionContainer.appendChild(aButton)
        questionContainer.appendChild(eButton)
        questionContainer.appendChild(iButton)
        questionContainer.appendChild(oButton)
        questionContainer.appendChild(uButton)
    
        aButton.addEventListener("click", function(e) {
            let letter = "a"   
        });
        eButton.addEventListener("click", function(e) {
            let letter = "e"   
        });
        iButton.addEventListener("click", function(e) {
            let letter = "i"   
        });
        oButton.addEventListener("click", function(e) {
            let letter = "o"   
        });
        uButton.addEventListener("click", function(e) {
            let letter = "u"   
        });    
    
    })

    


}





})