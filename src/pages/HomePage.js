import React, { useState } from 'react';
import RotatingCard from "../components/RotatingCard";

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    `${process.env.PUBLIC_URL}/watermelon.PNG`,
    `${process.env.PUBLIC_URL}/DewaUnited.PNG`,
    `${process.env.PUBLIC_URL}/DewaUnited2.jpg`
  ];

  const skills = [
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "MySQL", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" },
    { name: "Pandas", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
    { name: "Pyspark", logo: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-ar21.svg" },
    { name: "Scikit-Learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "TensorFlow", logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
    { name: "Tableau", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
    { name: "Java", logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
    { name: "Docker", logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
    { name: "Kubernetes", logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
    { name: "FastAPI", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/FastAPI_logo.svg" },
    { name: "SpringBoot", logo: "https://www.vectorlogo.zone/logos/springio/springio-ar21.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { name: "Selenium", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png" },
    { name: "Streamlit", logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Streamlit-logo-primary-colormark-darktext.png" }
  ];

  const experiences = [
    {
      title: "AI Intern",
      company: "NCS",
      date: "May 2024 - August 2024",
      description: "Developed a Gen AI-powered tender analysis POC for an overseas client, reducing manual processing of 1000+ tender pages by 95% and projected cost savings of over $50,000. Led the end-to-end project delivery, including requirements gathering, implementation planning, and presentations of final POC with performance metrics. Designed and implemented the system using Advanced prompt engineering techniques such as Retrieval-Augmented Generation(RAG).",
      side: "left"
    },
    {
      title: "Data Scientist Intern",
      company: "Galen Growth",
      date: "June 2023 - August 2023",
      description: "Developed machine learning models for multi-label classification, achieving 90% test accuracy and eliminating manual classification tasks. Automated web scraping processes using Python, BeautifulSoup, and Selenium, reducing data extraction time by 80%. Performed EDA using Numpy, Pandas, MySQL, and Excel. Designed database schemas and implemented ETL pipelines to insert thousands of venture data records into database efficiently.",
      side: "right"
    }
  ];

  const certifications = [
    { name: "Udemy: Taming Big Data with Apache Spark and Python", url: "https://www.udemy.com/certificate/UC-0483838d-0194-410a-ab12-574e0f4ed73b/" },
    { name: "Udemy: Python for Data Science and Machine Learning Bootcamp", url: "https://www.udemy.com/certificate/UC-b2f06e50-b19f-4702-8402-5077ac08e51c/" },
    { name: "AWS: AWS Certified Solutions Architect Associate", url: "https://www.credly.com/badges/f3f6189e-2bb3-40b3-b328-6fbeecb97171/linked_in_profile" },
    { name: "Coursera: Google Data Analytics Certificate", url: "https://www.credly.com/badges/5e09b040-7d6f-464d-9e65-90dec66a3c82/linked_in_profile" },
    { name: "Oracle: Oracle Certified Foundations Associate, Java", url: "https://www.credly.com/badges/cc029f2c-01bd-4181-a58d-04b7cab7eae3/public_url" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 mx-4 my-8 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Hello. I'm{' '}
                  <span className="bg-indigo-600 bg-clip-text text-transparent font-extrabold">
                    Valentino Ong
                  </span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-gray-700 font-semibold mt-2">
                  Aspiring Data Analyst/Scientist
                </h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
              I’m a recent Computer Science graduate from Singapore Management University, with a specialization in Artificial Intelligence and Business Analytics. I’m passionate about leveraging data, AI, and emerging technologies to solve real-world problems and drive meaningful impact.
              Proficient in Python, SQL, machine learning, and data visualization, I enjoy uncovering patterns, generating actionable insights, and building solutions that matter. With a strong foundation in teamwork and leadership, I’m eager to contribute to innovative, data-driven initiatives that make a difference.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/valentino-ong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-300"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Valent2809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-300"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-4 h-4" />
                  GitHub
                </a>
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-300">
                  📞 +6591642003
                </span>
                <a className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-300">
                  📧 valentinoong61@gmail.com
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2 flex items-center justify-center">
              <RotatingCard />
            </div>
          </div>
          
          {/* Download Buttons */}
          <div className="flex justify-center gap-4 py-6 bg-gray-50/80">
            <a
              href={`${process.env.PUBLIC_URL}/ValentinoResumeDS.pdf`}
              download
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Download Resume
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/GalenGrowth_Recommendation_Letter.pdf`}
              download
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Download Recommendation Letter
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 mx-4 mb-8 rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group hover:from-indigo-50 hover:to-purple-50 hover:border-indigo-200"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 mx-auto mb-3 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

          {/* Experience Timeline - Mobile Responsive */}
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 mx-4 mb-8 rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">My Experience</h2>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  exp.side === 'left' ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12`}>
                  <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-indigo-600 font-semibold mb-2">{exp.company}</h4>
                    <p className="text-sm text-gray-500 mb-3">{exp.date}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                  💼
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs">💼</span>
                </div>
                <div className="absolute left-3 top-6 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                
                <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h3>
                  <h4 className="text-base text-indigo-600 font-semibold mb-1">{exp.company}</h4>
                  <p className="text-xs text-gray-500 mb-3">{exp.date}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-4 mb-8">
          {/* Education */}
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Education</h2>
            <div className="flex items-start gap-4 mb-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Singapore_Management_University_Logo.png"
                alt="SMU Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900">Singapore Management University</h3>
                <p className="text-indigo-600 font-semibold">Bachelor of Computer Science</p>
                <p className="text-sm text-gray-500">Aug 2021 – May 2025</p>
                <p className="text-sm text-gray-700"><strong>Grade:</strong> Magna Cum Laude/Highest Distinction</p>
                <p className="text-sm text-gray-700"><strong>Majors:</strong> AI & Business Analytics</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Awards</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>🏆 Dean's list AY24-25</li>
                  <li>🏆 Dean's list AY23-24</li>
                  <li>🏆 Trailblazer ASEAN Scholarship - 2025, 2024, 2023, 2022 and 2021</li>
                  <li>🏆 Ellipsis Tech Series 2024 Most creative award</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Teaching Assistant</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>📚 Intro to AI (AY23/24 and AY24/25)</li>
                  <li>📚 Analytics Foundation (AY24/25)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Certifications</h2>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-lg">📜</span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline leading-relaxed transition-colors duration-300"
                  >
                    {cert.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 mx-4 mb-8 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 h-80">
                <img
                  src={carouselImages[currentImageIndex]}
                  alt="Interest"
                  className="w-full h-full object-contain bg-gray-50"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-300 shadow-lg"
                >
                  ◀
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-300 shadow-lg"
                >
                  ▶
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Interest & Hobby</h2>
              <p className="text-gray-700 leading-relaxed">
                Being an inquisitive individual, I like to learn and explore new things such as through 
                various certifications and teach as well! I also used to be a tchoukball and rugby player 
                representing my school. Additionally, I enjoy going to the gym and playing games.
              </p>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <p className="text-gray-700 italic">
                  <strong className="text-indigo-600">Fun Fact:</strong> I used to be an Esports player for the game Wild Rift for 2 years. 
                  My in game name is Aelmejor as it means being the best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;