import { Form, Button } from "react-bootstrap";
import CuadroColor from "./CuadroColor";

const FormularioColor = () => {
  return (
    <>
      <section className="row px-2">
        <div className=" col-4 col-md-2">
          <CuadroColor />
        </div>
        <div className="col-8 col-md-10">
          <Form>
            <Form.Group className="ms-2 mb-3 mt-md-3">
              <Form.Control
                type="text"
                placeholder="Ingresa un color ej: Blue"
              />
              <div className="text-end ">
                <Button
                  type="submit"
                  variant="primary"
                  className="m-3 px-4 shadow-sm"
                >
                  Guardar
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </section>
    </>
  );
};

export default FormularioColor;
