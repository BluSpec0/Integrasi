import { Badge, Card, Group, Image, Text } from "@mantine/core";

const BookCard = ({ data }: { data: any[] }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {data?.map((item, index) => (
        <Card key={index} shadow="sm" radius="md" withBorder>
          <Card.Section>
            <Image src={item.cover_url} height={160} alt="Norway" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{item.title}</Text>
            <Badge color="pink" variant="light">
              {item.author}
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            {item.content?.substring(0, 200)}...
          </Text>
        </Card>
      ))}
    </div>
  );
};

export default BookCard;
