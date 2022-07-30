import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../headers/header/Header';

function Home() {
	return (
		<div className='home'>
			<Header />
			<div className='home-items-container'>
				<h1 className='glitch'>Ski Bum</h1>
				<div className='resorts-item'>
					<Link to='/resorts'>
						<button className='button-49'>Resorts</button>
					</Link>
				</div>
				<div className='weather-item'>
					<Link to='/weather'>
						<button className='button-49'>Weather</button>
					</Link>
				</div>
				<div className='gallery-item'>
					<Link to='/gallery'>
						<button className='button-49'>Gallery</button>
					</Link>
				</div>
				<div className='forum-item'>
					<Link to='/posts'>
						<button className='button-49'>Forum</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
