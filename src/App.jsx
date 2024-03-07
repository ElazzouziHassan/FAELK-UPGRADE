import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/main-components/nav-bar/NavBar";
import Footer from "./components/main-components/footer/Footer";
import Accueil from "./pages/accueil/Accueil";
import Contact from "./pages/contact/Contact";
import NosProgrammes from "./pages/nos-programmes/NosProgrammes";
import NosProjets from "./pages/nos-projets/NosProjets";
import QuiSommeNous from "./pages/qui-some-nous/QuiSommeNous";
import './App.scss'
import Communication from "./pages/communication/Communication";

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/", element:<Layout/>, children: [
      { path:"/", element: <Accueil /> },
      { path:"/contactez-nous", element: <Contact /> },
      { path:"/nos-programmes", element: <NosProgrammes /> },
      { path:"/nos-projets", element: <NosProjets /> },
      { path:"/qui-somme-nous", element: <QuiSommeNous /> },
      { path:"/communication", element: <Communication /> },
    ],
  }
])

function App() {
  return (
    <div className="app">
    <div className="container">
      <RouterProvider router={router}/>
    </div>
  </div>
  )
}

export default App
