import { useEffect, useState, useLayoutEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@material-ui/core';
import { activity } from '../../../../data/activity';
import { AccordionSummaryCustom } from '../../../StyledComponents/Accordion';
import mainStyles from '../../MainStyles';
import Filters from './Filters';

export default function Activity({ expandedPanels, setExpandedPanels }) {
  const mStyles = mainStyles();

  const handleChange = (index) => (event, newExpanded) => {
    expandedPanels[index].active = !expandedPanels[index].active;
    setExpandedPanels([...expandedPanels]);
  };
  useEffect(() => {
    const panels = activity.map((act, idx) => ({ active: false }));
    setExpandedPanels(panels);
  }, []);
  return (
    <Box>
      <Box style={{ margin: 0 }}>&nbsp;</Box>
      <Box className={mStyles.filters}>
        <Filters />
      </Box>
      <Box style={{ margin: 0 }}>&nbsp;</Box>

      <Typography textAlign={'left'}>{'October 2021'}</Typography>
      <Box style={{ margin: 0 }}>&nbsp;</Box>
      {activity.map((act, idx) => (
        <Accordion
          expanded={expandedPanels ? expandedPanels[idx].active : false}
          onChange={handleChange(idx)}
          sx={{
            marginBottom: '10px',
            boxShadow: '0px 0px 10px rgb(0 0 0 / 25%)',
          }}
        >
          <AccordionSummaryCustom
            category={act.category}
            date={act.date}
            summary={act.summary}
            id='idx'
            rotateArrow={expandedPanels ? expandedPanels[idx].active : false}
          ></AccordionSummaryCustom>

          <AccordionDetails>
            <Typography
              sx={{
                textAlign: 'left',
                paddingLeft: '20px',
              }}
            >
              {act.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
