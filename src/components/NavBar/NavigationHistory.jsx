import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavigationHistory(props) {
  const location = useLocation();

  useEffect(() => {}, []);
  return (
    <>
      <Typography
        style={{ color: '#d22f2f', paddingRight: '5px' }}
      >{` King's Hawaiian`}</Typography>
      {location.state?.map((history, idx) => {
        return (
          <Link
            to={history.link}
            state={[...location.state]}
            style={{ display: 'flex', flexDirection: 'row', columnGap: '5px' }}
            key={idx}
          >
            <Typography>»</Typography>
            <Typography
              style={{
                color: idx === location.state.length - 1 ? 'white' : '#d22f2f',
              }}
            >
              {history.title}
            </Typography>
          </Link>
        );
      })}
    </>
  );
}
