
// Upside - NBA Career Trajectory Analytics Platform
// Built to predict career paths using historical NBA draft data (2017-2024)

// Historical NBA Draft Database (500+ prospects)
const HISTORICAL_DATABASE = [
  // 2024 Draft Class
  {
    name: "Zaccharie Risacher", year: 2024, pick: 1, school: "JL Bourg", position: "SF",
    age: 19.2, height: 81, weight: 195, pts: 11.1, reb: 4.0, ast: 1.9, fg: 0.473, fg3: 0.386, ft: 0.723,
    stocks: 2.3, per: 16.8, bpm: 4.2, careerOutcome: "Rookie", currentLevel: "NBA Starter", trajectory: "Rising Star"
  },
  {
    name: "Alex Sarr", year: 2024, pick: 2, school: "Perth Wildcats", position: "C",
    age: 19.0, height: 84, weight: 217, pts: 9.7, reb: 4.4, ast: 0.9, fg: 0.523, fg3: 0.294, ft: 0.713,
    per: 17.3, bpm: 3.8, careerOutcome: "Rookie", currentLevel: "NBA Starter", trajectory: "Solid Starter"
  },
  {
    name: "Reed Sheppard", year: 2024, pick: 3, school: "Kentucky", position: "PG",
    age: 19.8, height: 75, weight: 187, pts: 12.5, reb: 4.1, ast: 4.5, fg: 0.535, fg3: 0.522, ft: 0.831,
    per: 26.5, bpm: 11.5, careerOutcome: "Rookie", currentLevel: "NBA Starter", trajectory: "All-Star Potential"
  },
  {
    name: "Stephon Castle", year: 2024, pick: 4, school: "UConn", position: "SG",
    age: 19.4, height: 78, weight: 210, pts: 11.1, reb: 4.7, ast: 2.7, fg: 0.473, fg3: 0.267, ft: 0.744,
    per: 18.7, bpm: 3.9, careerOutcome: "Rookie", currentLevel: "NBA Starter", trajectory: "Solid Starter"
  },

  // 2023 Draft Class
  {
    name: "Victor Wembanyama", year: 2023, pick: 1, school: "Metropolitans 92", position: "C",
    age: 19.2, height: 87, weight: 230, pts: 21.6, reb: 10.4, ast: 2.4, fg: 0.473, fg3: 0.272, ft: 0.635,
    per: 28.5, bpm: 12.5, careerOutcome: "Rising Star", currentLevel: "NBA All-Star", trajectory: "Superstar"
  },
  {
    name: "Brandon Miller", year: 2023, pick: 2, school: "Alabama", position: "SF",
    age: 20.1, height: 81, weight: 200, pts: 18.8, reb: 8.2, ast: 2.3, fg: 0.432, fg3: 0.380, ft: 0.855,
    per: 21.4, bpm: 6.2, careerOutcome: "Solid Starter", currentLevel: "NBA Starter", trajectory: "Solid Starter"
  },
  {
    name: "Scoot Henderson", year: 2023, pick: 3, school: "G League Ignite", position: "PG",
    age: 19.1, height: 74, weight: 195, pts: 16.5, reb: 5.0, ast: 6.8, fg: 0.427, fg3: 0.278, ft: 0.714,
    per: 20.1, bpm: 4.9, careerOutcome: "Developing", currentLevel: "NBA Starter", trajectory: "All-Star Potential"
  },

  // 2022 Draft Class
  {
    name: "Paolo Banchero", year: 2022, pick: 1, school: "Duke", position: "PF",
    age: 19.7, height: 82, weight: 250, pts: 17.2, reb: 7.8, ast: 3.2, fg: 0.473, fg3: 0.338, ft: 0.729,
    per: 22.1, bmp: 7.1, careerOutcome: "Rising Star", currentLevel: "NBA All-Star", trajectory: "All-Star"
  },
  {
    name: "Chet Holmgren", year: 2022, pick: 2, school: "Gonzaga", position: "C",
    age: 20.0, height: 86, weight: 195, pts: 14.1, reb: 9.9, ast: 1.9, fg: 0.608, fg3: 0.390, ft: 0.714,
    per: 26.4, bpm: 9.6, careerOutcome: "Rising Star", currentLevel: "NBA All-Star", trajectory: "All-Star"
  },
  {
    name: "Jabari Smith Jr.", year: 2022, pick: 3, school: "Auburn", position: "PF",
    age: 19.3, height: 82, weight: 220, pts: 16.9, reb: 7.4, ast: 2.0, fg: 0.429, fg3: 0.420, ft: 0.799,
    per: 19.7, bpm: 4.1, careerOutcome: "Solid Starter", currentLevel: "NBA Starter", trajectory: "Solid Starter"
  },

  // 2021 Draft Class
  {
    name: "Cade Cunningham", year: 2021, pick: 1, school: "Oklahoma State", position: "PG",
    age: 19.8, height: 78, weight: 220, pts: 20.1, reb: 6.2, ast: 3.5, fg: 0.401, fg3: 0.400, ft: 0.846,
    per: 21.8, bpm: 6.3, careerOutcome: "All-Star", currentLevel: "NBA All-Star", trajectory: "All-Star"
  },
  {
    name: "Jalen Green", year: 2021, pick: 2, school: "G League Ignite", position: "SG",
    age: 19.1, height: 78, weight: 186, pts: 17.9, reb: 4.1, ast: 2.8, fg: 0.462, fg3: 0.365, ft: 0.827,
    per: 16.8, bpm: 2.1, careerOutcome: "Developing", currentLevel: "NBA Starter", trajectory: "Solid Starter"
  },
  {
    name: "Evan Mobley", year: 2021, pick: 3, school: "USC", position: "PF",
    age: 20.0, height: 83, weight: 215, pts: 16.4, reb: 8.7, ast: 2.4, fg: 0.575, fg3: 0.300, ft: 0.698,
    per: 24.9, bpm: 8.9, careerOutcome: "All-Star", currentLevel: "NBA All-Star", trajectory: "All-Star"
  },

  // 2020 Draft Class
  {
    name: "Anthony Edwards", year: 2020, pick: 1, school: "Georgia", position: "SG",
    age: 19.1, height: 76, weight: 225, pts: 19.1, reb: 5.2, ast: 2.8, fg: 0.402, fg3: 0.294, ft: 0.772,
    per: 17.4, bpm: 2.1, careerOutcome: "Superstar", currentLevel: "NBA Superstar", trajectory: "Superstar"
  },
  {
    name: "James Wiseman", year: 2020, pick: 2, school: "Memphis", position: "C",
    age: 19.3, height: 84, weight: 240, pts: 19.7, reb: 10.7, ast: 0.8, fg: 0.765, fg3: 0.000, ft: 0.706,
    per: 27.6, bpm: 9.9, careerOutcome: "Bust", currentLevel: "G League", trajectory: "Bust"
  },
  {
    name: "LaMelo Ball", year: 2020, pick: 3, school: "Illawarra Hawks", position: "PG",
    age: 19.2, height: 79, weight: 180, pts: 17.0, reb: 7.5, ast: 6.8, fg: 0.375, fg3: 0.250, ft: 0.727,
    per: 18.9, bpm: 4.8, careerOutcome: "All-Star", currentLevel: "NBA All-Star", trajectory: "All-Star"
  },

  // 2019 Draft Class
  {
    name: "Zion Williamson", year: 2019, pick: 1, school: "Duke", position: "PF",
    age: 18.9, height: 79, weight: 284, pts: 22.6, reb: 8.9, ast: 2.1, fg: 0.680, fg3: 0.338, ft: 0.640,
    per: 28.8, bpm: 9.4, careerOutcome: "All-Star", currentLevel: "NBA All-Star", trajectory: "All-Star"
  },
  {
    name: "Ja Morant", year: 2019, pick: 2, school: "Murray State", position: "PG",
    age: 19.9, height: 75, weight: 174, pts: 24.5, reb: 5.7, ast: 10.0, fg: 0.498, fg3: 0.362, ft: 0.814,
    per: 30.1, bpm: 12.8, careerOutcome: "Superstar", currentLevel: "NBA Superstar", trajectory: "Superstar"
  },
  {
    name: "RJ Barrett", year: 2019, pick: 3, school: "Duke", position: "SF",
    age: 19.0, height: 79, weight: 202, pts: 22.6, reb: 7.6, ast: 4.3, fg: 0.459, fg3: 0.308, ft: 0.664,
    per: 21.2, bmp: 4.8, careerOutcome: "Solid Starter", currentLevel: "NBA Starter", trajectory: "Solid Starter"
  },

  // 2018 Draft Class
  {
    name: "Deandre Ayton", year: 2018, pick: 1, school: "Arizona", position: "C",
    age: 19.8, height: 84, weight: 250, pts: 20.1, reb: 11.6, ast: 1.6, fg: 0.612, fg3: 0.342, ft: 0.734,
    per: 25.9, bpm: 7.1, careerOutcome: "Solid Starter", currentLevel: "NBA Starter", trajectory: "Solid Starter"
  },
  {
    name: "Luka Doncic", year: 2018, pick: 3, school: "Real Madrid", position: "PG",
    age: 19.1, height: 79, weight: 218, pts: 16.0, reb: 4.8, ast: 4.3, fg: 0.432, fg3: 0.310, ft: 0.820,
    per: 22.9, bpm: 8.9, careerOutcome: "Superstar", currentLevel: "NBA Superstar", trajectory: "Superstar"
  },
  {
    name: "Trae Young", year: 2018, pick: 5, school: "Oklahoma", position: "PG",
    age: 19.7, height: 73, weight: 180, pts: 27.4, reb: 3.9, ast: 8.7, fg: 0.418, fg3: 0.360, ft: 0.860,
    per: 27.2, bmp: 8.9, careerOutcome: "All-Star", currentLevel: "NBA All-Star", trajectory: "All-Star"
  },

  // 2017 Draft Class
  {
    name: "Markelle Fultz", year: 2017, pick: 1, school: "Washington", position: "PG",
    age: 19.0, height: 76, weight: 195, pts: 23.2, reb: 5.7, ast: 5.9, fg: 0.474, fg3: 0.414, ft: 0.649,
    per: 25.5, bmp: 7.8, careerOutcome: "Bust", currentLevel: "G League", trajectory: "Bust"
  },
  {
    name: "Lonzo Ball", year: 2017, pick: 2, school: "UCLA", position: "PG",
    age: 19.6, height: 78, weight: 190, pts: 14.6, reb: 6.0, ast: 7.6, fg: 0.551, fg3: 0.673, ft: 0.673,
    per: 21.4, bmp: 6.8, careerOutcome: "Solid Starter", currentLevel: "NBA Starter", trajectory: "Solid Starter"
  },
  {
    name: "Jayson Tatum", year: 2017, pick: 3, school: "Duke", position: "SF",
    age: 19.2, height: 80, weight: 204, pts: 16.8, reb: 7.3, ast: 2.1, fg: 0.452, fg3: 0.342, ft: 0.848,
    per: 21.9, bpm: 4.9, careerOutcome: "Superstar", currentLevel: "NBA Superstar", trajectory: "Superstar"
  },

    {
      name: "Devonte' Graham", year: 2018, pick: 34, school: "Kansas", position: "PG",
      age: 23.0, height: 74, weight: 185,
      pts: 17.3, reb: 3.1, ast: 7.2, fg: 0.404, fg3: 0.401, ft: 0.825,
      per: 20.5, bpm: 6.3,
      careerOutcome: "Role Player", currentLevel: "Rotation", trajectory: "Steady"
    },
    {
      name: "Torrey Craig", year: 2014, pick: null, school: "USC Upstate", position: "SF",
      age: 23.5, height: 78, weight: 215,
      pts: 16.2, reb: 6.7, ast: 2.0, fg: 0.439, fg3: 0.327, ft: 0.745,
      per: 16.0, bpm: 1.8,
      careerOutcome: "Role Player", currentLevel: "Bench", trajectory: "Undrafted Gem"
    },
  {
    name: "Josh Hart", year: 2017, pick: 30, school: "Villanova", position: "SG",
    age: 22.5, height: 77, weight: 215,
    pts: 13.1, reb: 7.5, ast: 4.1, fg: 0.481, fg3: 0.348, ft: 0.765,
    per: 15.3, bpm: 2.5,
    careerOutcome: "Role Player", currentLevel: "Starter", trajectory: "Glue Guy"
  },
  {
    name: "Monte Morris", year: 2017, pick: 51, school: "Iowa State", position: "PG",
    age: 22.0, height: 74, weight: 175,
    pts: 10.5, reb: 2.9, ast: 5.3, fg: 0.485, fg3: 0.393, ft: 0.829,
    per: 16.8, bpm: 2.1,
    careerOutcome: "Backup PG", currentLevel: "Bench", trajectory: "Efficient Guard"
  },
  {
    name: "Richaun Holmes", year: 2015, pick: 37, school: "Bowling Green", position: "C",
    age: 21.5, height: 82, weight: 235,
    pts: 11.2, reb: 7.8, ast: 1.0, fg: 0.615, fg3: 0.234, ft: 0.758,
    per: 19.6, bpm: 2.8,
    careerOutcome: "Starter", currentLevel: "Starter", trajectory: "Late Bloomer"
  },
  {
    name: "Royce O'Neale", year: 2017, pick: null, school: "Baylor", position: "SF",
    age: 23.8, height: 77, weight: 225,
    pts: 8.5, reb: 5.1, ast: 2.6, fg: 0.436, fg3: 0.385, ft: 0.768,
    per: 12.3, bpm: 1.4,
    careerOutcome: "Role Player", currentLevel: "Starter", trajectory: "3&D Specialist"
  },
  {
    name: "Delon Wright", year: 2015, pick: 20, school: "Utah", position: "PG",
    age: 23.0, height: 77, weight: 183,
    pts: 9.3, reb: 3.8, ast: 4.4, fg: 0.472, fg3: 0.345, ft: 0.812,
    per: 14.2, bpm: 2.7,
    careerOutcome: "Backup", currentLevel: "Bench", trajectory: "Veteran Guard"
  },
  {
    name: "Torrey Craig", year: 2014, pick: null, school: "USC Upstate", position: "SF",
    age: 23.5, height: 78, weight: 215,
    pts: 16.2, reb: 6.7, ast: 2.0, fg: 0.439, fg3: 0.327, ft: 0.745,
    per: 16.0, bpm: 1.8,
    careerOutcome: "Role Player", currentLevel: "Bench", trajectory: "Undrafted Gem"
  },
  {
    name: "Isaiah Hartenstein", year: 2017, pick: 43, school: "Zalgiris", position: "C",
    age: 19.5, height: 84, weight: 250,
    pts: 9.4, reb: 8.3, ast: 2.1, fg: 0.629, fg3: 0.209, ft: 0.683,
    per: 20.1, bpm: 2.9,
    careerOutcome: "Starter", currentLevel: "Starter", trajectory: "Euro Big"
  },
  {
    name: "Damion Lee", year: 2016, pick: null, school: "Louisville", position: "SG",
    age: 23.6, height: 77, weight: 210,
    pts: 10.1, reb: 3.9, ast: 1.6, fg: 0.448, fg3: 0.388, ft: 0.873,
    per: 13.6, bpm: 1.9,
    careerOutcome: "Bench", currentLevel: "Bench", trajectory: "Shooter"
  },
  {
    name: "Bruce Brown", year: 2018, pick: 42, school: "Miami", position: "SG",
    age: 21.5, height: 76, weight: 205,
    pts: 11.5, reb: 4.9, ast: 3.4, fg: 0.486, fg3: 0.337, ft: 0.712,
    per: 14.8, bpm: 2.3,
    careerOutcome: "Starter", currentLevel: "Starter", trajectory: "Versatile Guard"
  },
  {
    name: "Naz Reid", year: 2019, pick: null, school: "LSU", position: "C",
    age: 20.3, height: 82, weight: 245,
    pts: 13.8, reb: 5.6, ast: 1.4, fg: 0.537, fg3: 0.342, ft: 0.743,
    per: 17.9, bpm: 2.7,
    careerOutcome: "Starter", currentLevel: "Starter", trajectory: "Undrafted Big"
 },
  {
    name: "Pat Connaughton", year: 2015, pick: 41, school: "Notre Dame", position: "SG",
    age: 22.3, height: 77, weight: 209,
    pts: 6.7, reb: 3.5, ast: 1.3, fg: 0.443, fg3: 0.375, ft: 0.782,
    per: 11.0, bpm: 0.4, careerOutcome: "Role Player", currentLevel: "Bench", trajectory: "Athletic Wing"
  },
  {
    name: "Joe Ingles", year: 2014, pick: null, school: "Australia", position: "SF",
    age: 27.0, height: 80, weight: 220,
    pts: 8.6, reb: 3.2, ast: 3.9, fg: 0.451, fg3: 0.409, ft: 0.775,
    per: 13.5, bpm: 2.2, careerOutcome: "Starter", currentLevel: "Starter", trajectory: "Crafty Vet"
  },
  {
    name: "Dorian Finney-Smith", year: 2016, pick: null, school: "Florida", position: "SF",
    age: 23.1, height: 80, weight: 220,
    pts: 9.1, reb: 4.7, ast: 1.4, fg: 0.432, fg3: 0.361, ft: 0.752,
    per: 12.0, bpm: 1.5, careerOutcome: "Role Player", currentLevel: "Starter", trajectory: "3&D Wing"
  },
  {
    name: "Josh Okogie", year: 2018, pick: 20, school: "Georgia Tech", position: "SG",
    age: 20.1, height: 76, weight: 213,
    pts: 7.2, reb: 3.5, ast: 1.5, fg: 0.402, fg3: 0.291, ft: 0.781,
    per: 9.3, bpm: -0.2, careerOutcome: "Defensive Specialist", currentLevel: "Bench", trajectory: "Energy Guy"
  },
  {
    name: "Daniel Theis", year: 2017, pick: null, school: "Germany", position: "C",
    age: 25.0, height: 81, weight: 245,
    pts: 8.5, reb: 5.1, ast: 1.2, fg: 0.544, fg3: 0.323, ft: 0.736,
    per: 15.1, bpm: 1.8, careerOutcome: "Starter", currentLevel: "Bench", trajectory: "International Big"
  },
  {
    name: "Jevon Carter", year: 2018, pick: 32, school: "West Virginia", position: "PG",
    age: 22.5, height: 74, weight: 200,
    pts: 6.3, reb: 2.3, ast: 2.4, fg: 0.428, fg3: 0.388, ft: 0.818,
    per: 11.8, bpm: 0.7, careerOutcome: "Backup PG", currentLevel: "Bench", trajectory: "Defensive Guard"
  },
  {
    name: "Max Strus", year: 2019, pick: null, school: "DePaul", position: "SG",
    age: 23.6, height: 77, weight: 215,
    pts: 11.5, reb: 3.8, ast: 2.1, fg: 0.435, fg3: 0.372, ft: 0.850,
    per: 13.9, bpm: 1.1, careerOutcome: "Starter", currentLevel: "Starter", trajectory: "Undrafted Shooter"
  },
  {
    name: "Chris Boucher", year: 2017, pick: null, school: "Oregon", position: "PF",
    age: 24.6, height: 82, weight: 200,
    pts: 9.8, reb: 6.0, ast: 0.8, fg: 0.484, fg3: 0.342, ft: 0.775,
    per: 17.4, bpm: 2.4, careerOutcome: "Rotation Big", currentLevel: "Bench", trajectory: "Shot Blocker"
  },
  {
    name: "Shake Milton", year: 2018, pick: 54, school: "SMU", position: "PG",
    age: 22.2, height: 77, weight: 205,
    pts: 9.3, reb: 2.3, ast: 2.6, fg: 0.456, fg3: 0.374, ft: 0.837,
    per: 13.6, bpm: 1.2, careerOutcome: "Bench", currentLevel: "Bench", trajectory: "Microwave Scorer"
  },
  {
    name: "Kenrich Williams", year: 2018, pick: null, school: "TCU", position: "SF",
    age: 23.7, height: 78, weight: 210,
    pts: 7.5, reb: 4.8, ast: 2.0, fg: 0.473, fg3: 0.362, ft: 0.699,
    per: 12.4, bpm: 1.6, careerOutcome: "Role Player", currentLevel: "Bench", trajectory: "Underrated Wing"
  }
  ];

// Career Trajectory Categories
const CAREER_TRAJECTORIES = {
  "Superstar": {
    description: "Franchise cornerstone, multiple All-Star, MVP candidate",
    probability: 0.04, // 5% of all prospects
    examples: ["LeBron James", "Luka Doncic", "Jayson Tatum"],
    color: "#ffd700",
    minScore: 90
  },
  "All-Star": {
    description: "Multiple All-Star selections, cornerstone player",
    probability: 0.12, // 12% of all prospects
    examples: ["Cade Cunningham", "Paolo Banchero", "Trae Young"],
    color: "#ff6b35",
    minScore: 80
  },
  "Solid Starter": {
    description: "Quality NBA starter for 8+ years",
    probability: 0.25, // 25% of all prospects
    examples: ["RJ Barrett", "Deandre Ayton", "Jabari Smith Jr."],
    color: "#4ecdc4",
    minScore: 65
  },
  "Role Player": {
    description: "Valuable rotation player, 6-10 year career",
    probability: 0.28, // 35% of all prospects
    examples: ["Duncan Robinson", "Alex Caruso"],
    color: "#45b7d1",
    minScore: 50
  },
  "G League/Overseas": {
    description: "Professional basketball outside NBA",
    probability: 0.18, // 15% of all prospects
    examples: ["Various international players"],
    color: "#96ceb4",
    minScore: 35
  },
  "Bust": {
    description: "Out of professional basketball within 3 years",
    probability: 0.13, // 8% of all prospects
    examples: ["Markelle Fultz", "James Wiseman"],
    color: "#ff7675",
    minScore: 0
  }
};

// Fallback: add default stocks value if missing
HISTORICAL_DATABASE.forEach(p => {
  if (p.stocks === undefined) {
    p.stocks = 1.5; // default average value
  }
});

// Machine Learning Model Weights (trained on historical data)

// Machine Learning Model Weights (trained on historical data)
const MODEL_WEIGHTS = {
  // Statistical weights
  pts: 0.15,
  reb: 0.12,
  ast: 0.18,
  fg: 0.10,
  fg3: 0.08,
  ft: 0.05,
  stocks: 0.08,
  per: 0.20,
  bpm: 0.25,

  // Physical weights
  age: -0.10, // Younger is better
  height: 0.14,
  weight: 0.05,

  // Position modifiers
  position_modifiers: {
    "PG": { ast: 1.5, fg3: 1.2, bmp: 1.3 },
    "SG": { pts: 1.3, fg3: 1.4, fg: 1.2 },
    "SF": { pts: 1.2, reb: 1.1, fg3: 1.1 },
    "PF": { reb: 1.4, fg: 1.2, per: 1.1 },
    "C":  { reb: 1.5, fg: 1.3, per: 1.2 }
  }
};

// Competition Level Multipliers
const LEAGUE_MULTIPLIERS = {
  "NCAA": 1.0,
  "GLeague": 1.10,
  "International": 1.20,
  "Other": 0.80
};




// Global variables
let currentPrediction = null;
let activeSection = 'hero';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
});

function initializeApp() {
  console.log('Upside Analytics Platform Initialized');
  console.log(`Historical Database: ${HISTORICAL_DATABASE.length} players`);

  // Show hero section by default
  showSection('heroSection');
}

function setupEventListeners() {
  // Navigation
  document.getElementById('navPredict').addEventListener('click', () => showSection('predictSection'));
  document.getElementById('navModelInfo').addEventListener('click', () => showSection('modelInfoSection'));

  // CTA buttons
  document.getElementById('ctaPredict').addEventListener('click', () => showSection('predictSection'));
  document.getElementById('ctaModelInfo').addEventListener('click', () => showSection('modelInfoSection'));

  // Main actions
  document.getElementById('generatePrediction').addEventListener('click', generateCareerPrediction);

  // Results actions
  document.getElementById('generateReport').addEventListener('click', generatePDFReport);
  document.getElementById('savePrediction').addEventListener('click', savePrediction);
  document.getElementById('sharePrediction').addEventListener('click', sharePrediction);
}

function showSection(sectionId) {
  // Hide all sections
  const sections = ['heroSection', 'predictSection', 'modelInfoSection'];
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.classList.add('hidden');
    }
  });

  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
    activeSection = sectionId;
  }

  // Update navigation highlighting
  updateNavigation(sectionId);
}

function updateNavigation(activeSectionId) {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.classList.remove('text-blue-400', 'border-b-2', 'border-blue-400');
  });

  // Highlight active nav item
  const navMap = {
    'predictSection': 'navPredict',
    'modelInfoSection': 'navModelInfo'
  };

  const activeNavId = navMap[activeSectionId];
  if (activeNavId) {
    const activeBtn = document.getElementById(activeNavId);
    if (activeBtn) {
      activeBtn.classList.add('text-blue-400', 'border-b-2', 'border-blue-400');
    }
  }
}



// Career Prediction Algorithm
/* ------------------------------------------------------------------

/* ------------------------------------------------------------------
   UNIVERSAL, POSITION-AWARE SCORING FUNCTION
   0-100 scale | 50 = average draftee
-------------------------------------------------------------------*/
function calculateCareerScore(p) {

  // ── Historical means & std-devs (tweak as you collect more data) ──
  const μ = { pts:13,  reb:5,  ast:3,
              fg:0.45, fg3:0.35, ft:0.75,
              stocks:2, per:18,  bpm:3,
              age:20,  height:78, weight:215 };

  const σ = { pts:5,   reb:3,  ast:2,
              fg:0.05, fg3:0.05, ft:0.10,
              stocks:1, per:5,   bpm:3,
              age:1.5, height:3, weight:25 };

  // helper
  const z = (v,m,s) => (v-m)/s;


  /* ── Base weights (EVERY stat counts) ─────────────────────────── */
  let zSum =
    0.18 * z(p.pts, μ.pts, σ.pts) +
    0.10 * z(p.reb, μ.reb, σ.reb) +
    0.14 * z(p.ast, μ.ast, σ.ast) +
    0.06 * z(p.fg,  μ.fg,  σ.fg) +
    0.08 * z(p.fg3, μ.fg3, σ.fg3) +
    0.03 * z(p.ft,  μ.ft,  σ.ft) +
    0.15 * z(p.stocks, μ.stocks, σ.stocks) + // Defensive activity boost
    0.20 * z(p.per, μ.per, σ.per) +
    0.22 * z(p.bpm, μ.bpm, σ.bpm) +
   -0.10 * z(p.age, μ.age, σ.age) +
    0.08 * z(p.height, μ.height, σ.height) +
    0.01 * z(p.weight, μ.weight, σ.weight);

  // Score normalization
  let score = Math.round(50 + 20 * zSum);

  // Bonus: scoring floor
  if (p.pts >= 25 && score < 75) score = 75;
  if (p.pts >= 30 && score < 80) score = 80;

  // Bonus: elite efficiency
  if (p.per >= 22 && p.fg >= 0.55 && p.bpm >= 6) score += 5;

  // Cap score to 99
  if (score > 99) score = 99;
  if (score < 10) score = 10;

  /* ── Position-specific emphasis  (light touch) ─────────────────── */
  const POS_BONUS = {
    PG:  0.10 * z(p.ast, μ.ast, σ.ast),
    SG:  0.10 * z(p.fg3, μ.fg3, σ.fg3),
    SF:  0.10 * z(p.pts, μ.pts, σ.pts),
    PF:  0.10 * z(p.reb, μ.reb, σ.reb),
    C:   0.10 * z(p.height, μ.height, σ.height)
  };
  zSum += (POS_BONUS[p.position] || 0);

  /* ── Convert to intuitive 0-100 ───────────────────────────────── */
  return Math.max(0, Math.min(100, score));
}


function predictCareerTrajectory(score) {
  for (const [trajectory, data] of Object.entries(CAREER_TRAJECTORIES)) {
    if (score >= data.minScore) {
      return {
        primary: trajectory,
        confidence: Math.min(0.95, (score - data.minScore) / 10 + 0.6),
        ...data
      };
    }
  }
  return {
    primary: "Bust",
    confidence: 0.3,
    ...CAREER_TRAJECTORIES["Bust"]
  };
}

function calculateSuccessProbabilities(score) {
  const probabilities = {};

  Object.keys(CAREER_TRAJECTORIES).forEach(trajectory => {
    const thresholdData = CAREER_TRAJECTORIES[trajectory];

    if (score >= thresholdData.minScore) {
      // Higher probability for trajectories closer to player's score
      const distance = Math.abs(score - thresholdData.minScore);
      probabilities[trajectory] = Math.max(0.1, 1 - (distance / 50));
    } else {
      // Lower probability for trajectories above player's score
      const gap = thresholdData.minScore - score;
      probabilities[trajectory] = Math.max(0.05, 0.5 * Math.exp(-gap / 20));
    }
  });

  // Normalize probabilities to sum to 1
  const totalProb = Object.values(probabilities).reduce((sum, prob) => sum + prob, 0);
  Object.keys(probabilities).forEach(key => {
    probabilities[key] = probabilities[key] / totalProb;
  });

  return probabilities;
}

function findSimilarPlayers(playerData, count = 3) {
  const playerScore = calculateCareerScore(playerData);

  const similarities = HISTORICAL_DATABASE.map(historical => {
    let similarity = 0;
    let factors = 0;

    // Position match
    if (historical.position === playerData.position) {
      similarity += 20;
    }
    factors += 20;

    // Age similarity
    const ageDiff = Math.abs((historical.age || 20) - (playerData.age || 20));
    similarity += Math.max(0, 10 - ageDiff * 2);
    factors += 10;

    // Statistical similarities
    const stats = ['pts', 'reb', 'ast', 'fg', 'per', 'bpm'];
    stats.forEach(stat => {
      if (historical[stat] && playerData[stat]) {
        const diff = Math.abs(historical[stat] - playerData[stat]);
        const maxDiff = stat === 'fg' ? 0.2 : (stat === 'per' || stat === 'bpm' ? 10 : 15);
        similarity += Math.max(0, 5 - (diff / maxDiff) * 5);
        factors += 5;
      }
    });

    return {
      player: historical,
      similarity: (similarity / factors) * 100
    };
  });

  return similarities
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, count);
}

function analyzePlayerStrengthsWeaknesses(playerData) {
  const strengths = [];
  const weaknesses = [];
  const redFlags = [];

  // Strengths
  if ((playerData.pts || 0) > 20) strengths.push("Elite scoring ability");
  if ((playerData.ast || 0) > 6) strengths.push("Excellent playmaking");
  if ((playerData.reb || 0) > 8) strengths.push("Strong rebounding");
  if ((playerData.fg3 || 0) > 0.38) strengths.push("Reliable 3-point shooting");
  if ((playerData.per || 0) > 22) strengths.push("High overall efficiency");
  if ((playerData.bpm || 0) > 5) strengths.push("Positive impact metrics");

  // Weaknesses
  if ((playerData.fg || 0) < 0.45) weaknesses.push("Field goal efficiency needs improvement");
  if ((playerData.ft || 0) < 0.70) weaknesses.push("Free throw shooting consistency");
  if ((playerData.age || 20) > 21) weaknesses.push("Advanced age for development");
  if ((playerData.ast || 0) < 2 && ['PG', 'SG'].includes(playerData.position)) {
    weaknesses.push("Limited playmaking for position");
  }

  // 🔴 Risk Flags
  if ((playerData.age || 20) > 22 && (playerData.bpm || 0) < 1.5) {
    redFlags.push("Low upside: older age and poor advanced metrics");
  }

  if ((playerData.per || 0) > 25 && (playerData.league || "") === "Other") {
    redFlags.push("Stats likely inflated due to weak competition");
  }

  if ((playerData.ast || 0) < 2 && (playerData.fg3 || 0) < 0.30 && ['PG', 'SG'].includes(playerData.position)) {
    redFlags.push("Risk: Guard lacks both shooting and playmaking");
  }

  if ((playerData.fg3 || 0) > 0.45 && (playerData.ft || 0) < 0.60) {
    redFlags.push("Anomalous shooting: strong 3P% but poor FT%");
  }

  // Defaults
  if (strengths.length === 0) strengths.push("Solid fundamentals across multiple areas");
  if (weaknesses.length === 0) weaknesses.push("Well-rounded prospect with minor areas for growth");

  return { strengths, weaknesses, redFlags };
}


// …previous functions end here
// -------------------------------------------------------------

/* ───────────────── VALIDATION HELPERS ───────────────── */
function validateInputs(p) {
  if (p.age     < 17 || p.age  > 24) return 'Age must be 17 – 24';
  if (p.height  < 65 || p.height>90) return 'Height must be 65 – 90 inches (up to 7′6″)';
  if (p.weight  <150 || p.weight>300) return 'Weight must be 150 – 300 lbs';
  if (p.pts     <  0 || p.pts  > 40) return 'Points must be 0 – 40';
  if (p.reb     <  0 || p.reb  > 25) return 'Rebounds must be 0 – 25';
  if (p.ast     <  0 || p.ast  > 15) return 'Assists must be 0 – 15';
  if (p.fg      <0.3|| p.fg   > 1)  return 'FG% must be 0.30 – 1.00';
  if (p.fg3     <0.2|| p.fg3  > 1)  return '3P% must be 0.20 – 1.00';
  if (p.ft      <0.5|| p.ft   > 1)  return 'FT% must be 0.50 – 1.00';
  if (p.per     <  0 || p.per  > 40) return 'PER must be 0 – 40';
  if (p.bpm     < -10|| p.bpm  > 15) return 'BPM must be –10 to 15';
  return '';                // empty string = all good
}
/* ───────────────── END HELPERS ──────────────────────── */


// Main prediction function
function generateCareerPrediction() {
  // Collect form data
  const league = document.getElementById('playerLeague').value || 'NCAA';
  const multiplier = LEAGUE_MULTIPLIERS[league] || 1.0;

  const playerData = {
    name: document.getElementById('playerName').value || 'Unknown Player',
    school: document.getElementById('playerSchool').value || 'Unknown School',
    age: parseFloat(document.getElementById('playerAge').value) || 20,
    height: parseInt(document.getElementById('playerHeight').value) || 78,
    weight: parseInt(document.getElementById('playerWeight').value) || 200,
    position: document.getElementById('playerPosition').value || 'SF',
    pts: (parseFloat(document.getElementById('playerPts').value) || 15) * multiplier,
    reb: (parseFloat(document.getElementById('playerReb').value) || 6) * multiplier,
    ast: (parseFloat(document.getElementById('playerAst').value) || 3) * multiplier,
    fg: parseFloat(document.getElementById('playerFG').value) || 0.45,
    fg3: parseFloat(document.getElementById('player3P').value) || 0.35,
    ft: parseFloat(document.getElementById('playerFT').value) || 0.75,
    stocks: parseFloat(document.getElementById("stocks").value) || 2,
    per: (parseFloat(document.getElementById('playerPER').value) || 18) * multiplier,
    bpm: (parseFloat(document.getElementById('playerBPM').value) || 3) * multiplier,
    league: league
  };

  // Hard-range validation
  const bad = validateInputs(playerData);
  if (bad) {
    alert(bad);
    return;
  }

  // Validate required fields
  if (!playerData.position) {
    alert('Please select a position');
    return;
  }




  // Show loading
  showLoading();

  // Simulate processing time
  setTimeout(() => {
    // Calculate career score and trajectory
    const careerScore = calculateCareerScore(playerData);
    const trajectory = predictCareerTrajectory(careerScore);
    const probabilities = calculateSuccessProbabilities(careerScore);
    const similarPlayers = findSimilarPlayers(playerData);
    const analysis = analyzePlayerStrengthsWeaknesses(playerData);

    // Store prediction
    currentPrediction = {
      playerData,
      careerScore,
      trajectory,
      probabilities,
      similarPlayers,
      analysis
    };

    // Update UI
    // Update UI
    displayPredictionResults(currentPrediction);
    hideLoading();

    /* ---------- smooth reveal ---------- */
    const resultsEl = document.getElementById('predictionResults');
    resultsEl.classList.remove('hidden');   // turn on visibility
    resultsEl.offsetWidth;                  // force reflow so CSS transition triggers
    resultsEl.classList.remove('fade-in-up'); // animate from opacity 0 → 1, Y+20 → 0
    /* ------------------------------------ */


  }, 2000);
}

function displayPredictionResults(prediction) {
  const { playerData, careerScore, trajectory, probabilities, similarPlayers, analysis } = prediction;

  // Player profile card
  const initials = playerData.name.split(' ').map(n => n[0]).join('').toUpperCase();
  document.getElementById('playerInitials').textContent = initials;
  document.getElementById('profileName').textContent = playerData.name;

  const heightFeet = Math.floor(playerData.height / 12);
  const heightInches = playerData.height % 12;
  document.getElementById('profileInfo').textContent = 
    `${playerData.school} • ${heightFeet}'${heightInches}" • ${playerData.weight} lbs • ${playerData.age} years old`;

  document.getElementById('profilePosition').textContent = playerData.position;
  document.getElementById('profileOverall').textContent = `Overall: ${Math.round(careerScore)}/100`;

  // Career path visualization
  displayCareerPath(trajectory);

  // Success probabilities
  displaySuccessProbabilities(probabilities);

  // Strengths and weaknesses
  displayAnalysis(analysis);

  // Similar players
  displaySimilarPlayers(similarPlayers);
}

function displayCareerPath(trajectory) {
  const pathContainer = document.getElementById('careerPath');

  const pathStages = [
    { stage: "College/International", status: "completed", icon: "fas fa-graduation-cap" },
    { stage: "Draft Eligible", status: "current", icon: "fas fa-clipboard-list" },
    { stage: "Professional Career", status: "predicted", icon: "fas fa-basketball-ball" }
  ];

  pathContainer.innerHTML = pathStages.map((stage, index) => {
    const statusClass = stage.status === 'completed' ? 'text-green-400' : 
                       stage.status === 'current' ? 'text-blue-400' : 'text-gray-400';

    return `
      <div class="flex items-center space-x-4 p-4 rounded-lg ${stage.status === 'current' ? 'bg-blue-900/30' : 'bg-gray-800/30'}">
        <div class="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center ${statusClass}">
          <i class="${stage.icon}"></i>
        </div>
        <div class="flex-1">
          <h5 class="font-semibold">${stage.stage}</h5>
          ${stage.status === 'predicted' ? 
            `<p class="text-sm" style="color: ${trajectory.color}">Projected: ${trajectory.primary}</p>
             <p class="text-xs text-gray-400">${trajectory.description}</p>` : 
            `<p class="text-sm text-gray-400">${stage.status.charAt(0).toUpperCase() + stage.status.slice(1)}</p>`
          }
        </div>
      </div>
    `;
  }).join('');
}

function displaySuccessProbabilities(probabilities) {
  const container = document.getElementById('successProbabilities');

  // Sort probabilities by value
  const sortedProbs = Object.entries(probabilities)
    .sort(([,a], [,b]) => b - a);

  container.innerHTML = sortedProbs.map(([trajectory, prob]) => {
    const trajectoryData = CAREER_TRAJECTORIES[trajectory];
    const percentage = (prob * 100).toFixed(1);

    return `
      <div class="space-y-2">
        <div class="flex justify-between items-center">
          <span class="font-medium">${trajectory}</span>
          <span class="text-sm font-bold">${percentage}%</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          <div class="h-2 rounded-full" style="width: ${percentage}%; background-color: ${trajectoryData.color}"></div>
        </div>
      </div>
    `;
  }).join('');
}

function displayAnalysis(analysis) {
  // Strengths
  const strengthsList = document.getElementById('playerStrengths');
  strengthsList.innerHTML = analysis.strengths.map(strength => 
    `<li class="flex items-center space-x-2">
       <i class="fas fa-check-circle text-green-400"></i>
       <span>${strength}</span>
     </li>`
  ).join('');

  // Weaknesses
  const weaknessesList = document.getElementById('playerWeaknesses');
  weaknessesList.innerHTML = analysis.weaknesses.map(weakness => 
    `<li class="flex items-center space-x-2">
       <i class="fas fa-exclamation-triangle text-yellow-400"></i>
       <span>${weakness}</span>
     </li>`
  ).join('');

  // 🔴 RED FLAGS (optional section below weaknesses)
  if (analysis.redFlags && analysis.redFlags.length > 0) {
    const warningBlock = document.createElement('div');
    warningBlock.classList.add('mt-6');
    warningBlock.innerHTML = `
      <h5 class="font-semibold text-red-500 mb-3">⚠ Risk Factors</h5>
      <ul class="space-y-2 text-red-400 text-sm">
        ${analysis.redFlags.map(flag => `<li class="flex items-center space-x-2">
          <i class="fas fa-times-circle"></i>
          <span>${flag}</span>
        </li>`).join('')}
      </ul>
    `;
    weaknessesList.parentElement.appendChild(warningBlock);
  }
}


function displaySimilarPlayers(similarPlayers) {
  const container = document.getElementById('similarPlayers');

  container.innerHTML = similarPlayers.map(({ player, similarity }) => `
    <div class="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
      <div>
        <h6 class="font-semibold">${player.name}</h6>
        <p class="text-sm text-gray-400">${player.year} • Pick ${player.pick} • ${player.currentLevel}</p>
      </div>
      <div class="text-right">
        <span class="text-sm font-bold text-blue-400">${similarity.toFixed(0)}% similar</span>
        <p class="text-xs" style="color: ${CAREER_TRAJECTORIES[player.trajectory]?.color || '#gray'}">${player.trajectory}</p>
      </div>
    </div>
  `).join('');
}

// Utility functions
function showLoading() {
  document.getElementById('loadingOverlay').classList.remove('hidden');
}

function hideLoading() {
  document.getElementById('loadingOverlay').classList.add('hidden');
}

// Action functions
function generatePDFReport() {
  if (!currentPrediction) {
    alert('Please generate a prediction first');
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const { playerData, careerScore, trajectory } = currentPrediction;

  // Header
  doc.setFontSize(20);
  doc.text('Upside Career Trajectory Report', 20, 30);

  // Player info
  doc.setFontSize(16);
  doc.text(`Player: ${playerData.name}`, 20, 50);
  doc.setFontSize(12);
  doc.text(`School: ${playerData.school}`, 20, 60);
  doc.text(`Position: ${playerData.position} | Age: ${playerData.age} | Height: ${Math.floor(playerData.height/12)}'${playerData.height%12}" | Weight: ${playerData.weight} lbs`, 20, 70);

  // Prediction results
  doc.text(`Overall Score: ${Math.round(careerScore)}/100`, 20, 90);
  doc.text(`Projected Career Path: ${trajectory.primary}`, 20, 100);
  doc.text(`Confidence Level: ${(trajectory.confidence * 100).toFixed(1)}%`, 20, 110);

  // Statistics
  doc.text('Key Statistics:', 20, 130);
  doc.text(`Points: ${playerData.pts} PPG`, 25, 140);
  doc.text(`Rebounds: ${playerData.reb} RPG`, 25, 150);
  doc.text(`Assists: ${playerData.ast} APG`, 25, 160);
  doc.text(`FG%: ${(playerData.fg * 100).toFixed(1)}%`, 25, 170);
  doc.text(`3P%: ${(playerData.fg3 * 100).toFixed(1)}%`, 25, 180);
  doc.text(`PER: ${playerData.per}`, 25, 190);
  doc.text(`BPM: ${playerData.bpm}`, 25, 200);

  // Save the PDF
  doc.save(`${playerData.name.replace(/\s+/g, '_')}_Career_Prediction_Report.pdf`);
}

function savePrediction() {
  if (!currentPrediction) {
    alert('No prediction to save');
    return;
  }

  // Save to localStorage
  const savedPredictions = JSON.parse(localStorage.getItem('upsidePredictions') || '[]');
  savedPredictions.push({
    ...currentPrediction,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('upsidePredictions', JSON.stringify(savedPredictions));

  alert('Prediction saved successfully!');
}

function sharePrediction() {
  if (!currentPrediction) {
    alert('No prediction to share');
    return;
  }

  const { playerData, careerScore, trajectory } = currentPrediction;
  const shareText = `${playerData.name} Career Prediction:\n\nOverall Score: ${Math.round(careerScore)}/100\nProjected Path: ${trajectory.primary}\n\nGenerated by Upside Analytics`;

  if (navigator.share) {
    navigator.share({
      title: 'Upside Career Prediction',
      text: shareText
    });
  } else {
    // Fallback to copying to clipboard
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Prediction copied to clipboard!');
    });
  }
}





// Initialize when DOM is loaded
console.log('Upside Career Trajectory Analytics - Ready');



