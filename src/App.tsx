import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Drivers from './components/drivers/Drivers';
import Service from './components/service/Service';
import Reviews from './components/reviews/Reviews';
import Footer from './components/footer/Fotter';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Drivers />
				<Service />
				<Reviews />
			</main>
			<Footer />
		</>
	);
}

export default App;
