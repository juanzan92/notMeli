import React, { Component } from 'react';
// Material-UI components
import Grid from '@material-ui/core/Grid';
import Spinner from '../utils/Spinner/Spinner';
import Carousel from '../components/Carousel';
import withLayout from '../libs/withLayout/withLayout';

class LandingPage extends Component {
    pictures = [
        {
            id:"",
            url:"https://http2.mlstatic.com/optimize/o:f_webp/resources/exhibitors/MLA-desarrollos-inmobiliarios/a6de8950-7b21-11e9-961d-8b5b8c97e6d1-home-slider_desktop.jpg"
        },
        {
            id:"",
            url:"https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-641c7974-32b8-46c8-986e-1624a4ddb4a6.jpg"
        },
        {
            id:"",
            url:"https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-d28ba5b6-2e23-4cdc-971e-96d56de4f416.jpg"
        }

    ]
    render() {
        return (
            <Grid
                container
                item
                alignItems="center"
                xs={12}>
                <Carousel pictures={this.pictures}/>
                <div style={{ padding: "15%" }}>
                </div>
            </Grid>

        );
    }
}
export default withLayout(LandingPage);


