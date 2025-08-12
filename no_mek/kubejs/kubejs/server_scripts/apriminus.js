onEvent('recipes', event => {
  // 逆レシピ：上位から下位への変換（shapeless）
  event.shapeless('4x kubejs:apricore5', ['kubejs:apricore6']);
  event.shapeless('5x kubejs:apricore4', ['kubejs:apricore5']);
  event.shapeless('6x kubejs:apricore3', ['kubejs:apricore4']);
  event.shapeless('7x kubejs:apricore2', ['kubejs:apricore3']);
  event.shapeless('8x kubejs:apricore1', ['kubejs:apricore2']);
  event.shapeless('8x kubejs:apricore0', ['kubejs:apricore1']);
});