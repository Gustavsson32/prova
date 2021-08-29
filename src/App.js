import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "./componentes/NavBar";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
export default App;
