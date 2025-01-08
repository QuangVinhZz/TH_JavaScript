function calculateBMI() {
    // Get input values
    const markWeight = parseFloat(document.getElementById("markWeight").value);
    const markHeight = parseFloat(document.getElementById("markHeight").value);
    const johnWeight = parseFloat(document.getElementById("johnWeight").value);
    const johnHeight = parseFloat(document.getElementById("johnHeight").value);

    // Validate inputs
    if (isNaN(markWeight) || isNaN(markHeight) || isNaN(johnWeight) || isNaN(johnHeight)) {
        document.getElementById("result").innerHTML = "<strong>Please enter valid numbers for all fields.</strong>";
        console.error("Invalid inputs provided. Ensure all fields are filled with numbers.");
        return;
    }

    // Calculate BMIs
    const markBMI = markWeight / (markHeight ** 2);
    const johnBMI = johnWeight / (johnHeight ** 2);

    // Determine if Mark has a higher BMI
    let message = "";
    if (markBMI > johnBMI) {
        message = `Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`;
    } else if (johnBMI > markBMI) {
        message = `John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`;
    } else {
        message = `Mark and John have the same BMI (${markBMI.toFixed(2)})!`;
    }

    // Display results
    document.getElementById("result").innerHTML = `
      <p><strong>Mark's BMI:</strong> ${markBMI.toFixed(2)}</p>
      <p><strong>John's BMI:</strong> ${johnBMI.toFixed(2)}</p>
      <p>${message}</p>
    `;

    // Print to console
    console.log(message);
}