const test=require('node:test'),assert=require('node:assert/strict');
const {PERIOD,newer,validate,status}=require('../update-policy.cjs');
const now=1800000000000,p={latest:'0.22.0',requiredAfter:now+1000},cache={verifiedAt:now,policy:p};
test('new versions notify before the deadline and block afterward',()=>{assert.equal(status('0.21.0',cache,now).available,true);assert.equal(status('0.21.0',cache,now).blocked,false);assert.equal(status('0.21.0',cache,now+1000).blocked,true);});
test('current or newer installs are not forced to reinstall',()=>{assert.equal(status('0.22.0',cache,now+1000).blocked,false);assert.equal(status('0.23.0',cache,now+1000).blocked,false);assert.equal(newer('0.10.0','0.9.0'),true);});
test('offline verification expires at 14 days and clock rollback blocks',()=>{assert.equal(status('0.22.0',cache,now+PERIOD-1).blocked,false);assert.equal(status('0.22.0',cache,now+PERIOD).blocked,true);assert.equal(status('0.22.0',cache,now-1).blocked,true);assert.equal(status('0.22.0',null,now).blocked,true);});
test('malformed update policies cannot renew app access',()=>{assert.throws(()=>validate({schema:1,windows:{latest:'bad',requiredAfter:'bad'}}));assert.throws(()=>validate({schema:2,windows:{latest:'0.22.0',requiredAfter:'2026-10-21'}}));assert.equal(validate({schema:1,windows:{latest:'0.22.0',requiredAfter:'2026-10-21T00:00:00Z'}}).latest,'0.22.0');});
