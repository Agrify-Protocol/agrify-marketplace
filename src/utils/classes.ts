import { ToastPosition } from "@chakra-ui/react";

export class ToastData {
  title;
  description;
  status;
  duration;
  isClosable;
  position: ToastPosition;

  constructor(title: string, description: string, status: StatusTypes) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.duration = 5000;
    this.isClosable = true;
    this.position = "top-right";
  }
}

type StatusTypes = "success" | "error" | "warning" | "info" | "loading";
