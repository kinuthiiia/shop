import {
  Button,
  Card,
  Divider,
  Modal,
  Select,
  Space,
  Stepper,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowLeft, IconMapPin } from "@tabler/icons";
import { useState } from "react";
import Mheader from "../components/Mheader";

export default function Checkout() {
  const [active, setActive] = useState(1);

  return (
    <div>
      <Mheader noSearch />
      <div className="flex w-full justify-between px-5 mt-3">
        <UnstyledButton onClick={() => router.back()}>
          <IconArrowLeft />
        </UnstyledButton>
        <h1 className="text-[1.5rem] font-bold tracking-tight mb-3">
          Checkout
        </h1>
      </div>
      <Space h={20} />

      <div className="px-5">
        <Stepper
          color="orange"
          active={active}
          onStepClick={setActive}
          orientation="vertical"
        >
          <Stepper.Step label="SHIPPING" description={<Shipping />} />
          <Stepper.Step label="ORDER REVIEW" description={<OrderReview />} />
          <Stepper.Step label="PAYMENT" description={<Payment />} />
        </Stepper>
      </div>
    </div>
  );
}

const Shipping = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="p-5 w-[calc(100vw-90px)]">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <div>
          <Text fw={600}>Steve Kinuthia</Text>

          <Text c="dimmed" fz="sm">
            kinut.gm@gmail.com
          </Text>
          <Text fz="sm">0748920306</Text>
          <Text fz="sm" mt={5}>
            <IconMapPin style={{ display: "inline" }} stroke={0.7} size={16} />{" "}
            Juja , Kiambu , Kenya
          </Text>
        </div>
      </Card>
      <Button
        variant="outline"
        size="xs"
        onClick={open}
        fullWidth
        color="orange"
        mt={12}
      >
        Change address
      </Button>
      <Modal opened={opened} onClose={close} title="Change address" centered>
        <Space h={20} />
        <Select
          label="Default address"
          description="Choose a default address"
          placeholder="Your default address"
          data={[
            { value: 113, label: "Juja ,Kiambu , Kenya" },
            { value: 115, label: "Ruiru , Kiambu , Kenya" },
            { value: 117, label: "Kiambu , Kiambu , Kenya" },
          ]}
        />
        <Space h={30} />
        <Button color="orange" fullWidth uppercase>
          Save
        </Button>
      </Modal>
    </div>
  );
};

const Payment = () => {
  return (
    <div className="p-5 w-[calc(100vw-90px)]">
      Pay now using:
      <Space h={15} />
      <Button size="lg" fullWidth variant="light" color="gray">
        <img src="/MPESA_LOGO.png" alt="" />
      </Button>
    </div>
  );
};

const OrderReview = () => {
  return (
    <div className="p-5 w-[calc(100vw-90px)] space-y-3">
      {[1, 2, 3, 4, 5].map((el) => (
        <Product key={el} />
      ))}
      <Divider />

      <Text color="black" fw={700}>
        Summary
      </Text>
      <div className="flex justify-between">
        <Text>Total Items Cost</Text>
        <Text c="black" fw={500}>
          Ksh. 5,000
        </Text>
      </div>
      <div className="flex justify-between">
        <Text>Total Shipping</Text>
        <Text c="black" fw={500}>
          Ksh.268
        </Text>
      </div>
      <div className="flex justify-between">
        <Text>Promo Code</Text>
        <Text c="orange" fw={500}>
          -Ksh.1000
        </Text>
      </div>
      <hr />
      <div className="flex justify-between">
        <Text>Grand Total</Text>
        <Text c="black" fw={500} fz="xl">
          Ksh.4,268
        </Text>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div className="flex space-x-4">
      <img src="/1.jpg" alt="prod" className="w-[80px] h-[80px]" />
      <div>
        <Text c="dimmed" fz="xs">
          Lige smartwatch waterproof
        </Text>
        <Text fw={500} color="black">
          Ksh . 450
        </Text>
        <div className="flex space-x-5">
          <div className="w-[30px] h-[30px] bg-red-600 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};
