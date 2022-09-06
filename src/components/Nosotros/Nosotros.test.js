import React from 'react';
import { render, screen } from '@testing-library/react';
import Nosotros from './Nosotros';

test('esperamos que renderice el componente card', () => {
  render(<Nosotros />); //con esto renderizamos el componente

  const element = screen.getByText('"Unidos como una manada, tiramos todos para el mismo lado"'); // buscamos el elemento

  expect(element).toBeInTheDocument();
});
