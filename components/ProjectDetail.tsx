import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Users, Monitor, Smartphone, ExternalLink, ArrowRight, CheckCircle } from 'lucide-react'
import project1Image from 'figma:asset/34d54410a2ac253e3d1beb71e32dcef9d51da27a.png'
import project2Image from 'figma:asset/6a740e0522adc3ca81100adecd2bbc9034423e17.png'
import project3Image from 'figma:asset/b55efd8277c23f7f455589f18eec4c54741aa8ef.png'

interface ProjectDetailProps {
  projectId: number | null
  onClose: () => void
}

export default function ProjectDetail({ projectId, onClose }: ProjectDetailProps) {
  const projects = {
    1: {
      id: 1,
      title: "Entertainment Streaming Platform",
      category: "UI/UX Design",
      description: "Modern streaming interface design featuring content discovery, user personalization, and seamless viewing experience with focus on user engagement and retention.",
      image: project1Image,
      year: "2024",
      industry: "Entertainment / Media Streaming",
      timeline: "3 Weeks",
      role: "UI/UX Designer - responsible for end-to-end UX research, wireframing, prototyping, high-fidelity design, and user testing.",
      challenge: "Design an intuitive streaming platform that enhances content discovery while maintaining user engagement through personalized recommendations and seamless navigation.",
      solution: "Created a user-centered interface with advanced filtering, personalized content rows, and streamlined playback controls that reduced content discovery time by 40%.",
      features: [
        "Advanced Content Discovery System",
        "Personalized Recommendation Engine", 
        "Seamless Cross-device Playback",
        "Intuitive Navigation Structure",
        "Social Viewing Features",
        "Offline Content Management"
      ],
      process: [
        "User Research & Persona Development",
        "Competitive Analysis & Market Research", 
        "Information Architecture & User Flows",
        "Wireframing & Low-fidelity Prototypes",
        "Visual Design & High-fidelity Mockups",
        "Usability Testing & Iteration"
      ],
      outcomes: [
        "40% improvement in content discovery time",
        "60% increase in user engagement metrics",
        "25% reduction in user drop-off rates",
        "Enhanced cross-platform user experience"
      ],
      icon: Monitor,
      color: "from-lime-400 to-lime-600"
    },
    2: {
      id: 2,
      title: "Inventory and Procurement Management",
      category: "Enterprise SaaS",
      description: "Comprehensive management system for inventory tracking, procurement processes, and vendor management designed for enterprise operations and workflow optimization.",
      image: project2Image,
      year: "2025",
      industry: "Enterprise SaaS / Internal Operations",
      timeline: "2 Weeks",
      role: "UI/UX Designer - responsible for end-to-end UX research, wireframing, prototyping, high-fidelity design, and user testing.",
      challenge: "Design a complex enterprise system that simplifies procurement workflows while providing comprehensive inventory oversight and vendor management capabilities.",
      solution: "Developed an intuitive dashboard-driven interface that streamlines procurement processes, automates inventory tracking, and centralizes vendor communications.",
      features: [
        "Real-time Inventory Tracking",
        "Automated Procurement Workflows",
        "Vendor Management System",
        "Advanced Analytics Dashboard",
        "Compliance Monitoring Tools",
        "Multi-location Support"
      ],
      process: [
        "Stakeholder Interviews & Requirements Gathering",
        "Workflow Mapping & Process Analysis",
        "User Journey Mapping",
        "Wireframing & Information Architecture",
        "Interactive Prototyping",
        "User Testing with Enterprise Teams"
      ],
      outcomes: [
        "50% reduction in procurement processing time",
        "35% improvement in inventory accuracy",
        "Streamlined vendor communication workflows",
        "Enhanced compliance tracking capabilities"
      ],
      icon: Users,
      color: "from-blue-400 to-blue-600"
    },
    3: {
      id: 3,
      title: "Instagram Redesign Case Study",
      category: "UI & UX Case Study",
      description: "Comprehensive redesign exploration of Instagram interface with 80+ screens, focusing on improved user experience, modern design principles, and enhanced social interactions.",
      image: project3Image,
      year: "2023",
      industry: "Social Media / Mobile App",
      timeline: "4 Weeks",
      role: "UI/UX Designer - conceptual redesign focusing on user experience improvements, interface modernization, and interaction design optimization.",
      challenge: "Reimagine Instagram's user interface to address current UX pain points while maintaining familiar interactions and introducing innovative features for enhanced social engagement.",
      solution: "Created a comprehensive redesign with 80+ screens featuring improved navigation, enhanced story discovery, better content creation tools, and modernized visual hierarchy.",
      features: [
        "Redesigned Navigation System",
        "Enhanced Story Discovery",
        "Improved Content Creation Tools",
        "Modern Visual Hierarchy",
        "Advanced Privacy Controls",
        "Accessibility Improvements"
      ],
      process: [
        "Current UX Audit & Pain Point Analysis",
        "User Behavior Research",
        "Competitive Feature Analysis",
        "Design System Development",
        "Screen Design & Prototyping",
        "Interaction Design & Animation"
      ],
      outcomes: [
        "80+ redesigned screens",
        "Improved information architecture",
        "Enhanced accessibility compliance",
        "Modern, cohesive visual design system"
      ],
      icon: Smartphone,
      color: "from-purple-400 to-purple-600"
    }
  }

  const project = projectId ? projects[projectId as keyof typeof projects] : null

  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 overflow-y-auto"
        onClick={onClose}
      >
        <div className="min-h-screen py-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="max-w-6xl mx-auto bg-black border border-lime-400/30 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/80 rounded-full hover:bg-lime-400/20 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-lime-400" />
              </button>

              {/* Project Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} shadow-lg`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-lime-400 font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="text-xs text-gray-300">{project.industry} • {project.year}</div>
                  </div>
                </div>
                <h1 
                  className="text-4xl font-bold text-white mb-2"
                  style={{ 
                    fontFamily: 'Inter, Helvetica Neue, sans-serif',
                    fontWeight: 900
                  }}
                >
                  {project.title}
                </h1>
                <p className="text-gray-300 text-lg">{project.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Project Overview */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="cyberpunk-frame p-6">
                  <Calendar className="w-8 h-8 text-lime-400 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Timeline</h3>
                  <p className="text-gray-300">{project.timeline}</p>
                </div>
                <div className="cyberpunk-frame p-6">
                  <Users className="w-8 h-8 text-lime-400 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Industry</h3>
                  <p className="text-gray-300">{project.industry}</p>
                </div>
                <div className="cyberpunk-frame p-6">
                  <CheckCircle className="w-8 h-8 text-lime-400 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Status</h3>
                  <p className="text-lime-400 font-semibold">Completed</p>
                </div>
              </div>

              {/* My Role */}
              <div className="cyberpunk-selection-frame p-6">
                <h3 className="text-2xl font-bold text-lime-400 mb-4">My Role</h3>
                <p className="text-gray-300 leading-relaxed">{project.role}</p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Challenge</h3>
                  <div className="cyberpunk-frame p-6">
                    <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Solution</h3>
                  <div className="cyberpunk-frame p-6">
                    <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="cyberpunk-frame p-4 flex items-center space-x-3"
                    >
                      <ArrowRight className="w-4 h-4 text-lime-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Design Process */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Design Process</h3>
                <div className="space-y-3">
                  {project.process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 cyberpunk-frame"
                    >
                      <div className="w-8 h-8 bg-lime-400 text-black rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Key Outcomes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.outcomes.map((outcome, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="cyberpunk-frame p-6 text-center"
                    >
                      <CheckCircle className="w-8 h-8 text-lime-400 mx-auto mb-3" />
                      <p className="text-gray-300">{outcome}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="cyberpunk-frame px-8 py-4 inline-flex items-center space-x-2 hover:border-lime-400/60 transition-colors duration-300"
                >
                  <span className="text-lime-400 font-semibold">View More Projects</span>
                  <ExternalLink className="w-4 h-4 text-lime-400" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}