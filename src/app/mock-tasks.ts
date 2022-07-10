import { Task } from 'src/app/models/task';
//import { Subtask } from './Subtask.ts.old';

export const TASKS: Task[] = [
  {
    id: 1,
    name: 'Material ui for all elements of app',
    completed: true,
    Subtasks: [{ id: 1, description: 'Update checkboxes', completed: true },
    { id: 2, description: 'update rest of ui, revert changes to subtasks etc.', completed: false }],
  },
  { id: 2, name: 'Add database integration, resarch best kind', completed: false },
  {
    id: 3, name: 'Create login, authentication system', completed: false,
  },
  {
    id: 4, name: 'Deploy app', completed: false,
    Subtasks: [
      {
        id: 1, description: 'Stand up docker container on raspberry pi', completed: false
      },
      {
        id: 2, description: 'Create docker deployment image for app', completed: false
      },
      {
        id: 3, description: 'Find a way to connect to docker registry on local machine from raspberry pi', completed: false
      },
      {
        id: 4, description: 'Pull image from raspberry pi and deploy', completed: false
      }
    ],
  },
  { id: 5, name: 'tbd....', completed: false },
  { id: 6, name: 'tbd....', completed: false },
];
