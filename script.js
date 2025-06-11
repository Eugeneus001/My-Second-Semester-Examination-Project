document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.getElementById("joinBtn");

  joinBtn.addEventListener("click", () => {
    joinBtn.textContent = "🎉 You're In!";
    joinBtn.disabled = true;
    joinBtn.style.backgroundColor = "#999";
    alert("You've successfully joined the beta waitlist!");
  });
});
