import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@material-ui/core';
import { activity } from '../../../data/activity';
import { AccordionSummaryCustom } from '../../StyledComponents/Accordion';
export default function Activity() {
  return (
    <Box>
      {activity.map((act, idx) => (
        <Accordion sx={{ marginBottom: '10px' }}>
          <AccordionSummaryCustom
            category={act.category}
            date={act.date}
            summary={act.summary}
            id='panel1a-header'
          ></AccordionSummaryCustom>

          <AccordionDetails>
            <Typography sx={{ textAlign: 'left', paddingLeft: '20px' }}>
              {act.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
