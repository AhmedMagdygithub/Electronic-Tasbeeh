document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.querySelector(".button");
  const resultDiv = document.querySelector(".result");

  calculateBtn.addEventListener("click", () => {
    const ageInput = document.getElementById("inp").value;
    const ageInYears = parseInt(ageInput, 10);

    if (!isNaN(ageInYears)) {
      const ageInDays = ageInYears * 365;
      resultDiv.textContent = `Your age in days is approximately: ${ageInDays}`;
      resultDiv.classList.add("show");
    } else {
      alert("Please enter a valid age.");
    }

    // لإضافة تأثير للـ fieldset عند الضغط على الزر
    const fieldset = document.querySelector(".field");
    fieldset.classList.add("shake");
    setTimeout(() => {
      fieldset.classList.remove("shake");
    }, 820);
  });
});
