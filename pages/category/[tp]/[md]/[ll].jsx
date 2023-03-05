import Mheader from "../../../../components/Mheader";
import { useRouter } from "next/router";
import {
  Anchor,
  Breadcrumbs,
  Drawer,
  Space,
  UnstyledButton,
} from "@mantine/core";
import Mproduct from "../../../../components/Mproduct";
import { IconFilter } from "@tabler/icons";
import { useState } from "react";

export default function Category() {
  const router = useRouter();

  const [filterOpen, setFilterOpen] = useState(false);

  const items = Object.values(router?.query).map((item, index) => (
    <Anchor
      style={{ color: "black", cursor: "pointer" }}
      href={item?.href}
      key={index}
    >
      {item}
    </Anchor>
  ));

  return (
    <div>
      <Mheader />
      <Space h={15} />
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between">
          <Breadcrumbs className="ml-2">{items}</Breadcrumbs>
          <UnstyledButton onClick={() => setFilterOpen(true)}>
            <IconFilter />
          </UnstyledButton>
          <Drawer
            opened={filterOpen}
            position="right"
            onClose={() => setFilterOpen(false)}
            title={
              <div className="flex">
                <h1 className="text-[1.5rem] font-bold pt-8 tracking-tight">
                  Filter
                </h1>
              </div>
            }
          >
            {/* Drawer content */}
          </Drawer>
        </div>

        <Space h={40} />
        <div className="max-h-[calc(100vh-220px)] overflow-y-auto grid grid-cols-2 gap-5 gap-y-12">
          {[
            1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          ].map((product) => (
            <Mproduct key={product?.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
