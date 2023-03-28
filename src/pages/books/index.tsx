import BookCard from "@/components/BookCard";
import ExampleLayout from "@/components/ExampleLayout";
import bookService from "@/services/book.service";

import { useQuery } from "@tanstack/react-query";

const BookPage = () => {
  const { data, isLoading } = useQuery(["books"], bookService.getList);

  return (
    <ExampleLayout>
      <div>
        {isLoading && <>Loading...</>}
        {!isLoading && <BookCard data={data?.books} />}
      </div>
    </ExampleLayout>
  );
};

export default BookPage;
