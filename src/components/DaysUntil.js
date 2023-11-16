import React from 'react';

export const DaysUntil = (date) => {

    // calculation of days remaining
    const targetDate = new Date(date.date);
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    /*if(daysRemaining ==0){daysRemaining = "today";}*/
  return (
    <div className="App">
      <h1 id='remaining'>{daysRemaining}</h1>
    </div>
  );
}

