import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = normalizedOption => {
    const option = normalizedOption.toLowerCase();
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => bad + good + neutral;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((100 / total) * good || 0);
  };

  const options = Object.keys({ good, neutral, bad });
  const totalFeedback = countTotalFeedback();
  const totalPercentage = countPositiveFeedbackPercentage() + '%';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '25%',
        marginTop: '10%',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={totalPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
