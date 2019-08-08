import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
	it('renders without using ReactDom', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders without creashing', () => {
    render('<App />');
  })
});
