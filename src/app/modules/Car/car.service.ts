import { Car } from "./car.model";

const getAllCarsFromDB = async () => {
  const result = await Car.find();
  return result;
};

export const CarService = {
  getAllCarsFromDB,
};
