import React from 'react';
import classNames from 'classnames';

import './styles.scss';

export function Article(props) {
    const { className, ...rest } = props;

    return (
        <div className={classNames('sc-article', className)} data-componentid="Article" {...rest}>Article</div>
    );
}
