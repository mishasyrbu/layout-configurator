import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import './styles.scss';
import { DnD } from '../../../hocs';

const { dropTarget, CONSTANTS: { MODE } } = DnD;

class DropTargetItem extends React.Component {
    constructor(props) {
        super(props);

        this.containerRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        const { hasContent, onDropEvent } = this.props;

        if (hasContent && !prevProps.hasContent && onDropEvent) {
            const componentId = this.containerRef.current.children[1].getAttribute('data-componentid');

            onDropEvent(componentId);
        }
    }

    render() {
        const {
            isDragHover,
            hasContent,
            onDropEvent,
            sourceId,
            children,
            ...rest
        } = this.props;
        const containerClassName = classNames(
            'drop-target-item',
            {
                'is-drag-hover': isDragHover,
                'has-content': hasContent || !!children,
            },
        );
    
        return (
            <div ref={this.containerRef} className={containerClassName} {...rest}>
                <AddCircleOutlineIcon />
                {children}
            </div>
        );
    }
}

DropTargetItem.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    sourceId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    isDragHover: PropTypes.bool,
    hasContent: PropTypes.bool,
    onDropEvent: PropTypes.func,
    children: PropTypes.node,
};

DropTargetItem.defaultProps = {
    isDragHover: false,
    hasContent: false,
    onDropEvent: null,
};

export default dropTarget(DropTargetItem, { mode: MODE.COPY });
