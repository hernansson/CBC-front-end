import { Typography, Box } from '@mui/material';
import cardStyles from './CardsStyle';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { contactsData } from '../../../data/contactsData';

export default function ContactsCard() {
  const cStyle = cardStyles();

  //Ideally a list of contacts and map it
  return (
    <Box className={cStyle.card}>
      {contactsData.map((contact, idx) => (
        <>
          <Box style={{ textAlign: 'left' }}>
            <Typography
              style={{
                fontWeight: 600,
                color: '#33333A',
                display: 'inline-block',
              }}
            >
              {contact.name}
            </Typography>
            <Typography
              style={{ display: 'inline-block' }}
            >{` | ${contact.jobTitle}`}</Typography>
          </Box>
          <Box component='span' sx={{ display: 'flex' }}>
            <CallIcon />
            <Typography style={{ color: '#33333A' }}>{`Phone: `}</Typography>
            <Typography>{`${contact.phone}`}</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <EmailIcon />
            <Typography
              style={{ color: '#33333A' }}
            >{`Contact Email: `}</Typography>
          </Box>
          <Typography style={{ color: '#d22f2f' }}>
            {` ${contact.contactEmail}`}
          </Typography>
          <p style={{ margin: 0 }}>&nbsp;</p>
        </>
      ))}

      <Link to='' style={{ color: 'red' }}>
        View All Contacts
      </Link>
    </Box>
  );
}
