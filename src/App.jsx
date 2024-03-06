import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/main-components/nav-bar/NavBar";
import Footer from "./components/main-components/footer/Footer";
import Accueil from "./pages/accueil/Accueil";
import Contact from "./pages/contact/Contact";
import NosProgrammes from "./pages/nos-programmes/NosProgrammes";
import NosProjets from "./pages/nos-projets/NosProjets";
import QuiSommeNous from "./pages/qui-some-nous/QuiSommeNous";
import './App.scss'

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
      { path:"/contact", element: <Contact /> },
      { path:"/nos-programmes", element: <NosProgrammes /> },
      { path:"/nos-projets", element: <NosProjets /> },
      { path:"/qui-somme-nous", element: <QuiSommeNous /> },
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
