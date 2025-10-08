import { Booking } from "./booking.model";

const getAllBookingsFromDB = async () => {
  const result = await Booking.find();
  return result;
};

export const BookingService = {
  getAllBookingsFromDB,
};
