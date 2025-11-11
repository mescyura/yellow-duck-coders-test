import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ava from '../../assets/ava.png';
import { StarIcon } from '../../ui/svg';

function Reviews() {
	const reviews = [
		{
			name: 'Ben Yardley',
			route: 'Київ - Кишинів',
			date: '1 May 2023',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
			rating: 5,
		},
		{
			name: 'Craig Martin',
			route: 'Львів - Париж',
			date: '1 May 2023',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
			rating: 5,
		},
		{
			name: 'John Doe',
			route: 'Одеса - Варшава',
			date: '15 April 2023',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
			rating: 5,
		},
		{
			name: 'Jane Smith',
			route: 'Харків - Берлін',
			date: '20 March 2023',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
			rating: 5,
		},
	];

	return (
		<section className='bg-[#F8F7FF] py-16 relative overflow-hidden'>
			{/* Decorative elements */}
			<div className='absolute top-0 right-0 w-64 h-64 bg-purple-100 opacity-30 rounded-full blur-3xl'></div>
			<div className='absolute bottom-0 right-0 w-64 h-64 bg-purple-100 opacity-30 rounded-full blur-3xl'></div>

			<div className='container mx-auto px-4 relative z-10'>
				<div className='flex flex-col lg:flex-row gap-12 justify-between'>
					{/* Left Section - Header */}
					<div className='lg:w-[35%]'>
						<h2 className='lato text-4xl lg:text-5xl font-bold mb-4'>
							<span className='text-[#25324B]'>Що</span>{' '}
							<span className='text-[#4640DE]'>кажуть люди?</span>
						</h2>
						<p className='text-[#515B6F] mb-8 leading-relaxed'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris.
						</p>
						<button className='bg-[#4640DE] text-white px-8 py-4 rounded-md hover:opacity-90 transition-opacity font-medium'>
							Залишити відгук
						</button>
					</div>

					{/* Right Section - Reviews Swiper */}
					<div className='lg:w-[60%] w-full'>
						<Swiper
							modules={[Pagination]}
							spaceBetween={24}
							slidesPerView={1}
							loop
							pagination={{ clickable: true }}
							breakpoints={{
								320: {
									slidesPerView: 1,
									spaceBetween: 16,
								},
								640: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								1024: {
									slidesPerView: 2,
									spaceBetween: 24,
								},
							}}
							className='reviews-swiper'
						>
							{reviews.map((review, index) => (
								<SwiperSlide key={index} className='w-auto !h-auto'>
									<div className='flex flex-col bg-white rounded-lg shadow-sm px-5 pb-5 pt-8 min-w-[280px] h-full'>
										{/* Header */}
										<div className='flex items-start gap-4 mb-4'>
											<img
												src={ava}
												alt={review.name}
												className='w-12 h-12 rounded-full object-cover shrink-0'
											/>
											<div className='flex-1'>
												<h3 className='font-bold text-[#25324B] mb-1'>
													{review.name}
												</h3>
												<p className='text-sm text-[#515B6F] mb-1'>
													{review.route}
												</p>
												<p className='text-xs text-[#515B6F]'>{review.date}</p>
											</div>
										</div>

										{/* Review Text */}
										<p className='text-[#515B6F] mb-4 leading-relaxed h-full'>
											{review.text}
										</p>

										{/* Rating */}
										<div className='flex gap-1'>
											{Array.from({ length: review.rating }).map((_, i) => (
												<StarIcon key={i} />
											))}
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Reviews;
