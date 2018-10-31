import React from 'react'
import { shallow, mount } from 'enzyme'
import TodoForm from './TodoForm'

describe('TodoForm', () => {
  let shallowComponent
  let mountComponent
  let handleSubmit
  let handleOnchangeInput
  let currentTodo

  beforeEach(() => {
    handleSubmit = jest.fn()
    handleOnchangeInput = jest.fn()
    currentTodo = ''
    shallowComponent = shallow(<TodoForm />)
    mountComponent = mount(
      <TodoForm handleSubmit={handleSubmit} handleOnchangeInput={handleOnchangeInput} currentTodo={currentTodo} />
    )
  })
  it('renders correctly', () => {
    expect(shallowComponent).toMatchSnapshot()
  })

  it('TodoForm requires handleSubmit prop', () => {
    expect(mountComponent.props().handleSubmit).toBeDefined()
  })

  it('TodoForm requires currentTodo prop', () => {
    expect(mountComponent.props().currentTodo).toBeDefined()
  })
  it('TodoForm requires handleOnchange prop', () => {
    expect(mountComponent.props().handleOnchangeInput).toBeDefined()
  })

  it('Event handler should trigger', () => {
    const submitEle = mountComponent.find('form')
    submitEle.simulate('submit')
    expect(handleSubmit).toHaveBeenCalled()
  })
})
