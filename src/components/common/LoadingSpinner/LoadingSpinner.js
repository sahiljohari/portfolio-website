import React from 'react';
import { BeatLoader } from 'react-spinners';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ isLoading }) => {
	return (
		<div className={styles.root}>
			<BeatLoader size={12} margin={3} loading={isLoading} />
		</div>
	);
};

export default LoadingSpinner;
