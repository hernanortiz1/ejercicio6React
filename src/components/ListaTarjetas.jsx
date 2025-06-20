import CardGroup from "react-bootstrap/CardGroup";
import Tarjetas from "./Tarjetas";

const ListaTarjetas = ({ colorProps, borrarColorProps }) => {
  return (
    <CardGroup>
      {colorProps.map((item, indice) => (
        <Tarjetas
          key={indice}
          nombreColor={item}
          borrarColorProps={borrarColorProps}
        />
      ))}
    </CardGroup>
  );
};

export default ListaTarjetas;
