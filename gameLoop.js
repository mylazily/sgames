// ============================================
// 游戏循环模块
// ============================================

// 游戏主循环
function startGameLoop() {
  if (game.gameTimer) clearInterval(game.gameTimer);
  
  game.gameTimer = setInterval(() => {
    if (game.paused) return;
    
    // 每日结算
    dailyUpdate();
    
    // 更新天气
    updateWeather();
    
    // 更新股票价格
    updateStockPrices();
    
    // 检查节日
    checkFestivals();
    
    // 检查随机事件
    checkRandomEvents();
    
    // 检查防御入侵
    checkDefense();
    
    // 更新挑战进度
    updateChallenges();
    
    // 更新排行榜
    updateRankings();
    
    // 保存游戏
    saveGame();
    
    // 刷新UI
    updateRes();
  }, 3000); // 每3秒一天
}

// 每日结算
function dailyUpdate() {
  // 计算总收入
  let totalIncome = 0;
  let totalExpense = 0;
  
  for (let y = 0; y < 12; y++) {
    for (let x = 0; x < 15; x++) {
      const b = game.grid[y][x];
      if (b) {
        const cfg = buildings.find(bd => bd.id === b.id);
        const lv = b.level || 1;
        totalIncome += cfg.income * lv;
        totalExpense += cfg.expense * lv;
      }
    }
  }
  
  // 应用天气影响
  const w = weatherEffects[game.weather];
  totalIncome *= w.income;
  
  // 应用科技加成
  game.techs.forEach(t => {
    if (t.id === 1 && t.done) totalIncome *= 1.2; // 高效教学
    if (t.id === 2 && t.done) totalExpense *= 0.85; // 智能管理
  });
  
  // 应用政策加成
  game.policies.forEach(p => {
    if (p.active) {
      if (p.id === 1) totalIncome *= 1.5; // 扩招政策
    }
  });
  
  // 应用课程加成
  game.courses.forEach(c => {
    if (c.active && c.quality) totalIncome *= c.quality;
  });
  
  // 应用宠物加成
  game.pets.forEach(p => {
    if (p.owned && p.effect.includes('收益')) totalIncome *= 1.1;
  });
  
  const netIncome = totalIncome - totalExpense;
  game.gold += netIncome;
  
  // 经验值和等级
  game.exp += Math.abs(netIncome) / 100;
  if (game.exp >= game.level * 1000) {
    game.level++;
    game.exp = 0;
    floatNum('🎉 等级提升至 ' + game.level, '#fbbf24');
  }
  
  // 声望获取
  game.reputation += Math.floor(totalIncome / 10000);
  
  // 自动招生
  if (Math.random() < 0.3 * w.recruit) {
    recruitStudent();
  }
  
  // 更新天气历史
  game.weatherHistory.push({ day: game.day, weather: game.weather });
  if (game.weatherHistory.length > 30) game.weatherHistory.shift();
  
  // 更新季节
  if (game.day % 90 === 0) {
    game.season = (game.season + 1) % 4;
  }
  
  game.day++;
}

// 更新天气
function updateWeather() {
  if (game.day % 7 === 0) {
    const rand = Math.random();
    if (rand < 0.6) {
      // 保持当前天气
    } else {
      game.weather = Math.floor(Math.random() * 8);
      floatNum('🌤️ 天气变化：' + weatherEffects[game.weather].name, '#06b6d4');
    }
  }
}

// 更新股票价格
function updateStockPrices() {
  if (game.day % 3 === 0) {
    game.stocks.forEach(stock => {
      const change = Math.floor(Math.random() * 20) - 10;
      stock.price = Math.max(10, stock.price + change);
      stock.trend = change > 0 ? 1 : change < 0 ? -1 : 0;
    });
  }
}

// 检查节日
function checkFestivals() {
  const now = new Date();
  game.festivals.forEach(f => {
    if (now.getMonth() + 1 === f.month && now.getDate() === f.day && !f.active) {
      f.active = true;
      game.gold += f.bonus.gold || 0;
      game.diamond += f.bonus.diamond || 0;
      game.reputation += f.bonus.rep || 0;
      floatNum('🎉 节日活动：' + f.name, '#fbbf24');
    }
  });
}

// 检查随机事件
function checkRandomEvents() {
  if (Math.random() < 0.1) {
    const event = defaultRandomEvents[Math.floor(Math.random() * defaultRandomEvents.length)];
    if (event.type === 'positive') {
      game.gold += 10000;
      floatNum('✨ 好事发生：' + event.desc, '#22c55e');
    } else if (event.type === 'negative') {
      game.gold -= 5000;
      floatNum('⚠️ 坏事发生：' + event.desc, '#ef4444');
    }
  }
}

// 检查防御
function checkDefense() {
  if (game.day - game.defense.lastAttack >= game.defense.attackInterval) {
    game.defense.lastAttack = game.day;
    const invasion = game.invasions[Math.floor(Math.random() * game.invasions.length)];
    
    const defensePower = game.defense.total + game.students.length * 2 + game.teachers.length * 5;
    
    if (defensePower >= invasion.power) {
      // 防御成功
      game.gold += invasion.reward.gold || 0;
      game.resources.wood += invasion.reward.wood || 0;
      game.resources.crystal += invasion.reward.crystal || 0;
      floatNum('🛡️ 防御成功！获得奖励', '#22c55e');
    } else {
      // 防御失败
      const loss = Math.floor(game.gold * 0.1);
      game.gold -= loss;
      floatNum('💥 防御失败！损失' + loss + '金币', '#ef4444');
    }
  }
}

// 更新挑战进度
function updateChallenges() {
  // 每日挑战
  game.dailyChallenges.forEach(ch => {
    if (ch.day !== game.day) {
      ch.done = false;
      ch.claimed = false;
      ch.day = game.day;
    }
    
    // 检查完成情况
    if (!ch.done) {
      switch (ch.type) {
        case 'build':
          if (game.buildCount >= ch.target) ch.done = true;
          break;
        case 'student':
          if (game.students.length >= ch.target) ch.done = true;
          break;
        case 'rep':
          if (game.reputation >= ch.target) ch.done = true;
          break;
      }
    }
  });
  
  // 周挑战
  const currentWeek = Math.floor(game.day / 7);
  game.weeklyChallenges.forEach(ch => {
    if (ch.week !== currentWeek) {
      ch.done = false;
      ch.claimed = false;
      ch.week = currentWeek;
    }
  });
}

// 更新排行榜
function updateRankings() {
  if (game.day % 10 === 0) {
    // 更新金币排行
    game.rankings.gold = [...game.rankPlayers, { name: '你', score: game.gold }]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    
    // 更新声望排行
    game.rankings.reputation = [...game.rankPlayers, { name: '你', score: game.reputation }]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }
}

// 自动存档
function autoSave() {
  setInterval(() => {
    saveGame();
  }, 60000); // 每60秒自动保存
}

// 保存游戏
function saveGame() {
  try {
    localStorage.setItem('campusTycoonSave', JSON.stringify(game));
  } catch (e) {
    console.error('保存失败:', e);
  }
}

// 加载游戏
function loadGame() {
  try {
    const saved = localStorage.getItem('campusTycoonSave');
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(game, parsed);
      return true;
    }
  } catch (e) {
    console.error('加载失败:', e);
  }
  return false;
}

// 重置游戏
function resetGame() {
  if (confirm('确定要重置游戏吗？所有进度将被清除！')) {
    localStorage.removeItem('campusTycoonSave');
    location.reload();
  }
}
