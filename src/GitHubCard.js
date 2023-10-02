import React from "react";
import { Card } from "react-bootstrap";
import github from '../src/github.jpg'

function GitHubCard() {
  return (
    <Card style={{ width: '28rem', margin: 'auto' }}>
      <Card.Img variant="top" src={github} />
      <Card.Body>
        <Card.Title>Esteban Sepulveda</Card.Title>
        <Card.Text>
          Software Developer. Current student attending SDSU's Software Development Bootcamp. Actively expanding my knowledge in software development.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard