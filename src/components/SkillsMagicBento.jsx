import React, { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';
import { 
  FaReact, 
  FaPython, 
  FaAws, 
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaLinux,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaSass
} from 'react-icons/fa';
import { 
  SiPytorch,
  SiFlutter,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiCplusplus,
  SiC,
  SiOpencv,
  SiExpress,
  SiDart,
  SiKubernetes,
  SiSonarqube,
  SiJest,
  SiCypress,
  SiPostman,
  SiRuby
} from 'react-icons/si';
// Removed unused Lucide React imports
import InfiniteScroll from './InfiniteScroll';

const DEFAULT_PARTICLE_COUNT = 4; // Reduced from 8 for better performance
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

// Comprehensive icon mapping for all skills - Only using confirmed existing icons
const skillIcons = {
  // Programming Languages
  "Python": FaPython,
  "JavaScript": FaJs,
  "TypeScript": SiTypescript,
  "C++": SiCplusplus,
  "C": SiC,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "Ruby": SiRuby,
  
  // AI/ML Frameworks
  "PyTorch": SiPytorch,
  "TensorFlow": SiTensorflow,
  "Scikit-Learn": SiScikitlearn,
  "OpenCV": SiOpencv,
  "Keras": SiKeras,
  
  // Web Development
  "React": FaReact,
  "NextJS": SiNextdotjs,
  "Flask": FaPython, // Using Python icon for Flask
  "Node.js": FaNodeJs,
  "Express": SiExpress, // Using Node.js icon for Express
  
  // Mobile & Cross-Platform
  "Flutter": SiFlutter,
  "React Native": FaReact,
  "Dart": SiDart, // Using Flutter icon for Dart
  
  // Cloud & Databases
  "AWS": FaAws,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  "Docker": FaDocker,
  "Kubernetes": SiKubernetes,
  
  // Development Tools
  "Git": FaGitAlt,
  "GitHub": FaGithub,
  "SonarQube": SiSonarqube,
  "Jest": SiJest,
  "Cypress": SiCypress,
  "Postman": SiPostman
};

// Generate skill icons for InfiniteScroll - only include skills with actual icons
const generateSkillIcons = (skillItems) => {
  return skillItems
    .filter(skill => skillIcons[skill]) // Only include skills that have actual icons
    .map((skill, index) => ({
      content: (
        <div className="skill-icon-item">
          {React.createElement(skillIcons[skill], { size: '3em' })}
        </div>
      )
    }));
};


const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(${color}, 0.8);
    box-shadow: 0 0 4px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = radius => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 80,
          y: (Math.random() - 0.5) * 80,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 150);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 3,
          rotateY: 3,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    // Throttle mouse move for better performance
    let mouseMoveTimeout;
    const handleMouseMove = e => {
      if (!enableTilt && !enableMagnetism) return;
      
      // Throttle to 60fps max
      if (mouseMoveTimeout) return;
      mouseMoveTimeout = setTimeout(() => {
        mouseMoveTimeout = null;
      }, 16); // ~60fps

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.2, // Slightly longer for smoother animation
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.03;
        const magnetY = (y - centerY) * 0.03;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.4, // Slightly longer for smoother animation
          ease: 'power2.out'
        });
      }
    };

    const handleClick = e => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.3) 0%, rgba(${glowColor}, 0.15) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`${className} particle-container`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
  const spotlightRef = useRef(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.12) 0%,
        rgba(${glowColor}, 0.06) 15%,
        rgba(${glowColor}, 0.03) 25%,
        rgba(${glowColor}, 0.015) 40%,
        rgba(${glowColor}, 0.008) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = e => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll('.card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        cards.forEach(card => {
          card.style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardElement = card;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.6
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.6
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll('.card').forEach(card => {
        card.style.setProperty('--glow-intensity', '0');
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid = ({ children, gridRef }) => (
  <div className="card-grid bento-section" ref={gridRef}>
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const SkillsMagicBento = ({ skills, ...props }) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = props.disableAnimations || isMobile;
  const [isVisible, setIsVisible] = useState(false);

  const defaultProps = {
    textAutoHide: false,
    enableStars: true,
    enableSpotlight: true,
    enableBorderGlow: true,
    disableAnimations: false,
    spotlightRadius: DEFAULT_SPOTLIGHT_RADIUS,
    particleCount: DEFAULT_PARTICLE_COUNT,
    enableTilt: true,
    glowColor: DEFAULT_GLOW_COLOR,
    clickEffect: true,
    enableMagnetism: true,
    ...props
  };

  // Intersection Observer to pause animations when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <>
      {defaultProps.enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={defaultProps.enableSpotlight}
          spotlightRadius={defaultProps.spotlightRadius}
          glowColor={defaultProps.glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        {skills.map((skill, index) => {
          const baseClassName = `card ${defaultProps.textAutoHide ? 'card--text-autohide' : ''} ${defaultProps.enableBorderGlow ? 'card--border-glow' : ''}`;
          const cardProps = {
            className: baseClassName,
            style: {
              backgroundColor: '#060010',
              '--glow-color': defaultProps.glowColor
            }
          };

          if (defaultProps.enableStars) {
            return (
              <ParticleCard
                key={index}
                {...cardProps}
                disableAnimations={shouldDisableAnimations}
                particleCount={defaultProps.particleCount}
                glowColor={defaultProps.glowColor}
                enableTilt={defaultProps.enableTilt}
                clickEffect={defaultProps.clickEffect}
                enableMagnetism={defaultProps.enableMagnetism}
              >
                <div className="card__header">
                  <div className="card__label">{skill.category}</div>
                </div>
                <div className="card__content">
                 <div className="card__background-icons">
                        <InfiniteScroll
                            items={generateSkillIcons(skill.items)}
                            isTilted={true}
                            tiltDirection='left'
                            autoplay={isVisible} // Only animate when visible
                            autoplaySpeed={0.5} // Slower for better performance
                            autoplayDirection="down"
                            pauseOnHover={true} // Pause on hover for better UX
                            width="100%"
                            maxHeight="100%"
                            itemMinHeight={60}
                        />
                 </div>
                  
                  <div className="skills-list">
                    {skill.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="skill-item">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ParticleCard>
            );
          }

          return (
            <div
              key={index}
              {...cardProps}
              ref={el => {
                if (!el) return;

                const handleMouseMove = e => {
                  if (shouldDisableAnimations) return;

                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  if (defaultProps.enableTilt) {
                    const rotateX = ((y - centerY) / centerY) * -8;
                    const rotateY = ((x - centerX) / centerX) * 8;
                    gsap.to(el, {
                      rotateX,
                      rotateY,
                      duration: 0.1,
                      ease: 'power2.out',
                      transformPerspective: 1000
                    });
                  }

                  if (defaultProps.enableMagnetism) {
                    const magnetX = (x - centerX) * 0.03;
                    const magnetY = (y - centerY) * 0.03;
                    gsap.to(el, {
                      x: magnetX,
                      y: magnetY,
                      duration: 0.3,
                      ease: 'power2.out'
                    });
                  }
                };

                const handleMouseLeave = () => {
                  if (shouldDisableAnimations) return;

                  if (defaultProps.enableTilt) {
                    gsap.to(el, {
                      rotateX: 0,
                      rotateY: 0,
                      duration: 0.3,
                      ease: 'power2.out'
                    });
                  }

                  if (defaultProps.enableMagnetism) {
                    gsap.to(el, {
                      x: 0,
                      y: 0,
                      duration: 0.3,
                      ease: 'power2.out'
                    });
                  }
                };

                const handleClick = e => {
                  if (!defaultProps.clickEffect || shouldDisableAnimations) return;

                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const maxDistance = Math.max(
                    Math.hypot(x, y),
                    Math.hypot(x - rect.width, y),
                    Math.hypot(x, y - rect.height),
                    Math.hypot(x - rect.width, y - rect.height)
                  );

                  const ripple = document.createElement('div');
                  ripple.style.cssText = `
                    position: absolute;
                    width: ${maxDistance * 2}px;
                    height: ${maxDistance * 2}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(${defaultProps.glowColor}, 0.3) 0%, rgba(${defaultProps.glowColor}, 0.15) 30%, transparent 70%);
                    left: ${x - maxDistance}px;
                    top: ${y - maxDistance}px;
                    pointer-events: none;
                    z-index: 1000;
                  `;

                  el.appendChild(ripple);

                  gsap.fromTo(
                    ripple,
                    {
                      scale: 0,
                      opacity: 1
                    },
                    {
                      scale: 1,
                      opacity: 0,
                      duration: 0.6,
                      ease: 'power2.out',
                      onComplete: () => ripple.remove()
                    }
                  );
                };

                el.addEventListener('mousemove', handleMouseMove);
                el.addEventListener('mouseleave', handleMouseLeave);
                el.addEventListener('click', handleClick);
              }}
            >
              <div className="card__header">
                <div className="card__label">{skill.category}</div>
              </div>
              <div className="card__content">
                <div className="card__background-icon">
                  {skillIcons[skill.category] && React.createElement(skillIcons[skill.category], { size: '3em' })}
                </div>
                <div className="skills-list">
                  {skill.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="skill-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </BentoCardGrid>
    </>
  );
};

export default SkillsMagicBento;
