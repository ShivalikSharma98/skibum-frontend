const prod = {
	API_URL: 'https://skibum-backend.herokuapp.com',
};

const dev = {
	API_URL: 'http://localhost:9000',
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
