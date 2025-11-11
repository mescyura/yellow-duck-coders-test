import car1 from '../../assets/car1.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';
import {
	TwitterIcon,
	FacebookIcon,
	ChevronDownIcon,
	PlusIcon,
} from '../../ui/svg';

import Calendar from './Calendar';
import 'flag-icons/css/flag-icons.min.css';

function About() {
	const countries = [
		{ name: 'Франція', code: 'fr' },
		{ name: 'Італія', code: 'it' },
		{ name: 'Німеччина', code: 'de' },
		{ name: 'Нідерланди', code: 'nl' },
		{ name: 'Іспанія', code: 'es' },
	];

	return (
		<section className='bg-white py-16'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row gap-8'>
					{/* Left Column - Main Content */}
					<div className='flex-1 max-w-[750px]'>
						{/* Опис перевізника */}
						<div className='mb-10'>
							<h2 className='lato text-3xl leading-tight font-bold text-[#25324B] mb-4'>
								Опис перевізника
							</h2>
							<p className='text-[#515B6F] leading-relaxed text-pretty'>
								Stripe is a software platform for starting and running internet
								businesses. Millions of businesses rely on Stripe’s software
								tools to accept payments, expand globally, and manage their
								businesses online. Stripe has been at the forefront of expanding
								internet commerce, powering new business models, and supporting
								the latest platforms, from marketplaces to mobile commerce
								sites. We believe that growing the GDP of the internet is a
								problem rooted in code and design, not finance. Stripe is built
								for developers, makers, and creators. We work on solving the
								hard technical problems necessary to build global economic
								infrastructure—from designing highly reliable systems to
								developing advanced machine learning algorithms to prevent
								fraud.
							</p>
						</div>

						{/* Соціальні мережі */}
						<div className='mb-10'>
							<h2 className='lato text-3xl leading-tight font-bold text-[#25324B] mb-4'>
								Ми у соц. мережах
							</h2>
							<div className='flex flex-col sm:flex-row gap-4'>
								<a
									href='#'
									target='_blank'
									className='flex items-center gap-3 text-[#4640DE] border border-[#4640DE] p-2'
								>
									<TwitterIcon />
									<span className='font-medium'>twitter.com/stripe</span>
								</a>
								<a
									href='#'
									target='_blank'
									className='flex items-center gap-3 text-[#4640DE] border border-[#4640DE] p-2'
								>
									<FacebookIcon />
									<span className='font-medium'>facebook.com/StripeHQ</span>
								</a>
							</div>
						</div>

						{/* Галерея зображень */}
						<div className='space-y-4'>
							<img
								src={car1}
								alt='Mercedes-Benz Sprinter'
								className='w-full h-auto object-cover'
							/>
							<img
								src={car2}
								alt='Mercedes-Benz Sprinter'
								className='w-full h-auto object-cover'
							/>
							<img
								src={car3}
								alt='Mercedes-Benz Sprinter'
								className='w-full h-auto object-cover'
							/>
						</div>
					</div>

					{/* Right Column - Sidebar */}
					<div className='shrink-0'>
						{/* Обслуговуємо країни */}
						<div className='mb-8'>
							<h2 className='lato text-3xl leading-tight font-bold text-[#25324B] mb-6'>
								Обслуговуємо країни
							</h2>
							<div className='space-y-3 mb-4'>
								{countries.map((country, index) => (
									<div
										key={index}
										className='flex items-center gap-4 text-[#25324B]'
									>
										<span className={`fi fi-${country.code}`}></span>
										<span>{country.name}</span>
									</div>
								))}
							</div>
							<a
								href='#'
								className='flex items-center gap-2 text-[#4640DE] hover:opacity-80 transition-opacity'
							>
								<span>Усі країни</span>
								<ChevronDownIcon width={16} height={16} color='#4640DE' />
							</a>
						</div>

						<div>
							<h2 className='lato text-3xl leading-tight font-bold text-[#25324B] mb-6'>
								Календар поїздок
							</h2>
							<div className='p-6 border border-[#E0E0E0] shadow-md '>
								<button className='w-full flex items-center justify-center gap-2 border border-[#4640DE] text-[#4640DE] px-4 py-3 mb-6 hover:bg-[#4640DE] hover:text-white transition-colors'>
									<PlusIcon width={20} height={20} color='currentColor' />
									<span className='font-medium'>Купити квиток</span>
								</button>
								<Calendar />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
