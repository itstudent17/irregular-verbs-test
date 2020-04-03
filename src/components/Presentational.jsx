import React, { useState } from "react";
const Presentational = ({ verb }) => {
  const initialInputs = {
    infinitive: "",
    pastSimple: "",
    pastParticiple: ""
  };
  const [form, handleChange] = useState(initialInputs);
  const [isAnswerCorrect, checkAnswer] = useState(false);
  const clearForm = () => {
    handleChange(initialInputs);
  };
  const updateInput = (propertyName, e) => {
    handleChange({ ...form, [propertyName]: e.target.value });
  };
  const isFormComplete = () => {
    return form.infinitive && form.pastSimple && form.pastParticiple;
  };
  const checkForm = () => {
    const arr = [
      verb[0] === form.infinitive,
      verb[1] === form.pastSimple,
      verb[2] === form.pastParticiple
    ];
    if (arr.every(i => i)) {
      checkAnswer(true);
      alert("Ответ верный");
    }
  };
  return (
    <>
      <h1>
        Напишите 3 формы глагола <i>{verb[3]}</i>
      </h1>

      <input
        type="text"
        value={form.infinitive}
        onChange={e => updateInput("infinitive", e)}
      ></input>
      <input
        type="text"
        value={form.pastSimple}
        onChange={e => updateInput("pastSimple", e)}
      ></input>
      <input
        type="text"
        value={form.pastParticiple}
        onChange={e => updateInput("pastParticiple", e)}
      ></input>

      <button onClick={clearForm}>Отмена</button>
      <button disabled={!isFormComplete()} onClick={checkForm}>
        Проверить
      </button>
    </>
  );
};

export default Presentational;
