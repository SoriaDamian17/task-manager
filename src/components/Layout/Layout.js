import React, {useEffect} from 'react';
import './Layout.scss';

const Layout = (props) => {

    const { title, children } = props;

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <div className="layout">
            <div className="app-wrapper">
                <div className="header">
                    <h1>Task Manager</h1>
                </div>
                <div className="main">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;