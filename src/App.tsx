import React, { useEffect, useRef } from 'react';
import './App.css';
import * as THREE from 'three';
import { render } from '@testing-library/react';

// サイズを指定
const DISPLAY_WIDTH  = 960;
const DISPLAY_HEIGHT = 540;

const App = () => {
  const canvasRef   = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
        //レンダラーを作成
        const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current??undefined,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(DISPLAY_WIDTH, DISPLAY_HEIGHT);

      // シーンを作成
      const scene = new THREE.Scene();

      // カメラを作成
      const camera = new THREE.PerspectiveCamera(45, DISPLAY_WIDTH / DISPLAY_HEIGHT);
      camera.position.set(0, 0, +1000);

      // 箱を作成
      const geometry = new THREE.BoxGeometry(400, 400, 400);
      const material = new THREE.MeshNormalMaterial();
      const box = new THREE.Mesh(geometry, material);
      scene.add(box);
    }, [])

  return (
    <div className="App">
        <canvas width={DISPLAY_WIDTH} height={DISPLAY_HEIGHT} ref={canvasRef} />
      hello world!!
    </div>
  );
}

export default App;
