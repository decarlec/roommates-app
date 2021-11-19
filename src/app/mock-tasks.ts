import { TaskItem } from './TaskItem';
import { Subtask } from './Subtask';

export const TASKS: TaskItem[] = [
  {
    id: 1,
    name: 'Clean the bathroom',
    completed: false,
    Subtasks: [{ id: 1, description: 'Scrub the floor', completed: false }],
  },
  { id: 2, name: 'Take out the garbage', completed: false },
  { id: 3, name: 'Feed the cat', completed: false,
    Subtasks: [{ id: 1, description: 'Do a little dance', completed: false }], },
  { id: 4, name: 'Tickle me elmo', completed: false },
  { id: 5, name: 'bop it', completed: false },
  { id: 6, name: 'twist it', completed: false },
];
