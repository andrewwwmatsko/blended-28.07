import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilteredTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const filteredTodos = useSelector(selectFilteredTodos);
  return (
    <>
      {filteredTodos.length < 1 && (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
      <Grid>
        {filteredTodos.map((todo, index) => {
          return <Todo key={todo.id} todo={todo} index={index + 1} />;
        })}
      </Grid>
    </>
  );
};
