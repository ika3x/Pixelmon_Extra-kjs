onEvent('recipes', event => {
    event.recipes.mekanismPurifying('3x mekanism:dust_diamond', 'minecraft:diamond_ore', {gas: 'mekanism:oxygen', amount: 1}),
    event.recipes.mekanismInjecting('4x mekanism:dust_diamond', 'minecraft:diamond_ore', {gas: 'mekanism:hydrogen_chloride', amount: 1})
    });