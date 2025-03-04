const admin = require("firebase-admin");
const serviceAccount = require("../firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const tasksCollection = db.collection("tasks");

// Obtener todas las tareas desde Firestore
exports.getAllTasks = async (req, res) => {
    try {
        const snapshot = await tasksCollection.get();
        const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las tareas", error });
    }
};

// Obtener una tarea por ID desde Firestore
exports.getTaskById = async (req, res) => {
    try {
        const doc = await tasksCollection.doc(req.params.id).get();
        if (!doc.exists) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        res.status(200).json({ id: doc.id, ...doc.data() });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la tarea", error });
    }
};

// Crear una nueva tarea en Firestore
exports.createTask = async (req, res) => {
    try {
        const newTask = { title: req.body.title };
        const docRef = await tasksCollection.add(newTask);
        res.status(201).json({ id: docRef.id, ...newTask });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la tarea", error });
    }
};

// Actualizar una tarea en Firestore
exports.updateTask = async (req, res) => {
    try {
        const docRef = tasksCollection.doc(req.params.id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        await docRef.update({ title: req.body.title });
        res.status(200).json({ id: req.params.id, title: req.body.title });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la tarea", error });
    }
};

// Eliminar una tarea en Firestore
exports.deleteTask = async (req, res) => {
    try {
        const docRef = tasksCollection.doc(req.params.id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        await docRef.delete();
        res.status(200).json({ message: "Tarea eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la tarea", error });
    }
};
