import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LayoutShards from '../../components/LayoutShards';
import DropTargetItem from './DropTargetItem';
import { generateId } from '../../utils';
import './styles.scss';

class LayoutDesk extends React.Component {
    getDropTargetItem = (children, index) => (
        <DropTargetItem id={generateId()} onDropEvent={this.handleDropEvent(index)}>
            {children}
        </DropTargetItem>
    );

    handleDropEvent = (index) => (componentId) => {
        const { id, shardsList } = this.props.layout;

        this.props.updateLayout(id, [...shardsList.slice(0, index), componentId, ...shardsList.slice(index)]);
    };

    handleRemoveClick = (index) => () => {
        const { id, shardsList } = this.props.layout;
        const removeIndex = Math.floor(index / 2);
        
        this.props.updateLayout(id, shardsList.filter((s, i) => i !== removeIndex));
    };

    render() {
        const { layout: { shardsList }, narrowViewOnly } = this.props;

        return (
            <div className={classNames('layout-desk', { 'narrow-view': narrowViewOnly })}>
                {!narrowViewOnly && shardsList
                    .reduce((acc, value) => [...acc, value, 'add-bar'], ['add-bar'])
                    .map((componentId, index) => {
                        if (componentId === 'add-bar') {
                            return (
                                <Fragment key={generateId()}>
                                    {this.getDropTargetItem(null, Math.floor(index / 2))}
                                </Fragment>
                            );
                        }

                        const LayoutShard = LayoutShards[componentId];

                        return (
                            <div key={index} className="layout-shard" onClick={this.handleRemoveClick(index)}>
                                <div className="shard-overlay" />
                                <LayoutShard />
                            </div>
                        );
                    })
                }
                {
                    narrowViewOnly && shardsList.map((componentId, index) => {
                        const LayoutShard = LayoutShards[componentId];

                        return (<LayoutShard key={index} />);
                    })
                }
            </div>
        );
    }
}

LayoutDesk.propTypes = {
    layout: PropTypes.shape({
        id: PropTypes.string,
        shardsList: PropTypes.array,
    }),
    updateLayout: PropTypes.func,
    narrowViewOnly: PropTypes.bool,
};

LayoutDesk.defaultProps = {
    layout: { shardsList: [] },
    narrowViewOnly: false,
};

export default LayoutDesk;
