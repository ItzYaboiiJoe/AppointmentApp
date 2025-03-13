import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import { fireStore } from "../Config/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import AppointmentInfoModal from "./AppointmentInfoModal";

function Calendar() {
  const [appointments, setAppointments] = useState([]);
  const [customerInfo, setCustomerInfo] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = onSnapshot(
      collection(
        fireStore,
        "Joe BarberShop",
        "Appointments",
        "AppointmentsList"
      ),
      (querySnapshot) => {
        const events = querySnapshot.docs.map((doc) => {
          const data = doc.data();

          // Convert date and time into a valid Date object
          const dateTimeString = `${data.date} ${data.time}`;
          const startDate = new Date(dateTimeString);
          const durationInMinutes = data.duration * 60;
          const endDate = new Date(
            startDate.getTime() + durationInMinutes * 1000
          );

          return {
            id: doc.id,
            title: data.name, // Display name
            start: startDate, // Display Date and Time
            end: endDate,
            extendedProps: {
              service: data.service,
              email: data.email,
              phone: data.phone,
              duration: data.duration,
            },
          };
        });

        setAppointments(events);
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => fetchAppointments();
  }, []);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setCustomerInfo(true);
  };

  const closeModal = () => {
    setCustomerInfo(false);
    setSelectedEvent(null);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-lg">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

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
      {customerInfo && (
        <AppointmentInfoModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
}

export default Calendar;
