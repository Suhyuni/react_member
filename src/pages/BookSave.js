import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function BookSave() {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publication_year, setPublicationYear] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const setInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const setInputAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const setInputPublisher = (e) => {
    setPublisher(e.target.value);
  };

  const setInputPublicationYear = (e) => {
    setPublicationYear(e.target.value);
  };

  const setInputImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const onClickSave = () => {
    axios
      .post("http://localhost:8080/api/book/save", {
        title: title,
        author: author,
        publisher: publisher,
        publication_year: publication_year,
        imageUrl: imageUrl
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          console.log("책 등록 성공");
          navigate('/book-list');
        } else {
          console.log("책 등록 실패");
        }
      })
      .catch((err) => {
        console.log("책 등록 실패!");
        console.error(err);
      });
  };

  return (
    <div>
      <Container style={{ width: '60%' }}>
        <Form.Group className="mb-2" controlId="title">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            placeholder="제목을 입력하세요."
            onChange={setInputTitle}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="author">
          <Form.Label>저자</Form.Label>
          <Form.Control
            type="text"
            placeholder="저자를 입력하세요."
            onChange={setInputAuthor}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="publisher">
          <Form.Label>출판사</Form.Label>
          <Form.Control
            type="text"
            placeholder="출판사를 입력하세요."
            onChange={setInputPublisher}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="publicationYear">
          <Form.Label>출판년도</Form.Label>
          <Form.Control
            type="text"
            placeholder="출판년도를 입력하세요."
            onChange={setInputPublicationYear}
            required
          />
          </Form.Group>
        <Form.Group className="mb-2" controlId="imageUrl">
          <Form.Label>이미지 주소</Form.Label>
          <Form.Control
            type="text"
            placeholder="이미지 주소를 입력하세요."
            onChange={setInputImageUrl}
            required
          />
        </Form.Group>

        <div className="mb-4"></div>

        <Button className="w-100" variant="primary" onClick={onClickSave}>
          책 등록
        </Button>
      </Container>
    </div>
  );
}
