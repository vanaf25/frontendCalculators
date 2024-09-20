import { useState, useCallback } from 'react';

const useForm = (initialState, onSubmitCallback) => {
  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }, [input]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { isValid, errors } = onSubmitCallback(input);
    setErrors(errors);
    if (isValid) {
      setInput(initialState);
    }
  }, [input, onSubmitCallback]);

  return { input, errors, handleChange, handleSubmit };
};

export default useForm;
