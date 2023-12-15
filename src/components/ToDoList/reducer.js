import { alog } from '../../lib'

// reducer of type (state, action) => newState
function reducer(state, action) {
  switch (action.type) {
    case 'added': {
      const newState = {
        id: action.id,
        text: action.text,
        done: false,
      }
      alog('added', newState)
      return [...state, newState]
    }
    case 'changed': {
      const newState = state.map(t => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
      alog('changed', state, newState)
      return newState
    }
    case 'deleted': {
      alog('deleted', 'task.id', action.id)
      return state.filter(t => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
      // alt: simply return state
      // return state;
    }
  }
}

export { reducer }
