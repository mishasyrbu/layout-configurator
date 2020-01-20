import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddSharp from '@material-ui/icons/AddSharp';

import LayoutDesk from '../../components/LayoutDesk';

import './styles.scss';

class LayoutsList extends React.Component {
    handleLayoutClick = (id) => () => {
        this.props.history.push(`/edit/${id}`);
    };

    render() {
        const { layouts } = this.props;

        return (
            <div className="layouts-list">
                <div className="title">{"Layouts Screen"}</div>
                <div className="content">
                    <div className="layout" onClick={this.handleLayoutClick('new')}>
                        <AddSharp className="add-icon" />
                    </div>
                    {
                        layouts.map((layout) => {
                            return (
                                <div key={layout.id} className="layout" onClick={this.handleLayoutClick(layout.id)}>
                                    <LayoutDesk layout={layout} narrowViewOnly />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        layouts: state.layoutsList.layouts,
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(LayoutsList);
