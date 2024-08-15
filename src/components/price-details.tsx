import React from 'react'
import { formatToIndianCurrency } from '~/data'

interface PriceDetailsProps {
	totalItems: number
	totalPrice: number
	totalDiscount: number
	deliveryCharge: number
	totalAmount: number
}

const PriceDetailsCard: React.FC<PriceDetailsProps> = ({
	totalItems,
	totalPrice,
	totalDiscount,
	deliveryCharge,
	totalAmount,
}) => {
	return (
		<div className="border rounded-lg shadow-lg p-4 w-full max-w-xs">
			<h2 className="text-lg font-bold mb-4">PRICE DETAILS</h2>
			<div className="flex justify-between mb-2">
				<span>Price ({totalItems} items)</span>
				<span>{formatToIndianCurrency(totalPrice)}</span>
			</div>
			<div className="flex justify-between mb-2">
				<span>Discount</span>
				<span className="text-green-500">- {formatToIndianCurrency(totalDiscount)}</span>
			</div>
			<div className="flex justify-between mb-2">
				<span>Delivery Charges</span>
				{deliveryCharge > 0 ? (
					<span>{formatToIndianCurrency(deliveryCharge)}</span>
				) : (
					<span className="text-green-500">Free</span>
				)}
			</div>
			<hr className="my-2" />
			<div className="flex justify-between font-bold mb-2">
				<span>Total Amount</span>
				<span>{formatToIndianCurrency(totalAmount)}</span>
			</div>
			<div className="text-green-500 font-bold">
				You will save {formatToIndianCurrency(totalDiscount)} on this order
			</div>
		</div>
	)
}

export default PriceDetailsCard
