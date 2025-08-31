import { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { editarColor, borrarColorPorID } from "../helpers/queries";

const Tarjetas = ({ nombreColor, posicion, obtenerColor }) => {
  const [show, setShow] = useState(false);
  const [colorEditado, setColorEditado] = useState(nombreColor.inputColor);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setTareaEditada(nombreColor.inputColor);
    setShow(true);
  };

  const confirmarBorrado = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `El color ${nombreColor.inputColor} se eliminará`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaPorID(nombreColor._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Eliminado",
            text: `El color  ${nombreColor} fue borrado correctamente`,
            icon: "success",
            timer: 1200,
            showConfirmButton: false,
          });
          obtenerColor();
        }
      }
    });
  };

  const editarColor = async () => {
    const colorParaEditar = { inputColor: colorEditado };
    const respuesta = await editarColor(colorParaEditar, nombreColor._id);
    if (respuesta.status === 200) {
      Swal.fire({
        title: "Color editado",
        text: `El color "${colorEditado}" fue editado correctamente`,
        icon: "success",
      });
      obtenerColor();
    }
  };

  const guardarCambios = () => {
    if (colorEditado.trim().length < 3) {
      Swal.fire({
        title: "Error",
        text: "El color debe tener al menos 3 caracteres",
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    editarColor();
    handleClose();
  };

  return (
    <section className="p-3">
      <div>
        <div className="col">
          <Card>
            <Card.Title className="m-2 text-center">
              Color: {nombreColor.inputColor}
            </Card.Title>
            <Card.Body className="bg-dark-subtle d-flex justify-content-center">
              <div
                className="shadow"
                style={{
                  backgroundColor: `${nombreColor.inputColor}`,
                  width: "100px",
                  height: "100px",
                  borderRadius: "10px",
                }}
              ></div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
                <Button
                  type="submit"
                  variant="warning"
                  className="px-3 shadow-sm"
                  onClick={handleShow}
                >
                  Editar
                </Button>
                <Button
                  type="submit"
                  variant="danger"
                  className="px-3 shadow-sm"
                  onClick={confirmarBorrado}
                >
                  Borrar
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </div>
      {/* MODAL */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Modificar color: {nombreColor.inputColor}</Form.Label>
              <Form.Control
                type="text"
                value={colorEditado}
                onChange={(e) => setColorEditado(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={guardarCambios}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      {/*FIN MODAL */}
    </section>
  );
};

export default Tarjetas;
