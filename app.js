const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculateBtn");

const bmiValue = document.getElementById("bmiValue");
const statusText = document.getElementById("status");
const resultBox = document.querySelector(".result");

calculateBtn.addEventListener("click", () => {

    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    if (!height || !weight) {
        alert("Please enter height and weight");
        return;
    }

    const bmi = weight / ((height / 100) ** 2);

    bmiValue.textContent = bmi.toFixed(1);

    resultBox.classList.remove(
        "underweight",
        "normal",
        "overweight",
        "obese"
    );

    if (bmi < 18.5) {
        statusText.textContent = "Underweight";
        resultBox.classList.add("underweight");
    }
    else if (bmi < 25) {
        statusText.textContent = "Normal Weight";
        resultBox.classList.add("normal");
    }
    else if (bmi < 30) {
        statusText.textContent = "Overweight";
        resultBox.classList.add("overweight");
    }
    else {
        statusText.textContent = "Obese";
        resultBox.classList.add("obese");
    }
});
