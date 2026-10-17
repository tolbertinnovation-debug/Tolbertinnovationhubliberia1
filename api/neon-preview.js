// Isolated migration preview. The live site does not call this endpoint.
module.exports=require('../server/neon-preview.cjs').createPreviewHandler();
