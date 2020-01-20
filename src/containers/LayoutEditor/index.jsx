import React from 'react';

import { DnD } from '../../hocs';
import LeftMenu from '../../components/LeftMenu';
import LayoutDesk from '../../components/LayoutDesk';
import LayoutShards from '../../components/LayoutShards';
import './styles.scss';

const { dragSource } = DnD;

class LayoutEditor extends React.Component {

    render() {
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
                    <LayoutDesk />
                </section>
            </div>
        );
    }
}

export default LayoutEditor;
