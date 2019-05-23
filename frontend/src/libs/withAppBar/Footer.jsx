import React from 'react';
// Material-UI components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class Footer extends React.Component {

  render() {
    return (
      <footer style={{ backgroundColor: "#00A896" }}>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-end"
          >
            <Grid
              item
              id="concacto"
            >
              <Card >
                <CardContent>
                  <Typography variant="h5" component="h3">
                    Contacto
        </Typography>

                  <a >
                    juan.beresiarte@mercadolibre.com
          <br />
                    gaston.jofre@mercadolibre.com
        </a>
                </CardContent>
              </Card>

            </Grid>
            <Grid
              item
              id="ayuda"
            >
              <Card >
                <CardContent>
                  <Typography variant="h5" component="h3">
                    Ayuda
        </Typography>

                  <a >
                    juan.beresiarte@mercadolibre.com
          <br />
                    gaston.jofre@mercadolibre.com
        </a>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              id="redes"
            >
              <Card >
                <CardContent>
                  <Typography variant="h5" component="h3">
                    Redes
        </Typography>

                  <a >
                    juan.beresiarte@mercadolibre.com
          <br />
                    gaston.jofre@mercadolibre.com
        </a>
                </CardContent>
              </Card>
            </Grid>

          </Grid>

          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Typography variant={"h5"} style={{ color: "#F0F3BD" }}>Copyrigth 2019 It Academy</Typography>
          </Grid>

        </Grid>
      </footer>
    );
  }
}