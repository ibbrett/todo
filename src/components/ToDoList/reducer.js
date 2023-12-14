import { alog } from '../../lib';
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      const newTask = {
        id: action.id,
        text: action.text,
        done: false
      };
      alog('added', newTask);
      return [...tasks, newTask];
    }
    case 'changed': {
      const updatedTasks = tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
      alog('changed', tasks, updatedTasks);
      return updatedTasks;
    }
    case 'deleted': {
      alog('deleted', 'task.id', action.id);
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
      // alt: simply return tasks
      // return tasks;
    }
  }
}

export { tasksReducer }
