const quizData = {
  Geography: [
    { question: "What is the largest continent?", answers: ["Africa", "Asia", "Europe", "Antarctica"], correct: "Asia" },
    { question: "Which country has the most population?", answers: ["India", "USA", "China", "Russia"], correct: "India" },
    { question: "What is the capital of France?", answers: ["Paris", "Berlin", "Madrid", "Rome"], correct: "Paris" },
    { question: "Which river is the longest in the world?", answers: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: "Nile" },
    { question: "Which desert is the largest?", answers: ["Sahara", "Gobi", "Kalahari", "Arabian"], correct: "Sahara" },
    { question: "Mount Everest is located in which country?", answers: ["China", "Nepal", "India", "Bhutan"], correct: "Nepal" },
    { question: "Which is the smallest country in the world?", answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: "Vatican City" },
    { question: "Which ocean borders the east coast of the USA?", answers: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: "Atlantic" },
    { question: "Which country has the most time zones?", answers: ["USA", "Russia", "France", "China"], correct: "France" },
    { question: "What is the longest mountain range in the world?", answers: ["Andes", "Rockies", "Himalayas", "Alps"], correct: "Andes" }
  ],
  Oceanography: [
    { question: "Which is the largest ocean?", answers: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: "Pacific" },
    { question: "What is the deepest ocean point?", answers: ["Mariana Trench", "Tonga Trench", "Puerto Rico Trench", "Java Trench"], correct: "Mariana Trench" },
    { question: "Which ocean surrounds the North Pole?", answers: ["Atlantic", "Arctic", "Pacific", "Indian"], correct: "Arctic" },
    { question: "Which is the saltiest ocean?", answers: ["Indian", "Atlantic", "Pacific", "Arctic"], correct: "Atlantic" },
    { question: "Which ocean has the Great Barrier Reef?", answers: ["Pacific", "Indian", "Atlantic", "Southern"], correct: "Pacific" },
    { question: "What is the average depth of the ocean?", answers: ["2,000 m", "3,688 m", "4,500 m", "5,000 m"], correct: "3,688 m" },
    { question: "Which ocean is shrinking due to plate tectonics?", answers: ["Pacific", "Atlantic", "Indian", "Arctic"], correct: "Atlantic" },
    { question: "Which ocean is the warmest?", answers: ["Indian", "Pacific", "Atlantic", "Southern"], correct: "Indian" },
    { question: "The Mariana Trench is located in which ocean?", answers: ["Pacific", "Atlantic", "Indian", "Arctic"], correct: "Pacific" },
    { question: "Which ocean contains the Bermuda Triangle?", answers: ["Pacific", "Atlantic", "Indian", "Arctic"], correct: "Atlantic" }
  ],
  Astronomy: [
    { question: "Which planet is known as the Red Planet?", answers: ["Venus", "Mars", "Jupiter", "Saturn"], correct: "Mars" },
    { question: "What is the closest star to Earth?", answers: ["Sirius", "Alpha Centauri", "Sun", "Betelgeuse"], correct: "Sun" },
    { question: "Which planet has the most moons?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: "Jupiter" },
    { question: "What galaxy is Earth located in?", answers: ["Andromeda", "Milky Way", "Sombrero", "Triangulum"], correct: "Milky Way" },
    { question: "Which planet is known for its rings?", answers: ["Saturn", "Jupiter", "Uranus", "Neptune"], correct: "Saturn" },
    { question: "Which celestial body is a dwarf planet?", answers: ["Pluto", "Mars", "Venus", "Mercury"], correct: "Pluto" },
    { question: "What is the brightest star in the night sky?", answers: ["Sirius", "Betelgeuse", "Rigel", "Polaris"], correct: "Sirius" },
    { question: "Which planet is closest to the Sun?", answers: ["Mercury", "Venus", "Earth", "Mars"], correct: "Mercury" },
    { question: "Which planet is tilted on its side?", answers: ["Uranus", "Neptune", "Saturn", "Jupiter"], correct: "Uranus" },
    { question: "Which is the largest planet in the Solar System?", answers: ["Saturn", "Jupiter", "Neptune", "Earth"], correct: "Jupiter" }
  ],
  Technology: [
    { question: "Who is the founder of Microsoft?", answers: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"], correct: "Bill Gates" },
    { question: "What does CPU stand for?", answers: ["Central Processing Unit", "Computer Power Unit", "Control Processing Unit", "Central Print Unit"], correct: "Central Processing Unit" },
    { question: "What year was the first iPhone released?", answers: ["2005", "2007", "2009", "2010"], correct: "2007" },
    { question: "What does RAM stand for?", answers: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Readily Available Memory"], correct: "Random Access Memory" },
    { question: "What company created the Android OS?", answers: ["Microsoft", "Apple", "Google", "Samsung"], correct: "Google" },
    { question: "HTML is used to create what?", answers: ["Databases", "Webpages", "Software apps", "Servers"], correct: "Webpages" },
    { question: "Which programming language is used for web styling?", answers: ["Python", "CSS", "Java", "C++"], correct: "CSS" },
    { question: "What does GPU stand for?", answers: ["Graphic Processing Unit", "General Purpose Unit", "Graphical Programming Unit", "Graphics Performance Unit"], correct: "Graphic Processing Unit" },
    { question: "What is the main language of Android apps?", answers: ["Java", "C#", "Python", "Ruby"], correct: "Java" },
    { question: "Which company developed Windows OS?", answers: ["IBM", "Microsoft", "Apple", "Google"], correct: "Microsoft" }
  ],
  Cinema: [
    { question: "Who directed 'Titanic'?", answers: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Quentin Tarantino"], correct: "James Cameron" },
    { question: "Which movie won Best Picture in 2020?", answers: ["1917", "Joker", "Parasite", "Ford v Ferrari"], correct: "Parasite" },
    { question: "Who played Iron Man?", answers: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], correct: "Robert Downey Jr." },
    { question: "Which movie features the quote 'May the Force be with you'?", answers: ["Star Trek", "Star Wars", "The Matrix", "Avengers"], correct: "Star Wars" },
    { question: "Who is known as 'The King of Pop Movies'?", answers: ["Steven Spielberg", "James Cameron", "George Lucas", "Michael Bay"], correct: "Steven Spielberg" },
    { question: "Which actress played Hermione in Harry Potter?", answers: ["Emma Watson", "Emma Stone", "Jennifer Lawrence", "Natalie Portman"], correct: "Emma Watson" },
    { question: "Which movie features the song 'My Heart Will Go On'?", answers: ["Titanic", "The Bodyguard", "Frozen", "Moulin Rouge"], correct: "Titanic" },
    { question: "Who voiced Woody in Toy Story?", answers: ["Tom Hanks", "Tim Allen", "Billy Crystal", "John Goodman"], correct: "Tom Hanks" },
    { question: "Which movie has the highest-grossing box office ever?", answers: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"], correct: "Avatar" },
    { question: "Who directed Inception?", answers: ["Christopher Nolan", "Martin Scorsese", "Steven Spielberg", "Ridley Scott"], correct: "Christopher Nolan" }
  ],

  Food: [
    { question: "Which country is famous for sushi?", answers: ["China", "Japan", "Thailand", "Korea"], correct: "Japan" },
    { question: "What is the main ingredient in guacamole?", answers: ["Tomato", "Avocado", "Onion", "Pepper"], correct: "Avocado" },
    { question: "Which fruit is known as the king of fruits?", answers: ["Mango", "Durian", "Apple", "Banana"], correct: "Durian" },
    { question: "What type of pasta is shaped like little ears?", answers: ["Fusilli", "Orecchiette", "Spaghetti", "Penne"], correct: "Orecchiette" },
    { question: "Which cheese is used in traditional pizza?", answers: ["Cheddar", "Mozzarella", "Parmesan", "Gouda"], correct: "Mozzarella" },
    { question: "Which country is famous for chocolate?", answers: ["Switzerland", "Belgium", "USA", "France"], correct: "Belgium" },
    { question: "Which spice comes from dried flower buds?", answers: ["Cloves", "Cinnamon", "Saffron", "Nutmeg"], correct: "Cloves" },
    { question: "What is the main ingredient in hummus?", answers: ["Lentils", "Chickpeas", "Beans", "Peas"], correct: "Chickpeas" },
    { question: "Which fruit is yellow and curved?", answers: ["Banana", "Mango", "Pineapple", "Lemon"], correct: "Banana" },
    { question: "Which meat is used in traditional shepherd's pie?", answers: ["Beef", "Lamb", "Chicken", "Pork"], correct: "Lamb" }
  ],

  BasicMaths: [
    { question: "What is 12 + 8?", answers: ["18", "20", "22", "24"], correct: "20" },
    { question: "What is 9 × 7?", answers: ["63", "56", "72", "49"], correct: "63" },
    { question: "What is 144 ÷ 12?", answers: ["10", "11", "12", "13"], correct: "12" },
    { question: "What is the square of 8?", answers: ["64", "72", "56", "48"], correct: "64" },
    { question: "What is 15% of 200?", answers: ["25", "30", "35", "40"], correct: "30" },
    { question: "What is 7 + 6 × 2?", answers: ["19", "20", "21", "22"], correct: "19" },
    { question: "What is the cube of 3?", answers: ["9", "18", "27", "36"], correct: "27" },
    { question: "What is 50 ÷ 5 + 6?", answers: ["10", "16", "18", "12"], correct: "16" },
    { question: "What is the value of π (approx)?", answers: ["3.12", "3.14", "3.16", "3.18"], correct: "3.14" },
    { question: "What is 100 - 45?", answers: ["50", "55", "60", "65"], correct: "55" }
  ],

  Chemistry: [
    { question: "What is the chemical symbol for water?", answers: ["O2", "H2O", "CO2", "HO"], correct: "H2O" },
    { question: "What is the atomic number of Hydrogen?", answers: ["1", "2", "3", "4"], correct: "1" },
    { question: "Which gas is essential for breathing?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: "Oxygen" },
    { question: "What is NaCl commonly called?", answers: ["Sugar", "Salt", "Baking Soda", "Vinegar"], correct: "Salt" },
    { question: "Which element has the symbol Fe?", answers: ["Fluorine", "Iron", "Francium", "Fermium"], correct: "Iron" },
    { question: "What is the pH of pure water?", answers: ["7", "0", "14", "5"], correct: "7" },
    { question: "Which gas causes bubbles in soda?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: "Carbon Dioxide" },
    { question: "Which element is a noble gas?", answers: ["Oxygen", "Helium", "Nitrogen", "Hydrogen"], correct: "Helium" },
    { question: "What is the chemical formula of table sugar?", answers: ["C12H22O11", "C6H12O6", "C2H5OH", "NaCl"], correct: "C12H22O11" },
    { question: "What is the symbol for gold?", answers: ["Gd", "Au", "Ag", "Go"], correct: "Au" }
  ]
};

let currentQuiz = [];
let currentIndex = 0;
let score = 0;

const categorySelection = document.getElementById("category-selection");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

function startQuiz(category) {
  currentQuiz = quizData[category];
  currentIndex = 0;
  score = 0;
  categorySelection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const currentQuestion = currentQuiz[currentIndex];
  questionEl.textContent = currentQuestion.question;
  answersEl.innerHTML = "";
  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(answer);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(answer) {
  if (answer === currentQuiz[currentIndex].correct) score++;
  nextQuestion();
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  scoreEl.textContent = `Your score: ${score} / ${currentQuiz.length}`;
}

function restartQuiz() {
  resultSection.classList.add("hidden");
  categorySelection.classList.remove("hidden");
}
