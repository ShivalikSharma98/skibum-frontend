import React, { useEffect, useState } from 'react';
import './Posts.css';
import Header from '../../headers/header/Header';
import { config } from '../../../Constants';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Posts() {
	const [posts, setPosts] = useState([]);

	function getPosts() {
		const url = `${config.API_URL}/api/posts`;
		axios
			.get(url)
			.then((res) => {
				setPosts(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	useEffect(() => {
		getPosts();
	}, []);

	if (!posts.length) {
		return (
			<div className='posts'>	
				<Header />
				<h3>There are currently no posts on this forum</h3>
			</div>
		);
	}

	return (
		<div className='posts'>
			<Header />
			<div className='posts-container'>
				{posts.map((post) => (
					<Card className='forum-cards' key={post.id}>
						<Card.Header className='forum-cards-header'>
							<h3>{post.title}</h3>
						</Card.Header>
						<Card.Body>
							<Card.Title>
								<h4>By: {post.username}</h4>
							</Card.Title>
							<h6>Difficulty: {post.difficulty}</h6>
							<h6>Start Location: {post.start_location}</h6>
							<h6>End Location: {post.end_location}</h6>
							<p>Directions: {post.directions}</p>
							<p>{post.description}</p>
						</Card.Body>
						<Card.Img src={post.image_url} />
					</Card>
				))}
			</div>
		</div>
	);
}

export default Posts;
