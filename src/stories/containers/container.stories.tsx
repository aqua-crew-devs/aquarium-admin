import React from "react";
import Container from "../../components/Container";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "components/Container"
};

export function withChildren() {
  return (
    <BrowserRouter>
      <Container>hello world</Container>
    </BrowserRouter>
  );
}
