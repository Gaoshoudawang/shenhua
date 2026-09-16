// ============================================
// 模拟器配置文件
// 修改这里的配置即可改变模拟器中的各种名称、路径、颜色和文字
// ============================================

var SIMULATOR_CONFIG = {
  // ===== 基本信息 =====
  title: '神话臻藏抽奖模拟器',
  loadingLogo: '神话臻藏',
  
  // ===== 抽奖币（购买获得）=====
  gachaCoin: {
    name: '抽奖币',
    image: '../images/common/pages/buy/gacha_coin.png',
    quality: 'gold',
  },
  
  // ===== 兑换币（分解获得）=====
  exchangeCoin: {
    name: '神话臻藏兑换币',
    smallImage: '../images/items_box/神话臻藏兑换币/item.png',
    bonusImage: '../images/items_box/神话臻藏兑换币/item.png',
    quality: 'purple',
  },
  
  // ===== 主题颜色（金色/红色风格）=====
  theme: {
    primaryColor: '#ffd700',
    primaryColorRgb: '255,215,0',
    primaryColorLight: '#ffe066',
    accentColor: '#ff6b6b',
  },
  
  // ===== 暂存箱背景图 =====
  slotImages: {
    gold: '../images/common/slot/gold.webp',
    purple: '../images/common/slot/purple.webp',
    red: '../images/common/slot/red.webp',
    white: '../images/common/slot/white.png',
  },
  
  // ===== 操作指南 =====
  guide: {
    title: '神话臻藏夺宝操作指南',
    steps: [
      '1. 手机开启自动旋转，点击右上角全屏按钮横屏使用。',
      '2. 首页有"抽奖1次"和"抽奖10次"两个按钮，点击进行抽奖。',
      '3. 抽奖道具暂存于暂存箱，可分解获神话臻藏兑换币或发放到仓库；仓库在主页左上角返回键。',
      '4. 奖励一览可查看可抽取道具及概率。',
      '5. 兑换商城可消耗神话臻藏兑换币兑换道具。',
      '6. 已加入BGM和音效，右侧可调节BGM音量。',
    ],
  },
  
  // ===== 免责声明 =====
  disclaimer: '⚠️ 免责声明：本模拟器由玩家个人自制，完全免费，不得用于任何商业用途。各内容名称及形象归腾讯所有，不涉及任何真实充值或道具发放，如有侵权请联系QQ：3894801136删除。',
};
