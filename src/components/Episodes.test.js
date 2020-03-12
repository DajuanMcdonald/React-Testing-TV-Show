import React from 'react';
import Episodes from './Episodes';
import { render } from '@testing-library/react';


test('component renders correctly',() => {
   render(<Episodes episodes={[]}/>)

})

// test('should contain specified text', () => {
//     const {getByTestId} = render(<Episodes episodes={[]}  />)
//     expect(getByTestId('name')).textContent('chapter').toBeInTheDocument();
// })