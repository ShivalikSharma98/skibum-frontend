import React from 'react';
import Header from '../headers/header/Header';
import { resortData } from '../../ResortsData';
import Card from 'react-bootstrap/Card';

function Resorts() {
	return (
		<>
			<Header />
			<div className='posts'>
				<div className='posts-container'>
					<h1>Popular Resorts in Colorado</h1>
					{resortData.map((data) => (
						<Card className='forum-cards' key={data.id}>
							<Card.Header className='forum-cards-header'>
								<h4>{data.title}</h4>
							</Card.Header>
							<Card.Body>
								<p>Season Pass: {data.pass}</p>
								<p>Total Area: {data.area}</p>
								<p>Elevation: {data.elevation}</p>
								<p>{data.description}</p>
							</Card.Body>
							<Card.Img src={data.image_url} />
						</Card>
					))}
				</div>
			</div>
		</>
	);
}

export default Resorts;
