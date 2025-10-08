import { CarService } from "./car.service";

const getAllCars = async () => {
  try {
    const result = await CarService.getAllCarsFromDB();

    return {
      success: true,
      statusCode: 200,
      message: "Cars retrieved successfully",
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      message: "Error retrieving cars",
      data: null,
    };
  }
};

export const CarController = {
  getAllCars,
};
