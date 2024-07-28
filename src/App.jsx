import {
  Section,
  Container,
  Header,
  Text,
  Form,
  TodoList,
  Filter,
  EditForm,
} from 'components';
import { useSelector } from 'react-redux';
import { selectCurrentTodo, selectTodos } from 'reduxTodo/todoSlice';

export const App = () => {
  const todos = useSelector(selectTodos);
  const currentTodo = useSelector(selectCurrentTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {todos.length === 0 && (
            <Text textAlign="center">Create your first todo😉</Text>
          )}

          {currentTodo ? <EditForm /> : <Form />}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
