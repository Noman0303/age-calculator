function calculateAge() {
  const year = parseInt(document.getElementById('year').value);
  const month = parseInt(document.getElementById('month').value) - 1; // Months are 0–11 in JS
  const day = parseInt(document.getElementById('day').value);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    document.getElementById('ageResult').textContent = "❗ Please enter a valid birthdate.";
    return;
  }

  const birthDate = new Date(year, month, day);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust days
  if (days < 0) {
    months--;
    const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += daysInPrevMonth;
  }

  // Adjust months
  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('ageResult').textContent =
    `You are ${years} years, ${months} months, and ${days} days old.`;
}