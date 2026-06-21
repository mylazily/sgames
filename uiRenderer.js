// ============================================
// UI渲染模块 - 影视级优化版
// ============================================

// 更新资源显示
function updateRes() {
  const goldEl = document.getElementById('gold');
  const diamondEl = document.getElementById('diamond');
  const dayNumEl = document.getElementById('dayNum');
  const reputationEl = document.getElementById('reputation');
  const levelNumEl = document.getElementById('levelNum');
  
  if (goldEl) goldEl.textContent = formatNumber(game.gold);
  if (diamondEl) diamondEl.textContent = formatNumber(game.diamond);
  if (dayNumEl) dayNumEl.textContent = game.day;
  if (reputationEl) reputationEl.textContent = game.reputation;
  if (levelNumEl) levelNumEl.textContent = game.level;
  
  // 更新季节显示
  const seasons = ['🌸 春季', '☀️ 夏季', '🍂 秋季', '❄️ 冬季'];
  const seasonClasses = ['season-spring', 'season-summer', 'season-autumn', 'season-winter'];
  const badge = document.getElementById('seasonBadge');
  if (badge) {
    badge.textContent = seasons[game.season];
    badge.className = 'season-badge ' + seasonClasses[game.season];
  }
  
  // 更新天气显示
  const w = weatherEffects[game.weather];
  const weatherBadge = document.getElementById('weatherBadge');
  if (weatherBadge) {
    weatherBadge.innerHTML = `${w.icon} ${w.name}`;
    weatherBadge.style.background = `linear-gradient(90deg, ${w.color}, ${w.color}dd)`;
  }
  
  // 更新财务面板
  updateFinancePanel();
  
  // 更新满意度
  const satisfactionEl = document.getElementById('satisfaction');
  const satisfactionBarEl = document.getElementById('satisfactionBar');
  if (satisfactionEl) satisfactionEl.textContent = game.satisfaction + '%';
  if (satisfactionBarEl) satisfactionBarEl.style.width = game.satisfaction + '%';
  
  // 更新排名
  const schoolRankEl = document.getElementById('schoolRank');
  if (schoolRankEl) schoolRankEl.textContent = game.schoolRank + '/100';
}

// 更新财务面板
function updateFinancePanel() {
  let totalIncome = 0;
  let totalExpense = 0;
  
  for (let y = 0; y < 12; y++) {
    for (let x = 0; x < 15; x++) {
      const b = game.grid[y][x];
      if (b) {
        const cfg = buildings.find(bd => bd.id === b.id);
        if (cfg) {
          const lv = b.level || 1;
          totalIncome += cfg.income * lv;
          totalExpense += cfg.expense * lv;
        }
      }
    }
  }
  
  const w = weatherEffects[game.weather];
  totalIncome *= w.income;
  
  const incomeEl = document.getElementById('dailyIncome');
  const expenseEl = document.getElementById('dailyExpense');
  const profitEl = document.getElementById('dailyProfit');
  
  if (incomeEl) incomeEl.textContent = formatNumber(Math.floor(totalIncome));
  if (expenseEl) expenseEl.textContent = formatNumber(Math.floor(totalExpense));
  if (profitEl) profitEl.textContent = formatNumber(Math.floor(totalIncome - totalExpense));
}

// 格式化数字
function formatNumber(num) {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(2) + '亿';
  } else if (num >= 10000) {
    return (num / 10000).toFixed(2) + '万';
  }
  return num.toLocaleString();
}

// 渲染建筑网格
function renderGrid() {
  const gridEl = document.getElementById('buildingGrid');
  if (!gridEl) return;
  
  let html = '';
  for (let y = 0; y < 12; y++) {
    for (let x = 0; x < 15; x++) {
      const b = game.grid[y][x];
      if (b) {
        const cfg = buildings.find(bd => bd.id === b.id);
        const lv = b.level || 1;
        const buildingData = JSON.stringify(b).replace(/"/g, '&quot;');
        html += `<div class="building-cell" onclick="openBuildingDetail(${x},${y},'${buildingData}')">
          <span class="building-icon">${cfg ? cfg.icon : '🏫'}</span>
          <span class="building-level">Lv.${lv}</span>
        </div>`;
      } else {
        html += `<div class="building-cell empty" onclick="selectBuildPosition(${x},${y})"></div>`;
      }
    }
  }
  gridEl.innerHTML = html;
}

// 显示浮动数字
function floatNum(text, color = '#FFB347') {
  const container = document.getElementById('floatMessages');
  if (!container) return;
  
  const el = document.createElement('div');
  el.className = 'float-number';
  el.style.color = color;
  el.textContent = text;
  el.style.top = '50%';
  el.style.left = '50%';
  container.appendChild(el);
  setTimeout(() => el.remove(), 2500);
}

// 显示提示消息
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const el = document.createElement('div');
  el.className = 'toast-message';
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

// 关闭弹窗
function closeModal() {
  game.selectedBuilding = null;
  const modalContainer = document.getElementById('modalContainer');
  if (modalContainer) {
    modalContainer.innerHTML = '';
  }
}

// Tab 切换功能
function showTab(tabName) {
  // 移除所有 active 类
  document.querySelectorAll('.tab-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // 添加 active 类到选中的 tab
  const tabMap = {
    'home': 'tabHome',
    'students': 'tabStudents',
    'build': 'tabBuild',
    'events': 'tabEvents',
    'menu': 'tabMenu'
  };
  
  const tabId = tabMap[tabName];
  if (tabId) {
    document.getElementById(tabId)?.classList.add('active');
  }
  
  showToast(`切换到${getTabName(tabName)}`);
}

function getTabName(tabKey) {
  const names = {
    'home': '首页',
    'students': '学生',
    'build': '建造',
    'events': '活动',
    'menu': '菜单'
  };
  return names[tabKey] || tabKey;
}

// 打开建筑详情
function openBuildingDetail(x, y, buildingJson) {
  try {
    const building = JSON.parse(buildingJson.replace(/&quot;/g, '"'));
    const cfg = buildings.find(b => b.id === building.id);
    if (!cfg) return;
    
    const modalContainer = document.getElementById('modalContainer');
    if (!modalContainer) return;
    
    modalContainer.innerHTML = `
      <div class="modal-container">
        <div class="backdrop" onclick="closeModal()"></div>
        <div class="modal-luxury">
          <div class="modal-head">
            <div class="modal-title">${cfg.icon} ${cfg.name}</div>
            <button class="modal-close" onclick="closeModal()">✕</button>
          </div>
          <div class="modal-body">
            <div class="stat-row">
              <span>等级</span>
              <span>Lv.${building.level || 1}</span>
            </div>
            <div class="stat-row">
              <span>收入</span>
              <span style="color: #2E7D32">+${formatNumber(cfg.income * (building.level || 1))}</span>
            </div>
            <div class="stat-row">
              <span>支出</span>
              <span style="color: #C62828">-${formatNumber(cfg.expense * (building.level || 1))}</span>
            </div>
            <div class="stat-row">
              <span>学生容量</span>
              <span>${cfg.studentCap || '无限'}</span>
            </div>
            <div style="margin-top: 20px; display: flex; gap: 10px;">
              <button class="btn-gold" style="flex: 1;" onclick="upgradeBuilding(${x}, ${y})">升级</button>
              <button class="btn-red" style="flex: 1;" onclick="demolishBuilding(${x}, ${y})">拆除</button>
            </div>
          </div>
        </div>
      </div>
    `;
  } catch (e) {
    console.error('解析建筑数据失败:', e);
  }
}

// 升级建筑
function upgradeBuilding(x, y) {
  const building = game.grid[y][x];
  if (!building) return;
  
  building.level = (building.level || 1) + 1;
  renderGrid();
  updateRes();
  floatNum('⬆️ 升级到 Lv.' + building.level, '#FFB347');
  closeModal();
}

// 拆除建筑
function demolishBuilding(x, y) {
  if (!game.grid[y][x]) return;
  
  game.grid[y][x] = null;
  game.buildCount = Math.max(0, game.buildCount - 1);
  renderGrid();
  updateRes();
  floatNum('🏗️ 建筑已拆除', '#FF6B6B');
  closeModal();
}

// 选择建造位置
function selectBuildPosition(x, y) {
  game.selectedBuilding = { x, y };
  showToast(`已选择位置 (${x}, ${y})，请选择要建造的建筑`);
}

// 打开财务面板
function openFinance() {
  showToast('💰 财务面板功能开发中...');
}

// 打开商店
function openShop() {
  showToast('💎 商店功能开发中...');
}

// 打开天气详情
function openWeather() {
  const w = weatherEffects[game.weather];
  showToast(`${w.icon} ${w.name} - 收入倍率: ${w.income}x`);
}

// 缩放网格
function toggleGridZoom() {
  const grid = document.getElementById('buildingGrid');
  if (grid) {
    grid.classList.toggle('zoomed');
  }
}

// 其他功能占位符
function openSignIn() { showToast('📅 签到功能开发中...'); }
function openGacha() { showToast('🎒 招募功能开发中...'); }
function openBuild() { showToast('🏗️ 建造功能开发中...'); }
function openTech() { showToast('🔬 科技功能开发中...'); }
function openStudent() { showToast('👨‍🎓 学生功能开发中...'); }
function openClub() { showToast('🎯 社团功能开发中...'); }
function openRival() { showToast('🏫 校际功能开发中...'); }
function openDefense() { showToast('🛡️ 防御功能开发中...'); }
function openChallenge() { showToast('📋 挑战功能开发中...'); }
function openTransfer() { showToast('🤝 挖角功能开发中...'); }
function openAlumni() { showToast('🎓 校友功能开发中...'); }
function openResources() { showToast('🗃️ 物资功能开发中...'); }
function openExplore() { showToast('🧭 探索功能开发中...'); }
function openCrafting() { showToast('🔧 合成功能开发中...'); }
function openStocks() { showToast('📈 股市功能开发中...'); }
function openBank() { showToast('🏦 银行功能开发中...'); }
function openEvents() { showToast('🎉 活动功能开发中...'); }
function openRankings() { showToast('🏆 排行功能开发中...'); }
