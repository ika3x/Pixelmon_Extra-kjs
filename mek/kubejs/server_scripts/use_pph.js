// use_pph.js
const COOLDOWN_TICKS = 30 * 20; // 30秒 = 600ティック

onEvent('item.right_click', event => {
  const item = event.item;
  const player = event.player;

  // アイテムの存在確認
  if (!item || item.isEmpty()) return;
  
  // アイテムIDの確認方法を修正
  if (item.id !== 'kubejs:portable_pokehealer') return;

  console.log(player.name.string + " right-clicked with the healer!");

  // シンプルにミリ秒ベースのタイムスタンプを使用
  let currentTick = Math.floor(Date.now() / 50); // 50ms = 1tick として近似
  
  // NBTの取得方法を修正
  let nbt = item.nbt;
  if (!nbt) {
    nbt = {};
  }
  
  let lastUse = nbt.LastUse || 0;
  
  console.log("Current tick: " + currentTick + ", Last use: " + lastUse + ", Difference: " + (currentTick - lastUse));

  if ((currentTick - lastUse) < COOLDOWN_TICKS) {
    const remaining = Math.ceil((COOLDOWN_TICKS - (currentTick - lastUse)) / 20);
    player.tell(Text.red("It is on cooldown! Please wait " + remaining + "s."));
    
    // クールダウン時の効果音
    player.playSound('minecraft:block.note_block.bass', 1.0, 0.5);
    // または既存の音を使用: player.playSound('minecraft:block.note_block.bass', 1.0, 0.5);
    
    return;
  }

  // ポケモンを回復
  player.server.runCommandSilent("pokeheal " + player.name.string);
  player.tell(Text.green("All of your Pokémon have been healed!"));
  
  // 回復成功時の効果音
  player.playSound('minecraft:entity.player.levelup', 0.7, 2);
  // または既存の音を使用: player.playSound('minecraft:entity.player.levelup', 0.7, 1.2);

  // NBTにクールタイム更新 - 増殖を防ぐため直接変更
  if (!item.nbt) {
    item.nbt = {};
  }
  item.nbt.LastUse = currentTick;

  console.log("Updated LastUse to: " + currentTick);

  event.cancel();
});