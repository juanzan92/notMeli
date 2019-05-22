import React, { Component } from 'react';
// Material-UI components
import Grid from '@material-ui/core/Grid';
import withAppBar from '../libs/withAppBar/withAppBar';
import Spinner from '../utils/Spinner/Spinner';

class LandingPage extends Component {
    render() {
        return (
            <Grid item xs={12}>
              <Spinner />
            </Grid>
        );
    }
}
export default withAppBar(LandingPage);


