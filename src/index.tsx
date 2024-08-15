import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
	<BrowserRouter>
		<RecoilRoot>
			<App />
			<ToastContainer />
		</RecoilRoot>
	</BrowserRouter>,
	document.getElementById('root'),
)
