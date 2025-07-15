export function getUser() {
return JSON.parse(localStorage.getItem("user"));
}

export function isLoggedIn() {
return !!localStorage.getItem("user");
}

export function logout() {
localStorage.removeItem("user");
window.location.href = "/login.html"; // Cambia según tus rutas
}