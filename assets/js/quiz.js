// Questions du quiz
const questions = [
    {
        text: "Quelle année marque le début de la Seconde Guerre mondiale ?",
        answers: [
            { text: "1938", correct: false },
            { text: "1939", correct: true },
            { text: "1940", correct: false }
        ]
    },
    {
        text: "Quel événement a déclenché l'entrée des États-Unis dans la guerre ?",
        answers: [
            { text: "Le débarquement en Normandie", correct: false },
            { text: "L'attaque de Pearl Harbor", correct: true },
            { text: "La bataille de Stalingrad", correct: false }
        ]
    },
    {
        text: "Quel pays faisait partie de l'Axe ?",
        answers: [
            { text: "France", correct: false },
            { text: "Allemagne", correct: true },
            { text: "Canada", correct: false }
        ]
    }
];

// Variables de progression
let currentQuestionIndex = 0;
let score = 0;

// Sélection des éléments HTML
const questionText = document.getElementById("question-text");
const answersContainer = document.querySelector(".answers");
const feedback = document.getElementById("feedback");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");

// Initialisation du quiz
totalQuestionsSpan.textContent = questions.length;
loadQuestion();

// Charger une question
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.text;

    // Réinitialiser les réponses
    answersContainer.innerHTML = "";
    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.classList.add("answer");
        button.textContent = answer.text;
        button.dataset.correct = answer.correct;
        button.addEventListener("click", handleAnswerClick);
        answersContainer.appendChild(button);
    });
}

// Gérer le clic sur une réponse
function handleAnswerClick(e) {
    const correct = e.target.dataset.correct === "true";
    feedback.textContent = correct ? "Bonne réponse !" : "Mauvaise réponse.";
    feedback.className = `feedback ${correct ? "correct" : "wrong"}`;
    feedback.style.display = "block";

    if (correct) score++;

    // Passer à la question suivante après 1,5 seconde
    setTimeout(() => {
        feedback.style.display = "none";
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            currentQuestionSpan.textContent = currentQuestionIndex + 1;
            loadQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

// Afficher les résultats
function showResults() {
    questionText.textContent = `Quiz terminé ! Votre score est de ${score} / ${questions.length}.`;
    answersContainer.innerHTML = `<button class="answer" onclick="restartQuiz()">Rejouer</button>`;
}

// Redémarrer le quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    currentQuestionSpan.textContent = 1;
    loadQuestion();
}
