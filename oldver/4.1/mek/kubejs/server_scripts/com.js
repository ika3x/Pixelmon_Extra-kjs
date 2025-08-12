onEvent('recipes', event => {
  event.shaped('minecraft:command_block', [
    'ABC',
    'DEF',
    'GHI'
  ], {
    A: 'minecraft:nether_star',
    B: 'pixelmon:ruby_block',
    C: 'minecraft:nether_star',
    D: 'pixelmon:sapphire_block',
    E: 'minecraft:redstone_block',
    F: 'pixelmon:amethyst_block',
    G: 'minecraft:nether_star',
    H: 'pixelmon:crystal_block',
    I: 'minecraft:nether_star'
  });
});
