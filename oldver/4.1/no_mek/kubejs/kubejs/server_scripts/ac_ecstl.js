onEvent('recipes', event => {
  event.shaped('minecraft:end_crystal', [
    ' B ',
    'DEF',
    ' H '
  ], {
    B: 'minecraft:glass',
    D: 'minecraft:glass',
    E: 'kubejs:apricore3',
    F: 'minecraft:glass',
    H: 'minecraft:glass'
  });
});