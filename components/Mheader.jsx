import {
  Avatar,
  Badge,
  Button,
  Drawer,
  Indicator,
  Input,
  NavLink,
  Space,
  Tabs,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useState } from "react";
import Link from "next/link";
import McartItem from "./McartItem";
import {
  IconAdjustments,
  IconRss,
  IconSearch,
  IconShoppingCart,
  IconTrolley,
} from "@tabler/icons";
import Mprocessing from "./Mprocessing";
import Mclosed from "./Mclosed";

export default function Mheader({ noSearch }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const categories = [
    {
      label: "Thrifts",
      ml: [
        {
          label: "Men",
          ll: [
            {
              label: "Shoes",
              id: 1,
            },
            {
              label: "Suits",
              id: 2,
            },
            {
              label: "Bags",
              id: 3,
            },
          ],
        },
      ],
    },
    {
      label: "Electronics",
      ml: null,
    },
    {
      label: "Home appliances & Decor",
      ml: null,
    },
    {
      label: "Sports & Outdoor",
      ml: null,
    },
    {
      label: "Health, Beauty & Hair",
      ml: null,
    },
    {
      label: "Automobile & Parts",
      ml: null,
    },
    {
      label: "Tools & Industrial",
      ml: null,
    },
  ];

  return (
    <div className="p-3">
      <div className="flex justify-between mt-2 ">
        <Link href="/">
          <img src="/ibis_logo.png" className="h-[50px]" alt="logo" />
        </Link>
        <div className="flex space-x-4">
          <Link href="/feed">
            <UnstyledButton>
              <IconRss color="orange" size={30} />
            </UnstyledButton>
          </Link>
          <Link href="/account">
            <UnstyledButton>
              <Avatar radius="xl" color="orange">
                SK
              </Avatar>
            </UnstyledButton>
          </Link>

          <Indicator
            style={{ marginTop: 6 }}
            inline
            label={8}
            size={16}
            color="orange"
          >
            <UnstyledButton
              style={{
                padding: 0,

                display: "flex",
              }}
              onClick={() => setCartOpen(true)}
            >
              <IconShoppingCart color="orange" size={28} />
            </UnstyledButton>
          </Indicator>
        </div>
      </div>

      {!noSearch && (
        <>
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
              onClick={() => setCategoriesOpen(true)}
              style={{
                background: "#152238",
                width: 50,
                padding: 0,
                height: 50,
              }}
            >
              <IconAdjustments size={24} />
            </Button>
          </div>
        </>
      )}

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
              <h1 className="font-semibold text-[1rem]">
                Cart <Badge color="orange">9</Badge>
              </h1>
            </Tabs.Tab>
            <Tabs.Tab value="in_processing">
              {" "}
              <h1 className="font-semibold text-[1rem]">In Processing</h1>
            </Tabs.Tab>
            <Tabs.Tab value="closed">
              {" "}
              <h1 className="font-semibold text-[1rem]">Closed</h1>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="cart" pt="xs">
            <div className="mt-2 max-h-[calc(100vh-340px)] overflow-x-auto">
              <div className="max-h-[calc(100vh-320px)] space-y-8 mb-[50px]">
                {[1, 2, 3, 4, 5, 6, 7].map((order) => (
                  <McartItem key={order?.id} order={order} />
                ))}
              </div>
              <div className="px-4 fixed h-[180px] bg-[#152238] bottom-0 w-[92%] text-white">
                <div className="h-[60px] items-baseline flex justify-between pt-4">
                  <Text c="dimmed" className="mt-4">
                    Subtotal
                  </Text>
                  <h1 className="text-[2rem] font-bold">Ksh. 2650</h1>
                </div>
                <Text className="mt-4" size="sm">
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
            <div className="mt-2 max-h-[calc(100vh-180px)] overflow-x-auto">
              <div className="max-h-[calc(100vh-160px)] space-y-4 mb-[50px]">
                {[1, 2, 3, 4, 5, 6, 7].map((order) => (
                  <Mprocessing key={order?.id} order={order} />
                ))}
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="closed" pt="xs">
            <div className="mt-2 max-h-[calc(100vh-180px)] overflow-x-auto">
              <div className="max-h-[calc(100vh-160px)] space-y-4 mb-[50px]">
                {[1, 2, 3, 4, 5, 6, 7].map((order) => (
                  <Mclosed key={order?.id} order={order} />
                ))}
              </div>
            </div>
          </Tabs.Panel>
        </Tabs>
      </Drawer>
      <Drawer
        opened={categoriesOpen}
        position="right"
        onClose={() => setCategoriesOpen(false)}
        title={
          <div className="flex">
            <h1 className="text-[1.5rem] font-bold pt-8 tracking-tight">
              Categories
            </h1>
          </div>
        }
      >
        {/* Drawer content */}
        <Space h={30} />

        {categories.map((category, i) => (
          <NavLink
            key={i}
            label={
              <h2 className="font-bold text-gray-600">{category?.label}</h2>
            }
            childrenOffset={28}
          >
            {category?.ml?.map((sub_category, j) => (
              <NavLink key={j} label={sub_category?.label} childrenOffset={28}>
                {sub_category?.ll?.map((mini_category, k) => (
                  <NavLink
                    key={k}
                    label={mini_category?.label}
                    component="a"
                    href="/category/clothing/men/shoes"
                  />
                ))}
              </NavLink>
            ))}
          </NavLink>
        ))}
      </Drawer>
    </div>
  );
}
