import { Button, Text } from "@mantine/core";
import { IconStar, IconTrash } from "@tabler/icons";

export default function McartItem() {
  return (
    <div className="h-[120px] mb-4 shadow-sm flex space-x-4">
      <img src="/1.jpg" alt="product" className="h-full" />
      <div className="w-full">
        <Text c="dimmed">Ligo smartwatch waterproof</Text>
        <div className="flex items-baseline space-x-2">
          <h1 className="text-[1.4rem] font-semibold text-orange-500 tracking-tight">
            Ksh. 450
          </h1>
          <Text fz="xs" td="line-through">
            Ksh. 600
          </Text>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex space-x-1">
            <p className="mr-2">123 sold</p>
            &bull;
            <p className="items-baseline">
              <IconStar
                color="#FFD700"
                fill="#FFD700"
                size={16}
                className="inline"
              />{" "}
              4.5
            </p>
          </div>
          <Button
            style={{
              background: "#152238",
              borderTopLeftRadius: 24,
              zIndex: -1,
            }}
            className="bg-[#152238] p-[10px] rounded-tl-2xl"
          >
            <IconTrash color="white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
