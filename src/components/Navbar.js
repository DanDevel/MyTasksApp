import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex bg="teal.500" p={4} color="white" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="50px"
        src="https://example.com/your-logo.png" // your logo url
        alt="Logo"
        mr={4}
      />
      <Text fontSize="xl" fontWeight="bold">
        Tasks Board
      </Text>
    </Flex>
  );
}

export default Navbar;
