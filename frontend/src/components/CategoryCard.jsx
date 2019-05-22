import React, { Component } from 'react';
// Material-UI components
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

class CategoryCard extends Component {
    render() {
        return (
            <Grid item xs={12}>
                <Link to={`/${this.props.idCategoria}`}>
                    <ListItem button >
                        <ListItemText primary={this.props.nombreCategoria} />
                    </ListItem>
                </Link>
                <Divider />
            </Grid>
        );
    }
}
export default CategoryCard;


