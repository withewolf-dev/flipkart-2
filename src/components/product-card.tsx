import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import ImageCarousel from './product-caraousel'
import { useRecoilState } from 'recoil'
import { ICartItem, cartState } from '~/atoms/cart-atom'
import { IProduct, formatToIndianCurrency } from '~/data'
import { Bounce, toast } from 'react-toastify'

const ProductCard: React.FC<{ item: IProduct }> = ({ item }) => {
	// const setCart = useSetRecoilState(cartState)

	const [cart, setCart] = useRecoilState(cartState)

	const addToCart = () => {
		const existingItem = cart.find((cartItem) => cartItem.product.id === item.id)

		if (existingItem) {
			setCart(
				cart.map((cartItem) =>
					cartItem.product.id === item.id
						? { ...cartItem, qty: cartItem.qty + 1 }
						: cartItem,
				),
			)
		} else {
			const newCartItem: ICartItem = {
				id: item.id,
				product: item, // item is of type IProduct
				qty: 1,
			}
			setCart([...cart, newCartItem])
		}
		toast(`${item.name} added to cart!`, {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
			transition: Bounce,
		})
	}

	return (
		<div className="border rounded-lg shadow-lg p-4 max-w-xs flex flex-col">
			<div className="relative">
				<ImageCarousel images={item.images} autoPlayInitially={false} height="400px" />
			</div>
			<div className="flex-grow">
				{item.isSponsored && <div className="mt-2 text-sm text-gray-500">Sponsored</div>}
				<div className="font-bold text-lg mt-1">{item.name}</div>
				<div className="text-sm text-gray-500">
					{[
						item.material,
						item.size,
						item.frameMaterial,
						item.color,
						item.lensColor,
						item.storage,
						item.screenSize,
					]
						.filter(Boolean) // Filter out any undefined or null values
						.join(', ')}
				</div>
				<span className="text-xs bg-blue-100 text-blue-700 rounded-full px-2  py-1">
					Assured
				</span>
				<div className="mt-2 flex items-center">
					<span className="text-gray-500 ml-2 line-through text-sm">
						{formatToIndianCurrency(item.price)}
					</span>
					<span className="text-green-500 ml-2 font-bold">
						{' '}
						{formatToIndianCurrency(item.finalPrice)}
					</span>
					<span className="text-green-500 ml-2 text-sm">
						{item.discountPercentage}% off
					</span>
				</div>
			</div>
			<FaShoppingCart
				onClick={addToCart}
				className="h-6 w-6 mt-2 text-gray-300 transform transition-transform duration-200 ease-in-out hover:text-gray-800 hover:scale-120 cursor-pointer"
			/>
		</div>
	)
}

export default ProductCard
