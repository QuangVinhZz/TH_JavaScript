function calculateTip() {
    // Lấy giá trị hóa đơn từ input
    const billValue = parseFloat(document.getElementById("billValue").value);

    // Kiểm tra giá trị nhập vào
    if (isNaN(billValue) || billValue <= 0) {
        document.getElementById("result").innerHTML = "<strong>Please enter a valid bill value.</strong>";
        console.error("Invalid bill value provided.");
        return;
    }

    // Tính tiền tip bằng toán tử ba ngôi
    const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

    // Tính tổng giá trị
    const totalValue = billValue + tip;

    // Hiển thị kết quả
    const resultMessage = `
      <p>The bill was <strong>${billValue.toFixed(2)}</strong>, the tip was <strong>${tip.toFixed(2)}</strong>, 
      and the total value is <strong>${totalValue.toFixed(2)}</strong>.</p>
    `;
    document.getElementById("result").innerHTML = resultMessage;

    // In ra console
    console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value is ${totalValue}.`);
}