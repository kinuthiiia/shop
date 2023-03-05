import { Button } from "@mantine/core";
import { IconStar, IconTrash } from "@tabler/icons";

export default function McartItem() {
  return (
    <div className="h-[120px] mb-4 shadow-sm flex space-x-4">
      <img src="/1.jpg" alt="product" className="h-full" />
      <div className="w-full">
        <p>Lige smart watch </p>
        <span className="flex items-baseline space-x-4 ">
          <h1 className="font-bold tracking-tight text-[1.5rem] py-2">
            Ksh. 459
          </h1>
          <p className="text-[0.8rem] line-through">Ksh. 600</p>
        </span>
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
