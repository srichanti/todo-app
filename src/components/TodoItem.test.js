import React from 'react'
import { shallow, mount } from 'enzyme'
import TodoItem from './TodoItem'

describe('TodoItem Component', () => {
  let shallowComponent
  let mountComponent
  let id
  let title

  beforeEach(() => {
    id = 2
    title = 'Unit test'
    shallowComponent = shallow(<TodoItem id={id} title={title} />)
    mountComponent = mount(<TodoItem id={id} title={title} />)
  })

  it('renders correctly', () => {
    expect(shallowComponent).toMatchSnapshot()
  })

  it('TodoItem requires id prop', () => {
    expect(mountComponent.props().id).toBeDefined()
  })
  it('TodoItem requires title prop', () => {
    expect(mountComponent.props().title).toBeDefined()
  })
  it('TodoItem renders Input', () => {
    expect(shallowComponent.find('input').length).toEqual(1)
  })
})
