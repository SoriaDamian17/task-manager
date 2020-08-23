import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

const TaskForm = () => {

    const {addTask, clearList, editItem, editTask} = useContext(TaskListContext);
    const [title, setTitle] = useState("");

    const handleChange = e => {
        setTitle(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (editItem === null) {
            addTask(title);
            setTitle("");
        } else {
            editTask(title, editItem.id);
        }
    };

    useEffect(() => {
        let newTitle = "";
        if (editItem !== null) {
            newTitle = editItem.title;
        }
        setTitle(newTitle);
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                onChange={handleChange}
                value={title}
                type="text"
                className="task-input"
                placeholder="Add task"
                required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem ? "Edit Task" : "Add Task"}
                </button>
                <button 
                    type="button"
                    className="btn clear-btn"
                    onClick={clearList}>
                    Clear
                </button>
            </div>
        </form>
    );
};

export default TaskForm;