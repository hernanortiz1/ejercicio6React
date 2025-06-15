import { Card, CardGroup, Form, Button } from "react-bootstrap";

const Tarjetas = () => {
  return (
    <section className="p-3">
      <div className="row row-cols-2 row-cols-md-3 g-4">
        <div className="col">
          <Card>
            <Card.Title className="m-2 text-center">Color: </Card.Title>
            <Card.Body className="fondoFormulario">
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-end ">
                <Button
                  type="submit"
                  variant="danger"
                  className="px-3 shadow-sm"
                >
                  Borrar
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tarjetas;
