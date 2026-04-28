export interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  url: string;
  category: "ml" | "web" | "research";
}

export const projects: Project[] = [
  { 
    num: "01", 
    title: "GNNs for Cloud Security", 
    desc: "Published IEEE research on detecting data breaches in real-time using Graph Neural Networks, optimized for high-dimensional cloud environments.", 
    tags: ["PyTorch", "GNN", "Cloud Security", "IEEE"], 
    url: "https://github.com/Philbert72/Graph-Neural-Networks-for-Cloud-Security", 
    category: "research" 
  },
  { 
    num: "02", 
    title: "Disease Prediction System", 
    desc: "Diagnostic support tool using Scikit-Learn to predict patient health outcomes. Optimized for high recall on clinical symptom datasets.", 
    tags: ["Python", "Scikit-Learn", "Pandas", "ML"], 
    url: "https://github.com/Philbert72/Healthcare-Disease-Prediction", 
    category: "ml" 
  },
  { 
    num: "03", 
    title: "LunarLander DQN Agent", 
    desc: "Deep Q-Network implementation for autonomous landing. Agent navigates a physics simulation environment using Reinforcement Learning.", 
    tags: ["Python", "DQN", "RL", "OpenAI Gym"], 
    url: "https://github.com/Philbert72/DQN-agent-for-LunarLander", 
    category: "ml" 
  },
  { 
    num: "04", 
    title: "Flight Price Prediction", 
    desc: "End-to-end data science pipeline predicting airline prices using Random Forest Regression with complex temporal feature extraction.", 
    tags: ["Python", "Flask", "Feature Engineering", "ML"], 
    url: "https://github.com/Philbert72/Flight-Price-Prediction", 
    category: "ml" 
  },
  { 
    num: "05", 
    title: "Music Genre Classification", 
    desc: "NMF-based feature extraction and pattern recognition on audio signals for genre classification with signal processing.", 
    tags: ["Signal Processing", "NMF", "Scikit-Learn"], 
    url: "https://github.com/Philbert72/Classify-Music-Genre-NMF", 
    category: "ml" 
  },
  { 
    num: "06", 
    title: "HomeHeal", 
    desc: "Laravel-based web application streamlining home-based healthcare services, built with PHP and MySQL.", 
    tags: ["Laravel", "PHP", "MySQL", "Tailwind"], 
    url: "https://github.com/Philbert72/HomeHeal", 
    category: "web" 
  },
  { 
    num: "07", 
    title: "Wine Quality Analysis", 
    desc: "Predicting wine quality from the WineQT dataset, handling class imbalance and EDA to optimize classification.", 
    tags: ["Python", "Seaborn", "Pandas", "Numpy"], 
    url: "https://github.com/Philbert72/Wine-Quality-Analysis", 
    category: "ml" 
  },
];