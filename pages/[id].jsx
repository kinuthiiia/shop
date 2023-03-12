import { Carousel } from "@mantine/carousel";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Divider,
  Space,
  Text,
} from "@mantine/core";
import { IconClock, IconHeart, IconShare, IconStar } from "@tabler/icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import Mheader from "../components/Mheader";
import Mproduct from "../components/Mproduct";

export default function Account() {
  const [flash, setFlash] = useState(true);
  const productDescription = useRef();
  const router = useRouter();

  return (
    <div>
      <Mheader noSearch />
      <Carousel maw="100%" loop mx="auto" withIndicators>
        <Carousel.Slide>
          <img src="/1.jpg" className="w-[90%]" alt="logo" />
        </Carousel.Slide>
        <Carousel.Slide className="bg-red-200">2</Carousel.Slide>
        <Carousel.Slide className="bg-red-200">3</Carousel.Slide>
      </Carousel>

      <div className="p-6">
        <p className="font-semibold text-[1.1rem] mb-3">
          Ligo smartwatch waterproof
        </p>
        <div className="flex space-x-1">
          <p className="items-baseline mr-2">
            <IconStar
              color="#FFD700"
              fill="#FFD700"
              size={16}
              className="inline"
            />{" "}
            <strong>4.5</strong>/5 ( 12 reviews)
          </p>
          &bull;
          <Text c="dimmed" className="mr-2">
            123 sold
          </Text>
        </div>

        {flash && (
          <div className="border w-full border-red-700  mt-3">
            <div className="bg-red-700 p-2 flex justify-between">
              <div className="flex space-x-3">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path
                    fill="#FFA500"
                    d="M6.178 4c-.914-1.493-2.944-3-6.178-3v-1c4.011 0 6.415 2.11 7.314 4h6.159l10.527 10.625-9.375 9.375-10.625-10.581v-6.242l-.282-.128c-1.043-.476-2.226-1.015-3.718-1.015v-1c1.641 0 2.943.564 4 1.044v-2.078h2.178zm10.944 9.109c-.415-.415-.865-.617-1.378-.617-.578 0-1.227.241-2.171.804-.682.41-1.118.584-1.456.584-.361 0-1.083-.408-.961-1.218.052-.345.25-.697.572-1.02.652-.651 1.544-.848 2.276-.106l.744-.744c-.476-.476-1.096-.792-1.761-.792-.566 0-1.125.227-1.663.677l-.626-.627-.698.699.653.652c-.569.826-.842 2.021.076 2.938 1.011 1.011 2.188.541 3.413-.232.6-.379 1.083-.563 1.475-.563.589 0 1.18.498 1.078 1.258-.052.386-.26.763-.621 1.122-.451.451-.904.679-1.347.679-.418 0-.747-.192-1.049-.462l-.739.739c.463.458 1.082.753 1.735.753.544 0 1.087-.201 1.612-.597l.54.538.697-.697-.52-.521c.743-.896 1.157-2.209.119-3.247zm-9.405-7.109c-.051.445-.215.83-.49 1.114-.387.398-.797.57-1.227.599.008.932.766 1.685 1.699 1.685.938 0 1.699-.761 1.699-1.699 0-.932-.751-1.69-1.681-1.699z"
                  />
                </svg>
                <p className="text-white">Flash sale</p>
              </div>
              <Badge color="red" radius={0} size="lg">
                <IconClock className="inline mr-2" size={16} />
                02d :15h :12m
              </Badge>
            </div>
            <div className="p-2 flex items-baseline space-x-5">
              <h1 className="text-[1.4rem] font-semibold text-orange-500 tracking-tight">
                Ksh. 450
              </h1>
              <Text fz="xs" td="line-through">
                Ksh. 600
              </Text>
            </div>
          </div>
        )}

        {!flash && (
          <div className="p-2 flex items-baseline space-x-5">
            <h1 className="text-[1.4rem] font-semibold text-orange-500 tracking-tight">
              Ksh. 450
            </h1>
            <Text fz="xs" td="line-through">
              Ksh. 600
            </Text>
            <Badge radius={null} size="lg" color="orange">
              -20%
            </Badge>
          </div>
        )}

        <Divider />
        <Space h={30} />

        {/* Description */}
        <h1 className="text-[1.2rem] font-semibold tracking-tight mb-3">
          Product details
        </h1>
        <Space h={20} />
        <div ref={productDescription} className="p-3"></div>

        <Space h={50} />

        {/* Customers also viewed */}
        <h1 className="text-[1.2rem] font-semibold tracking-tight mb-3">
          You might also like
        </h1>
        <Space h={20} />
        <div className="flex overflow-x-auto gap-x-10 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
            <Mproduct key={product?.id} data={product} />
          ))}
        </div>

        <Space h={50} />

        {/* Seller information */}
        <h1 className="text-[1.2rem] font-semibold tracking-tight mb-3">
          Seller information
        </h1>
        <Space h={10} />
        <div className="flex space-x-8 ">
          <img src="/denri.webp" className="w-[90px] " alt="denri" />
          <div>
            <Text fw={600}>Denri Africa Stores</Text>
            <Space h={10} />
            <div className="grid grid-cols-3 w-full gap-8 ">
              <div className="col-span-1">
                <p className="items-baseline w-full text-center">
                  <IconStar
                    color="#FFD700"
                    fill="#FFD700"
                    size={16}
                    className="inline"
                  />{" "}
                  <strong>4.5</strong>/5
                </p>
                <Text fz="xs" c="dimmed">
                  {" "}
                  Performance
                </Text>
              </div>
              <div className="col-span-1">
                <p className="w-full text-center">100</p>
                <Text
                  fz="xs"
                  c="dimmed"
                  style={{ width: "100%", textAlign: "center" }}
                >
                  {" "}
                  Followers
                </Text>
              </div>
              <div className="col-span-1">
                <p className="w-full text-center">100</p>
                <Text
                  fz="xs"
                  c="dimmed"
                  style={{ width: "100%", textAlign: "center" }}
                >
                  {" "}
                  Products
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 w-full mt-4">
          <Button
            size="xs"
            variant="outline"
            color="orange"
            style={{ width: "50%" }}
            onClick={() => router.push(`/shop/1`)}
          >
            View store
          </Button>
          <Button size="xs" color="orange" style={{ width: "50%" }}>
            Follow
          </Button>
        </div>

        <Space h={50} />

        {/* Seller information */}
        <div className="flex justify-between mb-4">
          <h1 className="inline text-[1.2rem] font-semibold tracking-tight mb-3">
            Reviews
          </h1>
          <p className="items-baseline mr-2">
            <IconStar
              color="#FFD700"
              fill="#FFD700"
              size={16}
              className="inline"
            />{" "}
            <strong>4.5</strong>/5 ( 12 reviews)
          </p>
        </div>

        <div className="space-y-3">
          {[1, 2, 3].map((el) => (
            <Review key={el} />
          ))}
          <div className="pb-[70px]">
            <Button color="orange" fullWidth variant="subtle">
              See all &rarr;
            </Button>
          </div>
        </div>

        {/* End */}
      </div>
      <div className=" flex justify-between fixed bottom-0 w-full p-4 bg-white items-center">
        <Button.Group>
          <Button uppercase color="orange">
            Add to cart
          </Button>
          <Button variant="default" uppercase>
            message
          </Button>
        </Button.Group>
        <div className="space-x-3 flex">
          <Button
            color="orange"
            variant="subtle"
            size="lg"
            style={{ width: 36, height: 48 }}
            p={0}
          >
            <IconHeart />
          </Button>
          <Button
            color="orange"
            variant="subtle"
            size="lg"
            style={{ width: 36, height: 48 }}
            p={0}
          >
            <IconShare />
          </Button>
        </div>
      </div>
    </div>
  );
}

const Review = () => {
  return (
    <Card shadow="sm" padding="sm" radius="md" withBorder>
      <div className="flex justify-between mb-1">
        <div className="flex space-x-3 items-center">
          <Avatar radius="xl" color="orange">
            TM
          </Avatar>
          <div>
            <Text>Tim</Text>
            <p className="items-baseline mr-2 text-[0.7rem]">
              <IconStar
                color="#FFD700"
                fill="#FFD700"
                size={12}
                className="inline"
              />{" "}
              <strong>4.5</strong>/5
            </p>
          </div>
        </div>
        <div>
          <Text c="dimmed" fz="xs">
            {new Date().toDateString()}
          </Text>
        </div>
      </div>
      <Space h={10} />
      <Divider />
      <Space h={10} />
      <div className="mt-2">
        Perfect watch , good for swimming and classy too.
      </div>
    </Card>
  );
};
