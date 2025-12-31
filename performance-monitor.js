// Performance monitoring script
// Add this to your browser console to monitor performance

const performanceMonitor = {
  start: () => {
    console.log('🔍 Starting Performance Monitor...');
    
    // Monitor memory usage
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        console.log(`💾 Memory Usage:`, {
          used: `${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB`,
          total: `${Math.round(memory.totalJSHeapSize / 1024 / 1024)}MB`,
          limit: `${Math.round(memory.jsHeapSizeLimit / 1024 / 1024)}MB`
        });
      }, 5000);
    }
    
    // Monitor frame rate
    let frames = 0;
    let lastTime = performance.now();
    
    const countFrames = () => {
      frames++;
      const currentTime = performance.now();
      if (currentTime - lastTime >= 1000) {
        console.log(`🎬 FPS: ${frames}`);
        frames = 0;
        lastTime = currentTime;
      }
      requestAnimationFrame(countFrames);
    };
    
    countFrames();
    
    // Monitor WebGL contexts
    const canvas = document.querySelectorAll('canvas');
    console.log(`🎨 WebGL Canvases: ${canvas.length}`);
    
    // Monitor Three.js objects
    const threeObjects = document.querySelectorAll('[data-three]');
    console.log(`📦 Three.js Objects: ${threeObjects.length}`);
  },
  
  stop: () => {
    console.log('⏹️ Performance Monitor Stopped');
  }
};

// Usage: performanceMonitor.start()
// Stop: performanceMonitor.stop()

console.log('Performance Monitor loaded. Run: performanceMonitor.start()');
