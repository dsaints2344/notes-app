import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Notes from '../Notes'
describe('Notes App tests', () =>{
  it('should render <Notes/> component', () => {
      const {container} = render(<Notes/>)
      expect(container.firstChild).toMatchSnapshot();
  })
})

