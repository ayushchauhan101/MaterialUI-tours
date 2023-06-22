import { BrowserRouter, Route, Routes } from "react-router-dom"

import Appbar from "./components/AppBar"
import Home from "./pages/Home"
import Tour from "./pages/Tour"
import "./app.css"

const App = () => {
	return (
		<BrowserRouter>
		<Appbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tour" element={<Tour />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App
