// src/pages/CalendarPage.tsx

import React from 'react';
import MeetingCalendar from '../components/MeetingCalendar';

const CalendarPage: React.FC = () => {
  return (
    <div className="py-24">
      <MeetingCalendar />
    </div>
  );
};

export default CalendarPage;
