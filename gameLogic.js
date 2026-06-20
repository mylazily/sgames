// gameLogic.js - 游戏逻辑模块
// 注意：buildings 等数据已从 gameData.js 引入，不要重复定义

// 游戏状态已从 gameState.js 引入

// 初始化游戏
function initGame() {
  // 加载存档
  if (!loadGame()) {
    // 初始化初始建筑
    game.grid[0][0] = { id: 'classroom', level: 1 };
    game.grid[1][0] = { id: 'dormitory', level: 1 };
    game.grid[2][0] = { id: 'canteen', level: 1 };
    game.buildCount = 3;
  }
  
  // 初始化UI
  updateRes();
  renderGrid();
  updateResourceBar();
  
  // 启动游戏循环
  startGameLoop();
  autoSave();
  
  console.log('游戏初始化完成');
}

// 更新资源栏显示
function updateResourceBar() {
  document.getElementById('res-wood').textContent = game.resources.wood;
  document.getElementById('res-stone').textContent = game.resources.stone;
  document.getElementById('res-iron').textContent = game.resources.iron;
  document.getElementById('res-food').textContent = game.resources.food;
  document.getElementById('res-water').textContent = game.resources.water;
  document.getElementById('res-power').textContent = game.resources.power;
  document.getElementById('res-crystal').textContent = game.resources.crystal;
  document.getElementById('res-rareMetal').textContent = game.resources.rareMetal;
}

// 初始化游戏
initGame();
