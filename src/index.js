document.addEventListener("DOMContentLoaded", (event) => {
console.log("DOM is fully loaded");

        let currentUserId;
        let finalTally =0 ;
        const gradeButton = document.getElementById("quiz-submit");
        const endGame = document.getElementById("final")
        let score = document.getElementById("show_score")
            score.setAttribute("class", "zeescore")
        let questionList
        const questionContainer = document.getElementById("questions")
        let scoreText = document.getElementById("score-text")
        let welcome = document.getElementById("welcome")
       
        

       const nameForm = document.getElementById("name-form")
        nameForm.addEventListener("submit", addingUsername)
        nameForm.addEventListener("submit", welcomeUser)
      
        
            function addingUsername(e) {
                e.preventDefault();
                let name= document.querySelector("input[name=name]").value
                if (name.length === 0){
                    alert("Please enter a username")
                }
                
                    fetch("http://localhost:3000/users",{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json" },
                        body: JSON.stringify({name: name})
                    }).then( () => retrieveUser() )


                        let retrieveUser = () => {
                            fetch("http://localhost:3000/users").then( response => response.json() ).then( newData => getUser(newData))
                        }

                        let getUser = (newData) => {
                            let currentUser = newData[newData.length -1]
                            currentUserId = currentUser.id
                    
                        }
                
            }

            function welcomeUser(e){
                e.preventDefault()
                let name= document.querySelector("input[name=name]").value
                // let welcome = document.getElementById("welcome")
                welcome.innerHTML= `Welcome, ${name}!`
                document.getElementById("username").value = ""
               
            }


            


    const gameButton = document.getElementById("game")
    gameButton.addEventListener("click", words)
    gameButton.addEventListener("click", firstMove)
    function firstMove() {

            let x = document.getElementById("div1")
            let y = document.getElementById("div2")
           

            if (x) {

                if (x.style.display == "none") {
                    x.style.display = "block";
                    y.style.display = "none"
                } 
                else {
                    x.style.display = "none";
                    y.style.display ="block"
                } }
               
    }
           



           
        function words() {       
            fetch("http://localhost:3000/words")
            .then(resp => resp.json())
            .then((myJSON) =>  shuffle(myJSON) )
        }   
        
            function shuffle(object){
              
                let counter = object.length
                

                while (counter > 0){
                    let index = Math.floor(Math.random()*counter)
                    counter--

                    let temp = object[counter]
                    object[counter] = object[index]
                    object[index] = temp    
                }
               questionList= object.slice(0,10)
               
                
                
               questionList.forEach(q => {
                    // const questionContainer = document.getElementById("questions")
                    const actualQuestion = document.createElement("h2")
                    actualQuestion.innerText = 'A E I O U?'
                    questionContainer.appendChild(actualQuestion)

                    const newWord = document.createElement("h1")
                          newWord.setAttribute("class", "wordColor")
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
                
                
                    aButton.addEventListener("click", tally);
                    eButton.addEventListener("click", tally);
                    iButton.addEventListener("click", tally);
                    oButton.addEventListener("click", tally);
                    uButton.addEventListener("click", tally);                        
                    


                    function tally(j) {
                        let clickedButton = j.target.innerHTML;
                         if (clickedButton == q.correct_letter) {
                                finalTally++
                        }  

                        j.target.style.backgroundColor = "white"

                       
                      



                    }    
            
        

                })
            }

               
            gradeButton.addEventListener("click", postScore, showGrade)
            
               function postScore(e){
                    e.preventDefault
                    
                                        fetch("http://localhost:3000/scores", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    "Accept" : "application/json"
                                                    },
                                                    body: JSON.stringify({
                                                        score: finalTally,
                                                        user_id: currentUserId
                                                    })
                                                }).then(()=>showGrade())
                                    

                }

                
                


                function showGrade(){
                    fetch("http://localhost:3000/scores")
                    .then(resp => resp.json())
                    .then(x => renderGrade(x))

                }
                
                function renderGrade(j){
                    // let score = document.getElementById("show_score")
                    let lastScore = j[j.length -1].score
                    score.innerText= lastScore



                    if (lastScore == 10){
                        scoreText.innerHTML="Congrats! 10 out of 10!"
                        } else if (lastScore < 10 && lastScore> 6){
                            scoreText.innerHTML="Good job! Play again to master your spelling skills."
                        } else {
                            scoreText.innerHTML="Close, but no cigar! Play again to improve your spelling skills. "
                        }
                }


               


                 endGame.addEventListener("click", clearObject)
                 endGame.addEventListener("click", startPage)


                 function startPage(){
                    let x = document.getElementById("div2")
                    let y = document.getElementById("div1")
                    finalTally = 0
                    score.innerHTML=0
                    scoreText.innerHTML=""
                    welcome.innerHTML= ""
                
                    if (x) {

                        if (x.style.display == "none") {
                            x.style.display = "block";
                            y.style.display = "none"
                        } 
                        else {
                            x.style.display = "none";
                            y.style.display ="block"
                        } 
                    }
                 }

                 function clearObject(){
                    questionContainer.innerHTML=""
                 }

    
                           
            
})

