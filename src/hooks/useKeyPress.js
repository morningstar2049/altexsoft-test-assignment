import {useState, useEffect} from 'react'

export const useKeyPress = () => {
  const [keyPressed, setKeyPressed] = useState({});

  function downHandler(e) {
    setKeyPressed(prevState => ({...prevState, [e.code]: true}))
  }

  const upHandler = (e) => {
      setKeyPressed(prevState => ({...prevState, [e.code]: false}));

  };
  
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
  
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); 

  return {
    keyPressed
  };
};
