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
    num: "09",
    title: "Federated HGNN for Multi-Cloud Access Anomalies",
    short: "Fed. HGNN",
    desc: "Thesis research: detecting compromised identities in multi-cloud environments without sharing raw logs. CloudTrail activity becomes a heterogeneous graph of users, IPs and services, classified by a HANConv model trained centrally and then across three federated clients with FedAvg.",
    tags: ["PyTorch Geometric", "GNN", "Federated Learning", "Cloud Security"],
    url: "https://github.com/Philbert72/federated-hgnn-anomaly-detection",
    category: "research",
    image: "/projects/federated-hgnn-graph.png"
  },
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
    desc: "Multi-label model predicting 10 diseases at once from patient demographics and clinical metrics. Moves from a balanced Random Forest baseline to XGBoost with a lowered decision threshold, so the model catches sick patients instead of defaulting to healthy.", 
    tags: ["Python", "XGBoost", "Scikit-Learn", "Pandas"], 
    url: "https://github.com/Philbert72/Healthcare-Disease-Prediction", 
    category: "ml",
    image: "/projects/disease-correlation.png"
  },
  { 
    num: "03", 
    title: "LunarLander DQN Agent",
    short: "LunarLander", 
    desc: "Deep Q-Network agent that learns to land a spacecraft between the flags in Gymnasium's LunarLander-v3 physics simulation, using thrust efficiently.", 
    tags: ["Python", "PyTorch", "DQN", "RL", "Gymnasium"], 
    url: "https://github.com/Philbert72/DQN-agent-for-LunarLander", 
    category: "ml",
    image: "/projects/LunarLander.png"
  },
  { 
    num: "04", 
    title: "Flight Price Prediction",
    short: "Flight Prices", 
    desc: "End-to-end data science pipeline predicting airline prices using Random Forest Regression with complex temporal feature extraction.", 
    tags: ["Python", "Scikit-Learn", "Feature Engineering", "ML"], 
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
    desc: "Laravel platform connecting physical therapists with patients, improving recovery through remote monitoring and digital management of therapy protocols.", 
    tags: ["Laravel", "PHP", "MySQL", "Tailwind"], 
    url: "https://github.com/Philbert72/HomeHeal", 
    category: "web",
    image: "/projects/homeheal.png"
  },
  { 
    num: "07", 
    title: "Wine Quality Analysis",
    short: "Wine Quality", 
    desc: "Predicting wine quality from physicochemical properties in the WineQT dataset: EDA, oversampling for under-represented quality scores, and baseline and tuned XGBoost classifiers.", 
    tags: ["Python", "XGBoost", "Pandas", "Seaborn"], 
    url: "https://github.com/Philbert72/Wine-Quality-Analysis", 
    category: "ml",
    image: "/projects/wine-boxplots.png"
  },
  {
  num: "08", 
  title: "FURB",
    short: "FURB",
  desc: "A React and Node.js marketplace for furniture and household items, backed by MongoDB. It adds an AI-powered search built on the OpenAI API and a real-time Socket.IO chatroom so buyers and sellers can talk.",
  tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
  url: "https://github.com/Philbert72/FURB",
  category: "web",
  image: "/projects/furb.png"
},
];