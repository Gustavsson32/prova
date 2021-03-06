import { useState, createContext, useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from ".";

function Jogadors(Props) {
  let jogadors = [];

  const GetJogadores = async () => {
    //function carregaToken() {
    const storagedToken = localStorage.getItem("@App:accessToken");

    const config = {
      method: "get",
      url: "http://localhost:4000/jogadors",
      headers: { Authorization: "Bearer " + storagedToken },
    };

    try {
      const res = await axios(config);
      jogadors = res.data;
      setJogadors(jogadors);
    } catch (err) {
      console.error(err);
    }
  };

  const DeleteJogador = async (id, nome) => {
    const storagedToken = localStorage.getItem("@App:accessToken");

    const config = {
      method: "delete",
      url: "http://localhost:4000/jogadors/" + id,
      headers: { Authorization: "Bearer " + storagedToken },
    };

    try {
      const res = await axios(config);
      jogadors = res.data;
    } catch (err) {
      console.error(err);
    }

    alert("Jogador " + nome + " deletado");
  };

  const [teste, setJogadors] = useState(retJogs());

  function retJogs() {
    const jogs = [];
    GetJogadores();
    return jogs;
  }

  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={40} justify="center">
        {teste.map((jogador) => (
          <Grid item key={jogador.id}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {jogador.nome}
                  </Typography>
                  <Typography component="p">{jogador.clube}</Typography>
                  <Typography component="p">
                    {jogador.posicao} , {jogador.idade} anos
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    DeleteJogador(jogador.id, jogador.nome);
                  }}
                >
                  Excluir
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default Jogadors;
