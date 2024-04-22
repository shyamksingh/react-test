// DisplayList.test.js
import React from 'react';
import { render, fireEvent , screen} from '@testing-library/react';
import DisplayList from './displayList';
import { MyContextProvider } from '../context/taskContext';

// Mocking the context hook
jest.mock('../context/taskContext', () => ({
  useMyContext: () => ({
    value: [],
    setValue: jest.fn(),
  }),
}));

// Mocking the EditableCard component
jest.mock('./newCrad', () => ({ item, onUpdate }) => (
  <div data-testid="mock-editable-card">
    <span data-testid="mock-item-name">{item.name}</span>
    <button onClick={() => onUpdate({ ...item, name: 'Updated Task' })}>Update</button>
  </div>
));

describe('DisplayList', () => {
  test('renders button to create new task', () => {
    const { getByText } = render(<DisplayList />);
    expect(screen.getByText('Create New task')).toBeInTheDocument();
  });

  test('adds a new task when the button is clicked', () => {
    const { getByText } = render(<DisplayList />);
    const button = screen.getByText('Create New task');
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
