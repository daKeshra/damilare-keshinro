import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  BarChart, 
  User, 
  Briefcase, 
  Book, 
  Mail 
} from 'lucide-react';
import jakob from "../public/jakob.jpg"
import t1 from "../public/t1.png"
import t2 from "../public/t2.png"
import t3 from "../public/t3.png"



const LazyImage = ({ src, alt }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} style={{ minHeight: '100px', minWidth:'100px' }}>
      {inView ? <img src={src} alt={alt} className="w-1/2 h-40 object-cover rounded mb-4" /> : <p>Loading...</p>}
    </div>
  );
};

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, image }) => {
  return (
    <div className="bg-gray-800 text-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* {image && <img src={image} alt={title} loading='lazy' className="w-full h-40 object-cover rounded mb-4" />} */}
      {image && <LazyImage src={image} alt={title} />}

      <h3 className="text-xl font-semibold mb-3 animate-fade-in">{title}</h3>
      <p className="text-gray-400 mb-4 animate-fade-in delay-100">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="bg-blue-900 text-blue-200 text-xs px-2.5 py-0.5 rounded animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-3">
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-200 transition-colors duration-300"
          >
            GitHub
          </a>
        )}
        {liveLink && (
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-200 transition-colors duration-300"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home') 
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ["All", "Data Analysis", "Machine Learning", "AI Projects", "Technical Writing"];
  const projects = [
    {
      title: "Machine  Sales Predictor",
      description: "Developed a predictive model using advanced machine learning techniques to forecast sales trends.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      category: "Data Analysis",
      githubLink: "https://github.com/yourusername/sales-predictor",
      liveLink: null,
      image: t1
    },
    {
      title: "COVID-19 Data Analysis Dashboard",
      description: "Interactive dashboard visualizing global COVID-19 trends and statistical insights.",
      technologies: ["R", "Shiny", "ggplot2", "Plotly"],
      category: "Data Analysis",
      githubLink: "https://github.com/yourusername/covid-dashboard",
      liveLink: "https://your-covid-dashboard.com",
      image: jakob
    },
    {
      title: "Sales Forecasting",
      description: "Predicting future sales using machine learning.",
      technologies: ["Python", "Scikit-learn"],
      category: "Data Analysis",
      githubLink: "#",
      image: t2
    },
    {
      title: "AI Chatbot",
      description: "A conversational chatbot powered by NLP.",
      technologies: ["Python", "TensorFlow"],
      category: "AI Projects",
      githubLink: "#",
      image: t3
    },

    {
      title: "Sales Forecasting",
      description: "Predicting future sales using machine learning.",
      technologies: ["Python", "Scikit-learn"],
      category: ["Data Analysis",'All'],
      githubLink: "#",
    },
    {
      title: "AI Chatbot",
      description: "A conversational chatbot powered by NLP.",
      technologies: ["Python", "TensorFlow"],
      category: "AI Projects",
      githubLink: "#",
    },
    {
      title: "Sales Forecasting",
      description: "Predicting future sales using machine learning.",
      technologies: ["Python", "Scikit-learn"],
      category: ["Data Analysis",'All'],
      githubLink: "#",
    },
    {
      title: "AI Chatbot",
      description: "A conversational chatbot powered by NLP.",
      technologies: ["Python", "TensorFlow"],
      category: "AI Projects",
      githubLink: "#",
    },
    {
      title: "Sales Forecasting",
      description: "Predicting future sales using machine learning.",
      technologies: ["Python", "Scikit-learn"],
      category: ["Data Analysis",'All'],
      githubLink: "#",
    },
    {
      title: "AI Chatbot",
      description: "A conversational chatbot powered by NLP.",
      technologies: ["Python", "TensorFlow"],
      category: "AI Projects",
      githubLink: "#",
    },
    {
      title: "Sales Forecasting",
      description: "Predicting future sales using machine learning.",
      technologies: ["Python", "Scikit-learn"],
      category: ["Data Analysis",'All'],
      githubLink: "#",
    },
    {
      title: "AI Chatbot",
      description: "A conversational chatbot powered by NLP.",
      technologies: ["Python", "TensorFlow"],
      category: "AI Projects",
      githubLink: "#",
    },
    {
      title: "Sales Forecasting",
      description: "Predicting future sales using machine learning.",
      technologies: ["Python", "Scikit-learn"],
      category: ["Data Analysis",'All'],
      githubLink: "#",
    },
    {
      title: "AI Chatbot",
      description: "A conversational chatbot powered by NLP.",
      technologies: ["Python", "TensorFlow"],
      category: "AI Projects",
      githubLink: "#",
    }
  ];

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="text-left">
            <h1 className="text-4xl text-left px-8 font-bold mb-4 text-gray-200 animate-fade-in">
              Hi! I'm Damilare Keshinro
            </h1>
            <p className="text-xl text-left text-gray-400 px-12 max-w-8xl animate-fade-in delay-100 overflow-y-auto scrollbar-hide">

                  ---

                  ### **Damilare Keshinro – Data Analyst | Machine Learning Enthusiast | Clinical Research Advocate**  

                  I am a results-driven **data analyst** with a strong foundation in **machine learning, pattern recognition, and data-driven decision-making**. With expertise in **Python, SQL, and Power BI**, I thrive on transforming raw data into actionable insights, helping organizations make informed choices.  

                  Beyond data analytics, I am deeply invested in the intersection of **technology and healthcare**, actively contributing to clinical research initiatives aimed at improving health outcomes in Africa. As part of my commitment to fostering growth in the industry, I have played key roles in organizing **developer bootcamps, clinical trial training programs, and data science mentorship sessions**—ensuring the next generation of analysts and researchers are well-equipped for impact.  

                  My work extends into **AI applications**, particularly in **speech recognition** and predictive analytics, where I am building models to recognize diverse Nigerian accents and forecast product trends based on customer behavior and seasonality. Whether I’m leading data-driven discussions, speaking at industry events, or building digital solutions, my mission remains the same: **to harness the power of data to solve real-world problems and drive innovation**.  

                  🔹 Open to collaborations in **data science, AI-driven healthcare, and clinical research**  
                  🔹 Passionate about **education, mentorship, and making data insights accessible to all**  

                  Let’s connect and build something meaningful! 🚀  

                Transforming complex data into actionable insights through advanced analytics and machine learning.
            </p>
          </div>
        );
      case 'projects':
        return (
          <div className="h-[70vh] overflow-y-scroll px-4 scrollbar-hide">
            <h2 className="text-3xl font-semibold mb-6 text-gray-200 animate-slide-in-left">
              Projects
            </h2>
            {/* <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  {...project} 
                />
              ))}
            </div> */}

          

                {/* Category Selection */}
          <div className="flex space-x-4 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

            {/* Project List */}
            <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          </div>
        );
      case 'skills':
        return (
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-200 animate-slide-in-right">
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 text-gray-200 rounded-lg shadow-md p-6 animate-fade-in">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Code className="mr-3 text-blue-400" /> Programming
                </h3>
                <ul className="space-y-2 text-gray-400">
                  {['Python', 'R', 'SQL', 'JavaScript'].map((skill, index) => (
                    <li 
                      key={skill} 
                      className="animate-slide-in-left"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-800 text-gray-200 rounded-lg shadow-md p-6 animate-fade-in delay-100">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Database className="mr-3 text-blue-400" /> Data Tools
                </h3>
                <ul className="space-y-2 text-gray-400">
                  {['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'].map((tool, index) => (
                    <li 
                      key={tool} 
                      className="animate-slide-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-200 animate-slide-in-left">
              About Me
            </h2>
            <div className="bg-gray-800 text-gray-200 rounded-lg shadow-md p-6 animate-fade-in">
              <p className="text-gray-400 mb-4 animate-fade-in delay-100">
                Passionate data scientist with expertise in machine learning, statistical analysis, 
                and data visualization. Committed to turning complex data into meaningful insights 
                that drive business decisions.
              </p>
              <p className="text-gray-400 animate-fade-in delay-200">
                With experience in both personal and freelance projects, I specialize in developing 
                predictive models and creating interactive data dashboards.
              </p>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-200 animate-slide-in-right">
              Contact
            </h2>
            <div className="bg-gray-800 text-gray-200 rounded-lg shadow-md p-6 animate-fade-in">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-2 rounded-md bg-gray-700 text-gray-200 border-gray-600 animate-slide-in-left"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-2 rounded-md bg-gray-700 text-gray-200 border-gray-600 animate-slide-in-right"
                />
                <textarea 
                  placeholder="Your Message" 
                  className="w-full p-2 rounded-md h-32 bg-gray-700 text-gray-200 border-gray-600 animate-slide-in-left delay-100"
                ></textarea>
                <button 
                  className="bg-blue-700 hover:bg-blue-600 text-gray-200 px-6 py-2 rounded-md transition-colors duration-300 animate-slide-in-right delay-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 scrollbar-none">
      <nav className="bg-gray-800 text-gray-200 shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">Damilare Keshinro</div>
          <div className="flex space-x-6">
            {[
              { section: 'home', icon: User, label: 'Home' },
              { section: 'projects', icon: Briefcase, label: 'Projects' },
              { section: 'skills', icon: BarChart, label: 'Skills' },
              { section: 'about', icon: Book, label: 'About' },
              { section: 'contact', icon: Mail, label: 'Contact' }
            ].map(({ section, icon: Icon, label }) => (
              <button 
                key={section}
                onClick={() => setActiveSection(section)}
                className={`flex items-center transition-colors duration-300 ${
                  activeSection === section 
                    ? 'text-blue-400' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <Icon className="mr-2" /> {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-12 flex-1 scrollbar-hide">
        {renderSection()}
      </main>

      <footer className="bg-gray-800 text-gray-400  py-6 text-center">
        <p className="animate-pulse">© 2024 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
