import React from "react";

import { HomePresentation } from "../presentation/Home";

import { CustomerServiceSkeleton } from "../domain/Customer/services/implementations/CustomerServiceSkeleton";

interface IHomePageProps {
  customerService: CustomerServiceSkeleton;
}

export const HomePage = ({ customerService }: IHomePageProps) => {
  return <HomePresentation customerService={customerService} />;
};
