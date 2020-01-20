import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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

    render() {
        const { shardsList } = this.props.layout;

        return (
            <div className="layout-desk">
                {
                    shardsList
                        .reduce((acc, value) => [...acc, value, 'add-bar'], ['add-bar'])
                        .map((componentId, index) => {
                            if (componentId === 'add-bar') {
                                return (
                                    <Fragment key={generateId()}>
                                        {this.getDropTargetItem(null, index / 2)}
                                    </Fragment>
                                );
                            }

                            const LayoutShard = LayoutShards[componentId];

                            return (
                                <Fragment key={index}>
                                    {this.getDropTargetItem(<LayoutShard />, index)}
                                </Fragment>
                            );
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
    updateLayout: PropTypes.func.isRequired,
};

LayoutDesk.defaultProps = {
    layout: { shardsList: [] },
};

export default LayoutDesk;
