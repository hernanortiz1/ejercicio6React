import { Form, Button } from "react-bootstrap";
import CuadroColor from "./CuadroColor";
import Card from "./Tarjetas";
import Tarjetas from "./Tarjetas";
import { useState } from "react";
import ListaTareas from "../../../ejercicio4/src/components/ListaTareas";

const FormularioColor = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("guardar tarea");
    // tomar tarea de state y guardar en state tareas (array)
    //... operado expred, copia los elementos de array tareas y al final le agrego la ultima tarea que agrego el usr
    setColores([...colores, color]);

    //limpiar formulario
    setColor("");
  };

  const borrarColor = (nombreColor) => {
    const indice = tareas.findIndex((item) => item === nombreColor);
    //actualizar estado tareas
    if (indice !== -1) {
      //copio el array original
      const nuevosColores = [...colores];
      //elimino con splice y actualizo
      nuevosColores.splice(indice, 1);
      setColores(nuevosColores);
    }
  };

  return (
    <>
      <div className="fondoFormulario py-3 mb-5">
        <section className="row px-4">
          <div className=" col-4 col-md-2">
            <CuadroColor />
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
      <ListaTareas colorProps={colores} borrarColorProps={borrarColor}/>
    </>
  );
};

export default FormularioColor;
