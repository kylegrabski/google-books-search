import React, { useState } from "react";
import API from "../utils/API";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBContainer } from "mdbreact";

const SavedBooks = () => {


    const [favoriteBooks, setFavoriteBooks] = useState([]);

  const renderSavedBooks = async () => {
 
    try {
      let response = await API.searchBooks();
      response = response.data;
      setFavoriteBooks(response)
      console.log("FAVORITE BOOKS STORE", favoriteBooks);
      
      return 
    } catch (error) {
      console.error(error);
      return;
    }
  }


renderSavedBooks();
  return (
      <>
      renderSavedBooks()
      <Container className="py-5 book-card">
        <Row className="pb-5 mb-4">
          {favoriteBooks.map((book) => (
            <Col className="lg-3 md-6 mb-4 mb-lg-0" key={book.bookId}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={book.image}
                  style={{
                    width: "10rem",
                    height: "auto",
                    position: "relative",
                    left: "58px",
                  }}
                />
                <Card.Header as="h5">{book.title}</Card.Header>
                <Card.Body>
                  <Card.Title>{book.authors}</Card.Title>
                  <MDBContainer>
                    <Card.Text
                      className="overflow-auto"
                      style={{ height: "260px" }}
                    >
                      {book.description}
                    </Card.Text>
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

export default SavedBooks;