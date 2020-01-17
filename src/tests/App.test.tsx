import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('Notes App tests', () =>{
  it('should render <Notes/> component', () => {
      const {container} = render(<Notes/>)
      expect(container.firstChild).toMatchSnapshot();
  })
})

