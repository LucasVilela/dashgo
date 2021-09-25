import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas</Text>
          <Text color="gray.300" fontSize="small">
            lucas@lucas.com.au
          </Text>
        </Box>
      )}
      <Avatar size="md" name="lucas vilela" />
    </Flex>
  );
}
