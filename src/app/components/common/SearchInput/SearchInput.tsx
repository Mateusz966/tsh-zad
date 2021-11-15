import { FC } from 'react';
import {Input as ChakraInput, InputGroup, InputProps, InputRightElement} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import {FormField} from "../FormField/FormField";
import {SearchLoop} from "../../../../assets/SearchLoop";

interface Props extends InputProps {
  label?: string,
  name: string
};

export const SearchInput: FC<Props> = (
  {
    label,
    name,
    type,
    placeholder, isDisabled, defaultValue, ...rest
}) => {
  const { register } = useFormContext();
  return (
    <FormField isSearch name={name} label={label}>
      <InputGroup>
      <ChakraInput
        data-testid="search-input"
        {...register(name)}
        height="50px"
        placeholder={placeholder}
        type={type}
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        {...rest}
      />
        <InputRightElement pt={3} pr={2} children={<SearchLoop />} />
      </InputGroup>
    </FormField>
  );
};