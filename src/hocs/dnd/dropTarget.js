import React from 'react';
import { MODE } from './constants';
import { generateId } from '../../utils';

export function dropTarget(WrappedComponent, options = { mode: MODE.CUT }) {
    const { mode } = options;

    return class extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                isDragHover: false,
                hasContent: false,
                sourceId: generateId(),
            };
            this.handleDargOverEvent = this.handleDargOverEvent.bind(this);
            this.handleDropEvent = this.handleDropEvent.bind(this);
            this.handleDragEnterEvent = this.handleDragEnterEvent.bind(this);
            this.handleDragLeaveEvent = this.handleDragLeaveEvent.bind(this);
        }

        handleDargOverEvent(event) {
            // allow drop
            event.preventDefault();
            event.dataTransfer.effectAllowed = mode;
        }
    
        handleDropEvent(event) {
            event.preventDefault();
            const data = event.dataTransfer.getData('id');
            const { sourceId } = this.state;

            switch(mode) {
                case MODE.COPY: {
                    const nodeCopy = document.getElementById(data).cloneNode(true);
                    nodeCopy.id = sourceId;
        
                    event.target.appendChild(nodeCopy);
                    break;
                }
                case MODE.CUT:
                default: {
                    event.target.appendChild(document.getElementById(data));
                }
            }
            

            this.setState({ isDragHover: false, hasContent: true });
        }

        handleDragEnterEvent(event) {
            this.setState({ isDragHover: true });
        }

        handleDragLeaveEvent() {
            this.setState({ isDragHover: false });
        }
  
        render() {
            const { isDragHover, hasContent, sourceId } = this.state;

            return (
                <WrappedComponent
                    onDrop={this.handleDropEvent}
                    onDragOver={this.handleDargOverEvent}
                    onDragEnter={this.handleDragEnterEvent}
                    onDragLeave={this.handleDragLeaveEvent}
                    isDragHover={isDragHover}
                    hasContent={hasContent}
                    sourceId={sourceId}
                    {...this.props}
                />
            );
        }
    };
}
