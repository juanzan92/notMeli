import React, { Component } from 'react';
import styles from './styles';
// Material-UI
import { withStyles } from '@material-ui/core/styles';

class Spinner extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.loading} >
				<div className={classes.div} />
				<div className={classes.div} />
				<div className={classes.div} />
			</div>
		);
	}
}

export default withStyles(styles)(Spinner);
