const express = require('express');
const tareasController = require('../controllers/tareasController');

const router = express.Router();

router.post('/tareas', tareasController.createTask.bind(tareasController));
router.get('/tareas', tareasController.listTasks.bind(tareasController));
router.put('/tareas/:id', tareasController.editTask.bind(tareasController));
router.delete('/tareas/:id', tareasController.deleteTask.bind(tareasController));
router.get('/tareas/:id', tareasController.getTaskDetails.bind(tareasController));

module.exports = router;