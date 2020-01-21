import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddSharp from '@material-ui/icons/AddSharp';
import DeleteIcon from '@material-ui/icons/Delete';

import { Actions } from '../../constants';
import LayoutDesk from '../../components/LayoutDesk';

import './styles.scss';

class LayoutsList extends React.Component {
    handleLayoutClick = (id) => () => {
        this.props.history.push(`/edit/${id}`);
    };

    handleDeleteButton = (id) => (event) => {
        event.stopPropagation();
        this.props.removeLayout(id);
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
                                    <div className="delete-button" onClick={this.handleDeleteButton(layout.id)}>
                                        <DeleteIcon />
                                    </div>
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

LayoutsList.propTypes = {
    layouts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        shardsList: PropTypes.arrayOf(PropTypes.string),
    }))
};

const mapStateToProps = (state) => {
    return {
        layouts: state.layoutsList.layouts,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeLayout: (id) => dispatch({ type: Actions.REMOVE_LAYOUT, payload: { id } }),
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(LayoutsList);
