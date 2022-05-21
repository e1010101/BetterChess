import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./login/Login";
import { ChakraProvider } from "@chakra-ui/react";
import Game from "./Game";
const App = () => {
  return (
    <ChakraProvider>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Game />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/game" element={<Game />}></Route>
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
};

export default App;