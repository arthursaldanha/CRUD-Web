import { AxiosInstance } from "axios";
import { ICorporateCustomerGeneral, IIndividualCustomerGeneral } from "../models";
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

  async readUniqueCustomers(idCustomer: number) {
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

  // async updateAccount({ birthDate, cpf, gender, name, phone }: UpdateAccount) {
  //   const { data } = await this.httpClient.put<Account>("api/account", {
  //     birthDate,
  //     cpf,
  //     gender,
  //     name,
  //     phone,
  //   });

  //   return data;
  // }

  async deleteCustomer(idCustomer: number) {
    await this.httpClient.delete<void>(`/customers/${idCustomer}`);
  }
}
