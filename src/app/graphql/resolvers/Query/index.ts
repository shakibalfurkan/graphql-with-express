import bookingQueries from "./booking.query";
import carQueries from "./car.query";
import userQueries from "./user.query";

const Query = {
  ...userQueries,
  ...bookingQueries,
  ...carQueries,
};

export default Query;
