import bgImage from '../../assets/bg.png';
import carImage from '../../assets/car.png';
import {
	PlanetIcon,
	PhoneIcon,
	FireIcon,
	PeopleIcon,
	BusIcon,
	LocationPinIcon,
	CityIcon,
} from '../../ui/svg';

function Hero() {
	return (
		<section
			id='hero'
			className='relative bg-[#F8F7FF] pt-32 pb-20 overflow-hidden'
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'left',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='container mx-auto px-4 relative z-10'>
				<div className='mb-10'>
					<nav className='flex items-center gap-2 text-sm'>
						<a
							href='./'
							className='text-gray-400 hover:text-gray-600 transition-colors'
						>
							Головна
						</a>
						<span className='text-gray-400'>/</span>
						<a
							href='./#transporter-profile'
							className='text-gray-400 hover:text-gray-600 transition-colors'
						>
							Профіль перевізника
						</a>
						<span className='text-gray-400'>/</span>
						<span className='text-[#25324B] font-medium'>Stripe</span>
					</nav>
				</div>
				<div className='flex flex-col md:flex-row items-center gap-6'>
					{/* Left side - Large Truck Icon */}
					<div className='shrink-0 mr-auto'>
						<img
							src={carImage}
							alt='car'
							className='w-[170px] h-[170px] object-cover'
						/>
					</div>

					<div className='flex-1 w-full'>
						<div className='flex items-center gap-3 mb-3'>
							<h1 className='text-4xl lg:text-5xl font-bold text-[#25324B]'>
								Stripe
							</h1>
							<div className='text-[#4640DE] py-1 px-3 border border-[#4640DE]'>
								43 Поїздок
							</div>
						</div>

						<div className='flex flex-col md:flex-row md:items-center gap-4 flex-wrap mb-8'>
							<div className='flex items-center gap-1'>
								<PlanetIcon />
								<span className='text-[#4640DE] font-semibold'>
									https://stripe.com
								</span>
							</div>
							<div className='flex items-center gap-1'>
								<PhoneIcon width={20} />
								<span className='text-[#4640DE] font-semibold'>
									+38 (073) 555 55 55
								</span>
							</div>
						</div>

						<div className='flex flex-col md:flex-row md:items-center gap-4 flex-wrap'>
							<div className='flex items-center gap-3 shrink-0'>
								<div className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm'>
									<FireIcon width={20} height={20} color='#26A4FF' />
								</div>
								<div className='flex flex-col '>
									<span className='text-[#515B6F]'>На ринку від:</span>
									<span className='text-[#25324B] font-semibold'>
										Травень 31, 2011
									</span>
								</div>
							</div>

							<div className='flex items-center gap-3 shrink-0'>
								<div className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm'>
									<PeopleIcon width={20} height={20} color='#26A4FF' />
								</div>

								<div className='flex flex-col '>
									<span className='text-[#515B6F]'>Перевезених пасажирів</span>
									<span className='text-[#25324B] font-semibold'>4000+</span>
								</div>
							</div>

							<div className='flex items-center gap-3 shrink-0'>
								<div className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm'>
									<BusIcon width={20} height={20} color='#26A4FF' />
								</div>
								<div className='flex flex-col '>
									<span className='text-[#515B6F]'>Автопарк 8 бусів</span>
									<span className='text-[#25324B] font-semibold'>8 бусів</span>
								</div>
							</div>

							<div className='flex items-center gap-3 shrink-0'>
								<div className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm'>
									<LocationPinIcon width={20} height={20} color='#26A4FF' />
								</div>

								<div className='flex flex-col '>
									<span className='text-[#515B6F]'>Обслуговуємо країн</span>
									<span className='text-[#25324B] font-semibold'>8 країн</span>
								</div>
							</div>

							<div className='flex items-center gap-3 shrink-0'>
								<div className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm'>
									<CityIcon width={20} height={20} color='#26A4FF' />
								</div>
								<div className='flex flex-col '>
									<span className='text-[#515B6F]'>Місто</span>
									<span className='text-[#25324B] font-semibold'>Львів</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
