import { IAddressCustomer } from "./common";
import { ICorporateCustomer } from "./corporate";
import { IIndividualCustomer } from "./individual";

type ICorporateCustomerGeneral = ICorporateCustomer & IAddressCustomer;

type IIndividualCustomerGeneral = IIndividualCustomer & IAddressCustomer;

export { type IIndividualCustomerGeneral, type ICorporateCustomerGeneral };
