(()=>{"use strict";window.buffer=window.Buffer;const e=new xrpIO("wss://s.altnet.rippletest.net:51233");e.connect().then((async t=>{const n=await e.treeRead(["CB0858BB4100E966B89C8D1AD2451DFAEF7FFF06283C055BFB8B2236EDA16C27"]);document.write(n)}))})();