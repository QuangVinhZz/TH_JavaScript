function calculateBMI() {
    // Get input values
    const markWeight = parseFloat(document.getElementById("markWeight").value);
    const markHeight = parseFloat(document.getElementById("markHeight").value);
    const johnWeight = parseFloat(document.getElementById("johnWeight").value);
    const johnHeight = parseFloat(document.getElementById("johnHeight").value);

    // Validate inputs
    if (isNaN(markWeight) || isNaN(markHeight) || isNaN(johnWeight) || isNaN(johnHeight)) {
        document.getElementById("result").innerHTML = "<strong>Please enter valid numbers for all fields.</strong>";
        return;
    }

    // Calculate BMIs
    const markBMI = markWeight / (markHeight ** 2);
    const johnBMI = johnWeight / (johnHeight ** 2);

    // Determine if Mark has a higher BMI
    const markHigherBMI = markBMI > johnBMI;

    // Display results
    document.getElementById("result").innerHTML = `
      <p><strong>Mark's BMI:</strong> ${markBMI.toFixed(2)}</p>
      <p><strong>John's BMI:</strong> ${johnBMI.toFixed(2)}</p>
      <p>${markHigherBMI ? "Mark has a higher BMI than John." : "John has a higher BMI than Mark."}</p>
    `;
}