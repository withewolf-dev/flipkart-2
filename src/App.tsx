import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CheckoutScreen from './screens/order-screen'
import HomeScreen from './screens/home-screen'

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<HomeScreen />} />
			<Route path="/checkout" element={<CheckoutScreen />} />
			{/* <Route path="*" element={<NotFoundPage />} /> */}
		</Routes>
	)
}
export default App
