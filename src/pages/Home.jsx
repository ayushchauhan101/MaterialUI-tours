import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import TourCards from "../components/TourCards"

import cities from "../data.json"

import Appbar from "../components/AppBar"
import { Typography } from "@mui/material"

export default function Home() {
	return (
		<div>
			<Appbar />
			<Container sx={{ my: 5 }}>
				{cities.map((city) => (
					<>
						<Typography variant="h4" component="h2" sx={{ mt: 5, mb: 3 }}>
							Top {city.name} Tours:
						</Typography>
						<Grid container spacing={4} py={2}>
							{city.tours.map((tour) => (
								<TourCards tour={tour} key={tour.id} />
							))}
						</Grid>
					</>
				))}
			</Container>
		</div>
	)
}
