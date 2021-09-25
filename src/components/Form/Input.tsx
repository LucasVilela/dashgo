import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  register: any;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error, register, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        ref={ref}
        {...register(label)}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
