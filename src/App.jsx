import "bootstrap/dist/css/bootstrap.min.css";
import FormularioColor from "./components/FormularioColor";

function App() {
  return (
    <>
      <main className="container my-4">
        <section className="shadow rounded-4">
          <h1 className="text-center py-3">Administrar Colores</h1>
          <FormularioColor />
        </section>
      </main>
      <footer className="bg-dark text-light text-center py-3">
        &copy; Todos los derechos reservados
      </footer>
    </>
  );
}

export default App;
