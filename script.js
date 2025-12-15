function login() {
  if(username.value && password.value){
    loginBox.style.display = "none";
    website.style.display = "block";
  } else {
    alert("Username dan Password wajib diisi!");
  }
}

function logout() {
  website.style.display = "none";
  loginBox.style.display = "block";
}

function filterProduct(type) {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      type === "all" || card.classList.contains(type)
      ? "block" : "none";
  });
}

window.onload = () => {
  setTimeout(() => {
    alert("🎉 Promo Digital Marketing Hari Ini!");
  }, 1500);
};
