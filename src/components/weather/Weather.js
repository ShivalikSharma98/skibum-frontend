import React, { useEffect, useState } from 'react';
import Header from '../headers/header/Header';
import Card from 'react-bootstrap/Card';

function Weather() {
	const [weatherData, setWeatherData] = useState(null);
	const key = process.env.REACT_APP_API_KEY;

	async function getWeatherData(locations) {
		const data = [];
		locations.forEach(async (element) => {
			const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${element}&aqi=no`;
			await fetch(url)
				.then((res) => res.json())
				.then((res) => {
					data.push(res);
				})
				.catch((error) => {
					console.log(error);
				});
		});
		setWeatherData(data);
	}

	useEffect(() => {
		getWeatherData([
			'Aspen, CO',
			'Breckenridge, CO',
			'Copper Mountain, CO',
			'Winter Park, CO',
			'Vail, CO',
		]);
	}, []);

	if (!weatherData) {
		return (
			<>
				<Header />
				<div className='posts'>
					<h3 className='noposts'>There is currently no Weather data</h3>
				</div>
			</>
		);
	}

	return (
		<>
			<Header />
			<div className='posts'>
					<h1>Hello</h1>
			</div>
		</>
	);
}

export default Weather;
