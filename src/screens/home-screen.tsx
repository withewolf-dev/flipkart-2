import React from 'react'
import Header from '.././components/header'
import ProductCard from '.././components/product-card'
import { products } from '.././data'

const HomeScreen: React.FC = () => {
	return (
		<div>
			<Header />
			<div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto sm:px-4 max-w-screen-lg">
				{products.map((e) => (
					<ProductCard key={e.id} item={e} />
				))}
			</div>
		</div>
	)
}
export default HomeScreen
