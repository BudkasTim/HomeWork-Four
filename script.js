const quizData=[{
    question:' How old is Florin ?',
    a:'10',
    b:'17',
    c:'26',
    d:'110',
    correct: 'c'
},{
        question: 'what is most used programming language  in 2019? ',
        a:'Java',
        b:'C++',
        c:'Python',
        d:'JavaScript',
        correct: 'c'
},{
    question: 'who is MVP of 2019? in NFL ',
    a:'Java',
    b:'Mahomes',
    c:'Patrick ',
    d:'JavaScript',
    correct: 'b'
},{
    question: 'what does HTML stands for? ',
    a:'Hypertext Markup Language',
    b:'Cascading Style Sheet',
    c:'Jason Object Notation ',
    d:'Helicopter Terminal Motoboats',
    correct: 'a'
},{
    question: 'what does HTML stands for? ',
    a:'Hypertext Markup Language',
    b:'Cascading Style Sheet',
    c:'Jason Object Notation ',
    d:'Helicopter Terminal Motoboats',
    correct: 'a'
}];


const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");


let currentQuiz = 0;
let answer=undefined;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

    currentQuestion++;
}

function getSelected(){
   // 
    let answer=undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
           answer= answerEl.id;
            }
        });
       return answer;
    }

    function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;
        });
    }

submitBtn.addEventListener('click',()=>{
  
   const answer= getSelected();
   if (answer)
   {
       if(answer === quizData[currentQuiz].correct){
           score++;
       }

       {
        currentQuiz++;
        if ( currentQuiz<quizData.length)
            {
                loadQuiz();
            }else{
            //todo : show results
                alert("did do U good job?");
            }
       }
   }
   

   
            
   
    //loadQuiz();
});
