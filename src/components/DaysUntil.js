import React from 'react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

export const DaysUntil = ({date, movie}) => {

   //const movie = "The hunger games: The ballad of songbirds and snakes"

    // calculation of days remaining
    console.log(date)
    const targetDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div className="App">
      {daysRemaining < 0 ? <h1>Days Since</h1> : <h1>Days Until</h1>}
      <h2>{movie}</h2>
      { daysRemaining === 0 ? <h1 id='remaining'>Today</h1> : <h1 id='remaining'>{Math.abs(daysRemaining)}</h1>}
      { Math.abs(daysRemaining) === 1 ? <h2 className='day'>day</h2> : <h2 className='day'>days</h2>}

      <AddToCalendarButton
        name={movie}
        options={'Google'}
        location="World Wide Web"
        startDate={date}
        endDate={date}
        hideCheckmark={true}
        lightMode='body'
      ></AddToCalendarButton>
    </div>
  );
}

