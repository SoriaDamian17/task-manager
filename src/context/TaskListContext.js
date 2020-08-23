import React, {createContext, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = ({children}) => {

    const InitialState = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(InitialState);
    const [editItem, setEditItem] = useState(null);

    const addTask = title => {
        setTasks([...tasks, {title, id: uuidv4()}]);
    };

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const clearList = () => {
        setTasks([]);
    };

    const findItem = id => {
        setEditItem(tasks.find(task => task.id === id));
    };

    const editTask = (title, id) => {
        const newTask = tasks.map((task) => task.id === id ? {title, id} : task);
        setTasks(newTask);
        setEditItem(null);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TaskListContext.Provider value={{
            tasks,
            addTask,
            editTask,
            removeTask,
            findItem,
            editItem,
            clearList
        }}>
            {children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;