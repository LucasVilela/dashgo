import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})



export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };
  return (
    <Flex w="100" h="100vh" align="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius="8" flexDirection="column" onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing="4">
          <Input type="email" name="email" label="Email" error={errors.email} {...register("email")} />
          <Input type="password" name="password" label="Password" error={errors.password} {...register("password")} />
        </Stack>
        <Button type="submit" colorScheme="yellow" mt="6" size="lg" isLoading={isSubmitting}>
          Enter
        </Button>
      </Flex>
    </Flex>
  );
}
