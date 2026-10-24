export interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  url: string;
  category: "ml" | "web" | "research";
  /** Short label used on the work graph */
  short: string;
  image: string;
}

export const projects: Project[] = [
  { 
    num: "01", 
    title: "GNNs for Cloud Security",
    short: "GNN Security", 
    desc: "Published IEEE research on detecting data breaches in real-time using Graph Neural Networks, optimized for high-dimensional cloud environments.", 
    tags: ["PyTorch", "GNN", "Cloud Security", "IEEE"], 
    url: "https://github.com/Philbert72/Graph-Neural-Networks-for-Cloud-Security", 
    category: "research",
    image: "/projects/gnn-security.png"
  },
  { 
    num: "02", 
    title: "Disease Prediction System",
    short: "Disease Pred.", 
    desc: "Diagnostic support tool using Scikit-Learn to predict patient health outcomes. Optimized for high recall on clinical symptom datasets.", 
    tags: ["Python", "Scikit-Learn", "Pandas", "ML"], 
    url: "https://github.com/Philbert72/Healthcare-Disease-Prediction", 
    category: "ml",
    image: "/projects/disease-correlation.png"
  },
  { 
    num: "03", 
    title: "LunarLander DQN Agent",
    short: "LunarLander", 
    desc: "Deep Q-Network implementation for autonomous landing. Agent navigates a physics simulation environment using Reinforcement Learning.", 
    tags: ["Python", "DQN", "RL", "OpenAI Gym"], 
    url: "https://github.com/Philbert72/DQN-agent-for-LunarLander", 
    category: "ml",
    image: "/projects/LunarLander.png"
  },
  { 
    num: "04", 
    title: "Flight Price Prediction",
    short: "Flight Prices", 
    desc: "End-to-end data science pipeline predicting airline prices using Random Forest Regression with complex temporal feature extraction.", 
    tags: ["Python", "Flask", "Feature Engineering", "ML"], 
    url: "https://github.com/Philbert72/Flight-Price-Prediction", 
    category: "ml",
    image: "/projects/Flight-Price.png"
  },
  { 
    num: "05", 
    title: "Music Genre Classification",
    short: "Music Genres", 
    desc: "Classifying music genres from song lyrics: TF-IDF features and NMF topic modeling turn each song into interpretable lyrical themes, then Logistic Regression, Linear SVM and Random Forest predict the genre.", 
    tags: ["NLP", "TF-IDF", "NMF", "Scikit-Learn"], 
    url: "https://github.com/Philbert72/Classify-Music-Genre-NMF", 
    category: "ml",
    image: "/projects/music-methodology.png"
  },
  { 
    num: "06", 
    title: "HomeHeal",
    short: "HomeHeal", 
    desc: "Laravel-based web application streamlining home-based healthcare services, built with PHP and MySQL.", 
    tags: ["Laravel", "PHP", "MySQL", "Tailwind"], 
    url: "https://github.com/Philbert72/HomeHeal", 
    category: "web",
    image: "/projects/homeheal.png"
  },
  { 
    num: "07", 
    title: "Wine Quality Analysis",
    short: "Wine Quality", 
    desc: "Predicting wine quality from the WineQT dataset, handling class imbalance and EDA to optimize classification.", 
    tags: ["Python", "Seaborn", "Pandas", "NumPy"], 
    url: "https://github.com/Philbert72/Wine-Quality-Analysis", 
    category: "ml",
    image: "/projects/wine-boxplots.png"
  },
  {
  num: "08", 
  title: "FURB",
    short: "FURB",
  desc: "A React and Node.js-based marketplace featuring a secure relational database for property and inventory management. It integrates an AI-powered search for high-precision discovery and a real-time chatroom to facilitate seamless communication between users.",
  tags: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
  url: "https://github.com/Philbert72/FURB",
  category: "web",
  image: "/projects/furb.png"
},
];