// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MyContextProvider } from './context/taskContext';

// Mocking the DisplayList component
jest.mock('./components/displayList', () => () => <div data-testid="mock-display-list"></div>);

describe('App', () => {
 

  test('renders MyContextProvider with DisplayList', () => {
    const { getByTestId } = render(
      <MyContextProvider>
        <App />
      </MyContextProvider>
    );
  });
});
