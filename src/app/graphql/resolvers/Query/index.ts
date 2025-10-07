import bookingQueries from "./booking.query";
import userQueries from "./user.query";

const Query = {
  ...userQueries,
  ...bookingQueries,
};

export default Query;
