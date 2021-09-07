import React from "react";
import { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { useAuth } from "../../contexts/auth";
import axios from "axios";
import TypoGraphy from "@material-ui/core/Typography";
import { Formik, Form } from "formik";
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

function Novo(Props) {
  const { Logout } = useAuth();
  async function handleLogout() {
    Logout();
  }

  const submitForm = async (values) => {
    //function carregaToken() {
    const storagedToken = localStorage.getItem("@App:accessToken");

    const config = {
      method: "post",
      url: "http://localhost:4000/jogadors",
      headers: { Authorization: "Bearer " + storagedToken },
      data: values,
    };
    //}
    //carregaToken();
    try {
      const res = await axios(config);
      alert("Jogador cadastrado com sucesso!");
    } catch (err) {
      console.error(err);
    }
  };

  const initialValues = {
    name: "Jogador",
    idade: "",
    clube: "Clube Atual",
    posicao: "Posicao",
  };

  return (
    <div>
      <AppBar color="" position="static">
        <Toolbar>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  <Link to="/" refresh="true">
                    Home
                  </Link>
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  <Link to="/listar" refresh="true">
                    Listar Jogadores
                  </Link>
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  <p>Novo Jogador</p>
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  <Button
                    onClick={handleLogout}
                    variant="contained"
                    color="primary"
                    size="medium"
                  >
                    Sair
                  </Button>
                </TypoGraphy>
              </ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>

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
                  id="nome"
                  name="nome"
                  label="Nome:"
                  value={values.nome}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="idade"
                  name="idade"
                  label="Idade:"
                  type="number"
                  value={values.idade}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="clube"
                  name="clube"
                  label="Clube atual:"
                  value={values.clube}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="posicao"
                  name="posicao"
                  label="Posição:"
                  value={values.posicao}
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
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Novo;
