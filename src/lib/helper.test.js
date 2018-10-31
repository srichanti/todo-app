import { addTodo } from './helper'

describe('addTodo', () => {
  let startTodos;
  let newTodo;
  let expected;
  beforeEach(() => {
     startTodos = [{ id: 1, name: 'one', isComplete: false }, { id: 2, name: 'two', isComplete: false }];
     newTodo = { id: 3, name: 'three', isComplete: false };
     expected = [
      { id: 3, name: 'three', isComplete: false },
      { id: 1, name: 'one', isComplete: false },
      { id: 2, name: 'two', isComplete: false }
    ];
  })
  it('should add todo to the list', () => {
    const result = addTodo(startTodos, newTodo)
    expect(result).toEqual(expected)
  })

  it('should not mutate the existing todo array', () => {
    const result = addTodo(startTodos, newTodo)

    expect(result).not.toBe(startTodos)
  })
})
