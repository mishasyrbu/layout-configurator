import React from 'react';

import { DnD } from '../../hocs';
import './styles.scss';

const { dragSource, dropTarget } = DnD;

class LayoutEditor extends React.Component {

    render() {
        const DragSource = dragSource((props) => <div id="drag1" {...props}>Domi</div>);
        const DropTarget = dropTarget((props) => <div id="div2" {...props}></div>);

        return (
            <div className="layout-editor">
                <h1>Layout Editor</h1>
                <div className="container">
                    <aside>
                        <div id="div1">
                            <DragSource />
                        </div>
                    </aside>
                    <section>
                        <DropTarget />
                    </section>
                </div>
            </div>
        );
    }
}

export default LayoutEditor;
