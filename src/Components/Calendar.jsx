import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [events, setEvents] = useState([
    {
      title: "Meeting",
      start: "2024-12-01T10:00:00",
      end: "2024-12-01T11:00:00",
    },
  ]);

  const handleDateClick = (info) => {
    const title = prompt("Enter Event Title:");
    if (title) {
      setEvents([...events, { title, start: info.dateStr, end: info.dateStr }]);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Admin Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events} // Attach events state
        dateClick={handleDateClick} // Attach date click handler
        editable={true}
        selectable={true}
      />
    </div>
  );
}

export default Calendar;
