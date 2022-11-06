import React from "react";
import cx from 'classnames';
import theme from './PageHeader.module.css';

function PageHeader({title}) {
    return (
      <div className={cx(theme.title, 'wrapper')}>
        <h3>{title}</h3>
      </div>
    );
}

export default PageHeader;

