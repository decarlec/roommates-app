import { taskReducer, initialState } from './task.reducer';

describe('Task Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = taskReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
