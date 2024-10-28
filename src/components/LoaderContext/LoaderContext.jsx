import { createContext, useState, useContext } from 'react';

const LoaderContext = createContext();
 
function useLoader() {
	return useContext(LoaderContext);
}
function LoaderProvider({ children }) {
  const [load, setLoad] = useState(false);
  return (
    <LoaderContext.Provider value={{ load, setLoad }}>
      {children}
    </LoaderContext.Provider>
  );
};


export {useLoader, LoaderProvider}