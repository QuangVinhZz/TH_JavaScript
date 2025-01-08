function calculateWinner() {
    // Get input values
    const dolphinScores = [
        parseFloat(document.getElementById("dolphinScore1").value),
        parseFloat(document.getElementById("dolphinScore2").value),
        parseFloat(document.getElementById("dolphinScore3").value),
    ];
    const koalaScores = [
        parseFloat(document.getElementById("koalaScore1").value),
        parseFloat(document.getElementById("koalaScore2").value),
        parseFloat(document.getElementById("koalaScore3").value),
    ];

    // Validate inputs
    if (dolphinScores.some(isNaN) || koalaScores.some(isNaN)) {
        document.getElementById("result").innerHTML = "<strong>Please enter valid scores for all fields.</strong>";
        console.error("Invalid inputs detected. All fields must contain numbers.");
        return;
    }

    // Calculate average scores
    const calcAverage = (scores) => scores.reduce((a, b) => a + b, 0) / scores.length;
    const dolphinsAverage = calcAverage(dolphinScores);
    const koalasAverage = calcAverage(koalaScores);

    // Minimum score requirement
    const minScore = 100;

    // Determine the winner
    let message = "";
    if (dolphinsAverage > koalasAverage && dolphinsAverage >= minScore) {
        message = `Dolphins win the trophy with an average score of ${dolphinsAverage.toFixed(2)}!`;
    } else if (koalasAverage > dolphinsAverage && koalasAverage >= minScore) {
        message = `Koalas win the trophy with an average score of ${koalasAverage.toFixed(2)}!`;
    } else if (
        dolphinsAverage === koalasAverage &&
        dolphinsAverage >= minScore &&
        koalasAverage >= minScore
    ) {
        message = `It's a draw! Both teams have an average score of ${dolphinsAverage.toFixed(2)}.`;
    } else {
        message = `No team wins the trophy as neither met the minimum score of ${minScore}.`;
    }

    // Display results
    document.getElementById("result").innerHTML = `<p>${message}</p>`;
    console.log(message);
}