import React, { useContext } from 'react';
import { TaskListContext } from '../../../context/TaskListContext';

const TaskItem = ({task}) => {
    const {removeTask, findItem} = useContext(TaskListContext);

    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div>
                <button 
                    type="button"
                    className="btn-delete task-btn"
                    onClick={() => removeTask(task.id)}>
                    <i className="fas fa-trash-alt" />
                </button>
                <button 
                    type="button"
                    className="btn-edit task-btn"
                    onClick={() => findItem(task.id)}>
                    <i className="fas fa-pen" />
                </button>
            </div>
        </li>
    );
};

export default TaskItem;