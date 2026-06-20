// ============================================
// 游戏静态数据定义
// ============================================

// 建筑数据
const buildings = [
  { id: 'classroom', name: '教学楼', icon: '🏫', cost: 10000, income: 500, expense: 100, studentCap: 50 },
  { id: 'library', name: '图书馆', icon: '📚', cost: 20000, income: 800, expense: 150, studentCap: 30 },
  { id: 'canteen', name: '食堂', icon: '🍽️', cost: 15000, income: 600, expense: 200, studentCap: 0 },
  { id: 'dormitory', name: '宿舍', icon: '🏠', cost: 12000, income: 400, expense: 80, studentCap: 100 },
  { id: 'gym', name: '体育馆', icon: '🏟️', cost: 30000, income: 1000, expense: 250, studentCap: 20 },
  { id: 'lab', name: '实验室', icon: '🔬', cost: 40000, income: 1200, expense: 300, studentCap: 15 },
  { id: 'office', name: '行政楼', icon: '🏢', cost: 25000, income: 700, expense: 180, studentCap: 0 },
  { id: 'playground', name: '操场', icon: '⚽', cost: 18000, income: 550, expense: 120, studentCap: 0 }
];

// 学生类型
const studentTypes = [
  { id: 'normal', name: '普通学生', icon: '👨‍🎓', quality: 1, cost: 5000, recruitRate: 0.6 },
  { id: 'excellent', name: '优秀学生', icon: '🌟', quality: 1.5, cost: 15000, recruitRate: 0.25 },
  { id: 'rich', name: '富家子弟', icon: '💎', quality: 1.2, cost: 20000, recruitRate: 0.1 },
  { id: 'genius', name: '天才学生', icon: '🎓', quality: 2, cost: 50000, recruitRate: 0.05 }
];

// 教师类型
const teacherTypes = [
  { id: 'normal', name: '普通教师', icon: '👨‍🏫', quality: 1, cost: 10000 },
  { id: 'excellent', name: '优秀教师', icon: '🏆', quality: 1.5, cost: 25000 },
  { id: 'expert', name: '专家教师', icon: '⭐', quality: 2, cost: 50000 },
  { id: 'master', name: '名师', icon: '👑', quality: 3, cost: 100000 }
];

// 抽卡概率
const gachaRates = {
  normal: 0.6,
  excellent: 0.25,
  rich: 0.1,
  genius: 0.05
};

// 活动奖励
const activityRewards = [
  { days: 1, reward: { gold: 1000, diamond: 10 } },
  { days: 2, reward: { gold: 2000, diamond: 20 } },
  { days: 3, reward: { gold: 5000, diamond: 50 } },
  { days: 7, reward: { gold: 20000, diamond: 200 } },
  { days: 14, reward: { gold: 50000, diamond: 500 } },
  { days: 30, reward: { gold: 100000, diamond: 1000 } }
];

// 天气效果
const weatherEffects = { 
  0: { name: '晴天', icon: '☀️', income: 1.0, recruit: 1.0, energy: 1.0, mood: 1.0, color: '#fbbf24' }, 
  1: { name: '雨天', icon: '🌧️', income: 0.8, recruit: 0.7, energy: 0.9, mood: 0.85, color: '#60a5fa' }, 
  2: { name: '雪天', icon: '❄️', income: 0.6, recruit: 0.5, energy: 0.7, mood: 0.7, color: '#93c5fd' }, 
  3: { name: '雾天', icon: '🌫️', income: 0.9, recruit: 0.8, energy: 0.85, mood: 0.9, color: '#9ca3af' }, 
  4: { name: '台风', icon: '🌀', income: 0.5, recruit: 0.3, energy: 0.5, mood: 0.5, color: '#a78bfa' },
  5: { name: '冰雹', icon: '🧊', income: 0.4, recruit: 0.4, energy: 0.6, mood: 0.6, color: '#bfdbfe' },
  6: { name: '沙尘暴', icon: '🌪️', income: 0.55, recruit: 0.35, energy: 0.65, mood: 0.6, color: '#d97706' },
  7: { name: '彩虹', icon: '🌈', income: 1.2, recruit: 1.3, energy: 1.1, mood: 1.2, color: '#ec4899' }
};

// 天气图标
const weatherIcons = ['☀️', '🌧️', '❄️', '🌫️', '🌀', '🧊', '🌪️', '🌈'];

// 天气CSS类
const weatherClasses = [
  'background:linear-gradient(90deg, #f59e0b, #fbbf24)',
  'background:linear-gradient(90deg, #3b82f6, #60a5fa)',
  'background:linear-gradient(90deg, #93c5fd, #bfdbfe)',
  'background:linear-gradient(90deg, #6b7280, #9ca3af)',
  'background:linear-gradient(90deg, #8b5cf6, #a78bfa)',
  'background:linear-gradient(90deg, #dbeafe, #e0f2fe)',
  'background:linear-gradient(90deg, #d97706, #f59e0b)',
  'background:linear-gradient(90deg, #ec4899, #f472b6)'
];

// 危机事件
const crisisEvents = [
  { name: '流感爆发', effect: '学生减少20%', prob: 0.03, type: 'negative' },
  { name: '教师罢工', effect: '教学暂停3天', prob: 0.02, type: 'negative' },
  { name: '食品安全', effect: '满意度-20%', prob: 0.02, type: 'negative' },
  { name: '设备故障', effect: '维修费用5万', prob: 0.04, type: 'negative' },
  { name: '媒体曝光', effect: '声望+30', prob: 0.03, type: 'positive' },
  { name: '状元诞生', effect: '全属性大幅提升', prob: 0.02, type: 'positive' }
];

// 排行榜玩家
const defaultRankPlayers = [
  { name: '教育大亨', score: 9999999 },
  { name: '校长大人', score: 8888888 },
  { name: '名师高徒', score: 7777777 },
  { name: '桃李满天下', score: 6666666 },
  { name: '新手校长', score: 0 }
];

// 成就列表
const defaultAchievements = [
  { id: 1, name: '初出茅庐', desc: '建造第1栋建筑', done: false, reward: 10000, claimed: false },
  { id: 2, name: '建筑大师', desc: '建造10栋建筑', done: false, reward: 100000, claimed: false },
  { id: 3, name: '桃李满天下', desc: '招收100学生', done: false, reward: 200000, claimed: false },
  { id: 4, name: '名师高徒', desc: '招聘10名教师', done: false, reward: 150000, claimed: false },
  { id: 5, name: '百万富翁', desc: '累计100万金币', done: false, reward: 500, claimed: false },
  { id: 6, name: '危机处理', desc: '成功处理5次危机', done: false, reward: 300, claimed: false, progress: 0 },
  { id: 7, name: '签到达人', desc: '累计签到7天', done: false, reward: 500, claimed: false },
  { id: 8, name: '五星名校', desc: '声望达到100', done: false, reward: 1000, claimed: false }
];

// 日常任务
const defaultTasks = [
  { id: 1, name: '招收学生', desc: '招收100名学生', target: 100, progress: 0, reward: 50000 },
  { id: 2, name: '建造建筑', desc: '建造10栋建筑', target: 10, progress: 0, reward: 100000 },
  { id: 3, name: '经营天数', desc: '经营30天', target: 30, progress: 0, reward: 150000 },
  { id: 4, name: '获得声望', desc: '声望达到80', target: 80, progress: 50, reward: 80000 },
  { id: 5, name: '培养人才', desc: '培养50名毕业生', target: 50, progress: 0, reward: 200000 }
];

// 邮件列表
const defaultMails = [
  { id: 1, title: '🎁 新手大礼包', desc: '欢迎来到校园大亨！', reward: '200000金币 + 100钻石', read: false, claimed: false },
  { id: 2, title: '📢 玩法更新', desc: '签到+活动系统上线！', reward: '全新玩法', read: false, claimed: false },
  { id: 3, title: '⚠️ 危机预警', desc: '请注意校园安全！', reward: '危机系统开放', read: false, claimed: false }
];

// 科技列表
const defaultTechs = [
  { id: 1, name: '高效教学', desc: '所有收入+20%', cost: 50000, done: false },
  { id: 2, name: '智能管理', desc: '所有支出-15%', cost: 80000, done: false },
  { id: 3, name: '扩招计划', desc: '学生容量+30%', cost: 100000, done: false },
  { id: 4, name: '节税政策', desc: '税率降低3%', cost: 150000, done: false },
  { id: 5, name: '校友网络', desc: '每日额外+10000', cost: 200000, done: false },
  { id: 6, name: '危机公关', desc: '危机损失-50%', cost: 300000, done: false }
];

// 股票列表
const defaultStocks = [
  { id: 1, name: '教育科技', price: 100, hold: 0, trend: 1 },
  { id: 2, name: '在线教育', price: 80, hold: 0, trend: 1 },
  { id: 3, name: 'AI教育', price: 150, hold: 0, trend: -1 },
  { id: 4, name: '职业培训', price: 60, hold: 0, trend: 1 }
];

// 竞赛列表
const defaultCompetitions = [
  { id: 1, name: '校运动会', desc: '校内体育竞技', cost: 30000, reward: 60000, rep: 10, active: false, cooldown: 0, type: 'internal', difficulty: 1 },
  { id: 2, name: '校园歌手大赛', desc: '歌唱才艺比拼', cost: 25000, reward: 50000, rep: 8, active: false, cooldown: 0, type: 'internal', difficulty: 1 },
  { id: 3, name: '学科竞赛', desc: '知识技能比拼', cost: 80000, reward: 150000, rep: 20, active: false, cooldown: 0, type: 'city', difficulty: 2 },
  { id: 4, name: '市青少年艺术节', desc: '市级文艺汇演', cost: 100000, reward: 200000, rep: 25, active: false, cooldown: 0, type: 'city', difficulty: 2 },
  { id: 5, name: '省级科技创新大赛', desc: '省级科技展示', cost: 200000, reward: 400000, rep: 40, active: false, cooldown: 0, type: 'province', difficulty: 3 },
  { id: 6, name: '省奥林匹克竞赛', desc: '省级学科巅峰对决', cost: 250000, reward: 500000, rep: 50, active: false, cooldown: 0, type: 'province', difficulty: 3 }
];

// 社团列表
const defaultClubs = [
  { id: 1, name: '篮球社', icon: '🏀', desc: '体育类社团', cost: 30000, income: 3000, rep: 3, members: 0 },
  { id: 2, name: '音乐社', icon: '🎵', desc: '艺术类社团', cost: 50000, income: 5000, rep: 5, members: 0 },
  { id: 3, name: '科技创新社', icon: '💻', desc: '科技类社团', cost: 80000, income: 8000, rep: 8, members: 0 },
  { id: 4, name: '文学社', icon: '📖', desc: '学术类社团', cost: 20000, income: 2000, rep: 2, members: 0 },
  { id: 5, name: '志愿者协会', icon: '❤️', desc: '公益类社团', cost: 40000, income: 4000, rep: 6, members: 0 }
];

//  rival schools
const defaultRivalSchools = [
  { id: 1, name: '清华附中', rank: 1, rep: 95, students: 500, status: 'neutral' },
  { id: 2, name: '北大附中', rank: 2, rep: 90, students: 450, status: 'neutral' },
  { id: 3, name: '复旦附中', rank: 3, rep: 85, students: 400, status: 'neutral' },
  { id: 4, name: '交大附中', rank: 4, rep: 80, students: 380, status: 'neutral' },
  { id: 5, name: '浙大附中', rank: 5, rep: 75, students: 350, status: 'neutral' }
];

// 入侵事件
const invasionEvents = [
  { id: 1, name: '流浪混混', icon: '👤', power: 20, reward: { gold: 1000 }, prob: 0.08 },
  { id: 2, name: '不良团伙', icon: '👥', power: 50, reward: { gold: 3000, wood: 50 }, prob: 0.05 },
  { id: 3, name: '武装暴徒', icon: '🔫', power: 100, reward: { gold: 10000, iron: 50 }, prob: 0.02 },
  { id: 4, name: '神秘势力', icon: '👹', power: 200, reward: { gold: 50000, crystal: 20 }, prob: 0.01 }
];

// 宠物列表
const defaultPets = [
  { id: 1, name: '校猫', icon: '🐱', effect: '满意度+5%', cost: 0, owned: true },
  { id: 2, name: '校狗', icon: '🐕', effect: '防御+10', cost: 100000, owned: false },
  { id: 3, name: '鹦鹉', icon: '🦜', effect: '声望+5', cost: 150000, owned: false },
  { id: 4, name: '熊猫', icon: '🐼', effect: '所有收益+10%', cost: 500000, owned: false },
  { id: 5, name: '龙', icon: '🐉', effect: '所有属性+20%', cost: 1000000, owned: false }
];

// 节日列表
const defaultFestivals = [
  { id: 1, name: '开学季', month: 9, day: 1, bonus: { gold: 20000, rep: 10 }, active: false },
  { id: 2, name: '校庆', month: 10, day: 15, bonus: { gold: 50000, rep: 20 }, active: false },
  { id: 3, name: '新年', month: 1, day: 1, bonus: { gold: 100000, diamond: 100 }, active: false },
  { id: 4, name: '校庆周', month: 5, day: 4, bonus: { gold: 80000, rep: 15 }, active: false },
  { id: 5, name: '运动会', month: 4, day: 1, bonus: { gold: 30000, rep: 10 }, active: false }
];

// 探索区域
const defaultExplorationZones = [
  { id: 1, name: '附近森林', icon: '🌲', danger: 1, rewards: { wood: 50, food: 20 }, unlocked: true, explored: 0, maxExplore: 100 },
  { id: 2, name: '废弃矿区', icon: '⛏️', danger: 2, rewards: { stone: 40, iron: 15 }, unlocked: true, explored: 0, maxExplore: 150 },
  { id: 3, name: '荒野废墟', icon: '🏚️', danger: 3, rewards: { iron: 30, crystal: 5 }, unlocked: false, explored: 0, maxExplore: 200 },
  { id: 4, name: '雪山遗迹', icon: '🏔️', danger: 5, rewards: { rareMetal: 20, specialParts: 5 }, unlocked: false, explored: 0, maxExplore: 300 }
];

// 合成配方
const defaultCraftingRecipes = [
  { id: 1, name: '简易木凳', icon: '🪑', materials: { wood: 20 }, result: { comfort: 5 }, unlocked: true },
  { id: 2, name: '石墙', icon: '🧱', materials: { stone: 50 }, result: { defense: 10 }, unlocked: true },
  { id: 3, name: '铁制工具', icon: '🔧', materials: { iron: 30, wood: 10 }, result: { production: 1.2 }, unlocked: true },
  { id: 4, name: '水晶吊灯', icon: '💎', materials: { crystal: 20, iron: 10 }, result: { prestige: 20 }, unlocked: false },
  { id: 5, name: '高级设备', icon: '⚙️', materials: { rareMetal: 15, specialParts: 5, crystal: 10 }, result: { production: 2 }, unlocked: false },
  { id: 6, name: '防御炮塔', icon: '🗡️', materials: { iron: 80, power: 50 }, result: { defense: 50 }, unlocked: true }
];

// 随机事件
const defaultRandomEvents = [
  { id: 1, name: '神秘商人', desc: '一位神秘商人来到校园，提供优惠商品', type: 'positive', prob: 0.05 },
  { id: 2, name: '物资短缺', desc: '市场供应紧张，物资价格上涨', type: 'negative', prob: 0.03 },
  { id: 3, name: '慈善捐赠', desc: '收到匿名人士慷慨捐款', type: 'positive', prob: 0.04 },
  { id: 4, name: '设备损坏', desc: '部分教学设备损坏需要维修', type: 'negative', prob: 0.03 },
  { id: 5, name: '媒体采访', desc: '知名媒体来校进行专题报道', type: 'positive', prob: 0.03 },
  { id: 6, name: '学生抗议', desc: '学生对食堂伙食不满引发抗议', type: 'negative', prob: 0.02 },
  { id: 7, name: '明星来访', desc: '知名校友明星回到母校参观', type: 'positive', prob: 0.02 },
  { id: 8, name: '自然灾害', desc: '暴雨天气造成部分设施损坏', type: 'negative', prob: 0.02 },
  { id: 9, name: '教育视察', desc: '教育局领导来校视察工作', type: 'choice', prob: 0.03 },
  { id: 10, name: '学生失踪', desc: '一名学生无故失踪，家长焦急寻找', type: 'choice', prob: 0.02 },
  { id: 11, name: '校产纠纷', desc: '附近居民投诉校园噪音问题', type: 'choice', prob: 0.02 },
  { id: 12, name: '学术造假', desc: '教师论文涉嫌抄袭被举报', type: 'choice', prob: 0.02 },
  { id: 13, name: '国际交流', desc: '外国学校代表团来访交流', type: 'positive', prob: 0.02 },
  { id: 14, name: '食物中毒', desc: '部分学生出现食物中毒症状', type: 'negative', prob: 0.02 },
  { id: 15, name: '科研突破', desc: '学校科研团队取得重大突破', type: 'positive', prob: 0.01 }
];

// 课程列表
const defaultCourses = [
  { id: 1, name: '基础课程', desc: '基础教学', quality: 1, active: true },
  { id: 2, name: '进阶课程', desc: '提升教学质量', quality: 1.3, cost: 100000, active: false },
  { id: 3, name: '精英课程', desc: '大幅提升质量', quality: 1.6, cost: 300000, active: false },
  { id: 4, name: '国际课程', desc: '顶级教学质量', quality: 2, cost: 500000, active: false }
];

// 政策列表
const defaultPolicies = [
  { id: 1, name: '扩招政策', desc: '招生率+50%', cost: 50000, active: false, effect: 0.5 },
  { id: 2, name: '奖学金', desc: '满意度+10%', cost: 80000, active: false, effect: 10 },
  { id: 3, name: '学费减免', desc: '声望+20', cost: 100000, active: false, effect: 20 },
  { id: 4, name: '教师加薪', desc: '教学质量+15%', cost: 150000, active: false, effect: 0.15 },
  { id: 5, name: '校园美化', desc: '吸引力+25%', cost: 200000, active: false, effect: 0.25 }
];

// 活动列表
const defaultActivities = [
  { id: 1, name: '开服狂欢', desc: '登录即送20万金币', reward: 200000, claimed: false },
  { id: 2, name: '新手冲刺', desc: '建造5栋建筑送10万', target: 5, reward: 100000, claimed: false },
  { id: 3, name: '桃李满天下', desc: '招收50学生送500钻', target: 50, reward: 500, claimed: false }
];

// 建筑功能升级
const defaultBuildingFeatures = {
  classroom: [
    { id: 'smart', name: '智慧教室', desc: '收入+50%', cost: 100000, done: false },
    { id: 'online', name: '在线教学', desc: '不受天气影响', cost: 200000, done: false }
  ],
  library: [
    { id: 'digital', name: '数字图书馆', desc: '学生质量+20%', cost: 150000, done: false },
    { id: 'study', name: '自习室扩建', desc: '容量+100', cost: 100000, done: false }
  ],
  canteen: [
    { id: 'vip', name: 'VIP餐厅', desc: '满意度+15%', cost: 120000, done: false },
    { id: 'organic', name: '有机食堂', desc: '健康形象+声望', cost: 80000, done: false }
  ],
  dormitory: [
    { id: 'suite', name: '套房升级', desc: '满意度+20%', cost: 150000, done: false },
    { id: 'wifi', name: '全楼WiFi', desc: '招生效率+30%', cost: 80000, done: false }
  ],
  gym: [
    { id: 'equipment', name: '高级器材', desc: '竞赛胜率+10%', cost: 200000, done: false },
    { id: 'stadium', name: '灯光球场', desc: '声望+10', cost: 150000, done: false }
  ],
  lab: [
    { id: 'precision', name: '精密仪器', desc: '科研产出+50%', cost: 300000, done: false },
    { id: 'safety', name: '安全系统', desc: '降低事故率', cost: 100000, done: false }
  ],
  office: [
    { id: 'digital', name: '数字化办公', desc: '行政效率+30%', cost: 100000, done: false },
    { id: 'conference', name: '会议中心', desc: '赞助收入+50%', cost: 180000, done: false }
  ],
  playground: [
    { id: 'track', name: '塑胶跑道', desc: '体育成绩+20%', cost: 120000, done: false },
    { id: 'lighting', name: '夜间照明', desc: '使用时长+50%', cost: 80000, done: false }
  ]
};

// 每日挑战
const defaultDailyChallenges = [
  { id: 1, name: '建造1栋建筑', target: 1, type: 'build', reward: { gold: 50000 }, done: false, claimed: false, day: 0 },
  { id: 2, name: '招收10名学生', target: 10, type: 'student', reward: { gold: 30000 }, done: false, claimed: false, day: 0 },
  { id: 3, name: '声望达到60', target: 60, type: 'rep', reward: { diamond: 200 }, done: false, claimed: false, day: 0 },
  { id: 4, name: '单日收入超过10万', target: 100000, type: 'income', reward: { gold: 80000 }, done: false, claimed: false, day: 0 },
  { id: 5, name: '成功举办竞赛', target: 1, type: 'comp', reward: { gold: 100000, diamond: 50 }, done: false, claimed: false, day: 0 },
  { id: 6, name: '完成3次探索', target: 3, type: 'explore', reward: { gold: 40000 }, done: false, claimed: false, day: 0 },
  { id: 7, name: '合成2件物品', target: 2, type: 'craft', reward: { diamond: 100 }, done: false, claimed: false, day: 0 }
];

// 周挑战
const defaultWeeklyChallenges = [
  { id: 1, name: '金币达到100万', target: 1000000, type: 'gold', reward: { diamond: 500 }, done: false, claimed: false, week: 0 },
  { id: 2, name: '建筑达到20栋', target: 20, type: 'build', reward: { diamond: 800 }, done: false, claimed: false, week: 0 },
  { id: 3, name: '学生达到200人', target: 200, type: 'student', reward: { diamond: 1000 }, done: false, claimed: false, week: 0 },
  { id: 4, name: '声望达到150', target: 150, type: 'rep', reward: { diamond: 600 }, done: false, claimed: false, week: 0 }
];

// 仓库升级
const warehouseLevels = [
  { level: 1, capacity: 1000, cost: 50000 },
  { level: 2, capacity: 2000, cost: 150000 },
  { level: 3, capacity: 5000, cost: 500000 },
  { level: 4, capacity: 10000, cost: 1500000 },
  { level: 5, capacity: 20000, cost: 5000000 }
];

// 资源生产建筑
const resourceProductions = {
  wood: { base: 10, building: 'sawmill', icon: '🪵' },
  stone: { base: 8, building: 'quarry', icon: '🪨' },
  iron: { base: 5, building: 'mine', icon: '⛏️' },
  food: { base: 15, building: 'farm', icon: '🌾' },
  water: { base: 12, building: 'waterPlant', icon: '💧' },
  power: { base: 8, building: 'powerPlant', icon: '⚡' },
  crystal: { base: 2, building: 'mine', icon: '💎' },
  rareMetal: { base: 1, building: 'mine', icon: '🔩' },
  specialParts: { base: 1, building: 'lab', icon: '⚙️' }
};

// 贸易市场价格基础值
const tradeBasePrices = {
  wood: { buy: 10, sell: 5 },
  stone: { buy: 15, sell: 8 },
  iron: { buy: 30, sell: 15 },
  food: { buy: 8, sell: 4 },
  water: { buy: 6, sell: 3 },
  power: { buy: 12, sell: 6 },
  crystal: { buy: 100, sell: 50 },
  rareMetal: { buy: 200, sell: 100 }
};
