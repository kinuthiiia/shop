import { Badge, Button, Space, Text } from "@mantine/core";
import { IconClock, IconPlaneDeparture, IconStar } from "@tabler/icons";
import { useRouter } from "next/router";

export default function Mproduct() {
  const router = useRouter();

  return (
    <div className="min-w-[155px] relative" onClick={() => router.push("/id")}>
      <Button
        style={{
          position: "absolute",
          background: "#152238",
          width: 50,
          padding: 0,
          borderBottomRightRadius: 24,
        }}
      >
        <IconPlaneDeparture size={24} />
      </Button>
      <Badge
        className="absolute right-0"
        color="orange"
        size="sm"
        radius={null}
      >
        -18%
      </Badge>
      <img src="/1.jpg" alt="product" className="w-[150px]" />
      <Space h={8} />
      <Text c="dimmed">Ligo smartwatch waterproof</Text>
      <div className="flex items-baseline space-x-2">
        <h1 className="text-[1.4rem] font-semibold text-orange-500 tracking-tight">
          Ksh. 450
        </h1>
        <Text fz="xs" td="line-through">
          Ksh. 600
        </Text>
      </div>
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

      <Badge color="red" radius={0} size="lg">
        <IconClock className="inline mr-2" size={16} />
        02:15:12
      </Badge>
    </div>
  );
}
