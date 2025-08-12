onEvent('recipes', event => {
  event.shaped('pixelmon:rare_candy', [
    'ABC',
    'DEF',
    'GHI'
  ], {
    A: 'minecraft:nether_star',
    B: 'minecraft:command_block',
    C: 'minecraft:nether_star',
    D: 'pixelmon:sapphire_block',
    E: 'pixelmon:xl_exp_candy',
    F: 'pixelmon:sapphire_block',
    G: 'minecraft:nether_star',
    H: 'minecraft:command_block',
    I: 'minecraft:nether_star'
  });
});