import { BookingController } from "../../../modules/Booking/booking.controller";

const bookingQueries = {
  bookings: BookingController.getAllBookings,
};

export default bookingQueries;
