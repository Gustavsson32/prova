import React from "react";
import { useAuth } from "../../contexts/auth";
import { Formik } from "formik";
import { useFormik } from "formik";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Login = () => {
  const context = useAuth();
  console.log(context);
  function handleLogin() {
    context.Login();
  }

  return (
    <div>
      <AppBar color="" position="static">
        <Toolbar>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  Listar Jogadores
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  Novo Jogador
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  <Button
                    onClick={handleLogin}
                    variant="contained"
                    color="primary"
                    size="medium"
                  >
                    Login
                  </Button>
                </TypoGraphy>
              </ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Login;
