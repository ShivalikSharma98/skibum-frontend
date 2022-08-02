import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

function PostModal({ show, setShow, handleClose, handleShow }) {

    
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create Post</Modal.Title>
				</Modal.Header>
				<Form>
					<Modal.Body>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='title'>Name:</Form.Label>
							<Form.Control
								id='username'
								type='text'
								placeholder='Your Name'
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='title'>Title:</Form.Label>
							<Form.Control
								id='title'
								type='text'
								placeholder='Post Title'
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='difficulty'>Difficulty:</Form.Label>
							<Form.Select
								id='difficulty'
								type='select'
								aria-label='Default select example'
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
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='end_location'>End Location:</Form.Label>
							<Form.Control
								id='end_location'
								type='text'
								placeholder='Longitude Latitude'
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
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label htmlFor='image_url'>Image Url:</Form.Label>
							<Form.Control
								id='image_url'
								type='text'
								placeholder='JPEG'
								required
							/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button type='button' variant='secondary'>
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
