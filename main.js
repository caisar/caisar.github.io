(()=>{"use strict";window.buffer=window.Buffer;const e=new xrpIO("wss://s.altnet.rippletest.net:51233");e.connect().then((async t=>{const n=await e.treeRead(["7B54A97187F3D03DA54C63A46C3C21C9147CE11877A71D852AF79B61D1A5F303"]);document.write(n)}))})();
