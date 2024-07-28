import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCurrentTodo,
  editTodo,
  selectCurrentTodo,
} from 'reduxTodo/todoSlice';
import { useState } from 'react';

export const EditForm = () => {
  const { text, id } = useSelector(selectCurrentTodo);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.elements.text.value;

    if (!value) return;

    dispatch(
      editTodo({
        text: value,
        id,
      }),
    );
  };

  const handleCancel = () => {
    dispatch(addCurrentTodo(null));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
