import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Calendar, Users, Monitor, Smartphone, Layers } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      id: 1,
      title: "Inventory and Procurement Management",
      category: "Enterprise SaaS",
      description: "Comprehensive management system for inventory tracking, procurement processes, and vendor management designed for enterprise operations and workflow optimization.",
      image: "https://i.postimg.cc/BQ27WhNJ/Desktop-2.jpg",
      year: "2025",
      industry: "Enterprise SaaS / Internal Operations",
      timeline: "2 Weeks",
      projectLink: "https://www.behance.net/gallery/230890123/Inventory-Procurement-management",
      figmaLink: "https://www.figma.com/design/qUMLxEqs3pa04iqWBJH97U/Vendor-Sourcing---Procurement-Tool-for-Enterprise-Teams?node-id=0-1&t=hzC8ZxevgPuq96Y5-1",
      features: ["Inventory Tracking", "Vendor Management", "Process Automation", "Data Analytics"],
      icon: Users
    },
    {
      id: 2,
      title: "Instagram Revamp UI/UX Case Study",
      category: "UI & UX Case Study",
      description: "Comprehensive redesign exploration of Instagram interface with 80+ screens, focusing on improved user experience, modern design principles, and enhanced social interactions.",
      image: "https://i.postimg.cc/6p0HqyDS/Screenshot-2025-07-22-180901.png",
      year: "2023",
      industry: "Social Media / Mobile App",
      timeline: "4 Weeks",
      projectLink: "https://www.behance.net/gallery/179736087/Instagram-Revamp-UI-UX-case-study",
      figmaLink: "https://www.figma.com/design/zdizjaHjXXOdgDyNmLJug1/Instagram-Revamp?node-id=34-107&t=f4xJ0xqZIRfq5YH1-1",
      features: ["80+ Screens", "User Experience", "Interface Modernization", "Interaction Design"],
      icon: Smartphone
    },
    {
      id: 3,
      title: "Design System Framework",
      category: "Design System",
      description: "Comprehensive design system with organized components, typography guidelines, color schemes, and layout principles for scalable and consistent user interface development.",
      image: "https://i.postimg.cc/SRCdhs6g/cover.png",
      year: "2024",
      industry: "Design System / Component Library",
      timeline: "6 Weeks",
      figmaLink: "https://www.figma.com/design/BzAWL8QORacSZbv1vy7GDs/Design-System?node-id=17-21499&t=jqQXPXhNHXFsW583-1",
      features: ["Component Library", "Typography System", "Color Guidelines", "Layout Principles"],
      icon: Layers
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const handleProjectClick = (project: typeof projects[0]) => {
    // For design system (project 3), open Figma link
    if (project.id === 3) {
      window.open(project.figmaLink, '_blank', 'noopener,noreferrer')
    } else {
      // For other projects, open Behance link
      window.open(project.projectLink, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden space-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="cyberpunk-hexagon absolute top-32 left-20" />
        <div className="cyberpunk-hexagon absolute bottom-20 right-16" style={{ animationDelay: '3s' }} />
        <div className="cyberpunk-tech-line absolute top-1/2 left-0" style={{ animationDelay: '1s' }} />
        <div className="cyberpunk-tech-line-vertical absolute top-0 right-1/4" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header - MY SKILLS style */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 text-white"
              style={{ 
                fontFamily: 'Inter, Helvetica Neue, sans-serif',
                fontWeight: 900
              }}
            >
              Featured{' '}
              <span className="relative inline-block">
                Projects
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-lime-400"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: 'Inter, Helvetica Neue, sans-serif',
                fontWeight: 400
              }}
            >
              A curated selection of my design projects showcasing enterprise solutions, 
              case studies, and innovative user experiences across different industries.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onClick={() => handleProjectClick(project)}
                className="cyberpunk-project-card cursor-pointer group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image - Increased height */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Link indicators overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.projectLink && (
                      <div className="p-2 bg-black/80 rounded-full" title="View on Behance">
                        <ExternalLink className="w-4 h-4 text-lime-400" />
                      </div>
                    )}
                    {project.figmaLink && (
                      <div className="p-2 bg-black/80 rounded-full" title="View on Figma">
                        <Monitor className="w-4 h-4 text-blue-400" />
                      </div>
                    )}
                  </div>

                  {/* Project Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/90 rounded-full border border-lime-400/30">
                    <span className="text-xs text-lime-400 font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-lime-400/20 rounded-lg">
                        <project.icon className="w-5 h-5 text-lime-400" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-400">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors duration-300 leading-tight"
                    style={{ 
                      fontFamily: 'Inter, Helvetica Neue, sans-serif',
                      fontWeight: 700
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-gray-300 text-sm leading-relaxed mb-4"
                    style={{ 
                      fontFamily: 'Inter, Helvetica Neue, sans-serif',
                      fontWeight: 400
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Industry & Timeline */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Industry:</span>
                      <span className="text-gray-300 font-medium">{project.industry}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Timeline:</span>
                      <span className="text-gray-300 font-medium">{project.timeline}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 
                      className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2"
                      style={{ 
                        fontFamily: 'Inter, Helvetica Neue, sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 text-xs bg-gray-800 text-gray-300 border border-gray-700 rounded-full"
                          style={{ 
                            fontFamily: 'Inter, Helvetica Neue, sans-serif',
                            fontWeight: 500
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-sm text-lime-400 font-semibold group-hover:text-white transition-colors duration-300"
                        style={{ 
                          fontFamily: 'Inter, Helvetica Neue, sans-serif',
                          fontWeight: 600
                        }}
                      >
                        {project.id === 3 ? 'View on Figma' : 'View on Behance'}
                      </span>
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ExternalLink className="w-4 h-4 text-lime-400 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Secondary Link */}
                  {project.projectLink && project.figmaLink && project.id !== 3 && (
                    <div className="mt-2 pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.figmaLink, '_blank', 'noopener,noreferrer')
                        }}
                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-1"
                      >
                        <Monitor className="w-3 h-3" />
                        <span>Also view on Figma</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Hover Effects */}
                <motion.div
                  className="absolute inset-0 border-2 border-lime-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{
                    boxShadow: "0 0 20px rgba(163, 230, 53, 0.2)"
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="cyberpunk-selection-frame p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-lime-400 mr-3" />
                <h3 
                  className="text-2xl font-bold text-lime-400"
                  style={{ 
                    fontFamily: 'Inter, Helvetica Neue, sans-serif',
                    fontWeight: 700
                  }}
                >
                  Project Approach
                </h3>
                <Calendar className="w-6 h-6 text-lime-400 ml-3" />
              </div>
              <p 
                className="text-gray-300 leading-relaxed text-lg"
                style={{ 
                  fontFamily: 'Inter, Helvetica Neue, sans-serif',
                  fontWeight: 400
                }}
              >
                Each project showcases my <span className="text-lime-400 font-semibold">end-to-end design process</span> - 
                from initial user research and wireframing to high-fidelity prototypes and user testing. 
                I focus on creating intuitive, data-driven solutions that solve real business challenges 
                while delivering exceptional user experiences.
              </p>
              
              <motion.div 
                className="mt-8 inline-flex items-center space-x-2 text-lime-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span 
                  className="text-sm font-semibold cursor-pointer"
                  style={{ 
                    fontFamily: 'Inter, Helvetica Neue, sans-serif',
                    fontWeight: 600
                  }}
                >
                  Click any project to view detailed case study
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}