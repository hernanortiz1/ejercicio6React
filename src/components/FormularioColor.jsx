import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ListaTarjetas from "./ListaTarjetas";

const FormularioColor = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState([]);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!colorValido(color)) {
      setValidated(true);
      return;
    }

    setColores([...colores, color]);
    setColor("");
    setValidated(false);
  };

  const borrarColor = (nombreColor) => {
    const indice = colores.findIndex((item) => item === nombreColor);

    if (indice !== -1) {
      const nuevosColores = [...colores];

      nuevosColores.splice(indice, 1);
      setColores(nuevosColores);
    }
  };

  const colorValido = (color) => {
    const colorIngresado = new Option().style;
    colorIngresado.color = color;
    return colorIngresado.color !== "";
  };

  return (
    <>
      <div className="fondoFormulario py-3 mb-5  shadow rounded-4">
        <section className="row px-4">
          <div className=" col-4 col-md-2">
            <div
              style={{
                height: "100px",
                backgroundColor: color || "transparent",
                border: "2px solid #000",
                borderRadius: "5px",
              }}
            ></div>
          </div>
          <div className="col-8 col-md-10">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="ms-2 mb-3 mt-md-3">
                <Form.Control
                  type="text"
                  placeholder="Ingresa un color ej: Blue"
                  onChange={(e) => setColor(e.target.value)}
                  value={color}
                  isInvalid={validated && !colorValido(color)}
                />
                <Form.Control.Feedback>Color valido</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Color inválido. Ingrese un nombre de color válido
                </Form.Control.Feedback>
                <div className="text-end ">
                  <Button
                    type="submit"
                    variant="primary"
                    className="px-4 mt-4 shadow-sm"
                  >
                    Guardar
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        </section>
      </div>
      <section>
        <h3 className="fs-2 text-center mb-3">Lista de colores</h3>
        <div className="text-center shadow rounded-3 bg-primary-subtle">
          <ListaTarjetas colorProps={colores} borrarColorProps={borrarColor} />
        </div>
      </section>
    </>
  );
};

export default FormularioColor;
