import { Accordion, Button, Space, Text, UnstyledButton } from "@mantine/core";
import {
  IconArrowLeft,
  IconLocation,
  IconMapPin,
  IconStar,
} from "@tabler/icons";
import Link from "next/link";
import Mheader from "../components/Mheader";
import Mproduct from "../components/Mproduct";

export default function Account() {
  return (
    <div>
      <Mheader noSearch />
      <div className="flex w-full justify-between px-5 mt-3">
        <UnstyledButton onClick={() => router.back()}>
          <IconArrowLeft />
        </UnstyledButton>
        <h1 className="text-[1.5rem] font-bold tracking-tight mb-3">Account</h1>
      </div>
      <Space h={20} />

      <div className="px-5 space-y-3">
        <div className="flex space-x-8 ">
          <img src="/denri.webp" className="w-[90px] h-[90px] " alt="denri" />
          <div className="my-3]">
            <Text fw={600}>Steve Kinuthia</Text>

            <Text c="dimmed" fz="sm">
              kinut.gm@gmail.com
            </Text>
            <Text fz="sm">0748920306</Text>
            <Text fz="sm" mt={5}>
              <IconMapPin
                style={{ display: "inline" }}
                stroke={0.7}
                size={16}
              />{" "}
              Juja , Kiambu , Kenya
            </Text>
          </div>
        </div>
        <Button size="xs" color="orange" fullWidth>
          Edit
        </Button>
      </div>

      <Space h={20} />
      <div className="px-5">
        <Accordion variant="separated" defaultValue="wishlist">
          <Accordion.Item value="wishlist">
            <Accordion.Control>
              <h2 className="text-[1.2rem] font-semibold">Wishlist</h2>
            </Accordion.Control>
            <Accordion.Panel>
              <div className="flex overflow-x-auto gap-x-10">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
                  <Mproduct key={product?.id} data={product} />
                ))}
              </div>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="following">
            <Accordion.Control>
              <h2 className="text-[1.2rem] font-semibold">Following</h2>
            </Accordion.Control>
            <Accordion.Panel>
              <div className="flex overflow-x-auto gap-x-10">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
                  <div className="min-w-[90px] min-h-[120px] space-y-4">
                    <Link href="/shop/1">
                      <img
                        src="/denri.webp"
                        className="min-h-[90px] "
                        alt="denri"
                      />
                    </Link>

                    <Button
                      size="xs"
                      color="orange"
                      fullWidth
                      variant="outline"
                    >
                      Unfollow
                    </Button>
                  </div>
                ))}
              </div>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="address_book">
            <Accordion.Control>
              <h2 className="text-[1.2rem] font-semibold">Address Book</h2>
            </Accordion.Control>
            <Accordion.Panel></Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="notifications">
            <Accordion.Control>
              <h2 className="text-[1.2rem] font-semibold">Notifications</h2>
            </Accordion.Control>
            <Accordion.Panel></Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
