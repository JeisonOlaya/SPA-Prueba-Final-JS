import { login, register } from "./auth.js";
import { getUser, logout } from "./session.js";
import { createEvent, getEvents, updateEvent, deleteEvent } from "./events.js";
import { registerToEvent, getUserRegistrations, getEventRegistrations } from "./registrations.js";

window.app = {
// Auth
login,
register,

// Session
getUser,
logout,

// Eventos
createEvent,
getEvents,
updateEvent,
deleteEvent,

// Registros
registerToEvent,
getUserRegistrations,
getEventRegistrations
};