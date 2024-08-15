import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaChevronDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { cartState } from '~/atoms/cart-atom'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const cart = useRecoilValue(cartState) // Get the current state of the cart
	const navigate = useNavigate()

	return (
		<header className="bg-blue-500 text-white p-4">
			<div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
				<div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">
					<h1 className="text-2xl font-bold mr-4">Flipkart</h1>
					<span className="text-xs italic">Explore Plus</span>
				</div>

				<div className="flex-grow max-w-xl w-full lg:w-auto flex items-center mb-4 lg:mb-0">
					<div className="relative flex-grow">
						<input
							type="text"
							placeholder="smart watch"
							className="w-full p-2 rounded text-black"
						/>
						<FaSearch className="absolute right-3 top-3 text-gray-400" />
					</div>
					<div className="ml-2 lg:hidden">
						<div className="relative cursor-pointer">
							{cart.length > 0 && (
								<span
									onClick={() => navigate('/checkout')}
									className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
								>
									{cart.length}
								</span>
							)}
							<FaShoppingCart
								onClick={() => navigate('/checkout')}
								className="h-6 w-6"
							/>
						</div>
					</div>
				</div>

				<nav className="hidden lg:flex items-center space-x-4">
					<a href="#" className="hover:underline">
						Become a Seller
					</a>
					<div className="relative group">
						<button className="flex items-center hover:underline">
							More <FaChevronDown className="ml-1" />
						</button>
						{/* Dropdown menu can be added here */}
					</div>
					<a
						className="flex items-center relative hover:underline cursor-pointer"
						onClick={() => navigate('/checkout')}
					>
						{cart.length > 0 && (
							<span className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
								{cart.length}
							</span>
						)}
						<FaShoppingCart className="mr-2 h-6 w-6" /> Cart
					</a>
				</nav>

				{/* Mobile menu button */}
				<button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					Menu
				</button>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<nav className="lg:hidden mt-4 space-y-2">
					<button className="block w-full bg-white text-blue-500 px-4 py-2 rounded">
						Login
					</button>
					<a href="#" className="block hover:underline">
						Become a Seller
					</a>
					<a href="#" className="block hover:underline">
						More
					</a>
					<a href="#" className="flex items-center hover:underline">
						<FaShoppingCart className="mr-2" />
					</a>
				</nav>
			)}
		</header>
	)
}

export default Header
