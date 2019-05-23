import React, { Component } from 'react';
// Material-UI components
import Grid from '@material-ui/core/Grid';
import Spinner from '../utils/Spinner/Spinner';
import Carousel from '../components/Carousel';
import withLayout from '../libs/withLayout/withLayout';

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
export default withLayout(LandingPage);


