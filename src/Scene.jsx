import { defaults } from 'autoprefixer'
import React, { useRef } from 'react'
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from "three"
import { useFrame } from '@react-three/fiber';

export const Scene = () => {
//    let tex = useTexture("./../smallestai.jpeg");
let tex = useTexture("./../smallestai.jpeg");
    //    tex.needsUpdate = true;
    let scene = useRef(null);
    useFrame((state, delta) => {
        scene.current.rotation.y += delta * 0.2;
    });


    return (
        <group rotation={[0, 1.4, 0.3]}>
            <mesh ref={scene} >
                <cylinderGeometry args={[1.5, 1.5, 2, 60, 60, true]} />
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

export default Scene;
