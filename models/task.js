const admin = require("firebase-admin");
const serviceAccount = require("../firebase-admin.json"); // Archivo de credenciales

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const tasksCollection = db.collection("tasks");

// Función para guardar el arreglo de tareas en Firebase
async function saveTasks(tasks) {
    const batch = db.batch();
    tasks.forEach(task => {
        const docRef = tasksCollection.doc(task.id.toString()); // Usa el ID como nombre del documento
        batch.set(docRef, task);
    });

    await batch.commit();
    console.log("Tareas guardadas en Firebase correctamente.");
}

// Tus tareas locales
let tasks = [
    { id: 1, title: "Aprender Node.js" },
    { id: 2, title: "Construir una APIREST" },
];

// Llamar a la función para guardar los datos en Firebase
saveTasks(tasks);

module.exports = { tasks, saveTasks };
