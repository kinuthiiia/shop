import { Badge, Card, Stepper, Text } from "@mantine/core";
import { IconStar } from "@tabler/icons";
import { useState } from "react";

export default function Mprocessing() {
  const [active, setActive] = useState(1);

  return (
    <Card shadow="lg">
      <div className="h-[120px] mb-4 flex space-x-4">
        <img src="/1.jpg" alt="product" className="h-full" />
        <div className="w-full">
          <Text c="dimmed">Ligo smartwatch waterproof</Text>
          <div className="flex items-baseline space-x-2">
            <h1 className="text-[1.4rem] font-semibold text-orange-500 tracking-tight">
              Ksh. 450
            </h1>
            <Text fz="xs" td="line-through">
              Ksh. 600
            </Text>
          </div>
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
                <strong>4.5</strong>/5
              </p>
            </div>
          </div>
        </div>
      </div>
      <Stepper
        color="orange"
        size={"md"}
        active={active}
        onStepClick={setActive}
        orientation="vertical"
      >
        <Stepper.Step
          label="Order placed"
          description={
            <div>
              Order placed on{" "}
              <Badge color="orange" size="md">
                {new Date().toDateString()}
              </Badge>
            </div>
          }
        />
        <Stepper.Step
          label="Packaged"
          description={
            <div>
              Product packaged on{" "}
              <Badge color="orange" size="md">
                {new Date().toDateString()}
              </Badge>
            </div>
          }
        />
        <Stepper.Step
          label="Shipped"
          description={
            <div>
              Product shipped out on{" "}
              <Badge color="orange" size="md">
                {new Date().toDateString()}
              </Badge>
            </div>
          }
        />
        <Stepper.Step
          label="Arrived"
          description={
            <div>
              Product ready for collection on{" "}
              <Badge color="orange" size="md">
                {new Date().toDateString()}
              </Badge>
            </div>
          }
        />
      </Stepper>
    </Card>
  );
}
