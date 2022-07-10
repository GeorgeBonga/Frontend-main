import About from "../components/About/About";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Contact from "../components/contact/Contact";

export const routes = [
  { id: 1, name: "Home", path: "/", component: Home },
  { id: 2, name: "About", path: "/about", component: About },
  { id: 2, name: "Login", path: "/login", component: Login },
  { id: 3, name: "Contact", path: "/contact", component: Contact },
];
