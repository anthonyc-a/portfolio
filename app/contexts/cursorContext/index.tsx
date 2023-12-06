
import React, { createContext, useContext, useState } from 'react';

interface CursorContextProps {
  imageAddress: string;
  setImageAddress: React.Dispatch<React.SetStateAction<string>>;
}

export const CursorContext = createContext<CursorContextProps>({
  imageAddress: '',
  setImageAddress: () => {},
});

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};

const CursorWrapper: any = ({ children }:any) => {
  const [imageAddress, setImageAddress] = useState('');

  return (
    <CursorContext.Provider value={{ imageAddress, setImageAddress }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorWrapper;
