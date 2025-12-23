import React, { useEffect, useRef, useState } from 'react'

const Experience = () => {
  // Carousel logic
  const trackRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const animationRef = useRef(null)
  const positionRef = useRef(0)
  const speedRef = useRef(1.5)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const dragStartPositionRef = useRef(0)

  // Wave animation canvas
  const canvasRef = useRef(null)
  
  // Actual images
  const images = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Graduation
    "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Learning
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Classroom
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Collaboration
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Study group
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Teamwork
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Online learning
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Workshop
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Creative session
    "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Innovation lab
  ]

  const duplicatedImages = [...images, ...images]

  // Wave animation effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    
    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw multiple layers of waves
      const waveLayers = [
        { amplitude: 20, frequency: 0.008, speed: 0.02, color: 'rgba(56, 189, 248, 0.15)' },
        { amplitude: 25, frequency: 0.012, speed: 0.015, color: 'rgba(56, 189, 248, 0.2)' },
        { amplitude: 30, frequency: 0.01, speed: 0.025, color: 'rgba(14, 165, 233, 0.25)' },
        { amplitude: 35, frequency: 0.006, speed: 0.018, color: 'rgba(14, 165, 233, 0.15)' }
      ]
      
      waveLayers.forEach((wave, index) => {
        ctx.beginPath()
        ctx.strokeStyle = wave.color
        ctx.lineWidth = 3
        
        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 1.5 + 
                    Math.sin(x * wave.frequency + time * wave.speed + index) * wave.amplitude +
                    Math.sin(x * wave.frequency * 0.7 + time * wave.speed * 1.3) * (wave.amplitude * 0.5)
          
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        
        ctx.stroke()
      })
      
      time += 0.05
      animationId = requestAnimationFrame(drawWaves)
    }
    
    drawWaves()
    
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  // Carousel animation
  useEffect(() => {
    const animate = () => {
      if (trackRef.current && !isDraggingRef.current) {
        positionRef.current -= speedRef.current
        
        const trackWidth = trackRef.current.scrollWidth / 2
        if (Math.abs(positionRef.current) >= trackWidth) {
          positionRef.current = 0
        }
        
        trackRef.current.style.transform = `translateX(${positionRef.current}px)`
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Carousel event handlers
  const handleMouseDown = (e) => {
    e.preventDefault()
    isDraggingRef.current = true
    setIsDragging(true)
    startXRef.current = e.clientX || e.touches[0].clientX
    dragStartPositionRef.current = positionRef.current
    speedRef.current = 0
  }

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return
    
    e.preventDefault()
    const currentX = e.clientX || e.touches[0].clientX
    const diffX = currentX - startXRef.current
    
    positionRef.current = dragStartPositionRef.current + diffX
    
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth / 2
      
      if (positionRef.current > trackWidth) {
        positionRef.current -= trackWidth
        dragStartPositionRef.current -= trackWidth
      } else if (positionRef.current < -trackWidth) {
        positionRef.current += trackWidth
        dragStartPositionRef.current += trackWidth
      }
      
      trackRef.current.style.transform = `translateX(${positionRef.current}px)`
      trackRef.current.style.cursor = 'grabbing'
    }
  }

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return
    
    isDraggingRef.current = false
    setIsDragging(false)
    speedRef.current = 1.5
    
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseEnter = () => {
    if (!isDraggingRef.current) {
      speedRef.current = 0
    }
  }

  const handleMouseLeave = () => {
    if (!isDraggingRef.current) {
      speedRef.current = 1.5
    }
  }

  // Global event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e)
    const handleGlobalMouseUp = () => handleMouseUp()

    window.addEventListener('mousemove', handleGlobalMouseMove)
    window.addEventListener('mouseup', handleGlobalMouseUp)
    window.addEventListener('touchmove', handleGlobalMouseMove)
    window.addEventListener('touchend', handleGlobalMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('mouseup', handleGlobalMouseUp)
      window.removeEventListener('touchmove', handleGlobalMouseMove)
      window.removeEventListener('touchend', handleGlobalMouseUp)
    }
  }, [])

  return (
    <div className="transformational-learning-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="content-container">
          <div className="content-overlay">
            <div className="title-container">
              <h1 className="main-title">
                <span className="title-line">TRANSFORMATIONAL</span>
                <span className="title-line">LEARNING</span>
              </h1>
              
              <h2 className="subtitle">
                <span className="subtitle-line">Extraordinary</span>
                <span className="subtitle-line">Experiences</span>
              </h2>
            </div>
            
            <div className="description-container">
              <p className="description">
                Immersive learning programs designed to <span className="highlight">ignite creativity</span>, 
                <span className="highlight"> nurture deep thinking</span>,
                and <span className="highlight">build lasting connections</span> like waves of wisdom flowing through an inspiring
                learning space.
              </p>
            </div>
            
            <div className="void-note">
              <p>Void, as wm idp</p>
            </div>
          </div>
        </div>
        
        {/* Animated Waves Background */}
        <div className="waves-container">
          <canvas ref={canvasRef} className="wisdom-waves"></canvas>
          <div className="wave-overlay"></div>
        </div>
      </section>

      {/* Infinite Carousel Section */}
      <section className="carousel-section">
        <div className="carousel-header">
          <h3 className="carousel-title">Featured Learning Experiences</h3>
          <p className="carousel-subtitle">Explore our immersive programs and educational journeys</p>
        </div>
        
        <div className="carousel-container">
          <div 
            className="carousel-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              ref={trackRef}
              className="carousel-track"
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              {duplicatedImages.map((src, index) => (
                <div 
                  key={index} 
                  className={`carousel-card ${isDragging ? 'dragging' : ''}`}
                  style={{ userSelect: 'none' }}
                >
                  <div className="card-image-wrapper">
                    <img 
                      src={src} 
                      alt={`Learning Experience ${index + 1}`}
                      className="card-image"
                      draggable="false"
                      loading="lazy"
                    />
                    <div className="card-overlay">
                      <span className="experience-number">Experience {index % images.length + 1}</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h4 className="card-title">Learning Program {index % images.length + 1}</h4>
                    <p className="card-description">
                      Immersive educational experience designed for transformational growth
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="carousel-instructions">
            <div className="instruction-content">
              <span className="instruction-icon">↔️</span>
              <span className="instruction-text">
                {isDragging ? 'Release to stop dragging' : 'Drag to scroll • Hover to pause'}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience