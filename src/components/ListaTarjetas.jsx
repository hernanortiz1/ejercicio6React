import Tarjetas from "./Tarjetas";


const ListaTarjetas = ({ colorProps, obtenerColor}) => {
  return (
    <div className="row row-cols-2 row-cols-md-3">
      {colorProps.map((item, indice) => (
        <Tarjetas
          key={item._id}
          nombreColor={item}
          posicion={indice}
         obtenerColor={obtenerColor}
        />
      ))}
    </div>
  );
};

export default ListaTarjetas;
