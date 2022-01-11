import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { cards } from './Cards/cardList';
import {
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from '../StyledComponents/Accordion';

export default function AdditionalInfo() {
  const [expanded, setExpanded] = useState('panel0');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {cards.map((card, idx) => (
        <Accordion
          expanded={expanded === `panel${idx}`}
          onChange={handleChange(`panel${idx}`)}
        >
          <AccordionSummary sx={{}}>
            <Box
              sx={{
                borderBottom: '1px solid #77777A',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Typography>{card.title}</Typography>
              <Link
                to={card.link}
                style={{ color: '#D9202A', textDecoration: 'none' }}
              >
                {card.titleLink}
              </Link>
            </Box>
          </AccordionSummary>
          <AccordionDetails>{card.info}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
