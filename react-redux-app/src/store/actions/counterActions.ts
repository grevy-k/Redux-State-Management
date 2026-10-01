export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
   export type CounterAction =
     | ReturnType<typeof increment>
     | ReturnType<typeof decrement>
     | ReturnType<typeof reset>;