import * as React from 'react';

interface FieldContextProps {
  id?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

export const FieldContext = React.createContext<FieldContextProps>({});

export const useField = () => {
  const context = React.useContext(FieldContext);

  return context;
};
