// js/registrations.js
const API = "http://localhost:3000";

// Registrar usuario a evento (si hay cupo)
export async function registerToEvent(eventId, userId) {
const event = await fetch(`${API}/events/${eventId}`).then(res => res.json());
const current = await fetch(`${API}/registrations?eventId=${eventId}`).then(res => res.json());

if (current.length >= event.capacity) {
    throw new Error("Cupo lleno para este evento");
}

const res = await fetch(`${API}/registrations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventId, userId })
});

return await res.json();
}

// Obtener registros del usuario
export async function getUserRegistrations(userId) {
const res = await fetch(`${API}/registrations?userId=${userId}`);
return await res.json();
}

// Obtener usuarios inscritos en un evento
export async function getEventRegistrations(eventId) {
const res = await fetch(`${API}/registrations?eventId=${eventId}`);
return await res.json();
}