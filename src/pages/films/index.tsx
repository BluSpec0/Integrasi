import FilmCard from "@/components/FilmCard";
import ExampleLayout from "@/components/ExampleLayout";
import filmService from "@/services/film.service";

import { useQuery } from "@tanstack/react-query";

const FilmPage = () => {
  const { data, isLoading } = useQuery(["films"], filmService.getList);

  return (
    <ExampleLayout>
      <div>
        {isLoading && <>Loading...</>}
        {!isLoading && <FilmCard data={data?.films} />}
      </div>
    </ExampleLayout>
  );
};

export default FilmPage;
