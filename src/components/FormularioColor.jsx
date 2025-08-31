import { Form, Button, Modal, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import ListaTarjetas from "./ListaTarjetas";
import { crearColor, leerColor, esColorValido } from "../helpers/queries";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const FormularioColor = () => {
  const [listaColores, setListaColor] = useState([]);
  const [colorInput, setColorInput] = useState("");

  const [validated, setValidated] = useState(false);
  const [ventanaBusqueda, setVentanaBusqueda] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const obtenerColor = async () => {
    const respuesta = await leerColor();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaColor(datos);
    } else {
      console.info("Error al buscar un color");
    }
  };

  useEffect(() => {
    obtenerColor();
  }, []);

  const handleShowBusqueda = () => {
    setBusqueda("");
    setResultadosBusqueda([]);
    setVentanaBusqueda(true);
  };
  const handleCloseBusqueda = () => setVentanaBusqueda(false);

  const buscarColor = () => {
    if (busqueda.trim().length < 3) {
      Swal.fire({
        title: "Ingrese más caracteres",
        text: "Debe ingresar al menos 3 caracteres para buscar",
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    const filtradas = listaColores.filter((color) =>
      color.inputColor.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultadosBusqueda(filtradas);
  };

  const onSubmit = async (color) => {
    try {
      const respuesta = await crearColor(color);

      if (respuesta.status === 201) {
        Swal.fire({
          title: "Color creado",
          text: `El color "${color.inputColor}" fue creado correctamente`,
          icon: "success",
        });
        reset();
        obtenerColor();
      } else {
        Swal.fire({
          title: "Error",
          text: "No se pudo guardar el color",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error en onSubmit:", error);
    }
  };

  return (
    <>
      <div className="fondoFormulario py-3 mb-5  shadow rounded-4">
        <section className="row px-4">
          <div className=" col-4 col-md-2">
            <div
              style={{
                height: "100px",
                backgroundColor: listaColores || "transparent",
                border: "2px solid #000",
                borderRadius: "5px",
              }}
            ></div>
          </div>
          <div className="col-8 col-md-10">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="ms-2 mb-3 mt-md-3">
                <Form.Control
                  type="text"
                  placeholder="Ingresa un color ej: Blue"
                  {...register("inputColor", {
                    required: "El color es un dato obligatorio",
                    minLength: {
                      value: 2,
                      message: "El color debe tener 2 caracteres como mínimo",
                    },
                    maxLength: {
                      value: 20,
                      message: "El color debe tener 20 caracteres como máximo",
                    },
                    validate: (value) =>
                      esColorValido(value) || "Ingrese un color CSS válido",
                  })}
                />

                <div className="d-flex flex-column flex-md-row justify-content-end gap-2 mt-4">
                  <Button type="submit" variant="primary" className="shadow-sm">
                    Guardar
                  </Button>
                  <Button
                    type="button"
                    variant="success"
                    className="shadow-sm"
                    onClick={handleShowBusqueda}
                  >
                    Buscar
                  </Button>
                </div>
              </Form.Group>
              <Form.Text className="text-danger">
                {errors.inputColor?.message}
              </Form.Text>
            </Form>
          </div>
        </section>
      </div>
      <section>
        <h3 className="fs-2 text-center mb-3">Lista de colores</h3>
        <div className="text-center shadow rounded-3 bg-primary-subtle">
          <ListaTarjetas
            colorProps={listaColores}
            obtenerColor={obtenerColor}
          />
        </div>

        <Modal show={ventanaBusqueda} onHide={handleCloseBusqueda}>
          <Modal.Header closeButton>
            <Modal.Title>Buscar Color</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              placeholder="Ingrese color a buscar"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              autoFocus
            />
            <ListGroup className="mt-3">
              {resultadosBusqueda.length > 0 ? (
                resultadosBusqueda.map((term, fila) => (
                  <ListGroup.Item key={term._id}>
                    {fila + 1} - {term.inputColor}
                  </ListGroup.Item>
                ))
              ) : (
                <div className="text-muted mt-2">No se encontraron colores</div>
              )}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseBusqueda}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={buscarColor}>
              Buscar
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};

export default FormularioColor;
