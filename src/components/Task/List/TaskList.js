import React, {useContext} from 'react';
import {TaskListContext} from '../../../context/TaskListContext';
import TaskItem from '../Item/TaskItem';

const TaskList = () => {
    const {tasks} = useContext(TaskListContext);

    return <div>
        {tasks.length ?
            (<ul className="list">
                {tasks.map(task => {
                    return <TaskItem task={task} key={task.id} />;
                })}
            </ul>)
            :
            (<div className="no-tasks">
                No tasks
            </div>)
        }
    </div>;
};

export default TaskList;