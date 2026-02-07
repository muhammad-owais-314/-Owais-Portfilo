// Add some fun interactions
document.addEventListener("DOMContentLoaded", function () {
  // Animate progress bars on scroll
  const progressBars = document.querySelectorAll(".progress-bar");

  // Add click animations to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

  // Fun console message
  console.log("🎉 Welcome to Bootstrap Adventure!");
  console.log("🌟 Try clicking the navbar toggle on mobile!");
  console.log(
    "💫 Notice how everything works perfectly? That's Bootstrap magic!"
  );
});
