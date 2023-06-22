import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"
import { createTheme, ThemeProvider } from "@mui/material"

import AccessTimeIcon from "@mui/icons-material/AccessTime"

// creating a custom style
const myTheme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: {
						variant: "body2",
					},
					style: {
						fontSize: 11,
					},
				},
				{
					props: {
						variant: "body3",
					},
					style: {
						fontSize: 9,
					},
				},
			],
		},
	},
})

export default function TourCards({ tour }) {
	return (
		<Grid item xs={6} md={4} lg={3}>
			<Paper>
				<ThemeProvider theme={myTheme}>
					<img src={tour.image} />
					<Box sx={{ px: 1 }}>
						<Typography variant="subtitle1">{tour.name}</Typography>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<AccessTimeIcon fontSize="sm" />
							<Typography variant="subtitle2" component="b" ml={0.5}>
								{tour.duration}
							</Typography>
						</Box>
						<Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
							<Rating
								name="read-only"
								value={tour.rating}
								precision={0.5}
								size="small"
							/>
							<Typography variant="body2" component="p" ml={0.5}>
								{tour.rating}
							</Typography>
							<Typography variant="body3" component="p" ml={1}>
								{tour.numberOfReviews} reviews
							</Typography>
						</Box>
						<Box>
							<Typography variant="h6" component="h3" mt={0.5}>
								Starting from $ {tour.price}
							</Typography>
						</Box>
					</Box>
				</ThemeProvider>
			</Paper>
		</Grid>
	)
}
