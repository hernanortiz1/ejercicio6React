import Tarjetas from "./Tarjetas";


const ListaTarjetas = ({ colorProps, borrarColorProps }) => {
  return (
    <div className="row row-cols-2 row-cols-md-3">
      {colorProps.map((item, indice) => (
        <Tarjetas
          key={indice}
          nombreColor={item}
          borrarColorProps={borrarColorProps}
        />
      ))}
    </div>
  );
};

export default ListaTarjetas;
