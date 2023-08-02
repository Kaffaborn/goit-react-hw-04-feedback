import PropTypes from 'prop-types';
import React from 'react';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h2>Статистика</h2>
      <div>
        <p>Позитивні: {good}</p>
        <p>Нейтральні: {neutral}</p>
        <p>Негативні: {bad}</p>
        <p>Відгуків загалом: {total}</p>
        <p>Відсоток негативних відгуків {positivePercentage()}%</p>
      </div>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
