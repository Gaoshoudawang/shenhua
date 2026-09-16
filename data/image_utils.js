// ===== 通用图片路径工具函数（动态读取小盒子，无需硬编码映射） =====

// 获取道具小图路径
function getItemImage(itemName) {
  // 处理带数量的名称，如"神话臻藏兑换币×12"
  var baseName = itemName.split('×')[0].split('*')[0];
  return '../images/items_box/' + baseName + '/item.png';
}

// 获取加赠图路径
function getBonusImage(itemName) {
  // 处理带数量的名称，如"神话臻藏兑换币×12"
  var baseName = itemName.split('×')[0].split('*')[0];
  return '../images/items_box/' + baseName + '/bonus.png';
}

// 获取出货动画大图路径（有showcase用showcase，没有就用bonus）
function getShowcaseImage(itemName, quality) {
  // 处理带数量的名称，如"神话臻藏兑换币×12"
  var baseName = itemName.split('×')[0].split('*')[0];
  // 如果有showcase就用showcase，没有就用bonus
  if(hasShowcase(baseName)){
    return '../images/items_box/' + baseName + '/showcase.png';
  } else {
    return '../images/items_box/' + baseName + '/bonus.png';
  }
}

// 判断道具是否有出货动画
function hasShowcase(itemName) {
  // 实际有showcase.png的道具列表
  var showcaseItems = [
    'SCAR Light-玄豹', '丛林匕首-玄豹', '左轮-玄豹',
    '手雷-玄豹', '烟雾弹-玄豹', '闪光弹-玄豹',
    '王者之翼', '王者之翼-传说夜影',
    '王者之魄', '王者之魄-传说光耀'
  ];
  return showcaseItems.indexOf(itemName) !== -1;
}
