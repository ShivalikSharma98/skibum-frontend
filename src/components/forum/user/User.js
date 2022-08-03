import React from 'react';
import './User.css';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from '../../../Constants';
import Header from '../../headers/header/Header';

function User() {
	const { username } = useParams();
	const [posts, setPosts] = useState([]);

	function getPosts() {
		const url = `${config.API_URL}/api/user/${username}`;
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

	function handleDelete(id) {
		const url = `${config.API_URL}/api/user/${username}/post/${id}`;
		axios
			.delete(url)
			.then(() => getPosts())
			.catch((error) => {
				console.log(error);
			});
	}

	if (!posts.length) {
		return (
			<>
				<Header />
				<div className='posts'>
					<h3 className='noposts'>
						Hi {username}, you currently have no posts.
					</h3>
					<button>Add Post</button>
				</div>
			</>
		);
	}
	return (
		<>
			<Header />
			<div className='posts'>
				<div className='posts-container'>
					<h1>My Posts</h1>
					<button>Add Post</button>
					{posts.map((post) => (
						<Card className='forum-cards' key={post.id}>
							<Card.Header className='user-cards-header'>
								<h4>{post.title}</h4>
								<div>
									<button className='div-buttons'>Edit</button>
									<button
										className='div-buttons'
										onClick={() => handleDelete(post.id)}>
										Delete
									</button>
								</div>
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

export default User;
