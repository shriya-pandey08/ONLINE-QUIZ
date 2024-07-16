const quizData = {
  java: [
      { question: "What is Java?", a: "A programming language", b: "A coffee brand", c: "An island", d: "A car model", correct: "a" },
      { question: "Who developed Java?", a: "Microsoft", b: "Sun Microsystems", c: "Apple", d: "Google", correct: "b" },
      { question: "Which is not a Java feature?", a: "Object-oriented", b: "Portable", c: "Platform-dependent", d: "Secure", correct: "c" },
      { question: "What is JVM?", a: "Java Virtual Machine", b: "Java Very Machine", c: "Java Visual Machine", d: "Java Verification Machine", correct: "a" },
      { question: "Which company owns Java now?", a: "Microsoft", b: "Oracle", c: "Google", d: "IBM", correct: "b" },
      { question: "Which of these is a keyword in Java?", a: "goto", b: "implement", c: "interface", d: "native", correct: "d" },
      { question: "What does JDK stand for?", a: "Java Development Kit", b: "Java Deployment Kit", c: "Java Decryption Kit", d: "Java Distribution Kit", correct: "a" },
      { question: "Which is used to find and fix bugs in Java programs?", a: "JDK", b: "JRE", c: "JDB", d: "JVM", correct: "c" },
      { question: "Which package contains the Random class?", a: "java.io", b: "java.util", c: "java.net", d: "java.awt", correct: "b" },
      { question: "Which method is the starting point for all Java programs?", a: "start()", b: "main()", c: "begin()", d: "init()", correct: "b" }
  ],
  webdev: [
      { question: "What does HTML stand for?", a: "HyperText Markup Language", b: "Home Tool Markup Language", c: "Hyperlinks and Text Markup Language", d: "Hyper Tool Markup Language", correct: "a" },
      { question: "What does CSS stand for?", a: "Creative Style Sheets", b: "Cascading Style Sheets", c: "Computer Style Sheets", d: "Colorful Style Sheets", correct: "b" },
      { question: "Inside which HTML element do we put the JavaScript?", a: "<javascript>", b: "<script>", c: "<js>", d: "<scripting>", correct: "b" },
      { question: "Which property is used to change the background color?", a: "color", b: "background-color", c: "bgcolor", d: "bgColor", correct: "b" },
      { question: "Which HTML attribute is used to define inline styles?", a: "class", b: "styles", c: "style", d: "font", correct: "c" },
      { question: "How do you create a function in JavaScript?", a: "function = myFunction()", b: "function:myFunction()", c: "function myFunction()", d: "createFunction()", correct: "c" },
      { question: "How do you call a function named 'myFunction'?", a: "call myFunction()", b: "call function myFunction()", c: "myFunction()", d: "Call.myFunction()", correct: "c" },
      { question: "How to write an IF statement in JavaScript?", a: "if i == 5 then", b: "if (i == 5)", c: "if i = 5", d: "if (i = 5)", correct: "b" },
      { question: "How does a WHILE loop start?", a: "while (i <= 10; i++)", b: "while (i <= 10)", c: "while i = 1 to 10", d: "while (i <= 10; i--)", correct: "b" },
      { question: "Which event occurs when the user clicks on an HTML element?", a: "onchange", b: "onclick", c: "onmouseclick", d: "onmouseover", correct: "b" }
  ],
  python: [
      { question: "Who developed Python?", a: "Dennis Ritchie", b: "Bjarne Stroustrup", c: "James Gosling", d: "Guido van Rossum", correct: "d" },
      { question: "What is the output of: print(2 ** 3)?", a: "5", b: "6", c: "8", d: "9", correct: "c" },
      { question: "Which of these is not a core data type?", a: "Lists", b: "Dictionary", c: "Tuples", d: "Class", correct: "d" },
      { question: "What is the correct file extension for Python files?", a: ".pyth", b: ".pt", c: ".py", d: ".pyt", correct: "c" },
      { question: "What is the output of: print(3 // 2)?", a: "1.5", b: "2", c: "1", d: "0", correct: "c" },
      { question: "What is the output of: print(3 / 2)?", a: "1.5", b: "2", c: "1", d: "0", correct: "a" },
      { question: "Which method can be used to remove whitespace from the beginning and end of a string?", a: "strip()", b: "trim()", c: "len()", d: "ptrim()", correct: "a" },
      { question: "Which of the following is used to define a block of code in Python?", a: "Brackets", b: "Indentation", c: "Parentheses", d: "Quotation", correct: "b" },
      { question: "Which keyword is used for function in Python?", a: "fun", b: "define", c: "function", d: "def", correct: "d" },
      { question: "What does pip stand for?", a: "Pip Installs Packages", b: "Pip Installs Python", c: "Preferred Installer Program", d: "Pip Installs Program", correct: "a" }
  ],
  aws: [
      { question: "What does AWS stand for?", a: "Amazon Web Services", b: "Amazon Wide Services", c: "Amazon Web System", d: "Amazon Wide System", correct: "a" },
      { question: "Which of these is a global content delivery network (CDN) service?", a: "Lambda", b: "S3", c: "CloudFront", d: "EC2", correct: "c" },
      { question: "Which AWS service is used for object storage?", a: "S3", b: "RDS", c: "EC2", d: "Lambda", correct: "a" },
      { question: "Which service is used for running containerized applications?", a: "ECS", b: "Lambda", c: "CloudFormation", d: "DynamoDB", correct: "a" },
      { question: "Which AWS service is used for scalable DNS and domain name management?", a: "CloudFront", b: "Route 53", c: "Direct Connect", d: "VPC", correct: "b" },
      { question: "Which AWS service is used to set up isolated networks?", a: "VPC", b: "RDS", c: "EC2", d: "S3", correct: "a" },
      { question: "Which service can be used for monitoring and logging AWS resources?", a: "CloudWatch", b: "CloudFormation", c: "Lambda", d: "EC2", correct: "a" },
      { question: "Which AWS service provides a fully managed relational database?", a: "DynamoDB", b: "S3", c: "RDS", d: "EC2", correct: "c" },
      { question: "Which service is used for real-time processing of streaming data?", a: "Kinesis", b: "SQS", c: "SNS", d: "CloudWatch", correct: "a" },
      { question: "What does EC2 stand for?", a: "Elastic Compute Cloud", b: "Elastic Cloud Compute", c: "Elastic Computing Cloud", d: "Elastic Compute Cluster", correct: "a" }
  ],
  dotnet: [
      { question: "Which language is primarily used in .NET?", a: "Java", b: "Python", c: "C#", d: "C++", correct: "c" },
      { question: "Which company developed .NET?", a: "Microsoft", b: "Google", c: "Apple", d: "Oracle", correct: "a" },
      { question: "What is the primary IDE for .NET development?", a: "Eclipse", b: "NetBeans", c: "Visual Studio", d: "IntelliJ", correct: "c" },
      { question: "What does CLR stand for?", a: "Common Language Runtime", b: "Common Language Reference", c: "Central Language Runtime", d: "Central Language Reference", correct: "a" },
      { question: "What is the extension for a compiled .NET assembly?", a: ".class", b: ".exe", c: ".dll", d: ".bin", correct: "c" },
      { question: "What is the .NET equivalent of a Java interface?", a: "Class", b: "Delegate", c: "Method", d: "Interface", correct: "d" },
      { question: "Which .NET type can be used to create a class library?", a: "Console App", b: "Windows Forms", c: "Class Library", d: "WPF", correct: "c" },
      { question: "What does ASP.NET stand for?", a: "Active Server Pages .NET", b: "Advanced Server Pages .NET", c: "Application Server Pages .NET", d: "Abstract Server Pages .NET", correct: "a" },
      { question: "Which framework is used for building modern web apps in .NET?", a: "WPF", b: "ASP.NET Core", c: "WinForms", d: "Entity Framework", correct: "b" },
      { question: "What is the .NET framework for data access?", a: "LINQ", b: "ADO.NET", c: "Entity Framework", d: "SQL Server", correct: "c" }
  ],
  ai: [
      { question: "What does AI stand for?", a: "Artificial Integration", b: "Artificial Intelligence", c: "Automated Intelligence", d: "Automated Integration", correct: "b" },
      { question: "Who is considered the father of AI?", a: "Alan Turing", b: "Albert Einstein", c: "Isaac Newton", d: "Galileo Galilei", correct: "a" },
      { question: "Which of the following is an AI technique?", a: "Machine Learning", b: "Data Mining", c: "Web Crawling", d: "All of the above", correct: "a" },
      { question: "Which AI approach tries to mimic the human brain?", a: "Machine Learning", b: "Deep Learning", c: "Expert Systems", d: "Neural Networks", correct: "d" },
      { question: "What is the goal of Natural Language Processing?", a: "Understanding human language", b: "Processing images", c: "Data mining", d: "Web scraping", correct: "a" },
      { question: "Which is not a type of machine learning?", a: "Supervised Learning", b: "Unsupervised Learning", c: "Reinforcement Learning", d: "Collaborative Learning", correct: "d" },
      { question: "Which of these is a popular machine learning library?", a: "TensorFlow", b: "React", c: "Bootstrap", d: "jQuery", correct: "a" },
      { question: "What is an example of AI in use?", a: "Chatbots", b: "Spam filters", c: "Recommendation systems", d: "All of the above", correct: "d" },
      { question: "Which language is commonly used in AI?", a: "JavaScript", b: "HTML", c: "Python", d: "CSS", correct: "c" },
      { question: "What does NLP stand for in AI?", a: "Natural Language Processing", b: "Neural Language Processing", c: "Natural Learning Processing", d: "Neural Learning Processing", correct: "a" }
  ]
};

const quiz = document.getElementById('quiz');
const categoryBtns = document.querySelectorAll('.category-btn');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const resultContainer = document.getElementById('result-container');

let currentQuiz = 0;
let score = 0;
let currentCategory = '';

categoryBtns.forEach(button => {
  button.addEventListener('click', () => {
      currentCategory = button.getAttribute('data-category');
      document.getElementById('category-selection').style.display = 'none';
      document.getElementById('quiz-content').style.display = 'block';
      loadQuiz();
  });
});

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentCategory][currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
      answerEl.checked = false;
      const label = document.querySelector(`label[for=${answerEl.id}]`);
      label.style.color = '#000'; // Reset label color
  });
}

function showCorrectAnswer() {
  const currentQuizData = quizData[currentCategory][currentQuiz];
  const correctAnswerId = currentQuizData.correct;
  answerEls.forEach(answerEl => {
      const label = document.querySelector(`label[for=${answerEl.id}]`);
      if (answerEl.id === correctAnswerId) {
          label.style.color = 'green';
      } else if (answerEl.checked) {
          label.style.color = 'red';
      }
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
      showCorrectAnswer();
      setTimeout(() => {
          if (answer === quizData[currentCategory][currentQuiz].correct) {
              score++;
          }
          currentQuiz++;
          if (currentQuiz < quizData[currentCategory].length) {
              loadQuiz();
          } else {
              showResult();
          }
      }, 1000); // 1 second delay to show the correct answer
  }
});

function getSelected() {
  let answer = null;
  answerEls.forEach(answerEl => {
      if (answerEl.checked) {
          answer = answerEl.id;
      }
  });
  return answer;
}

function showResult() {
  quiz.innerHTML = `
      <h2>You scored ${score} out of ${quizData[currentCategory].length}</h2>
      <button onclick="location.reload()">Reload</button>
  `;
  resultContainer.style.display = 'block';
}
