import React, { useState } from 'react';
import { transformData } from './form.dto';
import { apiFormContact } from './api.services';

const useForm = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const handleClose = () => {
    setShow(false);
  };

  const formSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const parseData = transformData(formData);

      const response = await apiFormContact(parseData);

      console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        setTitle('Ups!');
        setModalMessage(error.message);
        setShow(true);
      } else {
        setTitle('Ups!');
        setModalMessage(error as string);
        setShow(true);
      }
    }
  };

  return {
    formSubmit,
    handleClose,
    title,
    modalMessage,
    show,
  };
};

export default useForm;
