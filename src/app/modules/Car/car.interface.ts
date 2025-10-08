export type TCar = {
  _id?: string;
  name: string;
  model: string;
  year: string;
  date: string;
  image: string;
  location: string;
  ownerEmail: string;
  ownerName: string;
  description: string;
  color: string;
  carType: string;
  seatCapacity: number;
  isElectric: boolean;
  status: string;
  features: string[];
  pricePerHour: number;
  totalCost?: number;
  createdAt?: string;
  updatedAt?: string;
  isDeleted: boolean;
};

export type TReturnCar = {
  bookingId: string;
  endTime: string;
};
