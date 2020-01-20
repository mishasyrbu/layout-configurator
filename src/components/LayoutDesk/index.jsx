import React, { Fragment } from 'react';

import LayoutShards from '../../components/LayoutShards';
import DropTargetItem from './DropTargetItem';
import { generateId } from '../../utils';
import './styles.scss';

export default class LayoutDesk extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shardsList: [' '],
        };
    }

    getDropTargetItem = (children, index) => (
        <DropTargetItem id={generateId()} onDropEvent={this.handleDropEvent(index)}>
            {children}
        </DropTargetItem>
    );

    handleDropEvent = (index) => (componentId) => {
        console.log('handleDropEvent', componentId);
        
        this.setState(({ shardsList }) => {
            const addElements = shardsList[index] === ' ' ? [' ', componentId, ' '] : [componentId];
            return { shardsList: [...shardsList.slice(0, index), ...addElements, ...shardsList.slice(index + 1)] };
        });
    };

    render() {
        const { shardsList } = this.state;
        console.log(shardsList);
        

        return (
            <div className="layout-desk">
                {
                    shardsList
                        .map((componentId, index) => {
                            if (componentId === ' ') {
                                return (
                                    <Fragment key={generateId()}>
                                        {this.getDropTargetItem(null, index)}
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
