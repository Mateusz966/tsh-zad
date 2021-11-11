import React from 'react';
import { Splitted } from "../components/layouts/Splitted/Splitted";
import { AppInput } from "../components/common/Input/Input";
import loginPhoto from '../../assets/login-photo.png';
import {FormContainer} from "../components/layouts/FormContainer/FormContainer";
import {Button, Heading} from "@chakra-ui/react";
import {Brand} from "../components/common/Brand/Brand";
import {useLogin} from "./useLogin";
import { FormProvider } from 'react-hook-form';


export const Login = () => {
  const { methods, inProgress, handleSubmit: submit  } = useLogin()
  return (
    <Splitted src={loginPhoto}>
      <Brand mt="10" />
      <FormProvider {...methods}>
      <FormContainer>
      <form onSubmit={methods.handleSubmit(submit)}>
        <Heading mb="10" fontWeight="600" as="h2" size="lg">
          Login
        </Heading>
        <AppInput name="username" placeholder="Enter username" label="Username" />
        <AppInput name="password" placeholder="Enter password" label="Password" />
        <Button mt="10" isLoading={inProgress} type="submit">Log in</Button>
      </form>
      </FormContainer>
      </FormProvider>
    </Splitted>
  );
};
