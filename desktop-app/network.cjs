// Bound bytes while streaming, including chunked or compressed responses.
async function boundedJson(response,limit=1024*1024){
  if(!response.body)throw Error('Empty response');
  const reader=response.body.getReader(),chunks=[];let size=0;
  try{while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>limit)throw Error('Response too large');chunks.push(Buffer.from(value));}
    return JSON.parse(Buffer.concat(chunks,size).toString('utf8'));
  }finally{await reader.cancel().catch(()=>{});reader.releaseLock();}
}
module.exports={boundedJson};
