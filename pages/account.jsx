import {
  Accordion,
  Button,
  Modal,
  Space,
  Text,
  TextInput,
  Input,
  UnstyledButton,
  Select,
  PasswordInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowLeft,
  IconAt,
  IconLocation,
  IconMapPin,
  IconStar,
  IconUpload,
} from "@tabler/icons";
import Link from "next/link";
import Mheader from "../components/Mheader";
import Mproduct from "../components/Mproduct";
import { useId } from "@mantine/hooks";
import { IMaskInput } from "react-imask";
import { uploader } from "./_app"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";

export default function Account() {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedPassword, { openPassword, closePassword }] =
    useDisclosure(false);

  const id = useId();

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

        <Button size="xs" color="orange" fullWidth onClick={open}>
          Edit
        </Button>
        <Modal opened={opened} onClose={close} title="Edit profile" centered>
          {/* Modal content */}
          <div className="flex space-x-2 items-baseline justify-center">
            <img src="/denri.webp" alt="image" className="w-[90px] h-[90px]" />
            <UploadButton
              uploader={uploader}
              options={{ multi: false }}
              onComplete={(files) =>
                alert(files.map((x) => x.fileUrl).join("\n"))
              }
            >
              {({ onClick }) => (
                <Button
                  color="orange"
                  variant="outline"
                  onClick={onClick}
                  p={0}
                  w={36}
                  h={36}
                >
                  <IconUpload size={16} />
                </Button>
              )}
            </UploadButton>
          </div>
          <div className="space-y-4">
            <TextInput
              placeholder="Your first name"
              label="First name"
              withAsterisk
            />
            <TextInput
              placeholder="Your last name"
              label="Last name"
              withAsterisk
            />
            <TextInput
              placeholder="Your email"
              label="Email"
              withAsterisk
              icon={<IconAt size={16} color="gray" />}
            />
            <Input.Wrapper
              id={id}
              label="Your phone"
              required
              maw={320}
              mx="auto"
            >
              <Input
                component={IMaskInput}
                mask="+254 (000) 000-000"
                id={id}
                placeholder="Your phone"
              />
            </Input.Wrapper>
            <Select
              label="Default address"
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
          </div>
        </Modal>
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((following) => (
                  <div
                    key={following}
                    className="min-w-[90px] min-h-[120px] space-y-4"
                  >
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
            <Accordion.Panel>
              {[1, 2, 3, 4, 5].map((el) => (
                <div key={el} className="flex w-full justify-between mb-3">
                  <div>
                    <span className="flex items-baseline">
                      <Text>Juja</Text>
                      {el == 1 && (
                        <Text c="orange" fz="xs" ml={12}>
                          Default
                        </Text>
                      )}
                    </span>
                    <Text fz="xs" c="dimmed">
                      Kiambu , Kenya
                    </Text>
                  </div>
                  <Button color="orange" size="xs" variant="outline">
                    Remove
                  </Button>
                </div>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>

      <Space h={20} />
      <div className="px-5 space-y-3">
        <Button
          size="xs"
          color="orange"
          fullWidth
          variant="subtle"
          onClick={openPassword}
        >
          Change password
        </Button>
        <Button size="xs" color="orange" fullWidth variant="outline">
          Log out
        </Button>

        <Modal
          opened={openedPassword}
          onClose={closePassword}
          title="Change password"
          centered
        >
          {/* Modal content */}

          <div className="space-y-4">
            <PasswordInput
              placeholder="Your current password"
              label="Current password"
              withAsterisk
            />
            <PasswordInput
              placeholder="Your new password"
              label="New password"
              description="Password must include at least one letter, number and special character"
              withAsterisk
            />
            <PasswordInput
              placeholder="Your new pasword"
              label="Confirm password"
              withAsterisk
            />
            <Space h={30} />
            <Button color="orange" fullWidth uppercase>
              Save
            </Button>
          </div>
        </Modal>
      </div>

      <Space h={20} />
    </div>
  );
}
