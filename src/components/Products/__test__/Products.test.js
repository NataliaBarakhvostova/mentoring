import React from "react";
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Products from '../Products';

test('displays image for every product from server',async () => {
  render(<Products />);

  await waitForElementToBeRemoved(() => screen.getByRole('loader'));

  const cardImages = await screen.findAllByRole('img');
  if (cardImages.length) {
    expect(cardImages).toHaveLength(100);
  }
});
