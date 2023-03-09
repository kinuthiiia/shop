import { Badge, Button, Text } from "@mantine/core";
import { IconStar, IconTrash } from "@tabler/icons";

export default function Mclosed() {
  return (
    <div className="h-[100px] mb-4 shadow-lg flex space-x-4 p-2">
      <img src="/1.jpg" alt="product" className="h-full" />
      <div className="w-full">
        <Text c="dimmed">Ligo smartwatch waterproof</Text>
        <div className="flex items-baseline space-x-2">
          <h1 className="text-[1.1rem] font-semibold text-orange-500 tracking-tight">
            Ksh. 450
          </h1>
        </div>
        <div>
          <Badge color="green" size="md">
            DELIVERED : {new Date().toDateString()}
          </Badge>
        </div>
      </div>
    </div>
  );
}
