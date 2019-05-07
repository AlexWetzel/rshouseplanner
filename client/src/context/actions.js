const TEST = 'TEST';

export const useActions = (state, dispatch) => {
  function test() {
    dispatch({ type: TEST});
  }

  return {
    test
  };
}