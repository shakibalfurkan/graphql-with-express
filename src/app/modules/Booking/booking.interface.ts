import type { Types } from "mongoose";

export type TBooking = {
  date: string;
  user: Types.ObjectId;
  car: Types.ObjectId;
  GPS: boolean;
  childSeat: boolean;
  creditCard: string;
  drivingLicense: string;
  passport: string;
  startTime: string;
  endTime: string | null;
  totalCost: number;
  status: "approve" | "cancel";
  returned: boolean;
  isPaid: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
