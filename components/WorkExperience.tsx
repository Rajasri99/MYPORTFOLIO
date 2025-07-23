import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  MapPin,
  Calendar,
  Building,
  Code,
  Target,
  Lightbulb,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function WorkExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "UI/UX Designer",
      company: "Agnikul Cosmos Pvt. Ltd.",
      location: "Chennai, India",
      period: "Oct 2023 – Present",
      type: "Full-time",
      description: "Delivered 15+ digital products for internal tools across domains like fleet, safety, payroll, ERP, and instrumentation.",
      achievements: [
        "Led end-to-end design process from user research to final implementation",
        "Conducted user research with engineers & stakeholders",
        "Mapped complex workflows & technical constraints",
        "Built comprehensive user flows, wireframes, and interactive prototypes",
        "Conducted usability testing and iterative design improvements",
        "Delivered responsive UIs optimized for desktop and tablet platforms"
      ],
      domains: ["HR", "Finance", "Inventory", "Quality", "DFR", "F&B", "Recruitment"],
      skills: ["Enterprise UX", "Complex Systems Design", "User Research", "Prototyping"],
      icon: Rocket,
      color: "from-lime-400 to-lime-600",
      status: "Current"
    },
    {
      title: "UI/UX Designer",
      company: "Jarvis Software – Wiseant",
      location: "Remote",
      period: "Aug – Oct 2023",
      type: "Contract",
      description: "Led design of the Digital Envelope Budgeting feature — allowing users to allocate funds into virtual spending categories with clarity.",
      achievements: [
        "Owned complete UX process from research to implementation",
        "Conducted comprehensive user research and flow mapping",
        "Created detailed wireframes and interactive prototypes",
        "Performed usability testing to validate design decisions",
        "Focused final UI on simplicity and financial clarity",
        "Collaborated closely with developers for seamless implementation"
      ],
      outcome: "🚀 Feature is live on the Wiseant app (Play Store)",
      skills: ["FinTech UX", "User Research", "Prototyping", "Developer Collaboration"],
      icon: Target,
      color: "from-blue-400 to-blue-600",
      status: "Completed"
    },
    {
      title: "Freelance UI/UX Designer",
      company: "Independent",
      location: "Remote",
      period: "Feb 2022 – July 2023",
      type: "Freelance",
      description: "Worked on diverse design projects, with a standout being the Sick Roast App — a voice-chat battle platform promoting humor and stress relief at work.",
      achievements: [
        "Led complete design cycle for multiple client projects",
        "Conducted user research on entertainment behavior patterns",
        "Designed intuitive flows, wireframes, and playful prototypes",
        "Delivered fun, seamless user experiences across platforms",
        "Created comprehensive branding assets including posters and digital visiting cards",
        "Strengthened product identity through cohesive visual design"
      ],
      impact: "This phase sharpened my end-to-end product design and creative versatility.",
      skills: ["Product Design", "Branding", "Entertainment UX", "Creative Direction"],
      icon: Lightbulb,
      color: "from-purple-400 to-purple-600",
      status: "Portfolio Growth"
    },
    {
      title: "VBA Analyst",
      company: "Ford Global Business Centre",
      location: "Chennai, India", 
      period: "June 2018 – June 2020",
      type: "Full-time",
      description: "Focused on automation and data accuracy in vehicle analysis, contributing to streamlined operations and reliable data management.",
      achievements: [
        "Developed advanced VBA macros to streamline manual tasks",
        "Improved data quality through automated validation processes",
        "Identified and resolved critical vehicle record discrepancies",
        "Ensured consistent and reliable data updates across systems",
        "Led team meetings and tracked launch metrics effectively",
        "Supported performance reporting and cross-functional coordination"
      ],
      skills: ["Process Automation", "Data Analysis", "Team Leadership", "Performance Reporting"],
      icon: Code,
      color: "from-orange-400 to-orange-600",
      status: "Foundation"
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

  return (
    <section id="experience" className="py-20 relative overflow-hidden space-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="cyberpunk-hexagon absolute top-32 left-20" />
        <div className="cyberpunk-hexagon absolute bottom-20 right-16" style={{ animationDelay: '3s' }} />
        <div className="cyberpunk-tech-line absolute top-1/2 left-0" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6"
              style={{ 
                fontFamily: 'Inter, Helvetica Neue, sans-serif',
                fontWeight: 900
              }}
            >
              Work{' '}
              <span className="relative inline-block">
                Experience
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
              My professional journey from data analysis to UI/UX design, building expertise in 
              user-centered design and complex enterprise systems.
            </motion.p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-lime-400/60 via-lime-400/40 to-lime-400/60 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 w-4 h-4 bg-lime-400 rounded-full border-4 border-black transform md:-translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-lime-400 rounded-full animate-ping"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: [0, 1, 0] } : { opacity: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Experience Card */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} w-full md:w-1/2`}>
                    <div className="cyberpunk-selection-frame p-8 hover:border-lime-400/60 transition-all duration-500 group">
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="cyberpunk-status-indicator">
                          {exp.status}
                        </div>
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color} shadow-lg`}>
                          <exp.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Company & Role */}
                      <div className="mb-6">
                        <h3 
                          className="text-2xl font-bold mb-2 text-white group-hover:text-lime-400 transition-colors duration-300"
                          style={{ 
                            fontFamily: 'Inter, Helvetica Neue, sans-serif',
                            fontWeight: 700
                          }}
                        >
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-2 text-lime-400">
                            <Building className="w-4 h-4" />
                            <span 
                              className="font-semibold"
                              style={{ 
                                fontFamily: 'Inter, Helvetica Neue, sans-serif',
                                fontWeight: 600
                              }}
                            >
                              {exp.company}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span 
                              className="text-sm"
                              style={{ 
                                fontFamily: 'Inter, Helvetica Neue, sans-serif',
                                fontWeight: 400
                              }}
                            >
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <Calendar className="w-4 h-4" />
                          <span 
                            className="font-medium"
                            style={{ 
                              fontFamily: 'Inter, Helvetica Neue, sans-serif',
                              fontWeight: 600
                            }}
                          >
                            {exp.period}
                          </span>
                          <span className="px-2 py-1 text-xs bg-lime-400/10 text-lime-400 border border-lime-400/20 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p 
                        className="text-gray-300 mb-6 leading-relaxed"
                        style={{ 
                          fontFamily: 'Inter, Helvetica Neue, sans-serif',
                          fontWeight: 400
                        }}
                      >
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 
                          className="text-lg font-semibold mb-4 text-white flex items-center"
                          style={{ 
                            fontFamily: 'Inter, Helvetica Neue, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          <CheckCircle className="w-5 h-5 text-lime-400 mr-2" />
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              variants={itemVariants}
                              className="flex items-start space-x-3 group"
                            >
                              <ArrowRight className="w-4 h-4 text-lime-400 mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                              <span 
                                className="text-gray-300 text-sm leading-relaxed"
                                style={{ 
                                  fontFamily: 'Inter, Helvetica Neue, sans-serif',
                                  fontWeight: 400
                                }}
                              >
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Special Outcomes/Impact */}
                      {exp.outcome && (
                        <div className="mb-6 p-4 cyberpunk-frame bg-lime-400/5">
                          <p 
                            className="text-lime-400 font-semibold"
                            style={{ 
                              fontFamily: 'Inter, Helvetica Neue, sans-serif',
                              fontWeight: 600
                            }}
                          >
                            {exp.outcome}
                          </p>
                        </div>
                      )}

                      {exp.impact && (
                        <div className="mb-6 p-4 cyberpunk-frame bg-lime-400/5">
                          <p 
                            className="text-lime-400 font-semibold italic"
                            style={{ 
                              fontFamily: 'Inter, Helvetica Neue, sans-serif',
                              fontWeight: 600
                            }}
                          >
                            {exp.impact}
                          </p>
                        </div>
                      )}

                      {/* Domains (for Agnikul) */}
                      {exp.domains && (
                        <div className="mb-6">
                          <h5 
                            className="text-sm font-semibold mb-3 text-gray-400 uppercase tracking-wider"
                            style={{ 
                              fontFamily: 'Inter, Helvetica Neue, sans-serif',
                              fontWeight: 600
                            }}
                          >
                            Design Domains
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.domains.map((domain, domainIndex) => (
                              <span
                                key={domainIndex}
                                className="px-2 py-1 text-xs bg-lime-400/10 text-lime-400 border border-lime-400/20 rounded-full"
                                style={{ 
                                  fontFamily: 'Inter, Helvetica Neue, sans-serif',
                                  fontWeight: 600
                                }}
                              >
                                {domain}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Skills */}
                      <div>
                        <h5 
                          className="text-sm font-semibold mb-3 text-gray-400 uppercase tracking-wider"
                          style={{ 
                            fontFamily: 'Inter, Helvetica Neue, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Core Skills
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                              transition={{ delay: 0.8 + skillIndex * 0.1 }}
                              className="px-3 py-1 text-xs bg-gray-800 text-gray-300 border border-gray-700 rounded-full hover:border-lime-400/40 hover:text-lime-400 transition-all duration-300"
                              style={{ 
                                fontFamily: 'Inter, Helvetica Neue, sans-serif',
                                fontWeight: 600
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Summary */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="cyberpunk-selection-frame p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-lime-400 mr-3" />
                <h3 
                  className="text-2xl font-bold text-lime-400"
                  style={{ 
                    fontFamily: 'Inter, Helvetica Neue, sans-serif',
                    fontWeight: 700
                  }}
                >
                  Career Progression
                </h3>
                <Star className="w-6 h-6 text-lime-400 ml-3" />
              </div>
              <p 
                className="text-gray-300 leading-relaxed text-lg"
                style={{ 
                  fontFamily: 'Inter, Helvetica Neue, sans-serif',
                  fontWeight: 400
                }}
              >
                My journey from <span className="text-lime-400 font-semibold">VBA Analyst</span> to <span className="text-lime-400 font-semibold">UI/UX Designer</span> reflects 
                a passion for problem-solving and user-centered thinking. This diverse background enables me to 
                bridge technical constraints with intuitive design, excelling in complex enterprise environments 
                and innovative product development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}