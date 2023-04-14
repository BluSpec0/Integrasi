import FDCard from "@/components/FDCard";
import ExampleLayout from "@/components/ExampleLayout";
import filmService from "@/services/film.service";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery(["detailfilm", router.query.id], () => filmService.getDetail(router.query.id as string), { enabled: !!router.query.id });

  return (
    <ExampleLayout>
      <div>
        {isLoading && <>Loading...</>}
        {!isLoading && <FDCard data={data?.data} />}
      </div>
    </ExampleLayout>
  );
};

export default DetailPage;
