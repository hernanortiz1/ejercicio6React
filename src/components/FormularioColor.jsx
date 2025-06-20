import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ListaTarjetas from "./ListaTarjetas";

const FormularioColor = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores, color]);
  
    //limpiar formulario
    setColor("");
  };

  const borrarColor = (nombreColor) => {
    const indice = colores.findIndex((item) => item === nombreColor);
 
    if (indice !== -1) {   
      const nuevosColores = [...colores];
   
      nuevosColores.splice(indice, 1);
      setColores(nuevosColores);
    }
  };

  return (
    <>
      <div className="fondoFormulario py-3 mb-5">
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
      </div>
      <ListaTarjetas colorProps={colores} borrarColorProps={borrarColor} />
    </>
  );
};

export default FormularioColor;
