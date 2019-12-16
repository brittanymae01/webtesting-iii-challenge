// Test away

import React from 'react';
import { render } from '@testing-library/react';

import Display from '../display/Display'
import Controls from '../controls/Controls'

test('Display renders without crashing', () => {
    render(<Display />)
});

test('Controls renders without crashing', () => {
    render(<Controls />)
});


