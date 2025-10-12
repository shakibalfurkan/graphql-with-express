import { BookingService } from "./booking.service";

const getAllBookings = async (_: any, __: any, context: any) => {
  try {
    const token = context.token;
    if (!token) {
      return {
        success: false,
        statusCode: 401,
        message: "Unauthorized",
        data: null,
      };
    }
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
