import { useState } from "react";
import { Card, Button, Modal, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { editarColor, borrarColorPorID } from "../helpers/queries";

const Tarjetas = ({ nombreColor, posicion, obtenerColor }) => {
  
  
  const confirmarBorrado = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `El color ${nombreColor} se eliminará`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarColorProps(nombreColor);

        Swal.fire({
          title: "Eliminado",
          text: `El color  ${nombreColor} fue borrado correctamente`,
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <section className="p-3">
      <div>
        <div className="col">
          <Card>
            <Card.Title className="m-2 text-center">
              Color: {nombreColor}
            </Card.Title>
            <Card.Body className="bg-dark-subtle d-flex justify-content-center">
              <div
                className="shadow"
                style={{
                  backgroundColor: `${nombreColor}`,
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
    </section>
  );
};

export default Tarjetas;
