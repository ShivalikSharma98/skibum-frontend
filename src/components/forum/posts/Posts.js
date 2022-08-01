import React, { useEffect, useState } from 'react';
import './Posts.css';
import Header from '../../headers/header/Header';
import { config } from '../../../Constants';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

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
		<>
			<Header />
			<div className='posts'>
				<LinkContainer to='/posts/login'>
					<button className='button-49'>Login</button>
				</LinkContainer>
				<div className='posts-container'>
					<h1>Forum</h1>
					<p>Please take all necessary Avalanche precautions before visiting these locations. </p>
					{posts.map((post) => (
						<Card className='forum-cards' key={post.id}>
							<Card.Header className='forum-cards-header'>
								<h4>{post.title}</h4>
								<h5>By: {post.username}</h5>
							</Card.Header>
							<Card.Body>
								<p>Difficulty: {post.difficulty}</p>
								<p>Start Location: {post.start_location}</p>
								<p>End Location: {post.end_location}</p>
								<p>Directions: {post.directions}</p>
								<p>{post.description}</p>
							</Card.Body>
							<Card.Img src={post.image_url} />
						</Card>
					))}
				</div>
			</div>
		</>
	);
}

export default Posts;
