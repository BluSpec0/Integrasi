import { Badge, Card, Group, Image, Text } from "@mantine/core";

const FilmCard = ({ data }: { data: any[] }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {data?.map((item, index) => (
        <Card key={index} shadow="sm" radius="md" withBorder>
          <Card.Section>
            <Image src={item.cover_url} height={160} alt="Norway" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{item.judul}</Text>
            <Badge color="pink" variant="light">
              {item.produksi}
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            {item.casts?.substring(0, 200)}...
          </Text>
          <Text size="sm" color="dimmed">
            {item.sinopsis?.substring(0, 200)}...
          </Text>
        </Card>
      ))}
    </div>
  );
};

export default FilmCard;
