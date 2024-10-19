"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

import Image from "next/image";
import React from "react";

const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="bg-white h-16 flex items-center shadow-lg">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between w-full px-4">
        <div className="flex items-center gap-4">
          {/* <p className="text-3xl font-medium text-primary">LandTick</p> */}
          <Image src="/logo-navbar.png" alt="logo" width={200} height={50} />
        </div>

        <div className="flex items-center gap-4">
          <button className="border-2 border-gradientPrimary rounded-lg w-28 h-10 text-primary font-bold hover:bg-gradient-primary hover:text-white hover:border-gradientPrimary transition duration-200">
            <p className="bg-clip-text text-gradient-primary">DAFTAR</p>
          </button>
          <Button
            radius="sm"
            className="bg-gradient-primary text-white w-28 text-base font-bold"
            onPress={onOpen}
          >
            LOGIN
          </Button>
        </div>
      </div>

      {/* modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <p>adsa</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Navbar;
