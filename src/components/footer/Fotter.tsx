import footerLogo from '../../assets/fotter_logo.svg';
import {
	PhoneIcon,
	SmsIcon,
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
	DribbbleIcon,
} from '../../ui/svg';
import { useState } from 'react';

function Footer() {
	const [email, setEmail] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Email submitted:', email);
		setEmail('');
	};

	return (
		<footer className='bg-[#202430] text-white py-12'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row justify-between gap-8 mb-8'>
					<div className='lg:col-span-1'>
						<a href='./' className='mb-4'>
							<img src={footerLogo} alt='Sprinters' className='w-40 mb-10' />
						</a>
						<p className='text-gray-300 mb-1 max-w-[340px]'>
							Платформа пошуку перевізників та бронювання поїздок
						</p>
					</div>
					<div>
						<h3 className='font-bold text-lg mb-4'>Клієнтам</h3>
						<ul className='space-y-2'>
							<li>
								<a
									href='./'
									className='text-gray-300 hover:text-white transition-colors'
								>
									Головна
								</a>
							</li>
							<li>
								<a
									href='./#about'
									className='text-gray-300 hover:text-white transition-colors'
								>
									Про нас
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-300 hover:text-white transition-colors'
								>
									Ціни
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-300 hover:text-white transition-colors'
								>
									Маршрути
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-300 hover:text-white transition-colors'
								>
									Політика приватності
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='font-bold text-lg mb-4'>Перевізникам</h3>
						<ul className='space-y-2'>
							<li>
								<a
									href='#'
									className='text-gray-300 hover:text-white transition-colors'
								>
									Help Docs
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-300 hover:text-white transition-colors'
								>
									Особистий кабінет
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-300 hover:text-white transition-colors'
								>
									Оновлення
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-300 hover:text-white transition-colors'
								>
									Контакти
								</a>
							</li>
						</ul>
					</div>
					<div className='shrink-0'>
						<h3 className='font-bold text-lg mb-4'>Зворотній зв'язок</h3>
						<p className='text-sm text-gray-300 mb-4'>
							Маєш пропозиції щодо покращення сервісу - пиши нам!
						</p>
						<form onSubmit={handleSubmit} className='mb-6'>
							<div className='flex gap-2'>
								<input
									type='email'
									value={email}
									onChange={e => setEmail(e.target.value)}
									placeholder='Email Address'
									className='flex-1 px-4 py-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4640DE]'
									required
								/>
								<button
									type='submit'
									className='bg-[#4640DE] text-white px-6 py-2 hover:opacity-90 transition-opacity font-medium whitespace-nowrap'
								>
									Надіслати
								</button>
							</div>
						</form>
						<div className='space-y-3 text-[#A8ADB7]'>
							<div className='flex items-center gap-3 text-sm'>
								<PhoneIcon width={24} height={24} color='#26A4FF' />
								<span className='tracking-normal'>+ 38 (073) 555 55 55</span>
							</div>
							<div className='flex items-center gap-3 text-sm'>
								<SmsIcon width={24} height={24} color='#26A4FF' />
								<span className='tracking-normal'>gmail@gmail.com</span>
							</div>
						</div>
					</div>
				</div>
				<div className='border-t border-gray-600 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						<p className='text-white/50 text-sm'>
							{new Date().getFullYear()} @ Sprinters. All rights reserved.
						</p>
						<div className='flex gap-4'>
							<a
								href='#'
								className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#4640DE] transition-colors'
								aria-label='Facebook'
							>
								<FacebookIcon height={13} width={13} color='white' />
							</a>
							<a
								href='#'
								className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#4640DE] transition-colors'
								aria-label='Instagram'
							>
								<InstagramIcon width={16} height={16} color='white' />
							</a>
							<a
								href='#'
								className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#4640DE] transition-colors'
								aria-label='LinkedIn'
							>
								<DribbbleIcon color='white' />
							</a>
							<a
								href='#'
								className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#4640DE] transition-colors'
								aria-label='LinkedIn'
							>
								<LinkedinIcon width={16} height={16} color='white' />
							</a>

							<a
								href='#'
								className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#4640DE] transition-colors'
								aria-label='Twitter'
							>
								<TwitterIcon width={13} height={13} color='white' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
