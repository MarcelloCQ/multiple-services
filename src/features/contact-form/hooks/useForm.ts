import React, { useEffect, useState } from 'react';
import { transformData } from './form.dto';
import { apiFormContact } from './api.services';

const useForm = () => {
  const [btnLoader, setBtnLoader] = useState(false);
  const [show, setShow] = useState(false);
  const [formSend, setFormSend] = useState(false);
  const [title, setTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const handleClose = () => {
    setShow(false);
  };

  const formSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setBtnLoader(true);

    const formData = new FormData(e.currentTarget);

    try {
      const parseData = transformData(formData);

      const response = await apiFormContact(parseData);

      console.log(response);

      setFormSend(true);
      setBtnLoader(false);
    } catch (error) {
      if (error instanceof Error) {
        setTitle('Ups!');
        setModalMessage(
          'Tuvimos un problema interno, intentalo de nuevo más tarde.'
        );
        setShow(true);
        setBtnLoader(false);
        console.log(error.message);
      } else {
        setTitle('Ups!');
        setModalMessage(
          'Tuvimos un problema interno, intentalo de nuevo más tarde.'
        );
        setBtnLoader(false);
        console.log(error);
        setShow(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      setBtnLoader(false);
      setFormSend(false);
    };
  }, []);

  return {
    formSubmit,
    handleClose,
    title,
    modalMessage,
    show,
    formSend,
    btnLoader,
  };
};

export default useForm;
