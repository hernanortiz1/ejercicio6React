import { Form, Button } from "react-bootstrap";

const FormularioColor = () => {
  return (
    <>
      <section>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Ingresa un color ej: Blue" />
            <div className="text-end ">
              <Button type="submit" variant="primary" className="m-3 px-4 shadow-sm">
                Guardar
              </Button>
            </div>
          </Form.Group>
        </Form>
      </section>
    </>
  );
};

export default FormularioColor;
