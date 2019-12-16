// Test away!

import React from 'react';
import { render, fireEvent } from '@testing-library/react'

import Controls from '../controls/Controls';
import Dashboard from '../dashboard/Dashboard'

test('button renders lock or unlocked', () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/close gate/i);
    fireEvent.click(button);
    getByText(/open gate/i);
})

test('button renders close or open', () => {
    const { getByText } = render(<Dashboard />);
    const lockButton = getByText(/lock gate/i);
    const closeButton = getByText(/close gate/i)
    fireEvent.click(closeButton);
    fireEvent.click(lockButton);
    getByText(/unlock gate/i);
});

