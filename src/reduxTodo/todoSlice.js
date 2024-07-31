import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectFilter } from './filterSlice';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    currentTodo: null,
  },

  reducers: {
    addTodo: (state, { payload }) => {
      state.items.push(payload);
    },
    removeTodo: (state, { payload }) => {
      state.items = state.items.filter(todo => todo.id !== payload);
    },
    addCurrentTodo: (state, { payload }) => {
      state.currentTodo = payload;
    },
    editTodo: (state, { payload }) => {
      state.items = state.items.map(todo => {
        return todo.id === payload.id
          ? { ...payload, text: payload.text }
          : todo;
      });
      state.currentTodo = null;
    },
  },

  selectors: {
    selectTodos: state => state.items,
    selectCurrentTodo: state => state.currentTodo,
  },
});

export const todoReducer = todoSlice.reducer;

export const { selectTodos, selectCurrentTodo } = todoSlice.selectors;

export const { addTodo, removeTodo, addCurrentTodo, editTodo } =
  todoSlice.actions;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLocaleLowerCase()),
    );
  },
);
