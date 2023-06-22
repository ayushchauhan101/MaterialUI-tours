import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export default function MyAccordion() {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h6" component="h4" sx={{ mt: 3 }}>
					About this ticket
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography variant="caption" component="b">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
					commodi odit et voluptate nesciunt eveniet, impedit mollitia
					repellendus deserunt. Nostrum libero error blanditiis quibusdam
					eligendi unde soluta eum, at sed? Eaque voluptatum earum maiores
					aliquam repudiandae consequatur, aperiam accusantium ad at. Laboriosam
					explicabo, quibusdam possimus, similique ea voluptate maxime fugiat
					aperiam totam eligendi ratione. Earum iusto nam dolore! Ea, dicta?
					Dolorem maxime asperiores, illo nesciunt nobis dignissimos obcaecati
					necessitatibus molestiae molestias officiis deleniti eius aliquid unde
					ipsum ullam laborum reiciendis consequatur cum rem. Dolores atque quia
					iusto distinctio exercitationem sequi. In exercitationem, nesciunt vel
					cumque quisquam tempore enim nulla expedita, optio, sapiente molestiae
					magni. Quidem repellendus delectus facilis, voluptas harum rerum
					voluptates cupiditate voluptatum nesciunt expedita esse aliquid
					doloremque odit. Optio est facere eius ab odio enim in. Assumenda
					libero doloremque voluptatem amet? Voluptates asperiores aliquid autem
					pariatur, magnam possimus excepturi vero. Hic minus natus, ullam nihil
					aspernatur ipsam nisi.
				</Typography>
			</AccordionDetails>
		</Accordion>
	)
}
