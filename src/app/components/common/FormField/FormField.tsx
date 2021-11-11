import {FC} from "react";
import {FormControl, FormHelperText, FormLabel} from "@chakra-ui/react";

interface Props {
  label: string;
  helperText?: string;
}

export const FormField: FC<Props> = ({
    children,
    helperText,
    label
  }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      {children}
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
