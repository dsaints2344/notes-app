import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Notes from '../Notes'
import INotesProps from '../typings/INotesProps';
import {mount, EnzymeAdapter, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
describe('Notes App tests', () =>{
  it('should render <Notes/> component', () => {
    const props: INotesProps ={
      title: "Note Test",
      content: "Content, hello, 1,2,3"
    }
      //const {container} = render(<Notes title={props.title} content={props.content}/>)
      const wrapper = mount(
        <Notes title={props.title} content={props.content}/>
      )
    const response = wrapper.find('.ant-card-head-title')
    expect(response.text()).toBe('Note Test')
  })
})

