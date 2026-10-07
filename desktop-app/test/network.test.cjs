const {test}=require('node:test'),assert=require('node:assert/strict');
const {boundedJson}=require('../network.cjs');
test('accepts bounded JSON and rejects oversized chunked responses',async()=>{
 assert.deepEqual(await boundedJson(new Response('{"ok":true}'),32),{ok:true});
 let cancelled=false;
 const stream=new ReadableStream({pull(c){c.enqueue(new Uint8Array(17));},cancel(){cancelled=true;}});
 await assert.rejects(boundedJson(new Response(stream),16),/too large/);assert.equal(cancelled,true);
 await assert.rejects(boundedJson(new Response('invalid'),32));
});
