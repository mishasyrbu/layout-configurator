import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const LeftMenu = ({ title, children }) => {
    return (
        <aside className="left-menu">
            <div className="title">{title}</div>
            <div className="content">{children}</div>
        </aside>
    );
};

LeftMenu.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default LeftMenu;
