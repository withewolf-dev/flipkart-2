import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { cartState } from '~/atoms/cart-atom'
import CheckoutProduct from '~/components/checout-product'
import Header from '~/components/header'
import PriceDetailsCard from '~/components/price-details'

export default function CheckoutScreen() {
	const navigate = useNavigate()
	const cart = useRecoilValue(cartState)

	// Example calculations for the PriceDetailsCard
	const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0)
	const totalDiscount = cart.reduce(
		(acc, item) => acc + (item.product.price - item.product.finalPrice) * item.qty,
		0,
	)
	const deliveryCharge = totalPrice > 5000 ? 0 : 70
	const totalAmount = totalPrice - totalDiscount + deliveryCharge

	const handleStartShopping = () => {
		navigate('/') // Navigate to the products page or home page
	}

	if (cart.length > 0) {
		return (
			<div>
				<Header />
				<div className="flex flex-col lg:flex-row justify-between items-start mx-auto max-w-screen-lg p-4">
					<div className="flex flex-col w-full lg:w-2/3">
						{cart.map((e) => (
							<CheckoutProduct key={e.id} item={e} />
						))}
					</div>
					<div className="w-full lg:w-1/3 mt-4 lg:mt-0 lg:ml-4">
						<PriceDetailsCard
							totalItems={cart.length}
							totalPrice={totalPrice}
							totalDiscount={totalDiscount}
							deliveryCharge={deliveryCharge}
							totalAmount={totalAmount}
						/>
						<button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors w-full">
							Proceed to Checkout
						</button>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
				<div className="text-center">
					<FaShoppingBag className="text-gray-400 text-6xl mb-4" />
					<h1 className="text-2xl font-semibold mb-2">Your Cart is Empty</h1>
					<p className="text-gray-500 mb-6">
						Looks like you haven't added anything to your cart yet.
					</p>
					<button
						onClick={handleStartShopping}
						className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
					>
						Start Shopping
					</button>
				</div>
			</div>
		)
	}
}
