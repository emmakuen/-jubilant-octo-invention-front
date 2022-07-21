const buttons = document.querySelectorAll(".select-profile-btn");
const radioInputs = document.querySelectorAll(".profile-radio");
const profileForm = document.getElementById("profile-form");

profileForm.addEventListener("click", async (e) => {
  if (e.target.tagName !== "INPUT") return;

  if (e.target.checked) {
    const id = parseInt(e.target.dataset.id);
    localStorage.setItem("comment-ui-profile-id", id);
    window.location.replace("/comments?" + new URLSearchParams({ id }));
  }
});
