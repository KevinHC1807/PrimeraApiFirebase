# PrimeraApiFirebase

Este proyecto es una API REST construida con Node.js, Express y Firebase Firestore para gestionar tareas (tasks). Permite realizar operaciones CRUD (Crear, Leer, Actualizar) sobre las tareas almacenadas en Firebase Firestore.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- [Firebase CLI](https://firebase.google.com/docs/cli)

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tuusuario/tu-repositorio.git
   ```
2. Accede al directorio del proyecto:
   ```sh
   cd nombre-del-proyecto
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```

## Configuración de Firebase

1. En la consola de Firebase, crea un nuevo proyecto y configura Firestore.
2. Descarga el archivo de credenciales JSON desde Firebase y guárdalo en la raíz del proyecto con el nombre `firebase-admin.json`.

## Estructura del Proyecto

```
.
├── controllers
│   ├── taskController.js
├── models
│   ├── task.js
├── routers
│   ├── taskRoutes.js
├── app.js
├── firebase-admin.json
├── package.json
├── README.md
```

### `app.js`
Archivo principal que configura Express y las rutas.

### `controllers/taskController.js`
Maneja la lógica de negocio para gestionar las tareas.

### `models/task.js`
Conexión con Firebase Firestore y definición de la colección de tareas.

### `routers/taskRoutes.js`
Define las rutas de la API.

## Uso de la API

### Iniciar el servidor

Ejecuta el siguiente comando para iniciar la API:
```sh
node app.js
```
La API estará disponible en `http://localhost:3000`.

### Endpoints

#### Obtener todas las tareas
**GET** `/tasks`
```json
Response:
[
  { "id": 1, "title": "Aprender Node.js" },
  { "id": 2, "title": "Construir una API REST" }
]
