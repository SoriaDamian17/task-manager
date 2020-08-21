import React from 'react';

import './Button.scss';

const Button = ({ children, className }) => {

    return (
        <button
            type="button"
            className={`buttons ${className}`}>
                {children}
        </button>
    );
};

export default React.memo(Button);