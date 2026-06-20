// ============================================
// UI渲染模块
// ============================================

// 更新资源显示
function updateRes() {
  document.getElementById('gold').textContent = formatNumber(game.gold);
  document.getElementById('diamond').textContent = formatNumber(game.diamond);
  document.getElementById('dayNum').textContent = game.day;
  document.getElementById('reputation').textContent = game.reputation;
  document.getElementById('levelNum').textContent = game.level;
  
  // 更新季节显示
  const seasons = ['🌸 春季', '☀️ 夏季', '🍂 秋季', '❄️ 冬季'];
  const seasonClasses = ['season-spring', 'season-summer', 'season-autumn', 'season-winter'];
  const badge = document.getElementById('seasonBadge');
  badge.textContent = seasons[game.season];
  badge.className = 'season-badge ' + seasonClasses[game.season];
  
  // 更新天气显示
  const w = weatherEffects[game.weather];
  document.getElementById('weatherBadge').innerHTML = `${w.icon} ${w.name}`;
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
        html += `<div class="building-cell" onclick="openBuildingDetail(${x},${y},${JSON.stringify(b).replace(/"/g, '&quot;')})">
          <span class="building-icon">${cfg.icon}</span>
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
function floatNum(text, color = '#fbbf24') {
  const container = document.getElementById('floatMessages');
  if (!container) return;
  
  const el = document.createElement('div');
  el.className = 'float-number';
  el.style.color = color;
  el.textContent = text;
  el.style.top = '50%';
  el.style.left = '50%';
  container.appendChild(el);
  setTimeout(() => el.remove(), 2000);
}

// 显示提示消息
function showToast(msg) {
  const container = document.getElementById('floatMessages');
  if (!container) return;
  
  const el = document.createElement('div');
  el.className = 'toast-message';
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 2500);
}

// 关闭弹窗
function closeModal() {
  game.selectedBuilding = null;
  document.getElementById('modalContainer').innerHTML = '';
}
