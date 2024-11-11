import React from "react";
import { Canvas as CanvasModel } from "@react-three/fiber";
import { Center, Environment } from "@react-three/drei";
import Backdrop from "./Backdrop";
import Shirt from "./Shirt";
import CameraRig from "./CameraRig";

const Canvas = () => {
  return (
    <CanvasModel
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </CanvasModel>
  );
};

export default Canvas;
