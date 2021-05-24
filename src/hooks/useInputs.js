import React, { useState, useCallback } from 'react';
{/*useState, useEffect, useReducer, useCallback 등 Hooks 를 사용하여 원하는 기능을 구현*/}
function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  // change
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

export default useInputs;