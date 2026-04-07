let selectedItem = "";

// INIT ANIMATIONS
AOS.init({ duration: 1000, once: true });

// HERO ANIMATION
gsap.from(".hero h2", { y: -50, opacity: 0, duration: 1 });
gsap.from(".hero p", { y: 50, opacity: 0, duration: 1, delay: 0.3 });

// PAGE LOAD
window.onload = () => {
  gsap.from("body", { opacity: 0, duration: 1 });
};

// ORDER
function orderItem(name, price) {
  selectedItem = name + " - ₹" + price;
  document.getElementById("orderBox").style.display = "block";
  document.getElementById("item").value = selectedItem;
}

// WHATSAPP
function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;

  let msg = `Order Details:%0AName: ${name}%0AItem: ${selectedItem}%0AAddress: ${address}`;
  let phone = "91XXXXXXXXXX";

  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}

// LOGIN UI
function showLogin() {
  document.getElementById("loginBox").style.display = "block";
}

// SIGNUP
function signup() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  localStorage.setItem(user, pass);
  alert("Signup Successful");
}

// LOGIN
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (localStorage.getItem(user) === pass) {
    alert("Login Successful");
  } else {
    alert("Invalid Credentials");
  }
}

// RIPPLE EFFECT
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function(e) {
    let circle = document.createElement("span");
    circle.style.left = e.offsetX + "px";
    circle.style.top = e.offsetY + "px";
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});
