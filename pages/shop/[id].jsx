import { Carousel } from "@mantine/carousel";
import { Affix, Button, Space, Text, Transition, rem } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp, IconStar } from "@tabler/icons";
import Mheader from "../../components/Mheader";
import Mproduct from "../../components/Mproduct";

export default function Shop() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div>
      <Mheader noSearch />

      {/* Shop Info */}
      <div className="p-6 pb-0">
        <div className="flex space-x-8 ">
          <img src="/denri.webp" className="w-[90px] " alt="denri" />
          <div className="my-3]">
            <Text fw={600}>Denri Africa Stores</Text>
            <Space h={10} />
            <div className="grid grid-cols-3 w-full gap-4">
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
          <Button size="xs" color="orange" fullWidth variant="outline">
            Message
          </Button>
          <Button size="xs" color="orange" fullWidth>
            Follow
          </Button>
        </div>
        <div className="mt-4">
          <Text fz="sm" c="dimmed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit,
            itaque sequi, dolorum expedita reprehenderit error sint amet est
            iusto voluptate repudiandae dignissimos unde doloribus
            necessitatibus? Porro animi velit magni!
          </Text>
        </div>
      </div>

      <div className="p-5">
        <div>
          <Carousel maw="100%" loop mx="auto" withIndicators height={200}>
            <Carousel.Slide className="bg-red-200">1</Carousel.Slide>
            <Carousel.Slide className="bg-red-200">2</Carousel.Slide>
            <Carousel.Slide className="bg-red-200">3</Carousel.Slide>
          </Carousel>
        </div>
        <Space h={25} />
        <div className=" overflow-y-auto grid grid-cols-2 gap-5 gap-y-12">
          {[
            1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          ].map((product) => (
            <Mproduct key={product?.id} />
          ))}
        </div>
      </div>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size="1rem" />}
              style={transitionStyles}
              color="orange"
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </div>
  );
}
