let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
//   you can uncomment the below codes and make duplicate as more as you want to add question
//   but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
//     {
  //   {
  //   numb: 6,
  //   question: "How many players are there in one team of cricket ?",
  //   answer: "11",
  //   options: [
  //     "13",
  //     "12",
  //     "11",
  //     "none of the above"
  //   ]
  // },
  // {
  //   numb: 7,
  //   question: "A cricket match is divided into periods called ________",
  //   answer: "innings",
  //   options: [
  //     "halfs",
  //     "intervals",
  //     "innings",
  //     "none of the above"
  //   ]
  // },
  // {
  //   numb: 8,
  //   question: "what is lenght of pitch",
  //   answer: "20.5 m",
  //   options: [
  //     "20.4 m",
  //     "20.5 m",
  //     "22 m",
  //     "none of the above"
  //   ]
  // },
  // {
  //   numb: 9,
  //   question: "The first official international match of cricket was held in 1844 between …",
  //   answer: "The United States and Canada",
  //   options: [
  //     "India and Afghanistan",
  //     " England and Australia",
  //     "The United States and Canada",
  //     "India Vs Pakistan"
      
  //   ]
  // },
  // {
  //   numb: 10,
  //   question: "The highest score of Sachin Tendulkar in his international cricket career was …",
  //   answer: "248",
  //   options: [
  //     "248",
  //     "200",
  //     "209",
  //     "none of the above"
  //   ]
  // },
  
];

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}
// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}
// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(60); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}
let timeValue =  60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 60; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}
// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}
// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");
    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
        
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}////////
// Function to display questions and answers after the quiz

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");

    // Initialize variables to count attempted questions and correct answers
    let attemptedQuestions = 0;
    //let correctAnswers = 0;
    

    // Create a variable to store the HTML content for displaying questions, chosen answers, correct answers, and correctness
    let userAnswersHTML = '';

    // Loop through each question
    questions.forEach((question, index) => {
        // Increment attempted questions count
        attemptedQuestions++;

        // Add question text
        userAnswersHTML += `<div class="user-answer"><span>${question.numb}. ${question.question}</span>`;

        // Get the index of the chosen answer
        const selectedOption = option_list.querySelector('.selected');
        let userSelectedAnswer;
        if (selectedOption) {
            const selectedOptionText = selectedOption.textContent.trim();
            const optionIndex = question.options.findIndex(option => option === selectedOptionText);
            userSelectedAnswer = question.options[optionIndex];
           }
        //     else {
        //     userSelectedAnswer = "No answer selected";
        //  }

        // Add user's chosen answer
        // userAnswersHTML += `<div class="chosen-answer"><span>Chosen Answer: ${userSelectedAnswer}</span></div>`;

        // Add correct answer to HTML content
        userAnswersHTML += `<div class="correct-answer"><span>Correct Answer: ${question.answer}</span></div>`;

        // Check if the user's answer is correct
        // const isCorrect = userSelectedAnswer === question.answer;
        // if (isCorrect) {
        //     correctAnswers++;
        //     userAnswersHTML += `<div class="answer-correctness"><span>Your answer is incorrect!</span></div>`;
           
        // }
        //  else {
        //     userAnswersHTML += `<div class="answer-correctness"><span>Your answer is correct!</span></div>`;
        // }

        userAnswersHTML += `</div>`; // Close user-answer div
        let total_time=5;
        let msg=document.querySelector(".complete_text");
        msg.innerText=`You've completed the Quiz in ${total_time} min`;
    });

    // Display the HTML content
    scoreText.innerHTML = userAnswersHTML;

    // Display the number of attempted questions out of the total
    const attemptSummary = document.createElement('div');
    attemptSummary.innerHTML = `<p>Attempted ${attemptedQuestions} out of ${questions.length} questions.</p>`;
    scoreText.appendChild(attemptSummary);
}

// function showResult(){
//     info_box.classList.remove("activeInfo"); //hide info box
//     quiz_box.classList.remove("activeQuiz"); //hide quiz box
//     result_box.classList.add("activeResult"); //show result box
//     const scoreText = result_box.querySelector(".score_text");
//     if (userScore > 3){ // if user scored more than 3
//         //creating a new span tag and passing the user score number and total question number
//         let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
//         scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
//     }
//     else if(userScore > 1){ // if user scored more than 1
//         let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
//         scoreText.innerHTML = scoreTag;
//     }
//     else{ // if user scored less than 1
//         let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
//         scoreText.innerHTML = scoreTag;
//     }
//      quiz_box.classList.remove("activeQuiz");
    
//     // Show the result box
//     result_box.classList.add("activeResult");

//     const scoreText = result_box.querySelector(".score_text");
    
//     // Calculate the number of correct answers
//     const correctAnswers = questions.reduce((count, question, index) => {
//         return count + (selectedAnswers[index] === question.answer ? 1 : 0);
//     }, 0);

//     // Display the number of correct answers
//     scoreText.innerHTML = `Number of Correct Answers: ${correctAnswers}`;

//     // Display all questions and answers
//     const resultContainer = document.querySelector(".result_container");
//     resultContainer.innerHTML = "";

//     questions.forEach((question, index) => {
//         const questionDiv = document.createElement("div");
//         questionDiv.classList.add("question");

//         const questionText = document.createElement("p");
//         questionText.textContent = `Question ${question.numb}: ${question.question}`;
//         questionDiv.appendChild(questionText);

//         const userAnswer = selectedAnswers[index] || "Not answered";
//         const userAnswerText = document.createElement("p");
//         userAnswerText.textContent = `Your Answer: ${userAnswer}`;
//         questionDiv.appendChild(userAnswerText);

//         const correctAnswerText = document.createElement("p");
//         correctAnswerText.textContent = `Correct Answer: ${question.answer}`;
//         questionDiv.appendChild(correctAnswerText);

//         resultContainer.appendChild(questionDiv);
//     });
// }

//////
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 100);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}
function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter

 
  }

  