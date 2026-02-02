// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ModalCeramic title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ModalCeramic/i);
    expect(titleElement).toBeInTheDocument();
});
