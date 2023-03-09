import { Carousel } from "@mantine/carousel";
import { Affix, Button, Spoiler, Text, Transition, rem } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons";
import Link from "next/link";
import Mheader from "../components/Mheader";

export default function Feed() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <Mheader noSearch />
      <div className="pt-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
          <Post key={el} />
        ))}
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

const Post = () => {
  return (
    <>
      <div>
        <Link href={`/shop/id`}>
          <span className="flex space-x-4 ml-4 items-center">
            <img
              src="/denri.webp"
              alt="denri"
              className="h-[36px] rounded-full"
            />
            <Text p={12} pl={0} fw={700}>
              Denri Stores Africa
            </Text>
          </span>
        </Link>
        <Carousel maw="100%" loop mx="auto" withIndicators height={300}>
          <Carousel.Slide className="bg-red-200">1</Carousel.Slide>
          <Carousel.Slide className="bg-red-200">2</Carousel.Slide>
          <Carousel.Slide className="bg-red-200">3</Carousel.Slide>
        </Carousel>
      </div>
      <div className="p-3 flex">
        <Spoiler maxHeight={50} showLabel="more" hideLabel="less">
          <Text size="sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
        </Spoiler>
      </div>
      <br />
    </>
  );
};
