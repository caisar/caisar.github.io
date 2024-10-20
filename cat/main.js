(() => {
    "use strict";
    const server = "wss://s.altnet.rippletest.net:51233"
    //const server = "ws://127.0.0.1:6006"
    const e = new xrpIO(server, { debug: false, connectionTimeout: 100000 });
    e.connect().then((async t => {
        const n = await e.treeRead(["3AC4AE8789C589A98BACFF8CDD81D8A4F005BF530BEBAB59C23DFE85BC4FE4B1"], void 0, (cur, max) => {
            document.getElementById("progress").innerHTML = cur+"/"+max
        }); 
        document.getElementById('cat').src = 'data:image/jpeg;base64,'+n
    }))
})();
