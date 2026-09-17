import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Lightformer, Environment } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { sceneColors } from "@/lib/design-tokens";

function Core() {
  const group = useRef<THREE.Group>(null);
  const outer = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  const particles = useMemo(() => {
    const values = new Float32Array(168 * 3);
    for (let i = 0; i < 168; i += 1) {
      const radius = 3.1 + ((i * 17) % 31) / 18;
      const angle = i * 2.399963;
      const y = ((i * 29) % 101) / 12 - 4.2;
      values[i * 3] = Math.cos(angle) * radius;
      values[i * 3 + 1] = y;
      values[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return values;
  }, []);

  useFrame((state, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.12, 1 - Math.exp(-3 * delta));
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -pointer.x * 0.08, 1 - Math.exp(-3 * delta));
    }
    if (outer.current) outer.current.rotation.y -= delta * 0.18;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, pointer.x * 0.42, 1 - Math.exp(-2.4 * delta));
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, pointer.y * 0.28, 1 - Math.exp(-2.4 * delta));
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group} rotation={[0.2, -0.32, 0]}>
      <Float speed={1.25} rotationIntensity={0.18} floatIntensity={0.3}>
        <mesh>
          <icosahedronGeometry args={[1.42, 2]} />
          <meshPhysicalMaterial color={sceneColors.blue} emissive={sceneColors.blue} emissiveIntensity={0.3} roughness={0.2} metalness={0.4} wireframe transparent opacity={0.72} />
        </mesh>
        <mesh scale={0.68}>
          <icosahedronGeometry args={[1.42, 1]} />
          <meshPhysicalMaterial color={sceneColors.cyan} emissive={sceneColors.cyan} emissiveIntensity={0.7} roughness={0.25} metalness={0.18} transparent opacity={0.34} />
        </mesh>
      </Float>
      <mesh ref={outer} rotation={[Math.PI / 2.5, 0.2, 0]}>
        <torusGeometry args={[2.15, 0.012, 8, 150]} />
        <meshBasicMaterial color={sceneColors.cyan} transparent opacity={0.48} />
      </mesh>
      <mesh rotation={[0.22, Math.PI / 3, 0.7]}>
        <torusGeometry args={[2.72, 0.008, 8, 150]} />
        <meshBasicMaterial color={sceneColors.violet} transparent opacity={0.3} />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial color={sceneColors.line} size={0.024} transparent opacity={0.72} sizeAttenuation />
      </points>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 7.7], fov: 43 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 4, 5]} intensity={15} color={sceneColors.cyan} />
      <pointLight position={[-4, -2, 3]} intensity={9} color={sceneColors.violet} />
      <Core />
      <Environment>
        <Lightformer intensity={1.5} position={[0, 4, 2]} scale={[8, 8, 1]} />
        <Lightformer intensity={0.8} color={sceneColors.blue} position={[-4, 0, 0]} rotation-y={Math.PI / 2} scale={[6, 2, 1]} />
      </Environment>
    </Canvas>
  );
}