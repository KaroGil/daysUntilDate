import React from 'react';

export const DaysUntil = (date) => {

   const movie = "The hunger games: The ballad of songbirds and snakes"

    // calculation of days remaining
    const targetDate = new Date(date.date);
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div className="App">
      {daysRemaining < 0 ? <h1>Days Since</h1> : <h1>Days Until</h1>}
      <h2>{movie}</h2>
      { daysRemaining === 0 ? <h1 id='remaining'>Today</h1> : <h1 id='remaining'>{daysRemaining}</h1>}
    </div>
  );
}

