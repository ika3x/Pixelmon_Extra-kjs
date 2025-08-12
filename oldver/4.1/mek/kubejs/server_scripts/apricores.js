onEvent('recipes', event => {
  event.shapeless('kubejs:apricore0', [
    'pixelmon:black_apricorn',
    'pixelmon:white_apricorn',
    'pixelmon:red_apricorn',
    'pixelmon:blue_apricorn',
    'pixelmon:yellow_apricorn',
    'pixelmon:green_apricorn',
    'pixelmon:pink_apricorn'
  ]);
    event.shaped('kubejs:apricore1', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'kubejs:apricore0'
  });
    event.shaped('kubejs:apricore2', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'kubejs:apricore1'
  });
  event.shaped('kubejs:apricore3', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'kubejs:apricore2'
  });
  event.shaped('kubejs:apricore4', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'kubejs:apricore3'
    });
    event.shaped('kubejs:apricore5', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'kubejs:apricore4'
  });
  event.shaped('kubejs:apricore6', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'kubejs:apricore5'
  });
});
