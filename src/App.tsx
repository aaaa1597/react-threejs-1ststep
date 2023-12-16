import React, { useEffect, useRef } from 'react';
import './App.css';
import * as THREE from 'three';

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
    }, [])

  return (
    <div className="App">
        <canvas width={DISPLAY_WIDTH} height={DISPLAY_HEIGHT} ref={canvasRef} />
      hello world!!
    </div>
  );
}

export default App;
