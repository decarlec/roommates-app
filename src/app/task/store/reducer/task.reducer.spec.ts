import { taskReducer, initialTaskState } from './task.reducer';

describe('Task Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = taskReducer(initialTaskState, action);

      expect(result).toBe(initialTaskState);
    });
  });
});
