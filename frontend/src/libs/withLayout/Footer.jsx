import React from 'react';
// Material-UI components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


export default class Footer extends React.Component {

  render() {
    return (
      <footer style={{ backgroundColor: "#CED3C9" }}>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="center" >
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-end" style={{ padding: 20 }}>
            <Grid
              item
              id="concacto">
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3" align="center">
                    {'Contacto'}
                  </Typography>
                  <Divider />
                  <a href="mailto:juan.beresiarte@mercadolibre.com">
                    {'juan.beresiarte@mercadolibre.com'}
                  </a>
                  <br />
                  <a href="mailto:gaston.jofre@mercadolibre.com">
                    {'gaston.jofre@mercadolibre.com'}
                  </a>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              id="ayuda">
              <Card >
                <CardContent>
                  <Typography variant="h5" component="h3" align="center">
                    {'Ayuda'}
                  </Typography>
                  <Divider />

                  <a>
                    {'juan.beresiarte@mercadolibre.com'}
                    <br />
                    {'gaston.jofre@mercadolibre.com'}
                  </a>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              id="redes">
              <Card >
                <CardContent>
                  <Typography variant="h5" component="h3" align="center">
                    {'Redes'}
                  </Typography>
                  <Divider />

                  <a href="https://www.instagram.com/juanbere/">
                    {'Juan Beresiarte'}
                  </a>
                  <br />
                  <a href="https://www.instagram.com/_gastonjofre/">
                    {'Gastón Jofré'}
                  </a>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
            <Typography variant={"h5"} style={{ color: "#F0F3BD" }}>Copyrigth 2019 It Academy</Typography>
          </Grid>
        </Grid>
      </footer>
    );
  }
} 