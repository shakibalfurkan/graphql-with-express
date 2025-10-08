import { BookingService } from "./booking.service";

const getAllBookings = async () => {
  try {
    const result = await BookingService.getAllBookingsFromDB();
    return {
      success: true,
      statusCode: 200,
      message: "Bookings retrieved successfully",
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      message: "Error retrieving bookings",
      data: null,
    };
  }
};

export const BookingController = {
  getAllBookings,
};
