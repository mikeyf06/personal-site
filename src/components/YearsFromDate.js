// src/components/YearsFromDateLabel.js

import React, { useState, useEffect } from 'react';

const YearsFromDate = ({ givenDate }) => {
  const [years, setYears] = useState(null);

  useEffect(() => {
    const calculateYears = (dateString) => {
      let date = new Date(dateString);
      let now = new Date();
      let years = now.getFullYear() - date.getFullYear();
      let m = now.getMonth() - date.getMonth();
      if (m < 0 || (m === 0 && now.getDate() < date.getDate())) {
        years--;
      }
      return years;
    };

    if (givenDate) {
      const calculatedYears = calculateYears(givenDate);
      setYears(calculatedYears);
    }
  }, [givenDate]);

  return (
      <label>
        {years !== null
          ? ` ${years} years `
          : 'Please provide a valid date.'}
      </label>
    
  );
};

export default YearsFromDate;
