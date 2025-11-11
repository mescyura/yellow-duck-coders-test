import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Drivers from './components/drivers/Drivers';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Drivers />
			</main>
		</>
	);
}

export default App;
