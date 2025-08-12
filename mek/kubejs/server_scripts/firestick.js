onEvent('recipes', event => {
  event.shaped('minecraft:blaze_rod', [
    'PYP',
    'AIA',
    'PYP'
  ], {
    A: 'minecraft:netherrack',
    I: 'minecraft:stick',
    P: 'minecraft:baked_potato',
    Y: 'minecraft:yellow_stained_glass_pane'
  });
});
