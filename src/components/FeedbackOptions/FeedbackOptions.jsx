import PropTypes from 'prop-types';
import { ButtonWrap, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrap>
      {options.map(option => (
        <Button
          option={option}
          onClick={event => onLeaveFeedback(event, option)}
          key={option}
          type="button"
        >
          {option}
        </Button>
      ))}
    </ButtonWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
