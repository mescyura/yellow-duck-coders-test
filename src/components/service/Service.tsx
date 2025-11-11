import {
	FanIcon,
	WifiIcon,
	TVIcon,
	WCIcon,
	WeekendIcon,
	PetFriendlyIcon,
} from '../../ui/servicesSvg';

function Service() {
	const services = [
		{
			icon: FanIcon,
			label: 'Кондиціонер',
		},
		{
			icon: WifiIcon,
			label: 'Wi-Fi',
		},
		{
			icon: TVIcon,
			label: 'TV',
		},
		{
			icon: WCIcon,
			label: 'Туалет',
		},
		{
			icon: WeekendIcon,
			label: 'Зручні сидіння',
		},
		{
			icon: PetFriendlyIcon,
			label: 'Перевозимо тварин',
		},
	];

	return (
		<section className='bg-white py-12'>
			<div className='container mx-auto px-4'>
				<div className='mb-8'>
					<h2 className='lato text-3xl lg:text-4xl font-bold text-[#25324B] mb-2'>
						Сервіс
					</h2>
					<p className='text-[#515B6F] text-lg'>
						Найкращі умови для вашого комфорту
					</p>
				</div>
				<div className='grid gap-4 grid-cols-1 md:grid-cols-[repeat(3,fit-content(100%))] lg:grid-cols-[repeat(6,fit-content(100%))]'>
					{services.map((service, index) => {
						const IconComponent = service.icon;
						return (
							<div
								key={index}
								className='w-fit flex items-center gap-3 text-center'
							>
								<IconComponent className='shrink-0' />
								<span className='text-[#25324B] font-medium text-2xl text-left'>
									{service.label}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Service;
