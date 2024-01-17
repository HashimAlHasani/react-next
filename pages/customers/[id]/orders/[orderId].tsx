import { useRouter } from "next/router";

export default function Order() {
  const router = useRouter();
  const { orderId, id } = router.query;
  return (
    <h1 className="text-4xl">
      Order {orderId} from customer {id}
    </h1>
  );
}
