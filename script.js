function calculateLove() {
  const yourName = document.getElementById("yourName").value.trim();
  const crushName = document.getElementById("crushName").value.trim();

  if (!yourName || !crushName) {
    alert("Please enter both names ❤️");
    return;
  }

  const fakePercent = Math.floor(Math.random() * 20) + 80;

  localStorage.setItem("yourName", yourName);
  localStorage.setItem("crushName", crushName);
  localStorage.setItem("lovePercent", fakePercent);

  window.location.href = "love.html";
}
