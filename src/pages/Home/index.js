import React from "react";
import { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useAuth } from "../../contexts/auth";
import axios from "axios";
import Jogadors from "./Jogadors";
import Button from "@material-ui/core/Button";

function Home(Props) {
  const { Logout } = useAuth();
  async function handleLogout() {
    Logout();
  }

  return (
    <div>
      <AppBar color="" position="static">
        <Toolbar>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  <Link to="/" refresh="true">
                    Listar Jogadores
                  </Link>
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  <Link to="/novo">Novo Jogadores</Link>
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
      <Jogadors />
    </div>
  );
}

export default Home;
