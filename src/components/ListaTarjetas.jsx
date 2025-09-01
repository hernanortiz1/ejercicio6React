import Tarjetas from "./Tarjetas";


const ListaTarjetas = ({ colorProps, obtenerColor}) => {
  return (
    <div className="row row-cols-1 row-cols-md-3">
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
