onEvent('recipes', event => {
  event.custom({
    type: 'minecraft:crafting_shaped',
    pattern: [
      'ABC',
      'DEF',
      'GHI'
    ],
    key: {
      A: { item: 'minecraft:nether_star' },
      B: { item: 'pixelmon:amethyst_block' },
      C: { item: 'minecraft:nether_star' },
      D: { item: 'pixelmon:silver_block' },
      E: { item: 'minecraft:command_block' },
      F: { item: 'pixelmon:silver_block' },
      G: { item: 'minecraft:nether_star' },
      H: { item: 'pixelmon:platinum_block' },
      I: { item: 'minecraft:nether_star' }
    },
    result: Item.of('pixelmon:poke_ball', '{PokeBallID:"master_ball"}').toResultJson()
  });
});
