import { isLoggedIn } from './session.js';

document.addEventListener("DOMContentLoaded", () => {
const path = window.location.pathname;

const publicRoutes = ["/login.html", "/register.html"];
const privateRoutes = ["/dashboard.html", "/dashboard/events/create.html", "/dashboard/events/edit.html"];

const isPublic = publicRoutes.some(r => path.includes(r));
const isPrivate = privateRoutes.some(r => path.includes(r));

if (!isLoggedIn() && isPrivate) {
    window.location.href = "/not-found.html";
}

if (isLoggedIn() && isPublic) {
    window.location.href = "/dashboard.html";
}
});