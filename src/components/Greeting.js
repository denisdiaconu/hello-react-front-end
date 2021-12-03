import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greetings);
  let message1 = 'Not fetched yet';
  if (greeting) {
    message1 = greeting;
  }
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, []);

  return <h1>{message1}</h1>;
};

export default Greeting;
