import React from 'react';
import AddSharp from '@material-ui/icons/AddSharp';

import './styles.scss';

class LayoutsList extends React.Component {
    render() {
        return (
            <div className="layouts-list">
                <div className="title">{"Layouts Screen"}</div>
                <div className="content">
                    <div className="layout">
                        <AddSharp className="add-icon" />
                    </div>
                </div>
            </div>
        );
    }
}

export default LayoutsList;
