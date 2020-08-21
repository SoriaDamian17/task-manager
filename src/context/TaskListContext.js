import React, {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = ({children}) => {

    const [tasks, setTasks] = useState([
        { title: 'Read the book', id: 1},
        { title: 'Wash the car', id: 2},
        { title: 'Write some code', id: 3},
    ]);

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

    return (
        <TaskListContext.Provider value={{
            tasks,
            editItem,
            addTask,
            findItem,
            removeTask,
            clearList
        }}>
            {children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;