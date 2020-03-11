import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test('should render without error [1]', () => {

const div = document.createElement('div');
ReactDOM.render(<App/>, div);

    
})

test('should contain text in document [2]', () => {
    const { getByText } = render(<App/>);
    expect(getByText(/fetching/i)).toBeInTheDocument();
    
})

