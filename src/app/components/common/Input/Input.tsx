import { FC } from 'react';
import {Input as ChakraInput, InputProps} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import {FormField} from "../FormField/FormField";

interface Props extends InputProps {
  label?: string,
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
  const { register } = useFormContext();
  return (
    <FormField
      name={name}
      label={label}
    >
    <ChakraInput
      {...register(name)}
      height="50px"
      placeholder={placeholder}
      type={type}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      {...rest}
      data-testid={`input-${name}`}
    />
    </FormField>
  );
};