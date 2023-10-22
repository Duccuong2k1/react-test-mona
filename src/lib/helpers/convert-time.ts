import React from 'react'



export function convertToHoursMinute(minutes: number) {
  
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    let formattedTime = '';
    if (hours > 0) {
      formattedTime += `${hours}h`;
    }
    if (remainingMinutes > 0) {
      if (formattedTime) {
        formattedTime += ' ';
      }
      formattedTime += `${remainingMinutes}m`;
    }
  
    return formattedTime;
  
  
  
}