import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import { GridItem, Text } from 'components';

import style from './Todo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCurrentTodo,
  removeTodo,
  selectCurrentTodo,
} from 'reduxTodo/todoSlice';

export const Todo = ({ todo, index }) => {
  const currentTodo = useSelector(selectCurrentTodo);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleAddCurrentTodo = () => {
    dispatch(addCurrentTodo(todo));
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {index}
        </Text>

        <Text>{todo.text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          disabled={currentTodo}
          className={style.editButton}
          type="button"
          onClick={handleAddCurrentTodo}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
