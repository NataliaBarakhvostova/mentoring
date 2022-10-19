import React from "react";
import { createRoot } from 'react-dom/client';
import Card from './../Card';

it('renders without crashing', () => {
  const cardContainer = document.createElement('div');
  const cardRoot = createRoot(cardContainer);
  cardRoot.render(<Card></Card>);
})