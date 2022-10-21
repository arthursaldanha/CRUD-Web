import { AxiosInstance } from "axios";
import {
  ICorporateCustomerGeneral,
  IIndividualCustomerGeneral,
} from "../models";
import { CustomerServiceSkeleton } from "./implementations/CustomerServiceSkeleton";

export class CustomerService implements CustomerServiceSkeleton {
  constructor(private httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  async readAllCustomers() {
    const { data } = await this.httpClient.get<
      (IIndividualCustomerGeneral & ICorporateCustomerGeneral)[]
    >("/customers");

    return data;
  }

  async readUniqueCustomer(idCustomer: number) {
    const { data } = await this.httpClient.get<
      IIndividualCustomerGeneral | ICorporateCustomerGeneral
    >(`/customers/${idCustomer}`);

    return data;
  }

  async createIndividualCustomer(
    itemsIndividualCustomer: IIndividualCustomerGeneral
  ) {
    const { data } = await this.httpClient.post<void>("/customers", {
      ...itemsIndividualCustomer,
    });

    return data;
  }

  async createCorporateCustomer(
    itemsCorporateCustomer: ICorporateCustomerGeneral
  ) {
    const { data } = await this.httpClient.post<void>("/customers", {
      ...itemsCorporateCustomer,
    });

    return data;
  }

  async updateIndividualCustomer(
    customerId: number,
    itemsIndividualCustomer: IIndividualCustomerGeneral
  ) {
    const { data } = await this.httpClient.put<void>(
      `/customers/${customerId}`,
      {
        ...itemsIndividualCustomer,
      }
    );

    return data;
  }

  async updateCorporateCustomer(
    customerId: number,
    itemsCorporateCustomer: ICorporateCustomerGeneral
  ) {
    const { data } = await this.httpClient.put<void>(
      `/customers/${customerId}`,
      {
        ...itemsCorporateCustomer,
      }
    );

    return data;
  }

  async deleteCustomer(idCustomer: number) {
    await this.httpClient.delete<void>(`/customers/${idCustomer}`);
  }
}
