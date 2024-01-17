import { useRouter } from "next/router";

export default function Customer() {
  const router = useRouter();
  const { id } = router.query;
  return <h1 className="text-4xl">Customer {id}</h1>;
}
