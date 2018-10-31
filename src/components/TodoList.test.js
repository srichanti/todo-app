import React from 'react'
import { shallow, mount } from 'enzyme'
import TodoList from './TodoList'
import TodoItem from './TodoItem'

describe('TodoList Component', () => {
  let shallowComponent
  let mountComponent
  let mockdata

  beforeEach(() => {
    mockdata = [
      { id: 1, name: 'jest', isComplete: false },
      { id: 2, name: 'mocha', isComplete: false },
      { id: 3, name: 'enzyme', isComplete: false }
    ]
    shallowComponent = shallow(<TodoList todos={mockdata} />)
    mountComponent = mount(<TodoList todos={mockdata} />)
  })
  it('renders correctly', () => {
    expect(shallowComponent).toMatchSnapshot()
  })
  it('should render list with the given strings', () => {
    expect(shallowComponent).toMatchSnapshot()
  })
  it('child components length should be equal to the length of the str', () => {
    expect(mountComponent.find(TodoItem).length).toEqual(mockdata.length)
  })
})
