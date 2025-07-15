const API = "http://localhost:3000";

// Crear evento
export async function createEvent(event) {
const res = await fetch(`${API}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event)
});
return await res.json();
}

// Obtener todos los eventos
export async function getEvents() {
const res = await fetch(`${API}/events`);
return await res.json();
}

// Actualizar evento
export async function updateEvent(id, updatedData) {
const res = await fetch(`${API}/events/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData)
});
return await res.json();
}

// Eliminar evento
export async function deleteEvent(id) {
await fetch(`${API}/events/${id}`, {
    method: "DELETE"
});
}