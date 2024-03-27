import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import StackPage from "./pages/Stack";
import ContactPage from "./pages/Contact";
import ProjectPage from "./pages/Project";
import './App.css';

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/about", element: <AboutPage />},
  {path: "/projects", element: <ProjectsPage />},
  {path: "/projects/:project", element: <ProjectPage />},
  {path: "/stack", element: <StackPage />},
  {path: "/contact", element: <ContactPage />},
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
