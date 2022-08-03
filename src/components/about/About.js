import React from 'react';
import Header from '../headers/header/Header';
import { Card } from 'react-bootstrap';

function About() {
	return (
		<>
			<Header />
			<div className='posts'>
				<div className='login-form'>
					<Card className='forum-cards'>
						<Card.Header className='forum-cards-header'>
							<h4>About</h4>
						</Card.Header>
						<Card.Body>
							Ski Bum is a full stack web application designed for Skiers and
							Snowboarders in Colorado. Users can visit the site to find useful
							information on resorts and even access information provided by
							other users on secret backcountry locations.
						</Card.Body>
						<Card.Img
							style={{ 'max-width': '30rem' }}
							src='https://repository-images.githubusercontent.com/248812720/56902700-c5bd-11ea-813f-ed8631377258'
						/>
					</Card>
				</div>
			</div>
		</>
	);
}

export default About;
