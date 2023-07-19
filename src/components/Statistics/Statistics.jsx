import PropTypes from 'prop-types';
import { Li, Good, Neutral, Bad } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul>
        <Li>
          <Good>Good:</Good>
          <p>{good}</p>
        </Li>
        <Li>
          <Neutral>Neutral:</Neutral>
          <p>{neutral}</p>
        </Li>
        <Li>
          <Bad>Bad:</Bad>
          <p>{bad}</p>
        </Li>
        <Li>
          <p>Total:</p>
          <p>{total}</p>
        </Li>
        <Li>
          <p>Positive feedback:</p>
          <p>{positivePercentage}</p>
        </Li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
