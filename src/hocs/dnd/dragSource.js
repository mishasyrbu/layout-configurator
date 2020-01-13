import React from 'react';
import PropTypes from 'prop-types';

export function dragSource(WrappedComponent) {

    return class extends React.Component {
        static propTypes = {
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
              ]),
        };

        drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }
  
        render() {
            return (
                <WrappedComponent
                    draggable
                    onDragStart={this.drag}
                    {...this.props}
                />
            );
        }
    };
}
