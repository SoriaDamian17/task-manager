import React from 'react';
import Layout from '../components/Layout';

import '../styles/home.scss';
import TaskListContextProvider from '../context/TaskListContext';
import TaskList from '../components/Task/List/TaskList';
import TaskForm from '../components/Form';

export default () => {

    return (
        <TaskListContextProvider>
            <Layout title="Home">
                <TaskForm />
                <TaskList />
            </Layout>
        </TaskListContextProvider>
    );
};