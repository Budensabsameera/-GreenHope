
document
  .getElementById("volunteerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
      formMessage.style.color = "green";
      formMessage.textContent = "Thank you for signing up, " + name + "!";
      this.reset();
    } else {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill out all fields.";
    }
  });
