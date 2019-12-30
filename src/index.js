document.addEventListener("DOMContentLoaded", (event) => {
console.log("DOM is fully loaded");

        let currentUserId;
        let count = [];
        let finalTally =0 ;
        

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
                }).then( () => retrieveUser() )


                    let retrieveUser = () => {
                        fetch("http://localhost:3000/users").then( response => response.json() ).then( newData => getUser(newData))
                    }

                    let getUser = (newData) => {
                        let currentUser = newData[newData.length -1]
                        currentUserId = currentUser.id
                        console.log(currentUserId)
                    }

                
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

                    }    
                    
                

                })


               

            }

            // let gradeButton = document.getElementById("quiz-submit")
            // gradeButton.addEventListener("click", () => dummy)
            
            //     let dummy = (e) => {
            //         e.preventDefault
            //         console.log("button clicked!")
            //     }
                            // fetch("http://localhost:3000/scores", {
                            //         method: "POST",
                            //         headers: {
                            //             "Content-Type": "application/json",
                            //             "Accept" : "application/json"
                            //             },
                            //             body: JSON.stringify({
                            //                 score: finalTally,
                            //                 user_id: currentUserId
                            //             })
                            //         })
                            //         )
            
})

