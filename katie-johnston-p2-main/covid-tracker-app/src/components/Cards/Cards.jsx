import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CardComponent from './Card/Card';

const Info = ({ data: { confirmed, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of cases of COVID-19."
        />
        <Typography gutterBottom variant="h4" component="h4">Covid Tracker</Typography>        
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;