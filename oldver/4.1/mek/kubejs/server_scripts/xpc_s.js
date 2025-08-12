onEvent('recipes', event => {
  event.shaped('pixelmon:s_exp_candy', [
    'ABC',
    'DEF',
    'GHI'
  ], {
    A: 'minecraft:sugar',
    B: 'minecraft:ender_pearl',
    C: 'minecraft:sugar',
    D: 'minecraft:blue_ice',
    E: 'pixelmon:xs_exp_candy',
    F: 'minecraft:blue_ice',
    G: 'minecraft:sugar',
    H: 'minecraft:ender_pearl',
    I: 'minecraft:sugar'
  });
});
