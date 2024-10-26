document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calculatorForm");
  const resultDiv = document.getElementById("result");
  const mifflinSpan = document.getElementById("mifflin");
  const harrisSpan = document.getElementById("harris");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const activity = document.getElementById("activity").value;

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
      alert("Por favor, ingrese valores válidos.");
      return;
    }

    let mifflin, harris;

    if (gender === "male") {
      mifflin = 10 * weight + 6.25 * height - 5 * age + 5;
      harris = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    } else {
      mifflin = 10 * weight + 6.25 * height - 5 * age - 161;
      harris = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
    }

    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    mifflin *= activityFactors[activity];
    harris *= activityFactors[activity];

    mifflinSpan.textContent = Math.round(mifflin);
    harrisSpan.textContent = Math.round(harris);
    resultDiv.classList.remove("hidden");
  });
});
