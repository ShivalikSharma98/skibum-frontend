import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Resorts from './components/resorts/Resorts';
import Weather from './components/weather/Weather';
import Gallery from './components/gallery/Gallery';
import Posts from './components/forum/posts/Posts';
import Login from './components/forum/login/Login';
import SignUp from './components/forum/signup/SignUp';
import User from './components/forum/user/User';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/resorts' element={<Resorts />} />
				<Route path='/weather' element={<Weather />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/posts/login' element={<Login />} />
				<Route path='/posts/signup' element={<SignUp />} />
				<Route path='/posts/:username' element={<User />} />
			</Routes>
		</div>
	);
}

export default App;
