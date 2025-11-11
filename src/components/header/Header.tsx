import { useState } from 'react';
import logo from '../../assets/logo.svg';

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className='bg-white fixed top-0 left-0 right-0 z-50'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-20'>
					<div className='flex items-center justify-between gap-12'>
						<a href='./#hero' className='flex items-center'>
							<img src={logo} alt='Sprinters' className='md:w-32 lg:w-40' />
						</a>

						<nav className='hidden mobile-menu-visible items-center gap-6 font-semibold'>
							<a
								href='./'
								className='text-[#515B6F] hover:text-[#4640DE] transition-colors pt-6 pb-7'
							>
								Головна
							</a>
							<a
								href='./#transporters'
								className='text-[#515B6F] hover:text-[#4640DE] transition-colors pt-6 pb-7'
							>
								Перевізникам
							</a>
							<a
								href='./#about'
								className='text-[#515B6F] hover:text-[#4640DE] transition-colors pt-6 pb-7'
							>
								Про нас
							</a>
							<a
								href='./#transporter-profile'
								className='text-[#515B6F] hover:text-[#4640DE] transition-colors pt-6 pb-7 activeLink'
							>
								Профіль перевізника
							</a>
						</nav>
					</div>

					<div className='hidden mobile-menu-visible items-center gap-6 font-semibold'>
						<a
							href='#'
							className='text-[#4640DE] hover:opacity-80 transition-opacity pointer'
						>
							Створити профіль
						</a>
						<button className='bg-[#4640DE] text-white px-6 py-3 hover:opacity-90 transition-opacity pointer'>
							Увійти
						</button>
					</div>

					<button
						onClick={toggleMobileMenu}
						className='mobile-menu-hidden flex flex-col gap-1.5 p-2'
						aria-label='Toggle menu'
					>
						<span
							className={`block w-6 h-0.5 bg-gray-700 transition-all ${
								isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
							}`}
						></span>
						<span
							className={`block w-6 h-0.5 bg-gray-700 transition-all ${
								isMobileMenuOpen ? 'opacity-0' : ''
							}`}
						></span>
						<span
							className={`block w-6 h-0.5 bg-gray-700 transition-all ${
								isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
							}`}
						></span>
					</button>
				</div>

				{isMobileMenuOpen && (
					<div className='mobile-menu-content border-t border-[#E8E6FF] py-4'>
						<nav className='flex flex-col gap-4'>
							<a
								href='./'
								className='text-gray-700 hover:text-[#4640DE] transition-colors py-2'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Головна
							</a>
							<a
								href='./#transporters'
								className='text-gray-700 hover:text-[#4640DE] transition-colors py-2'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Перевізникам
							</a>
							<a
								href='./#about'
								className='text-gray-700 hover:text-[#4640DE] transition-colors py-2'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Про нас
							</a>
							<a
								href='./#transporter-profile'
								className='text-gray-700 hover:text-[#4640DE] transition-colors py-2 activeLink'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Профіль перевізника
							</a>
						</nav>
						<div className='flex flex-col gap-4 mt-4 pt-4 border-t border-gray-200'>
							<a
								href='#'
								className='text-[#4640DE] hover:opacity-80 transition-opacity py-2'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Створити профіль
							</a>
							<button
								className='bg-[#4640DE] text-white px-6 py-2 rounded hover:opacity-90 transition-opacity w-full'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Увійти
							</button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
