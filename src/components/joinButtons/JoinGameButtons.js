import React from "react";
import { Link } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const JoinGameButtons = () => {
  return (
    <VStack w="25%" bg="white">
      <Button w="80%" size="lg" p="4px;" colorScheme="blue" marginTop={10}>
        <Link to="/game"> CREATE GAME</Link>
      </Button>
      <Button w="80%" size="lg" p="4px;" colorScheme="blue">
        <Link to="/game">PLAY WITH FRIEND</Link>
      </Button>
      <Button w="80%" size="lg" p="4px;" colorScheme="blue">
        <Link to="/game">PLAY VS COMPUTER</Link>
      </Button>
    </VStack>
  );
};

export default JoinGameButtons;
