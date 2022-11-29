import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
//@ts-ignore

function Cube(props) {
  const mesh = useRef();
  //@ts-ignore
  useFrame(() => (mesh.current.rotation.x += 0.01));
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? 1 : 1.1 });

  return (
    //@ts-ignore
    <animated.mesh
      ref={mesh}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      onClick={(event) => setActive(!active)}
      scale={scale}
      {...props}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "#08fdd8" : "#F14B67"} />
    </animated.mesh>
  );
}

function Animation3d() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube position={[-2.2, 0, 0]} />
    </Canvas>
  );
}

export default Animation3d;
