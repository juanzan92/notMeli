import React, { Component } from 'react';

//components
import SingIn from '../components/SingIn';
//material-ui components
import Grid from '@material-ui/core/Grid';
import withLayout from '../libs/withLayout/withLayout';

class LogInPage extends Component {
    render() {
        return (
            <Grid
            >

                <SingIn/>
            </Grid>

        );
    }
}
export default withLayout(LogInPage);