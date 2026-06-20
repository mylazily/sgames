// ============================================
// 游戏状态管理
// ============================================

function createInitialState() {
  // 初始化网格
  const grid = [];
  for (let y = 0; y < 12; y++) {
    grid[y] = [];
    for (let x = 0; x < 15; x++) {
      grid[y][x] = null;
    }
  }

  return {
    // 基础资源
    gold: 100000,
    diamond: 500,
    day: 1,
    season: 0,
    level: 1,
    exp: 0,
    
    // 游戏控制
    paused: false,
    speed: 1,
    grid: grid,
    selectedBuilding: null,
    buildCount: 0,
    gachaCount: 0,
    gameTimer: null,
    firstCharge: false,
    
    // 签到系统
    signInDays: 0,
    lastSignIn: 0,
    
    // 金融系统
    vipDays: 0,
    loan: 0,
    loanDays: 0,
    
    // 学校数据
    reputation: 50,
    satisfaction: 80,
    schoolRank: 10,
    buildSpeed: 1,
    upgradeBonus: 1,
    
    // 人员
    students: [],
    studentMax: 0,
    teachers: [],
    
    // 天气系统
    weather: 0,
    weatherHistory: [],
    weatherForecast: [],
    
    // 资源系统
    resources: {
      wood: 500, stone: 300, iron: 100, food: 200, water: 300, power: 100,
      crystal: 0, rareMetal: 0, specialParts: 0
    },
    storage: { max: 2000, used: 0 },
    
    // 资源生产建筑
    resourceBuildings: {
      sawmill: { level: 1, production: 10, storage: 200 },
      quarry: { level: 1, production: 8, storage: 150 },
      farm: { level: 1, production: 15, storage: 250 },
      waterPlant: { level: 1, production: 12, storage: 200 },
      powerPlant: { level: 1, production: 8, storage: 100 },
      mine: { level: 0, production: 0, storage: 100 }
    },
    
    // 探索系统
    exploration: {
      unlocked: true,
      zones: JSON.parse(JSON.stringify(defaultExplorationZones)),
      energy: 100,
      maxEnergy: 100,
      explorationTeam: [],
      exploredZones: 0
    },
    
    // 合成系统
    crafting: {
      unlocked: true,
      craftedCount: 0,
      recipes: JSON.parse(JSON.stringify(defaultCraftingRecipes)),
      craftingQueue: []
    },
    
    // 防御系统
    defense: {
      total: 0,
      walls: 0,
      turrets: 0,
      guards: [],
      lastAttack: 0,
      attackInterval: 10
    },
    
    // 贸易系统
    trade: {
      unlocked: true,
      marketPrices: {},
      tradeHistory: [],
      dailyDeals: [],
      priceHistory: {},
      inflation: 1.0,
      demandMultiplier: 1.0
    },
    
    // 银行系统
    bank: {
      deposit: 0,
      depositDays: 0,
      interestRate: 0.05,
      maxLoan: 500000,
      loanInterest: 0.1
    },
    
    // 活动系统
    activities: JSON.parse(JSON.stringify(defaultActivities)),
    
    // 政策系统
    policies: JSON.parse(JSON.stringify(defaultPolicies)),
    
    // 课程系统
    courses: JSON.parse(JSON.stringify(defaultCourses)),
    
    // 危机事件
    crises: JSON.parse(JSON.stringify(crisisEvents)),
    
    // 排行榜
    rankPlayers: JSON.parse(JSON.stringify(defaultRankPlayers)),
    
    // 成就系统
    achievements: JSON.parse(JSON.stringify(defaultAchievements)),
    
    // 任务系统
    tasks: JSON.parse(JSON.stringify(defaultTasks)),
    
    // 邮件系统
    mails: JSON.parse(JSON.stringify(defaultMails)),
    
    // 科技系统
    techs: JSON.parse(JSON.stringify(defaultTechs)),
    
    // 股票系统
    stocks: JSON.parse(JSON.stringify(defaultStocks)),
    
    // 竞赛系统
    competitions: JSON.parse(JSON.stringify(defaultCompetitions)),
    competitionRecord: { win: 0, lose: 0, championships: 0 },
    
    // 社团系统
    clubs: JSON.parse(JSON.stringify(defaultClubs)),
    clubBuilding: null,
    
    // 校际合作
    rivalSchools: JSON.parse(JSON.stringify(defaultRivalSchools)),
    schoolAlliance: null,
    
    // 入侵事件
    invasions: JSON.parse(JSON.stringify(invasionEvents)),
    
    // 宠物系统
    pets: JSON.parse(JSON.stringify(defaultPets)),
    
    // 节日系统
    festivals: JSON.parse(JSON.stringify(defaultFestivals)),
    
    // 排行榜数据
    rankings: {
      gold: [],
      reputation: [],
      students: [],
      buildings: [],
      allTime: []
    },
    
    // 每日挑战
    dailyChallenges: JSON.parse(JSON.stringify(defaultDailyChallenges)),
    
    // 周挑战
    weeklyChallenges: JSON.parse(JSON.stringify(defaultWeeklyChallenges)),
    
    // 建筑功能升级
    buildingFeatures: JSON.parse(JSON.stringify(defaultBuildingFeatures))
  };
}

// 全局游戏状态
let game = createInitialState();
