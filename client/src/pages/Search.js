import React, { useState } from "react";
import API from "../utils/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBContainer } from "mdbreact";

const Search = () => {
  //userInput is the var that holds the value
  //setUserInput is to call and change the userInput
  const [userInput, setUserInput] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

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
    } catch (error) {
      console.error(error);
    }
  };

  const addFavorite = async (book) => {
    console.log("favorites", book);
    let currentAuthor = book.authors[0];
    const data = {
      authors: currentAuthor || "No Author",
      title: book.title,
      description: book.description,
      image: book.image,
    };
    console.log(data);
    if (!data) {
      return;
    }
    try {
      const response = await API.saveBook(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
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
      <Container className="py-5 book-card">
        <Row className="pb-5 mb-4">
          {searchedBooks.map((book) => (
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
                <button className="btn" onClick={(e) => addFavorite(book)}>
                  Add to Favorites
                </button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Search;
