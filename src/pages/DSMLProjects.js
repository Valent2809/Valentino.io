import React, { useState } from 'react';

const DSMLProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AIP National AI Student Challenge 2024",
      category: "Data Science",
      description: "Shortlisted for the final stage of Track 1 in predicting pet adoption rates. Performed EDA on a dataset of 14,993 rows with 49 features and built a complete ML pipeline for accurate adoption predictions.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      image: "/AIP.PNG",
      demoUrl: null,
      githubUrl: "https://github.com/Valent2809/National-AI-Student-Challenge-2024-Track-1-AIP",
      pptUrl: null,
      details: "Shortlisted for final stage in Track 1 predicting pet adoption rates. Performed EDA like cleaning and processing a dataset of 14,993 rows with 49 features. Developed an end-to-end Machine Learning pipeline that include data preprocessing, prediction and evaluation. Utilizes machine learning algorithms such as XGBoost and Random Forest to predict pet adoption rates "
    },
    {
      id: 2,
      title: "Smart Energy Analysis using AWS & GenAI",
      category: "Data Engineering",
      description: "Built a scalable ETL pipeline using AWS Glue and PySpark to process millions of data. Applied clustering with AWS SageMaker to segment customers and deliver insights via a GenAI chatbot for solar energy strategy optimization.",
      technologies: ["Python", "PySpark", "AWS", "Gemini"],
      image: "/BigData.JPG",
      demoUrl: "https://www.youtube.com/watch?v=HazTPX7PDuw",
      githubUrl: null,
      pptUrl: null,
      details: "Designed and implemented an automated big data ETL pipeline using AWS Glue and PySpark, capable of processing millions of energy consumption records. Applied clustering algorithms in AWS SageMaker to identify and segment high-potential customer groups for targeted solar energy adoption. Enabled interactive insights delivery via a GenAI-powered chatbot, supporting stakeholders in optimizing retail solar energy strategies."
    },
    {
      id: 3,
      title: "LinkedOut: Resume & Job Recommendation System",
      category: "Machine Learning",
      description: "Built a semantic recommendation system using Doc2Vec and FAISS to match resumes with job descriptions and vice versa. Deployed FastAPI backend for seamless, intelligent job and candidate search.",
      technologies: ["Python", "Gemini", "FastAPI", "Pandas"],
      image: "/LinkedOutSearch.PNG",
      demoUrl: null,
      githubUrl: null,
      pptUrl: "https://docs.google.com/presentation/d/1x-BbGk6MEI_4fY5JWqOma4WJn38Kq0vM/edit?usp=sharing&ouid=114827466311946016594&rtpof=true&sd=true",
      details: "Designed and implemented a semantic recommendation system to streamline the recruitment process by matching resumes with job descriptions and vice versa. The core of the system leveraged Doc2Vec embeddings to capture contextual relationships in textual data and FAISS for fast and scalable similarity search. This enabled both job seekers and recruiters to perform intelligent searches—candidates could discover relevant opportunities, while recruiters could efficiently identify suitable applicants. Developed and deployed backend RESTful APIs using FastAPI, enabling seamless integration of resume-to-job and job-to-resume matching functionality into recruitment platforms."
    },
    {
      id: 4,
      title: "Social Analytics of reviews for Lazada",
      category: "Data Analysis (NLP)",
      description: "Scraped and analyzed Lazada app reviews from multiple platforms using Python to perform social analytics such as uncover customer sentiment, key themes, and areas for retention improvement.",
      technologies: ["Python", "Pandas", "BeautifulSoup", "Selenium", "Matplotlib", "Seaborn"],
      image: "/SocialAnalytics.PNG",
      demoUrl: null,
      githubUrl: "https://github.com/Valent2809/Social-Analytics-on-Lazada-reviews",
      pptUrl: "https://drive.google.com/file/d/1ZJRNIY-PZduUE_CGJwBAXbgF-Qt77-sL/view?usp=sharing",
      details: "Conducted a comprehensive web scraping and analysis of Lazada reviews from App Store, Play Store, and other platforms to uncover insights into customer satisfaction and pain points. Performed data cleaning, timeline analysis, and created word clouds to visualize trends. Applied VADER sentiment analysis to assess customer opinions and validate review ratings. Used Topic Modeling (LDA) to extract key themes, enabling strategic recommendations for improving user experience and app retention."
    },
    {
      "id": 5,
      "title": "Finetune T5 model for a medical chatbot",
      "category": "Machine Learning",
      "description": "Developed a medical chatbot by fine-tuning T5 models using various parameter-efficient methods. Compared model outputs using a Gradio interface and benchmarked performance gains on BLEU and ROUGE metrics.",
      "technologies": ["Python", "HuggingFace Transformers", "Gradio"],
      "image": "/FinetuneProj.PNG",
      "demoUrl": null,
      "githubUrl": "https://github.com/Valent2809/Finetuned-Flan-T5-Base-For-Medical-Chatbot",
      "pptUrl": null,
      "details": "Finetuned T5 and Flan-T5 base models using full parameter, LoRA and QLoRA methods with a medical chatbot dataset from Kaggle to develop a local LLM tailored for answering patient queries accurately with enhanced privacy as user inputs are not saved. Achieved over 400% improvement in performance compared to the base model using BLEU and ROUGE metrics."
    },
    {
      "id": 6,
      "title": "LinkedIn Skills Scraper & Visualization",
      "category": "Data Analysis / Web Scraping",
      "description": "Scraped LinkedIn job postings and extracted the top 20 in-demand skills for Data Analyst roles. Created visualizations and conducted EDA to reveal skill trends, helping users plan targeted upskilling and career strategies.",
      "technologies": ["Python", "Selenium", "BeautifulSoup", "Pandas", "Seaborn"],
      "image": "/LinkedInSkills.png",
      "demoUrl": null,
      "githubUrl": "https://github.com/Valent2809/LinkedIn-scraper-and-visualisation",
      "pptUrl": null,
      "details": "Developed a solution to streamline job research by web scraping LinkedIn postings for desired roles and visualizing the top 20 in-demand skills. Leveraged Selenium and BeautifulSoup for automated data collection, eliminating the need for manual research. Conducted exploratory data analysis (EDA) and created visualizations to uncover trends in job requirements, providing actionable insights for targeted upskilling and informed career planning."
    },
    {
      "id": 7,
      "title": "AI generated vs Real Image Classification",
      "category": "Machine Learning",
      "description": "Finetuned HuggingFace Vision Transformer and trained multiple models including ResNet-50 on CIFAKE dataset to classify if an image is AI generated or real. Implemented an ensemble classifier to combine results from different models for improved accuracy.",
      "technologies": ["Python", "HuggingFace Vision Transformers", "PyTorch"],
      "image": "/ImageClassification.PNG",
      "demoUrl": null,
      "githubUrl": "https://huggingface.co/Valent2809/ai_vs_real_image",
      "pptUrl": null,
      "details": "Finetuned HuggingFace Vision Transformer model as well as utilise and train various deep learning models such as manually created, ResNet-50 etc with the CIFAKE image dataset to develop a machine learning model that is tailored to classify if an image is real or AI generated. Implemented an Ensemble classifier that combines all the trained classification model to get the average result. All models are then evaluated to determine which gives the best result"
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
            Data Science & Machine Learning Projects
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

export default DSMLProjects;