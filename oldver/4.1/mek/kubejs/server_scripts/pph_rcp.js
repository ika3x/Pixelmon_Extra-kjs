onEvent('recipes', event => {
  event.shaped('kubejs:portable_pokehealer', [
    'ABC',
    'DEF',
    'GHI'
  ], {
    A: 'minecraft:golden_apple',
    B: 'minecraft:ender_eye',
    C: 'minecraft:nether_star',
    D: 'pixelmon:full_heal',
    E: '#pixelmon:healers',
    F: Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}'),
    G: '#forge:ingots/aluminum',
    H: 'minecraft:command_block',
    I: '#forge:ingots/platinum'
  });
});
