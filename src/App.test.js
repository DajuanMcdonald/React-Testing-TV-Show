import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

test('should render without error [1]', () => {

const div = document.createElement('div');
ReactDOM.render(<App/>, div);

    
})

test('should contain text in document [2]', () => {
    const { getByText } = render(<App/>);
    expect(getByText(/fetching data/i)).toBeInTheDocument();
    
})




test('fetch makes api call to proper url', async () => {
    const myAxios = {
        get: jest.fn(() => Promise.resolve({data: {episodes: 'Season'}})),
    }
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
    render(<App url={url}/>)
    expect(myAxios.get).toHaveBeenCalledTimes(0)
    
})