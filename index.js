const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
      details: "play.faicu.ro",
      state: "Hai si tu !!!",
      startTimestamp: new Date(),
      largeImageKey: "large_img",
      largeImageText: "Comunitatea Faikkit",
      smallImageKey: "small_img",
      smallImageText: "A Mojang Game"
    })

    console.log("Statusul tau custom a fost activat , daca doresti sa opresti doar inchide aceasta aplicatie");
})

rpc.login({
    clientId: "865962947469508628"
})