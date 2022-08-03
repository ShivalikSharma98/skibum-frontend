import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Resorts from './components/resorts/Resorts';
import Weather from './components/weather/Weather';
import About from './components/about/About';
import Posts from './components/forum/posts/Posts';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/resorts' element={<Resorts />} />
				<Route path='/about' element={<About />} />
				<Route path='/posts' element={<Posts />} />
			</Routes>
		</div>
	);
}

export default App;
