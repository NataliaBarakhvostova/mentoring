import React from "react";

function PageHeader({title}) {
    return (
      <div className={'wrapper title'}>
        <h3>{title}</h3>
      </div>
    );
}

export default PageHeader;

