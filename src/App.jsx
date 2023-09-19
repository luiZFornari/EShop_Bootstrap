import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core/dist/cjs/popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import MenuPrivado from "./componentes/MenuPrivado";
import MenuPublico from "./componentes/MenuPublico";
import Categoria from "./componentes/telas/categoria/Categoria";
import ProdutoManutencao from "./componentes/telas/produto/ProdutoManutencao";
import NotFound from "./componentes/telas/NotFound";
import Login from "./componentes/telas/login/Login";
import ProdutoPublico from "./componentes/telas/home/Home";
import Avaliacao from "./componentes/telas/avaliacao/Avaliacao";
import Sobre from "./componentes/telas/Sobre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: "true",
        element: <ProdutoPublico />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "produto/:id",
        element: <Avaliacao />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: "true",
        element: <ProdutoPublico />,
      },
      {
        path: "categorias",
        element: <Categoria />,
      },
      {
        path: "produtos",
        element: <ProdutoManutencao />,
      },
      ,
      {
        path: "produto/:id",
        element: <Avaliacao />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
