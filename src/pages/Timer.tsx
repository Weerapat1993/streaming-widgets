import React from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';
import useTimer from '../hooks/useTimer';
import Layout from '../components/Layout';

const Text = styled.span`
  color: ${(props) => props.color};
`;

const Button = styled.button`
  cursor: pointer;
  background-color: ${({ color }) => color || '#333'};
  border: 0;
  color: white;
  padding: 8px 15px;
  margin: 5px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

type TimerProps = {
  defaultValue: number;
};

const Timer = ({ defaultValue }: TimerProps) => {
  const { data, handleStart, handlePause, handleReset } = useTimer(
    defaultValue
  );
  const { secondText, minuteText, hourText, isRun } = data;
  return (
    <Layout>
      <Text as="h1" color="white">
        {hourText}:{minuteText}:{secondText}
      </Text>
      {isRun ? (
        <Button onClick={handlePause} color="black">
          Pause
        </Button>
      ) : (
        <Button onClick={handleStart} color="orange">
          Start
        </Button>
      )}
      <Button disabled={isRun} onClick={handleReset} color="red">
        Reset
      </Button>
    </Layout>
  );
};

Timer.defaultProps = {
  defaultValue: 0,
};

Timer.propTypes = {
  defaultValue: number,
};

export default Timer;
