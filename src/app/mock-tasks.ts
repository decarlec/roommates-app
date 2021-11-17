import { TaskItem } from './TaskItem';
import { Subtask } from './Subtask';

export const TASKS: TaskItem[] = [
  {
    id: 1,
    name: 'Clean the bathroom',
    completed: false,
    Subtasks: [{ id: 1, description: 'Scrub tha poo poo', completed: false }],
  },
  { id: 2, name: 'Take out the garbage', completed: false },
  { id: 3, name: 'Feed the cat', completed: false },
  { id: 4, name: 'Tickle me elmo! hahahah :D', completed: false },
  { id: 5, name: 'task5', completed: false },
  { id: 6, name: 'task6', completed: false },
];
