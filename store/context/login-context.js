import {createContext, useState} from 'react';

const LoginContext = createContext({
  secondValue: '',
  setSecondTrue: () => {},
  setSecondFalse: () => {},
});

export default LoginContext;
