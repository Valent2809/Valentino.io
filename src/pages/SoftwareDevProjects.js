import React, { useState } from 'react';

const SoftwareDevProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
        id: 1,
        title: "Capstone Project: Twinsies",
        category: "Full-Stack Dev & GenAI",
        description: "Full-stack developer utilizing FastAPI and ReactJS, developed Gen AI-powered digital twin for personalized education, delivering personalized learning recommendations for every student in an instant.",
        technologies: ["Python", "FastAPI", "ReactJS", "MySQL", "Docker", "OpenAI"],
        image: "/Twinsies.PNG",
        demoUrl: "https://www.youtube.com/watch?v=bazoeIyg1ls&feature=youtu.be",
        githubUrl: null,
        pptUrl: null,
        externalUrl: null,
        details: "As the project lead, led a cross-functional team using Agile Scrum and acted as the primary liaison with sponsors, ensuring alignments with the requirements clearly. Developed the AI-powered educational digital twin web app using FastAPI and ReactJS. Integrated OpenAI for personalized learning recommendations based on students' course components grading patterns. Deployed with Docker and implemented a CI/CD pipeline with integration tests. Spearheaded GenAI tasks including prompt engineering and response optimization to improve output quality and relevance."
      },
    {
      id: 2,
        title: "Ellipsis Tech Series Hackathon 2024: Petal",
        category: "Full-stack Dev & GenAI",
        description: "Won Most Creative Award for developing Petal, an AI-powered mobile app for smart waste classification with context and Singapore NEA Recycling FAQs Chatbot",
        technologies: ["FastAPI", "React Native", "Google Gemini", "Python"],
        image: "/Petal.PNG",
        demoUrl: "https://youtu.be/WxJZmMxkVxc",
        githubUrl: null,
        pptUrl: null,
        externalUrl:"https://www.linkedin.com/feed/update/urn:li:activity:7237831769532612608/",
        details: "Won most creative award at the hackathon. Petal is a mobile app that melds AI-driven waste classification, Singapore NEA Recycling FAQs Chatbot, personalised 3Rs guidance, and a rewarding system with a local recycling centre locator. Designed and contributed in implementing the AI waste classification feature that enable users to accurately identify waste types through photos, offering immediate disposal instructions and personalized recycling advice. Designed and implemented the personalize chatbot feature with RAG capability powered by Google Gemini."
    },
    {
        id: 3,
        title: "Unfairprice",
        category: "Backend Dev & DevOps",
        description: "As a backend developer, built the Products, Orders and Shopping Carts microservice with robust RESTful APIs for the DevOps-integrated e-commerce web app, developed CI/CD pipeline, and automated UI testing.",
        technologies: ["Python", "FastAPI", "MySQL", "Docker", "Kubernetes", "Selenium"],
        image: "/Unfairprice.jpg",
        demoUrl: null,
        githubUrl: null,
        pptUrl: "https://docs.google.com/presentation/d/1mmsaOuY3U1d12dsOmil7EzcK-x_Btajm/edit?usp=sharing",
        externalUrl: null,
        details: "As a backend developer, engineered a full-fledged e-commerce web application with robust RESTful APIs for handling products, orders, and cart functionalities using FastAPI. Emphasized clean and maintainable Python code. Integrated automated UI testing via Selenium and implemented a CI/CD pipeline using Docker and Kubernetes. Enabled smooth deployments and rapid iteration cycles with a scalable architecture tailored for production environments."
    },
    {
        id: 4,
        title: "Ascenda Admin Portal using AWS",
        category: "Backend Dev & Cloud",
        description: "Led backend development of an admin portal fully deployed on AWS, utilizing Lambda, API Gateway, and Aurora to manage point ledgers and user storage efficiently.",
        technologies: ["Python", "AWS Lambda", "API Gateway", "Aurora", "CloudWatch"],
        image: "/AscendaAdmin.jfif",
        demoUrl: null,
        githubUrl: null,
        pptUrl: null,
        externalUrl: null,
        details: "Developed and deployed the Ascenda Admin Portal platform fully utilizing AWS services. Led the backend team in creating serverless functions with AWS Lambda and exposed them via API Gateway to handle point ledger and user storage services. Set up CloudWatch for system monitoring and used Aurora for scalable, managed database storage. Additionally, managed and facilitated all team meetings and agendas to ensure smooth project execution."
      },
      {
        id: 5,
        title: "MINDS Mobile App",
        category: "Flutter Dev & GenAI",
        description: "Developed a GenAI-enhanced mobile app using Flutter and Google Gemini for checklist automation and data-driven dashboards supporting IoT activity management.",
        technologies: ["Flutter", "Google Gemini", "SQL"],
        image: "/IoTScanner.PNG",
        demoUrl: null,
        githubUrl: null,
        pptUrl: null,
        externalUrl: "https://medium.com/@ryanlwk99/cs462-iot-g1t5-598e23b91e4c",
        details: "Built a mobile app for MINDS clients and caregivers as an all-in-one activity management platform. Integrated an AI-powered item checklist feature using Google Gemini for real-time visual verification of essential items. Designed interactive dashboards with Flutter, leveraging SQL queries to present activity insights through dynamic charts and graphs. Collaborated on UI/UX to ensure accessibility and ease of use, tailored for users with cognitive disabilities. Supported overall system alongside a companion IoT wearable device."
      }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
          </div>
          
          <img
            src={`${process.env.PUBLIC_URL}${project.image}`}
            alt={project.title}
            className="max-w-full max-h-80 object-contain mx-auto mb-3"
          />
          
          <div className="space-y-4">
            <div>
              <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
            
            <p className="text-gray-700 leading-relaxed">{project.details}</p>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}

              {project.pptUrl && (
                <a
                  href={project.pptUrl}
                  className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Presentation Deck
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Demo
                </a>
              )}

                {project.externalUrl && (
                    <a
                    href={project.externalUrl}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    View Post
                    </a>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Software Development Projects
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}${project.image}`}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-5">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                  >
                    Learn More
                  </button>
                  <div className="flex gap-2 items-center">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View on GitHub"
                      >
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    
                      </a>
                    )}

                    {project.pptUrl && (
                      <a
                        href={project.pptUrl}
                        className="p-2 border border-yellow-300 rounded-lg hover:bg-yellow-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Slides"
                      >
                        <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                          {/* Slide icon (presentation) */}
                          <path d="M3 4h18v2H3V4zm0 3h18v2H3V7zm0 3h12v2H3v-2zm0 3h12v2H3v-2zm0 3h12v2H3v-2zm0 3h12v2H3v-2zm13-9h5v10h-5z"/>
                        </svg>
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="p-2 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Watch Demo"
                      >
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <g transform="scale(1.3) translate(-1.5, -2)">
                          <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                        </g>
                      </svg>
                      </a>
                    )}

                    {project.externalUrl && (
                        <a
                            href={project.externalUrl}
                            className="p-2 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Visit External Site"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88" className="w-5 h-5 text-blue-600" fill="currentColor">
                        <path d="M60.54,34.07A7.65,7.65,0,0,1,49.72,23.25l13-12.95a35.38,35.38,0,0,1,49.91,0l.07.08a35.37,35.37,0,0,1-.07,49.83l-13,12.95A7.65,7.65,0,0,1,88.81,62.34l13-13a20.08,20.08,0,0,0,0-28.23l-.11-.11a20.08,20.08,0,0,0-28.2.07l-12.95,13Zm14,3.16A7.65,7.65,0,0,1,85.31,48.05L48.05,85.31A7.65,7.65,0,0,1,37.23,74.5L74.5,37.23ZM62.1,89.05A7.65,7.65,0,0,1,72.91,99.87l-12.7,12.71a35.37,35.37,0,0,1-49.76.14l-.28-.27a35.38,35.38,0,0,1,.13-49.78L23,50A7.65,7.65,0,1,1,33.83,60.78L21.12,73.49a20.09,20.09,0,0,0,0,28.25l0,0a20.07,20.07,0,0,0,28.27,0L62.1,89.05Z"/>
                        </svg>
                    </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default SoftwareDevProjects;