import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import CartContext from "../../../context/CartContext";
import CardItem from './../Card';

function renderCard(product) {
  return render(
    <CartContext.Provider value={product}>
      <CardItem
        title={product.title}
        data={{ description: 'card description', price: product.price }} />
    </CartContext.Provider>
  );
}

describe('card component',() => {
  test('card has non-required tag', () => {
    renderCard({});
    const cardTag = screen.getByRole('tag', { name: 'summer sale' || 'winter sale'});
    expect(cardTag).toBeInTheDocument();
  });

  test('button has correct initial color', () => {
    renderCard({});
    const colorButton = screen.getByRole('button', { name: 'add to cart' });
    expect(colorButton).toHaveStyle({ backgroundColor: '#228be6' });
  });

  test('button changes text and color on click right', () => {
    renderCard({
      title: "aperiam fugit",
      price: 77
    });
    const colorButton = screen.getByRole('button', { name: 'add to cart' });
    expect(colorButton).toHaveStyle({ backgroundColor: '#228be6' });

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({backgroundColor: 'lightgray'});
    expect(colorButton).toHaveTextContent('added to cart');
  });
});
