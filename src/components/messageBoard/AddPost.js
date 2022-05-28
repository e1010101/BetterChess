import React, { useState, useEffect } from "react";
import {
  Input,
  VStack,
  HStack,
  Box,
  Avatar,
  Flex,
  Select,
  Button,
} from "@chakra-ui/react";
import {
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { serverTimestamp } from "firebase/firestore";
import { right } from "@popperjs/core";
const AddPost = (props) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "users"),
      where("uid", "==", auth.currentUser.uid)
    );
    const docs = getDocs(q);
    docs.then((res) => {
      setUserData(res.docs[0].data());
    });
  }, []);
  const [message, setMessage] = useState("");
  const submitPost = () => {
    const newDate = Date.now();
    const username = userData.name;
    addDoc(collection(db, "posts"), {
      club: "Chess Masters",
      date: serverTimestamp(),
      message: message,
      username: username,
      profilePic: auth.currentUser.photoURL,
    });
    setMessage("");
  };
  return (
    <Box w="100%" bg="white" shadow="lg" p={4} position="relative">
      <Flex align="center">
        <Avatar src={auth.currentUser.photoURL}></Avatar>
        <Input
          placeholder="Say something to your friends!"
          ml={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></Input>
      </Flex>
      <Box w="100%;">
        <Button padding="10px;" size="xs" onClick={submitPost} float="right">
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default AddPost;
