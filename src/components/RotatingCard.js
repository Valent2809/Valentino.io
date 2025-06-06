"use client"

import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Environment, Text } from "@react-three/drei"
import { useRef, useState } from "react"
import { TextureLoader } from "three"

function Card() {
  const cardRef = useRef()
  const [hovered, setHovered] = useState(false)
  const profileTexture = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/Face.JPG`);
  
  useFrame((state) => {
    if (cardRef.current && !hovered) {
      // Gentle auto-rotation when not being interacted with
      cardRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      cardRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={cardRef} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      {/* Main Card */}
      <mesh>
        <boxGeometry args={[3, 4, 0.1]} />
        <meshStandardMaterial color={hovered ? "#f8fafc" : "#ffffff"} metalness={0.1} roughness={0.1} />
      </mesh>

      {/* Card Border */}
      <mesh position={[0, 0, 0.051]}>
        <boxGeometry args={[3.1, 4.1, 0.02]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Profile Picture Area Background */}
      <mesh position={[0, 0.8, 0.06]}>
        <boxGeometry args={[2, 2, 0.01]} />
        <meshStandardMaterial map={profileTexture} color="#e5e7eb" />
      </mesh>

      {/* Name Section */}
      <mesh position={[0, -0.5, 0.06]}>
        <boxGeometry args={[2.5, 0.3, 0.01]} />
        <meshStandardMaterial color="#1e40af" />
        <Text
          position={[0, 0, 0.01]} // slightly above the box surface
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Valentino Ong
        </Text>
      </mesh>

      {/* Title Section */}
      <mesh position={[0, -0.9, 0.06]}>
        <boxGeometry args={[2.2, 0.25, 0.01]} />
        <meshStandardMaterial color="#6366f1" />
        <Text
          position={[0, 0, 0.01]} // slightly above the box surface
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Graduate SMU CS
        </Text>
      </mesh>

      {/* Company Section */}
      <mesh position={[0, -1.25, 0.06]}>
        <boxGeometry args={[1.8, 0.2, 0.01]} />
        <meshStandardMaterial color="#8b5cf6" />
        <Text
          position={[0, 0, 0.01]} // slightly above the box surface
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          AI & Biz Analyst Major
        </Text>
      </mesh>

      {/* Decorative Elements */}
      <mesh position={[-1.2, -1.6, 0.06]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
      </mesh>

      <mesh position={[0, -1.6, 0.06]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.3} />
      </mesh>

      <mesh position={[1.2, -1.6, 0.06]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.3} />
      </mesh>
    </group>
  )
}

export default function RotatingCard() {
  return (
    <div className="w-64 h-64 lg:w-80 lg:h-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} castShadow />
        <pointLight position={[-5, -5, 5]} intensity={0.2} color="#3b82f6" />
        <Card />

        <Environment preset="sunset" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.2}
          // Restrict rotation angles to prevent flipping backwards
          minPolarAngle={Math.PI / 4} // 45 degrees from top
          maxPolarAngle={(Math.PI * 3) / 4} // 135 degrees
          minAzimuthAngle={-Math.PI / 4} // -45 degrees left
          maxAzimuthAngle={Math.PI / 4} // 45 degrees right
        />
      </Canvas>
    </div>
  )
}
