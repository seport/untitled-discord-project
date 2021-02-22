import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { MessageInput } from './MessageInput'
const mockEmit = jest.fn();

beforeEach(() => {
  mockEmit.mockClear();
})

test('displays an input', async () => {
  render(<MessageInput />)

  expect(screen.getByRole('textbox'))
})

test('emits submitted text to the message topic', async () => {
  render(<MessageInput socket={{emit: mockEmit}} />)

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'sup' } })
  fireEvent.click(screen.getByText('submit'))

  expect(mockEmit).toHaveBeenCalledWith('message', 'sup')
})

test('emits different submitted text to the message topic', async () => {
    render(<MessageInput socket={{emit: mockEmit}} />)
  
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hello' } })
    fireEvent.click(screen.getByText('submit'))
  
    expect(mockEmit).toHaveBeenCalledWith('message', 'hello')
  })