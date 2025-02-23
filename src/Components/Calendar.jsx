import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";

function Calendar() {
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          multiMonthPlugin,
        ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay",
        }}
        buttonText={{
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
          multiMonthYear: "Year",
        }}
        editable={true}
        selectable={true}
        height="100%"
      />
    </div>
  );
}

export default Calendar;
