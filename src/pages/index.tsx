import { Flex, Button, Stack, } from "@chakra-ui/react";
import { Input } from "../components/Form/Input"

export default function Home() {
  return (
    <Flex
      w="100"
      h="100vh"
      align="center"
      justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="Email" />
          <Input type="password" name="password" label="Password" />
        </Stack>
        <Button type="submit" colorScheme="yellow" mt="6" size="lg">Enter</Button>
      </Flex>
    </Flex>
  );
}
