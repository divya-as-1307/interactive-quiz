function calculateScore() {
    const answers = {
        question1: "Paris",
        question2: "Mars",
        question3: "Blue Whale"
    };

    let score = 0;
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    for (const [question, correctAnswer] of Object.entries(answers)) {
        const userAnswer = formData.get(question);
        if (userAnswer === correctAnswer) {
            score++;
        }
    }

    const resultContainer = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');

    scoreDisplay.textContent = `Score: ${score}`;
    
    resultContainer.style.display = 'block';
}

