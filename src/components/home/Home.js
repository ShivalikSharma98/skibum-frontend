import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../headers/header/Header';

function Home() {
	return (
		<div className='home'>
			<Header />
			<div className='home-items-container'>
				<h1 className='title'>Ski Bum</h1>
				<div className='resorts-item'>
					<Link to='/resorts'>
						<button>Resorts</button>
					</Link>
				</div>
				<div className='weather-item'>
					<Link to='/weather'>
						<button>Weather</button>
					</Link>
				</div>
				<div className='gallery-item'>
					<Link to='/gallery'>
						<button>Gallery</button>
					</Link>
				</div>
				<div className='forum-item'>
					<Link to='/posts'>
						<button>Backcountry Forum</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
