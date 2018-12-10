// Initialize calendar
$(function () {
  $('#calendar').fullCalendar({
    events: {
      googleCalendarApiKey: process.env.API_KEY,
      googleCalendarId: process.env.CALENDAR_ID,
    }
  });
});
