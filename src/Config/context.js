import * as React from 'react';

export const Context = React.createContext();

const ContextProvider = props => {
  const [user, setUser] = React.useState(null);

  return <Context.Provider value={{ user, setUser }}>{props.children}</Context.Provider>;
};

export default ContextProvider;
