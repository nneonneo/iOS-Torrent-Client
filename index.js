// monkeypatch k-bucket to patch out Uint8Array test: it fails on Play.js with Buffer
if(true) {
  const path = require.resolve('k-bucket');
  let contents = fs.readFileSync(path, 'utf8');
  contents = contents.replace(/(function ensureInt8[^{]+{)(\s+)/, '$1return;$2');
  fs.writeFileSync(path, contents);
  // force a reload in case the module has been loaded already
  delete require.cache[path];
}

// patch clivas to send output to Play.js console
const clivas = require('clivas');
clivas.use(getStdout());

link = 'magnet:paste-magnet-link-here';
process.argv = ["cli", "download", link, "--keep-seeding"];
require('./node_modules/webtorrent-cli/bin/cmd');
