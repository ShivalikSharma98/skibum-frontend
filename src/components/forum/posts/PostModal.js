import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { config } from '../../../Constants';
import axios from 'axios';

function PostModal({
	show,
	setShow,
	handleClose,
	handleShow,
	setPosts,
	getPosts,
}) {
	const initialPost = {
		username: '',
		title: '',
		difficulty: '',
		start_location: '',
		directions: '',
		description: '',
		image_url: '',
	};
	const [post, setPost] = useState(initialPost);
	function handleChange(event) {
		event.preventDefault();
		setPost({ ...post, [event.target.id]: event.target.value });
	}
	function handleSubmit(event) {
		event.preventDefault();
		const newPost = { ...post };
		const url = `${config.API_URL}/api/user/post`;
		axios
			.post(url, newPost)
			.then((res) => {
				setPost(initialPost);
                getPosts()
				handleClose();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create Post</Modal.Title>
				</Modal.Header>
				<Form onSubmit={handleSubmit}>
					<Modal.Body>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='username'>Name:</Form.Label>
							<Form.Control
								id='username'
								type='text'
								placeholder='Your Name'
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='title'>Title:</Form.Label>
							<Form.Control
								id='title'
								type='text'
								placeholder='Post Title'
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='difficulty'>Difficulty:</Form.Label>
							<Form.Select
								id='difficulty'
								type='select'
								aria-label='Default select example'
								onChange={handleChange}
								required>
								<option value='1'>Easy</option>
								<option value='2'>Intermediate</option>
								<option value='3'>Hard</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='start_location'>Start Location:</Form.Label>
							<Form.Control
								id='start_location'
								type='text'
								placeholder='Longitude Latitude'
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='end_location'>End Location:</Form.Label>
							<Form.Control
								id='end_location'
								type='text'
								placeholder='Longitude Latitude'
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='directions'>Directions:</Form.Label>
							<Form.Control
								id='directions'
								as='textarea'
								row={3}
								placeholder='Directions'
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='description'>Description:</Form.Label>
							<Form.Control
								id='description'
								as='textarea'
								row={3}
								placeholder='Description'
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='image_url'>Image Url:</Form.Label>
							<Form.Control
								id='image_url'
								type='text'
								placeholder='JPEG'
								onChange={handleChange}
								required
							/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button type='button' variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button type='submit' variant='primary'>
							Create
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
}

export default PostModal;
