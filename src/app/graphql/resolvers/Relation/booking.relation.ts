import type { TBooking } from "../../../modules/Booking/booking.interface";
import { Car } from "../../../modules/Car/car.model";
import { User } from "../../../modules/User/user.model";

const Booking = {
  user: async (parent: TBooking) => {
    const result = await User.findById(parent.user);
    return result;
  },
  car: async (parent: TBooking) => {
    const result = await Car.findById(parent.car);
    return result;
  },
};

export default Booking;
