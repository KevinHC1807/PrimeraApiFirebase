const express = require('express');
const app = express();
const taskRoutes = require('./routers/taskRoutes');

app.use(express.json());

app.use('/apuV1/task', taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Corriendo en el puerto ${PORT}`)
});