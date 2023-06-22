import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ImageCollage from "./ImageCollage"
import MyAccordion from "./MyAccordion"

export default function Tour() {
	return (
		<Container maxWidth="md" sx={{ pt: 2, pb: 5 }}>
			<Typography variant="h3" component="h1" sx={{ mt: 3 }}>
				Explore the world in Vegas
			</Typography>
			<Box sx={{ mt: 3, display: "flex" }}>
				<img
					src="https://images.unsplash.com/photo-1601056645460-05fd9ad8f4e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80"
					height="350px"
				/>
				<ImageCollage />
			</Box>
			<Box>
				<MyAccordion />
			</Box>
		</Container>
	)
}
