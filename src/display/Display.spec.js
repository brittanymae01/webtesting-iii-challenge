// Test away!

import React from 'react';
import { render } from '@testing-library/react'

import Display from '../display/Display';

test('correct message is rendered if locked state', () => {
    const { getByTestId, rerender } = render(<Display locked />);
    getByTestId('locked');

    rerender(<Display locked={true} />);
    getByTestId('locked');
});

test('correct message is rendered if closed state', () => {
    const { getByTestId, rerender } = render(<Display closed />);
    getByTestId('closed');

    rerender(<Display closed={true} />);
    getByTestId('closed');
});




