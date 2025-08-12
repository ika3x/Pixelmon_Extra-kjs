   onEvent('recipes', event => {
   event.shaped('botanypots:botany_pot', [
    '   ',
    ' A ',
    'TPT'
  ], {
    A: 'kubejs:apricore1',
    T: 'minecraft:terracotta',
    P: 'minecraft:flower_pot'
  });
  event.shapeless('botanypotstiers:elite_brown_botany_pot', [
    'botanypots:botany_pot',
    'kubejs:apricore2'
  ]);
  event.shapeless('botanypotstiers:ultra_blue_botany_pot', [
    'botanypotstiers:elite_brown_botany_pot',
    'kubejs:apricore4'
  ]);
    event.shapeless('botanypotstiers:creative_pink_botany_pot', [
    'botanypotstiers:ultra_blue_botany_pot',
    'kubejs:apricore6'
    ]);
  event.shapeless('botanypotstiers:elite_hopper_white_botany_pot', [
  '#botanypots:hopper_botany_pots',
  'kubejs:apricore2'
  ]);
  event.shapeless('botanypotstiers:ultra_hopper_light_blue_botany_pot', [
  'botanypotstiers:elite_hopper_white_botany_pot',
  'kubejs:apricore4'
  ]);
  event.shapeless('botanypotstiers:creative_hopper_purple_botany_pot', [
  'botanypotstiers:ultra_hopper_light_blue_botany_pot',
  'kubejs:apricore6'
  ]);
});