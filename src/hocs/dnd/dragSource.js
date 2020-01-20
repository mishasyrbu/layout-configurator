import React from 'react';

export function dragSource(WrappedComponent) {

    return class extends React.Component {
        constructor(props) {
            super(props);

            this.handleDragStartEvent = this.handleDragStartEvent.bind(this);
        }

        handleDragStartEvent(event) {
            event.dataTransfer.setData('id', event.target.id);
        }
  
        render() {
            return (
                <WrappedComponent
                    draggable
                    onDragStart={this.handleDragStartEvent}
                    {...this.props}
                />
            );
        }
    };
}
