import React, { Component } from 'react';
// Material-UI components
import Grid from '@material-ui/core/Grid';
import withAppBar from '../libs/withAppBar/withAppBar';
import Spinner from '../utils/Spinner/Spinner';
import Carousel from '../components/Carousel';

class LandingPage extends Component {
    render() {
        return (
            <Grid
                container
                item
                alignItems="center"
                xs={12}>
                <Carousel />
                <div style={{ padding: "15%" }}>
                    
                </div>
            </Grid>

        );
    }
}
export default withAppBar(LandingPage);


