// Test away

import React from 'react';
import { render } from '@testing-library/react';

import Display from '../display/Display'
import Controls from '../controls/Controls'

test('Renders display component', () => {
    const displayTree = render(<Display />)
    expect(displayTree).toMatchSnapshot();
})

test('Renders controls component', () => {
    const controlsTree = render(<Controls />)
    expect(controlsTree).toMatchSnapshot();
})