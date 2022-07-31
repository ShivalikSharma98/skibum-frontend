import React, { useEffect, useState } from 'react';
import './Posts.css'
import Header from '../../headers/header/Header';
import { config } from '../../../Constants';
import axios from 'axios';

function Posts() {
	const [posts, setPosts] = useState(null);

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

	return (
		<div className='posts'>
			<Header />
			<div className='posts-container'>
				
			</div>
		</div>
	);
}

export default Posts;
