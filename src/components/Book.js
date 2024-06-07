import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Book = (props) => {
  const { id, title, author, publisher, publication_year, imageUrl } = props.book;

  console.log('Book imageUrl:', imageUrl);

  return (
    <Card className="d-flex flex-row" style={{ alignItems: 'center' }}>
      <Card.Body style={{ flex: 1 }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{id}</Card.Text>
        <Card.Text>{author}</Card.Text>
        <Card.Text>{publisher}</Card.Text>
        <Card.Text>{publication_year}</Card.Text>
        <Link to={'/book/detail/' + id}>상세보기</Link>
      </Card.Body>
      <Card.Img 
        variant="right" 
        src={imageUrl} 
        alt={"description"} 
        style={{ width: '200px', height: 'auto', objectFit: 'cover' }} 
      />
    </Card>
  );
}

export default Book;
