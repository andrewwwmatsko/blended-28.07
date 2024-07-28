import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { filterChange, selectFilter } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filter}
      onChange={handleChange}
    />
  );
};
