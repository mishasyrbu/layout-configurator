import React from 'react';
import './styles.scss';

const LeftMenu = ({ title, children }) => {
    return (
        <aside className="left-menu">
            <div className="title">{title}</div>
            <div className="content">{children}</div>
        </aside>
    );
};

export default LeftMenu;
