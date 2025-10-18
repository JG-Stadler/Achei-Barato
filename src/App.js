import Footer from "./components/footer/rodape";
import MenuPrincipal from "./components/MenuPrincipal/header";
import ShowCase from "./components/showcase/vitrine";

function App() {
  return (
    <div className="App">
        <MenuPrincipal/>
        <ShowCase/>          
        <Footer/>
    </div>
  );
}

export default App;
