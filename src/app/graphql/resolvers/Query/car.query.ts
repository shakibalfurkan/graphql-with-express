import { CarController } from "../../../modules/Car/car.controller";

const carQueries = {
  cars: () => CarController.getAllCars(),
};

export default carQueries;
