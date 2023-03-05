import Mheader from "../components/Mheader";
import { Carousel } from "@mantine/carousel";
import { Space, UnstyledButton } from "@mantine/core";
import Mproduct from "../components/Mproduct";

export default function Home() {
  return (
    <div>
      <Mheader />
      <Space h={10} />
      <div>
        <Carousel maw="95%" loop mx="auto" withIndicators height={200}>
          <Carousel.Slide className="bg-red-200">1</Carousel.Slide>
          <Carousel.Slide className="bg-red-200">2</Carousel.Slide>
          <Carousel.Slide className="bg-red-200">3</Carousel.Slide>
        </Carousel>
      </div>
      <Space h={50} />
      <div className="w-[95%]  mx-auto">
        <div className="flex justify-between">
          <h1 className="text-[1.5rem] font-bold tracking-tight mb-3">
            Flash Sales⚡
          </h1>
          <UnstyledButton>See all &rarr;</UnstyledButton>
        </div>
        <Space h={25} />
        <div className="flex overflow-x-auto gap-x-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
            <Mproduct key={product?.id} data={product} />
          ))}
        </div>
      </div>

      <Space h={50} />
      <div className="w-[95%]  mx-auto">
        <div className="flex justify-between">
          <h1 className="text-[1.5rem] font-bold tracking-tight mb-3">
            Discover New
          </h1>
          <UnstyledButton>See all &rarr;</UnstyledButton>
        </div>
        <Space h={25} />
        <div className="flex overflow-x-auto gap-x-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
            <Mproduct key={product?.id} data={product} />
          ))}
        </div>
      </div>

      <Space h={50} />
      <div className="w-[95%]  mx-auto">
        <div className="flex justify-between">
          <h1 className="text-[1.5rem] font-bold tracking-tight mb-3">
            Picks For You
          </h1>
          <UnstyledButton>See all &rarr;</UnstyledButton>
        </div>
        <Space h={25} />
        <div className="flex overflow-x-auto gap-x-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
            <Mproduct key={product?.id} data={product} />
          ))}
        </div>
      </div>

      <Space h={50} />
      <div className="w-[95%]  mx-auto">
        <div className="flex justify-between">
          <h1 className="text-[1.5rem] font-bold tracking-tight mb-3">
            Top Deals
          </h1>
          <UnstyledButton>See all &rarr;</UnstyledButton>
        </div>
        <Space h={25} />
        <div className="flex overflow-x-auto gap-x-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
            <Mproduct key={product?.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
