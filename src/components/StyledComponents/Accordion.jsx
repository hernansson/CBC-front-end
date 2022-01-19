import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  arrowIcon: {
    transform: 'rotate(90deg)',
  },
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: '1.2rem', color: '#D9202A' }} />
    }
    {...props}
  ></MuiAccordionSummary>
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

export const AccordionSummaryCustom = styled(
  ({ category, date, summary, id, rotateArrow, ...props }) => {
    const [expanded, setExpanded] = useState(false);
    const styles = useStyles();
    return (
      <MuiAccordionSummary onClick={() => setExpanded(!expanded)} {...props}>
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ArrowForwardIosSharpIcon
              className={rotateArrow ? styles.arrowIcon : ''}
              sx={{ fontSize: '1.2rem', color: '#D9202A', paddingRight: '5px' }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingBottom: '10px',
              }}
            >
              <Typography variant='mainAccordion'>{category}</Typography>
              <Typography style={{ color: '#99999a' }}> {date}</Typography>
            </div>
          </div>
          <Typography
            style={{
              textAlign: 'left',
              paddingLeft: '20px',
            }}
          >
            {summary}
          </Typography>
          <Link
            to=''
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              color: 'black',
            }}
          >
            View Details
            <ExitToAppIcon sx={{ color: 'red' }} />
          </Link>
        </div>
      </MuiAccordionSummary>
    );
  }
)(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
