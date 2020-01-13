import React from 'react';
import PropTypes from 'prop-types';

export function dropTarget(WrappedComponent) {

    return class extends React.Component {

        allowDrop(ev) {
            ev.preventDefault();
            ev.dataTransfer.dropEffect = "copy";
        }
    
        drop(ev) {
            ev.preventDefault();
            const data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }
  
        render() {
            return (
                <WrappedComponent
                    onDrop={this.drop}
                    onDragOver={this.allowDrop}
                    {...this.props}
                />
            );
        }
    };
}
