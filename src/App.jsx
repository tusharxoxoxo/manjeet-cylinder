import React from 'react'
import { Canvas } from '@react-three/fiber'
import { defaults } from 'autoprefixer';
import "./style.css"
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Scene from './Scene';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

export const App = () => {
    return (
        <>
            <Canvas flat camera={{ fov: 75 }}>
                <OrbitControls />
                <ambientLight />
                <Scene />
                <EffectComposer>
                    <Bloom
                        mipmapBlur
                        intensity={7.0}
                        luminanceThreshold={0}
                        luminanceSmoothing={0}
                    />
                    <ToneMapping adaptive />
                </EffectComposer>
            </Canvas>

            <div className='w-full bg-black py-32'>
                <h1>yoooooooooooooooooooo</h1>
            </div>
        </>
    );
}

export default App;
