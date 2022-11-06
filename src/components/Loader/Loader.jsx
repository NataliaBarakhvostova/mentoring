import React from "react";
import { Loader } from '@mantine/core';
import theme from './Loader.module.css'

function LoaderWill() {
  return <div className={theme.loader}>
    <Loader color="dark" size={'xl'} />
  </div> ;
}

export default LoaderWill;

