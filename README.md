# Proyecto Gestor de Tareas

## Descripción

Este proyecto es una aplicación web para la gestión de tareas y usuarios, desarrollada con un frontend en Vue 3 y un backend en Node.js/Express, utilizando MongoDB como base de datos. Permite a los usuarios autenticarse mediante JWT, crear, listar, editar y eliminar tareas, así como gestionar usuarios con claves encriptadas.

## Tecnologías y Versiones

- **Frontend**
  - Vue.js: ^3.2.x
  - Vue Router: ^4.x
  - Axios: ^1.x
  - @vue/cli: 5.0.8

- **Backend**
  - Node.js: >=14.x
  - Express: ^4.x
  - Mongoose: ^6.x
  - bcryptjs: ^2.x
  - jsonwebtoken: ^9.x
  - cors: ^2.x

- **Base de datos**
  - MongoDB: >=4.x

## Estructura del Proyecto

```
project-tareas/
├── backend-tareas/
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   └── package.json
├── frontend-tareas/
│   ├── src/
│   │   ├── App.vue
│   │   ├── main.js
│   │   ├── router/
│   │   ├── services/
│   │   ├── views/
│   │   └── components/
│   └── package.json
```

## Cómo ejecutar el proyecto

### 1. Clonar el repositorio y entrar al directorio

```bash
git clone <url-del-repositorio>
cd project-tareas
```

### 2. Configurar y ejecutar el backend

```bash
cd backend-tareas
npm install
npm start
```
El backend se ejecuta por defecto en `http://localhost:3000`.

### 3. Configurar y ejecutar el frontend

```bash
cd ../frontend-tareas
npm install
npm run serve
```
El frontend se ejecuta por defecto en `http://localhost:8080`.

### 4. Configuración de la base de datos

- Asegúrate de tener MongoDB corriendo localmente.
- La base de datos utilizada es `dbtareas` y las colecciones principales son `tareas` y `usuarios`.

## Funcionalidades principales

- **Autenticación de usuarios con JWT**
- **CRUD de tareas** (crear, listar, editar, eliminar)
- **CRUD de usuarios** (crear, listar, editar, eliminar, login)
- **Protección de rutas y endpoints**
- **Encriptación de contraseñas**
- **Interfaz moderna y responsiva**

## Notas

- El backend implementa CORS para permitir la comunicación con el frontend.
- El token JWT se almacena en Local Storage y se envía automáticamente en las peticiones protegidas.
- El acceso a las rutas principales del frontend está protegido y requiere sesión activa.

---

Desarrollado por robis-sallop