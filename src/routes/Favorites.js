import React, { useContext } from "react";
import { FavoritesContext } from "../FavoritesProvider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PokemonCard } from "../components";

function Favorites() {
  //Destructure favorites
  const { favorites } = useContext(FavoritesContext);

  return (
    <Container>
      <Row className="g-4">
        {favorites.map((favorite, index) => (
          <Col key={index}>
            <PokemonCard name={favorite.name} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { Favorites };
