import React, { useEffect, useState } from 'react';
import './Posts.css';
import Header from '../../headers/header/Header';
import { config } from '../../../Constants';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import PostModal from './PostModal';

function Posts() {
	const [posts, setPosts] = useState([]);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
			<>
				<Header />
				<div className='posts'>
					<h3 className='noposts'>
						There are currently no posts on this forum
					</h3>
					<button onClick={handleShow}>Add Post</button>
				</div>
			</>
		);
	}

	return (
		<>
			<Header />
			<div className='posts'>
				<div className='posts-container'>
					<h1>Forum</h1>
					<button onClick={handleShow}>Add Post</button>
					<p>
						Please take all necessary Avalanche precautions before visiting
						these locations.
					</p>
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
			<PostModal
				show={show}
				setShow={setShow}
				handleClose={handleClose}
				handleShow={handleShow}
				setPosts={setPosts}
				getPosts={getPosts}
			/>
		</>
	);
}

export default Posts;
