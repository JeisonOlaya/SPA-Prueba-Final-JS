# Event Manager SPA

Este es un proyecto que hice como prueba de desempeño para el módulo 3 de JavaScript. Se trata de una SPA (Single Page Application) para gestionar eventos, con funciones para crear, editar y ver eventos. También se puede registrar usuarios e inscribirse a los eventos.

## Estructura

El proyecto está dividido en carpetas para que todo esté ordenado. Hay una carpeta `src` donde van las carpetas assets, components, router,services, utils y views. El HTML principal está en `public/index.html`.

## Tecnologías usadas

- JavaScript (ES Modules)
- HTML5
- Bootstrap 5
- json-server (para simular la base de datos)
- Local Storage (para guardar la sesión)

## Funcionalidades

- Registro y login de usuarios
- Roles: administrador y visitante
- CRUD de eventos (solo admin)
- Protección de rutas
- Persistencia de sesión (aunque se recargue la página)

## Cómo ejecutar el proyecto

1. Clona el repositorio o descarga el ZIP.
2. Abre una terminal y ve a la carpeta del proyecto.
3. Instala `json-server` si no lo tienes:
   ```bash
   npm install -g json-server
   ```
4. Corre el servidor JSON:

   ```json-server --watch db.json --port 3000```

5. Abre el archivo `public/index.html` en tu navegador.

> Nota: si usas Live Server (por ejemplo, en VS Code), asegúrate de que esté apuntando a `public/index.html`.

## Usuario administrador

Ya viene creado en el archivo `db.json`:

```
Correo: admin@eventos.com
Contraseña: admin123
```

Este usuario puede crear y editar eventos.

## Info del desarrollador

- Nombre: Jeison Olaya
- Clan: van Rossum
- Correo: jeisonolaya58@gmail.com

Gracias por revisar este proyecto 