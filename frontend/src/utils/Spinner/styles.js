const styles = theme => ({
	loading: {
		display: 'flex',
		justifyContent: 'center',
	},
	div: {
		width: '1rem',
		height: '1rem',
		margin: '2rem 0.3 rem',
		background: theme.palette.secondary.main,
		borderRadius: '50%',
		animation: '0.5s bounce infinite alternate',
		'&:nth-child(2)': {
			animationDelay: '0.1s',
		},
		'&:nth-child(3)': {
			animationDelay: '0.3s',
		},
	},
	'@keyframes bounce': {
		to: {
			opacity: 0.3,
			transform: 'translate3d(0, -1rem, 0)',
		},
	},
});

export default styles;
