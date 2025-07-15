const API = "http://localhost:3000";

// Iniciar sesión
export async function login(email, password) {
const res = await fetch(`${API}/users?email=${email}&password=${password}`);
const data = await res.json();

if (data.length > 0) {
    const user = data[0];
    localStorage.setItem("user", JSON.stringify(user));
    return user;
} else {
    throw new Error("Credenciales incorrectas");
}
}

// Registrar nuevo usuario
export async function register(name, email, password) {
const res = await fetch(`${API}/users?email=${email}`);
const existing = await res.json();

if (existing.length > 0) {
    throw new Error("Correo ya registrado");
}

const newUser = {
    name,
    email,
    password,
    role: "visitor"
};

const createRes = await fetch(`${API}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
});

return await createRes.json();
}