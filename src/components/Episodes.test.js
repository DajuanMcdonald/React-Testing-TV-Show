import React from 'react';
import Episodes from './Episodes';
import { render } from '@testing-library/react';
import { getByText } from '@testing-library/jest-dom';

test('component renders correctly',() => {
   render(<Episodes episodes={[]}/>)

})

