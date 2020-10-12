//global variables
var quiz= document.querySelectorAll("#quiz");
var answerEls=document.querySelectorAll(".answer");

var questionEl=document.querySelector("#question-text");
var a_text=document.querySelector("#a_text");
var b_text=document.querySelector("#b_text");
var c_text=document.querySelector("#c_text");
var d_text=document.querySelector("#d_text");
var submitBtn=document.querySelector("#submit");


//quiz data
var quizData=[
    {
        question: "How many times has Rafael Nadal won Rolland Garros ?",
        a:"10",
        b:"17",
        c:"13",
        d:"20",
        correct: "c",
    },
    {
        question: "what is the capital of Iceland ? ",
        a:"Amsterdam",
        b:"Copenhagen",
        c:"Casbah",
        d:"Reykjavik",
        correct: "d "
    },
    {
        question: "who is MVP of 2019? in NFL ",
        a:"Lamar Jackson",
        b:"Mahomes ",
        c:"Patrick Sr ",
        d:"Aaron Rodgers",
        correct: "b "
    },
    {
        question: "How painted the Mona Lisa? ",
        a:"Leonardo Da Vinci ",
        b:" Vincent Van Gogh",
        c:" Michel de NostreDame ",
        d:" Michelangelo",
        correct: "a"
    },
    {
        question:"In Harry Potter, what is the name of The Weasley' house ? ",
        a:" Whomping Willow ",
        b:" Shrieking Shack",
        c:" The Burrow ",
        d:" Chamber of Secrets ",
        correct: "c"
}];

var currentQuiz = 0;

var score = 0;

loadQuiz();
// loads quiz Data and starts Quiz
function loadQuiz(){
    questionEl.innerText = quizData[currentQuiz].question;
    a_text.innerText=quizData[currentQuiz].a;
    b_text.innerText=quizData[currentQuiz].b;
    c_text.innerText=quizData[currentQuiz].c;
    d_text.innerText=quizData[currentQuiz].d;
    console.log( questionEl.innerText)
    //currentQuestion++;
}
// checks answer selected 
function atLeastOneRadio(){
   var answer;
   for (var i=0; i< answerEls.length;i++){
       if ( answerEls[i].checked) {
       
        answer = answerEls[i].value;       
    }
    return answer;
   
   }
}

// checks user answers , stores score and continues the test 
submitBtn.addEventListener("click",function(){
        const answer= atLeastOneRadio();
        if (answer) {
            if (answer === quizData[currentQuiz].correct) 
            {
                score++;
            }
                currentQuiz++;
            
                if (currentQuiz < quizData.length) 
            {
                loadQuiz();
            } else {
                quiz.innerHTML = `
                    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                    
                    <button onclick="location.reload()">Reload</button>`
                ;
            }
        }
    });
