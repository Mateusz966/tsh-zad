import { FC } from 'react';
import {Input as ChakraInput, InputProps} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import {FormField} from "../FormField/FormField";

interface Props extends InputProps {
  label: string,
  name: string
};

export const AppInput: FC<Props> = ({
    label,
    name,
    type,
    placeholder,
    isDisabled,
    defaultValue,
    ...rest
  }) => {
  return (
    <FormField label={label}>
    <ChakraInput
      placeholder={placeholder}
      type={type}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      {...rest}
    />
    </FormField>
  );
};