import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Button, ButtonGroup, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar className="my-footer" position="bottom" bg="dark" variant="light">
      <Navbar.Text className="text-muted">
        .. Created by Devon Hills
      </Navbar.Text>
      <Navbar.Collapse className="justify-content-end">
        <ButtonGroup>
          <Button
            title="Github"
            href="https://github.com/devonjhills"
            variant="dark"
          >
            <FontAwesomeIcon title={"Github"} icon={faGithub} size={"2x"} />
          </Button>
          <Button
            title="LinkedIn"
            href="https://www.linkedin.com/in/devonjhills/"
            variant="dark"
          >
            <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
          </Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footer;
