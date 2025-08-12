onEvent('recipes', event => {
    event.shaped(
        'minecraft:nether_star',
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            A: '#forge:gems/ruby',
            B: 'minecraft:end_stone',
            C: '#forge:gems/sapphire',
            D: 'minecraft:crying_obsidian',
            E: 'minecraft:end_crystal',
            F: 'minecraft:crying_obsidian',
            G: '#forge:gems/amethyst',
            H: 'minecraft:netherrack',
            I: '#forge:ingots/platinum'
        }
    )
})
