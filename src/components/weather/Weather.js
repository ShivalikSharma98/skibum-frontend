import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../headers/header/Header';

function Weather() {
	const [weatherData, setWeatherData] = useState(null);
	const key = process.env.REACT_APP_API_KEY;

	function getWeatherData(location) {
		const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=no`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setWeatherData({ ...weatherData, res });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	useEffect(() => {
		getWeatherData('Aspen, CO');
		getWeatherData('Breckenridge, CO');
	}, [console.log(weatherData)]);

	return (
		<>
			<Header />
			<div className='posts'>
				<h1>This is the Weather page</h1>
			</div>
		</>
	);
}

export default Weather;
