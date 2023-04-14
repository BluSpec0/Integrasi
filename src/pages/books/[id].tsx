import DetailCard from "@/components/DetailCard";
import ExampleLayout from "@/components/ExampleLayout";
import bookService from "@/services/book.service";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery(["detailbooks", router.query.id], () => bookService.getDetail(router.query.id as string), { enabled: !!router.query.id });

  return (
    <ExampleLayout>
      <div>
        {isLoading && <>Loading...</>}
        {!isLoading && <DetailCard data={data?.detail} />}
      </div>
    </ExampleLayout>
  );
};

export default DetailPage;
