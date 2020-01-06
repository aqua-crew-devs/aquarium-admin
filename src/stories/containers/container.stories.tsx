import React from "react";
import Container from "../../components/Container";

export default {
  title: "components/Container"
};

export function withChildren() {
  return <Container>hello world</Container>;
}
