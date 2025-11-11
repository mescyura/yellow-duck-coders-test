import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ava from '../../assets/ava.png';
import { InstagramIcon, LinkedinIcon } from '../../ui/svg';

function Drivers() {
	const drivers = [
		{
			name: 'Олександр',
			experience: '5 років',
			avatar: ava,
		},
		{
			name: 'Володимир',
			experience: '7 років',
			avatar: ava,
		},
		{
			name: 'Ірина',
			experience: '1 рік',
			avatar: ava,
		},
		{
			name: 'Михайло',
			experience: '1 рік',
			avatar: ava,
		},
		{
			name: 'Юлія',
			experience: '2 роки',
			avatar: ava,
		},
	];

	return (
		<section className='bg-white py-12'>
			<div className='container mx-auto px-4'>
				{/* Header */}
				<div className='flex items-center justify-between mb-8'>
					<h2 className='lato text-3xl lg:text-4xl font-bold text-[#25324B]'>
						Наші водії
					</h2>
					<a
						href='#'
						className='text-[#4640DE] font-medium hover:opacity-80 transition-opacity'
					>
						Усі водії (7)
					</a>
				</div>

				<Swiper
					modules={[Pagination]}
					spaceBetween={24}
					slidesPerView='auto'
					navigation
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
							slidesPerView: 3,
							spaceBetween: 24,
						},
						1280: {
							slidesPerView: 5,
							spaceBetween: 24,
						},
						// 1536: {
						// 	slidesPerView: 5,
						// 	spaceBetween: 24,
						// },
					}}
					className='drivers-swiper'
				>
					{drivers.map((driver, index) => (
						<SwiperSlide key={index} style={{ width: '240px' }}>
							<div className='bg-white border border-[#D6DDEB] p-5 h-full'>
								{/* Avatar */}
								<div className='flex justify-center mb-4'>
									<div className='w-20 h-20 rounded-full overflow-hidden'>
										<img
											src={driver.avatar}
											alt={driver.name || 'Driver'}
											className='w-full h-full object-cover'
										/>
									</div>
								</div>

								{/* Name */}
								{driver.name && (
									<h3 className='text-lg font-bold text-[#25324B] mb-2 text-center'>
										{driver.name}
									</h3>
								)}

								{/* Experience */}
								<p className='text-[#515B6F] mb-4 text-center'>
									Досвід роботи: {driver.experience}
								</p>

								{/* Social Icons */}
								<div className='flex justify-center gap-3'>
									<a
										href='#'
										className='text-[#515B6F] hover:text-[#4640DE] transition-colors'
										aria-label='Instagram'
									>
										<InstagramIcon />
									</a>
									<a
										href='#'
										className='text-[#515B6F] hover:text-[#4640DE] transition-colors'
										aria-label='LinkedIn'
									>
										<LinkedinIcon />
									</a>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Drivers;
