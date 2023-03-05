import {
  Avatar,
  Badge,
  Button,
  Drawer,
  Indicator,
  Input,
  Space,
  Tabs,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useState } from "react";
import Link from "next/link";
import McartItem from "./McartItem";
import { IconAdjustments, IconSearch, IconTrolley } from "@tabler/icons";

export default function Mheader() {
  const [cartOpen, setCartOpen] = useState(false);

  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <div className="p-3">
      <div className="flex justify-between mt-2 ">
        <div>logo</div>
        <div className="flex space-x-3">
          <Link href="/account">
            <UnstyledButton>
              <Avatar radius="xl" color="orange" />
            </UnstyledButton>
          </Link>

          <div className="h-[50px] w-[50px] mt-2 pl-3">
            <Indicator inline label={9} size={16} color="orange">
              <Button
                style={{
                  background: "transparent",
                  width: 25,
                  padding: 0,
                  height: 25,
                }}
                onClick={() => setCartOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.558 7l4.701-4.702c.199-.198.46-.298.721-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.883zm12.001 0h2.883l-4.701-4.702c-.199-.198-.46-.298-.721-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.534 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.233-.481.722-.786 1.256-.786h.642v-2z" />
                </svg>
              </Button>
            </Indicator>
          </div>
        </div>
      </div>
      <Space h={5} />
      <div className="flex space-x-3">
        <Input
          size="lg"
          variant="filled"
          rightSection={<IconSearch color="#d9d9d9" size={16} />}
          placeholder="Search product"
          className="w-[calc(100%-50px)]"
        />
        <Button
          style={{ background: "#152238", width: 50, padding: 0, height: 50 }}
        >
          <IconAdjustments size={24} />
        </Button>
      </div>

      {/* Cart drawer */}
      <Drawer
        opened={cartOpen}
        position="right"
        onClose={() => setCartOpen(false)}
        title={
          <div className="flex">
            <h1 className="text-[1.5rem] font-bold pt-8 tracking-tight">
              Orders
            </h1>
          </div>
        }
      >
        <Space h={10} />

        <Tabs color="orange" defaultValue="cart">
          <Tabs.List>
            <Tabs.Tab value="cart">
              <h1 className="font-semibold text-[1.2rem]">
                Cart <Badge color="orange">9</Badge>
              </h1>
            </Tabs.Tab>
            <Tabs.Tab value="in_processing">
              {" "}
              <h1 className="font-semibold text-[1.2rem]">In Processing</h1>
            </Tabs.Tab>
            <Tabs.Tab value="closed">
              {" "}
              <h1 className="font-semibold text-[1.2rem]">Closed</h1>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="cart" pt="xs">
            <div className="mt-2 max-h-[calc(100vh-340px)] overflow-x-auto">
              <div className="max-h-[calc(100vh-320px)]">
                {[1, 2, 3, 4, 5, 6, 7].map((order) => (
                  <McartItem key={order?.id} order={order} />
                ))}
              </div>
              <div className="px-4 fixed h-[180px] bg-[#152238] bottom-0 w-full text-white">
                <div className="h-[60px] items-baseline flex justify-between pt-4">
                  <Text c="dimmed" className="mt-4">
                    Subtotal
                  </Text>
                  <h1 className="text-[2rem] font-bold">Ksh. 2650</h1>
                </div>
                <Text className="mt-4">
                  Shop Ksh. 550 more to get free delivery 😊
                </Text>
                <Button
                  variant="white"
                  fullWidth
                  size="lg"
                  className="uppercase mt-4"
                  style={{ color: "#152238", fontWeight: "bold" }}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="in_processing" pt="xs">
            In processing
          </Tabs.Panel>

          <Tabs.Panel value="closed" pt="xs">
            Closed
          </Tabs.Panel>
        </Tabs>
      </Drawer>
      <Drawer opened={categoriesOpen} onClose={null} title={null}>
        {/* Drawer content */}
      </Drawer>
    </div>
  );
}
