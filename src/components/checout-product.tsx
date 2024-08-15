import React from 'react'
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import { ICartItem, cartState } from '~/atoms/cart-atom'
import ImageCarousel from './product-caraousel'
import { formatToIndianCurrency } from '~/data'

const CheckoutProduct: React.FC<{ item: ICartItem }> = ({ item }) => {
	const [cart, setCart] = useRecoilState(cartState)

	const increaseQuantity = () => {
		setCart(
			cart.map((cartItem) => {
				if (cartItem.product.id === item.product.id) {
					return { ...cartItem, qty: cartItem.qty + 1 }
				}
				return cartItem
			}),
		)
	}

	const decreaseQuantity = () => {
		setCart(
			cart.map((cartItem) =>
				cartItem.product.id === item.product.id && cartItem.qty > 1
					? { ...cartItem, qty: cartItem.qty - 1 }
					: cartItem,
			),
		)
	}

	const deleteFromCart = () => {
		setCart(cart.filter((cartItem) => cartItem.product.id !== item.product.id))
	}

	return (
		<div className="border rounded-lg shadow-lg p-4 flex flex-col sm:flex-row max-w-full">
			<div className="relative w-full sm:w-1/3 mb-4 sm:mb-0">
				<ImageCarousel
					images={item.product.images}
					autoPlayInitially={false}
					height="200px"
				/>
			</div>
			<div className="flex-grow ml-0 sm:ml-4">
				{item.product.isSponsored && (
					<div className="mt-2 text-sm text-gray-500">Sponsored</div>
				)}
				<div className="font-bold text-lg mt-1">{item.product.name}</div>
				<div className="text-sm text-gray-500">
					{[
						item.product.material,
						item.product.size,
						item.product.frameMaterial,
						item.product.color,
						item.product.lensColor,
						item.product.storage,
						item.product.screenSize,
					]
						.filter(Boolean)
						.join(', ')}
				</div>
				<span className="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-1">
					Assured
				</span>
				<div className="mt-2 flex items-center">
					<span className="text-gray-500 ml-2 line-through">
						{formatToIndianCurrency(item.product.price)}
					</span>
					<span className="text-green-500 ml-2 font-bold">
						{formatToIndianCurrency(item.product.finalPrice)}
					</span>
					<span className="text-green-500 ml-2 text-sm">
						{item.product.discountPercentage}% off
					</span>
				</div>
				<div className="mt-4 flex items-center space-x-2">
					<button
						onClick={decreaseQuantity}
						className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
					>
						<FaMinus />
					</button>
					<span className="text-lg font-bold">
						{cart.find((cartItem) => cartItem.id === item.id)?.qty || 0}
					</span>
					<button
						onClick={increaseQuantity}
						className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
					>
						<FaPlus />
					</button>
					<button
						onClick={deleteFromCart}
						className="ml-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
					>
						<FaTrash />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CheckoutProduct
