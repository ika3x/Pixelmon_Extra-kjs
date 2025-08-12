onEvent('recipes', event => {
  // 金属系
  event.smelting('minecraft:iron_ingot', 'kubejs:dust_fe');
  event.smelting('minecraft:gold_ingot', 'kubejs:dust_au');
  event.smelting('pixelmon:aluminium_ingot', 'kubejs:dust_al'); // アルミニウムインゴット（Pixelmon）
  event.smelting('pixelmon:silver_ingot', 'kubejs:dust_ag'); // シルバーインゴット（Pixelmon）
  event.smelting('pixelmon:platinum_ingot', 'kubejs:dust_pt'); // プラチナインゴット（Pixelmon）
  event.smelting('pixelmon:silicon', 'kubejs:dust_si'); // シリコン（Pixelmon）
  event.smelting('minecraft:coal', 'kubejs:dust_coal');

  // 宝石・鉱石系
  event.smelting('minecraft:diamond', 'kubejs:dust_diamond');
  event.smelting('pixelmon:ruby', 'kubejs:dust_al2o3_red');
  event.smelting('pixelmon:sapphire', 'kubejs:dust_al2o3_blue');
  event.smelting('pixelmon:amethyst', 'kubejs:dust_sio2_purple');
  event.smelting('pixelmon:crystal', 'kubejs:dust_sio2_white');
  event.smelting('minecraft:quartz', 'kubejs:dust_sio2_nether');
  event.smelting('minecraft:emerald', 'kubejs:dust_be3al2si6o18');
});
