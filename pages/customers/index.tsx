import axios from "axios";
import { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";

type Customer = {
  id: number;
  name: string;
  industry: string;
};

type GetCustomerResponse = { customers: Customer[] };

export const getStaticProps: GetStaticProps = async (context) => {
  const result = await axios.get<GetCustomerResponse>(
    "http://127.0.0.1:8000/api/customers/"
  );
  http: console.log(result);

  return {
    props: {
      customers: result.data.customers,
    },
  };
};

const Customers: NextPage = ({
  customers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(customers);
  return (
    <>
      <h1 className="text-4xl">Customers</h1>
      {customers.map((customer: Customer) => {
        return (
          <div key={customer.id}>
            <p>{customer.name}</p>
            <p>{customer.industry}</p>
            <p>{customer.id}</p>
          </div>
        );
      })}
    </>
  );
};

export default Customers;
