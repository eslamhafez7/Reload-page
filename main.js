const button = document.querySelector("button");
button.addEventListener("click", () => {
   window.onbeforeunload = () => {
      return "Window is being reloaded";
   }
   window.location.reload();
});
