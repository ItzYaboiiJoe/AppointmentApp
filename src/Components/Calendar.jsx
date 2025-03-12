import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import { fireStore } from "../Config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function Calendar() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const querySnapshot = await getDocs(
        collection(
          fireStore,
          "Joe BarberShop",
          "Appointments",
          "AppointmentsList"
        )
      );

      const events = querySnapshot.docs.map((doc) => {
        const data = doc.data();

        // Convert date and time into a valid Date object
        const dateTimeString = `${data.date} ${data.time}`;
        const startDate = new Date(dateTimeString);

        return {
          id: doc.id,
          title: data.name, // Display name
          start: startDate, // Display Date and Time
          extendedProps: {
            service: data.service,
            email: data.email,
            phone: data.phone,
            duration: data.duration,
          },
        };
      });

      setAppointments(events);
    };

    fetchAppointments();
  }, []);

  const handleEventClick = (info) => {
    const event = info.event;
    alert(
      `Appointment Details:
    Name: ${event.title}
    Service: ${event.extendedProps?.service || "Not provided"}
    Email: ${event.extendedProps?.email || "Not provided"}
    Phone: ${event.extendedProps?.phone || "Not provided"}
    Date: ${event.start.toLocaleDateString()}
    Time: ${event.start.toLocaleTimeString()}`
    );
  };

  return (
    <div className="px-4 py-8">
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
        aspectRatio={2.4}
        events={appointments}
        eventClick={handleEventClick}
      />
    </div>
  );
}

export default Calendar;
