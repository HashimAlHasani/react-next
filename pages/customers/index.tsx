import { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";

type Customer = {
  id: number;
  name: string;
  industry: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      customers: [
        {
          id: 1,
          name: "John Smith",
          industry: "Restaurant",
        },
        {
          id: 2,
          name: "Sal Brown",
          industry: "Tech",
        },
      ] as Customer[],
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
