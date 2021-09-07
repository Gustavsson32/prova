import React from "react";
import { useAuth } from "../../contexts/auth";
import { Formik, Form } from "formik";
import { useFormik } from "formik";
import TypoGraphy from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import * as yup from "yup";
import {
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const Login = () => {
  const context = useAuth();
  console.log(context);
  function handleLogin() {
    context.Login();
  }

  const { Logout } = useAuth();
  Logout();
  async function handleLogout() {
    Logout();
  }

  const submitForm = async (values) => {
    context.Login(values.login, values.senha);
  };

  const initialValues = {
    login: "",
    senha: "",
  };

  return (
    <div>
      <AppBar color="" position="static">
        <Toolbar>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  Home
                </TypoGraphy>
              </ListItemText>
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
                  <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => submitForm(values)}
                  >
                    {({ handleChange, touched, errors, values }) => (
                      <Form>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              id="login"
                              name="login"
                              label="login:"
                              value={values.login}
                              onChange={handleChange}
                            />
                            <TextField
                              fullWidth
                              id="senha"
                              name="senha"
                              label="senha:"
                              value={values.idade}
                              onChange={handleChange}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Button
                              color="primary"
                              variant="contained"
                              fullWidth
                              type="submit"
                            >
                              Login
                            </Button>
                          </Grid>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
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
