import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { DnD } from '../../hocs';
import LeftMenu from '../../components/LeftMenu';
import LayoutDesk from '../../components/LayoutDesk';
import LayoutShards from '../../components/LayoutShards';
import { generateId } from '../../utils';
import { Actions } from '../../constants';
import './styles.scss';

const { dragSource } = DnD;

class LayoutEditor extends React.Component {
    handleUpdateLayout = (id, shardsList) => this.props.updateLayout(id, shardsList);

    componentDidMount() {
        const { layout } = this.props;
        const { layoutId } = this.props.match.params;

        if (layoutId === 'new' || !layout) {
            const newId = generateId();

            this.props.createLayout(newId);
            this.props.history.replace(`/edit/${newId}`);
        }
    }

    render() {
        const { layout } = this.props;
        
        return (
            <div className="layout-editor">
                <LeftMenu title="Components">
                    <ul className="components-list">
                        {
                            Object.keys(LayoutShards).map((key) => {
                                const LayoutShard = dragSource(LayoutShards[key]);

                                return (
                                    <li key={key}>
                                        <LayoutShard id={`sc-${key}`} />
                                    </li>
                                );
                            })
                        }
                    </ul>
                </LeftMenu>
                <section className="container">
                    <div className="title">{"Configuration Screen"}</div>
                    <LayoutDesk layout={layout} updateLayout={this.handleUpdateLayout} />
                </section>
            </div>
        );
    }
}

LayoutEditor.propTypes = {
    layout: PropTypes.shape({
        id: PropTypes.string,
        shardsList: PropTypes.arrayOf(PropTypes.string),
    }),
    createLayout: PropTypes.func.isRequired,
    updateLayout: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const { layoutId } = ownProps.match.params;

    return {
        layout: state.layoutsList.layouts.find(({ id }) => id === layoutId),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createLayout: (id) => dispatch({ type: Actions.CREATE_LAYOUT, payload: { id } }),
        updateLayout: (id, shardsList) => dispatch({ type: Actions.UPDATE_LAYOUT, payload: { id, shardsList } }),
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(LayoutEditor);
