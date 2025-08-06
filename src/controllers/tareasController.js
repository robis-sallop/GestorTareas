 const Tarea = require('../models/tarea'); // nombre de archivo en minúsculas

class TareasController {
    async createTask(req, res) {
        try {
            const { titulo, detalle, estado } = req.body;
            const newTask = new Tarea({ titulo, detalle, fechaCreacion: new Date(), estado });
            await newTask.save();
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: 'Error creating task', error });
        }
    }

    async listTasks(req, res) {
        try {
            const tasks = await Tarea.find();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving tasks', error });
        }
    }

    async editTask(req, res) {
        const { id } = req.params;
        try {
            const updatedTask = await Tarea.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(500).json({ message: 'Error updating task', error });
        }
    }

    async deleteTask(req, res) {
        const { id } = req.params;
        try {
            const deletedTask = await Tarea.findByIdAndDelete(id);
            if (!deletedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting task', error });
        }
    }

    async getTaskDetails(req, res) {
        const { id } = req.params;
        try {
            const task = await Tarea.findById(id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving task details', error });
        }
    }
}

module.exports = new TareasController();