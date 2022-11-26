import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarData = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      locale="ja" 
      events={[
        { title: "event 1", start: "2021-06-01" },
        { title: "event 2", start: "2021-06-03", end: "2021-06-05" },
        {
          title: "event 3",
          start: "2021-06-07T10:00:00", 
        },
      ]}
    />
  );
};
export default CalendarData;