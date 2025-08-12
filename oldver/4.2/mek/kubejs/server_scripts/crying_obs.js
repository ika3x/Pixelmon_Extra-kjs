onEvent('recipes', event => {
  event.shaped('minecraft:crying_obsidian', [
    'ABC',
    'DEF',
    'GHI'
  ], {
    A: 'minecraft:soul_torch',
    B: '#forge:ingots/aluminum',
    C: 'minecraft:soul_torch',
    D: 'minecraft:ender_eye',
    E: 'minecraft:obsidian',
    F: 'minecraft:ender_eye',
    G: 'minecraft:soul_torch',
    H: '#forge:ingots/silver',
    I: 'minecraft:soul_torch'
  });
});
