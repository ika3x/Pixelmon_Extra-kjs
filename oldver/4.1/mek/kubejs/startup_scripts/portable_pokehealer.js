onEvent('item.registry', event => {
event.create('portable_pokehealer')
  .displayName('§bPortable PokéHealer')
  .tooltip('§7Right-click to heal your Pokémon')
  .maxStackSize(1)
  .unstackable();
  });