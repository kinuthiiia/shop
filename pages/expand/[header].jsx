import Mheader from "../../components/Mheader";
import { useRouter } from "next/router";
import {
  Affix,
  Button,
  Space,
  Transition,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { IconArrowLeft, IconArrowUp } from "@tabler/icons";
import Mproduct from "../../components/Mproduct";
import { useWindowScroll } from "@mantine/hooks";

export default function Expand() {
  const router = useRouter();
  const [scroll, scrollTo] = useWindowScroll();

  const toTitleCase = (string) => {
    return string
      ?.split(" ")
      .map((title) => {
        return title?.replace(title[0], title[0]?.toUpperCase());
      })
      .join(" ");
  };

  return (
    <div>
      <Mheader />
      <div className="flex w-full justify-between px-5 mt-3">
        <UnstyledButton onClick={() => router.back()}>
          <IconArrowLeft />
        </UnstyledButton>
        <h1 className="text-[1.5rem] font-bold tracking-tight mb-3">
          {toTitleCase(router?.query?.header?.replace("_", " "))}
        </h1>
      </div>
      <Space h={20} />
      <div className="p-5 overflow-y-auto grid grid-cols-2 gap-5 gap-y-12">
        {[
          1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((product) => (
          <Mproduct key={product?.id} />
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
