import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import ListaTarjetas from "./ListaTarjetas";
import { leerColor } from "../helpers/queries";
import Swal from "sweetalert2";

const FormularioColor = () => {
  const [color, setColor] = useState([]);
  const [validated, setValidated] = useState(false);

const [ventanaBusqueda, setVentanaBusqueda] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

    const obtenerColor = async () => {
      const respuesta = await leerColor();
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setColor(datos);
      } else {
        console.info("Error al buscar un tarea");
      }
    };

     useEffect(() => {
    obtenerColor();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!colorValido(color)) {
      setValidated(true);
      return;
    }

  
  };
  const handleShowBusqueda = () => {
    setBusqueda("");
    setResultadosBusqueda([]);
    setVentanaBusqueda(true);
  };
   const handleCloseBusqueda = () => setVentanaBusqueda(false);
   
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
                <div className="d-flex flex-column flex-md-row justify-content-end gap-2 mt-4">
                  <Button type="submit" variant="primary" className="shadow-sm">
                    Guardar
                  </Button>
                  <Button type="submit" variant="success" className="shadow-sm">
                    Buscar
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
