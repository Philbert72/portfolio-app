export interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  url: string;
  category: "ml" | "web" | "research";
  image: string;
}

export const projects: Project[] = [
  { 
    num: "01", 
    title: "GNNs for Cloud Security", 
    desc: "Published IEEE research on detecting data breaches in real-time using Graph Neural Networks, optimized for high-dimensional cloud environments.", 
    tags: ["PyTorch", "GNN", "Cloud Security", "IEEE"], 
    url: "https://github.com/Philbert72/Graph-Neural-Networks-for-Cloud-Security", 
    category: "research",
    image: "/projects/gnn-security.png"
  },
  { 
    num: "02", 
    title: "Disease Prediction System", 
    desc: "Diagnostic support tool using Scikit-Learn to predict patient health outcomes. Optimized for high recall on clinical symptom datasets.", 
    tags: ["Python", "Scikit-Learn", "Pandas", "ML"], 
    url: "https://github.com/Philbert72/Healthcare-Disease-Prediction", 
    category: "ml",
    image: "/projects/Disease-Prediction.png"
  },
  { 
    num: "03", 
    title: "LunarLander DQN Agent", 
    desc: "Deep Q-Network implementation for autonomous landing. Agent navigates a physics simulation environment using Reinforcement Learning.", 
    tags: ["Python", "DQN", "RL", "OpenAI Gym"], 
    url: "https://github.com/Philbert72/DQN-agent-for-LunarLander", 
    category: "ml",
    image: "/projects/LunarLander.png"
  },
  { 
    num: "04", 
    title: "Flight Price Prediction", 
    desc: "End-to-end data science pipeline predicting airline prices using Random Forest Regression with complex temporal feature extraction.", 
    tags: ["Python", "Flask", "Feature Engineering", "ML"], 
    url: "https://github.com/Philbert72/Flight-Price-Prediction", 
    category: "ml",
    image: "/projects/Flight-Price.png"
  },
  { 
    num: "05", 
    title: "Music Genre Classification", 
    desc: "NMF-based feature extraction and pattern recognition on audio signals for genre classification with signal processing.", 
    tags: ["Signal Processing", "NMF", "Scikit-Learn"], 
    url: "https://github.com/Philbert72/Classify-Music-Genre-NMF", 
    category: "ml",
    image: "/projects/classify-music.png"
  },
  { 
    num: "06", 
    title: "HomeHeal", 
    desc: "Laravel-based web application streamlining home-based healthcare services, built with PHP and MySQL.", 
    tags: ["Laravel", "PHP", "MySQL", "Tailwind"], 
    url: "https://github.com/Philbert72/HomeHeal", 
    category: "web",
    image: "/projects/homeheal.png"
  },
  { 
    num: "07", 
    title: "Wine Quality Analysis", 
    desc: "Predicting wine quality from the WineQT dataset, handling class imbalance and EDA to optimize classification.", 
    tags: ["Python", "Seaborn", "Pandas", "Numpy"], 
    url: "https://github.com/Philbert72/Wine-Quality-Analysis", 
    category: "ml",
    image: "/projects/Wine-Quality.png"
  },
  {
  num: "08", 
  title: "FURB",
  desc: "A React and Node.js-based marketplace featuring a secure relational database for property and inventory management. It integrates an AI-powered search for high-precision discovery and a real-time chatroom to facilitate seamless communication between users.",
  tags: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
  url: "https://github.com/Philbert72/FURB",
  category: "web",
  image: "/projects/furb.png"
},
];