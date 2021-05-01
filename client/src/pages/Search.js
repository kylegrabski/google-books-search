import React, { useState } from "react";
import API from "../utils/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBContainer } from 'mdbreact';

const Search = () => {
  //userInput is the var that holds the value
  //setUserInput is to call and change the userInput
  const [userInput, setUserInput] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("HANDLE FORM SUBMIT CALLED");

    if (userInput === "") {
      return;
    }
    try {
      const response = await API.searchGoogleBooks(userInput);
      console.log("RESPONSE", response);
      if (response.status !== 200) {
        throw new Error("ERROR AT HANDLE FORM SUBMIT");
      }

      const { items } = await response.data;

      console.log("ITEMS", items);

      const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ["No Author"],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || "",
      }));
      setSearchedBooks(bookData);
      setUserInput("");

      console.log("SEARCHED BOOKS STATE", searchedBooks);
    } catch (error) {
      console.error(error);
    }
  };

  const renderElements = () => {
    if (searchedBooks.length !== 0) {
      console.log("HERE COME THE BOOKS ON THE PAGE!");

      searchedBooks.map((book) => {
        console.log("MAPPED BOOKS", book);
      });
    }
  };
  renderElements();
  return (
    <>
      <div>
        {/* <h3>BOOK SEARCH</h3>
        <h3>BOOK SEARCH</h3>
        <h3>BOOK SEARCH</h3> */}
        <Form className="mt-5 pt-4">
          <Form.Group>
            <Form.Label>Book Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search Books"
              onChange={(e) => setUserInput(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
        {/* // if searchedbooks.length !== 0, then searched books .map, return
        cards. */}
      </div>
      <Container fluid className="py-5 book-card">
        <Row className="pb-5 mb-4">
          {searchedBooks.map((book) => (
            <Col className="lg-3 md-6 mb-4 mb-lg-0">
            <Card style={{ width: "18rem" }} key={book.bookId}>
              <Card.Img variant="top" src={book.image} 
              style={{width:"10rem", height:"auto",position:"relative", left:"58px" }}
              fluid />
              <Card.Header as="h5">{book.title}</Card.Header>
              <Card.Body>
                <Card.Title>{book.authors}</Card.Title>
                <MDBContainer>
                <Card.Text className="overflow-auto" style={{height: "260px"}}>{book.description}</Card.Text>
                </MDBContainer>
              </Card.Body>
            </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Search;
