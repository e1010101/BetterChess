import React from "react";
import "./ButtonGroup.css";
import { Button, Stack, Avatar, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { logout } from "../../firebase";
import { BiLogOut } from "react-icons/bi";

export default function ButtonGroup(props) {
  return props.user == null ? (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      <Button
        as={"a"}
        fontSize={"sm"}
        fontWeight={400}
        variant={"link"}
        href={"#"}
        onClick={props.useSignIn}
      >
        Sign In
      </Button>
      <Button
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"pink.400"}
        href={"#"}
        _hover={{
          bg: "pink.300",
        }}
      >
        Sign Up
      </Button>
    </Stack>
  ) : (
    <Flex alignItems="center">
      <Link to="/">
        <Avatar name={props.user.displayName} src={props.user.photoURL} />
      </Link>
      <Link to="/login">
        <Button className="logout" onClick={logout}>
          <BiLogOut />{" "}
        </Button>
      </Link>
    </Flex>
  );
}
