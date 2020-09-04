link = 'magnet:paste-magnet-link-here';
process.argv = ["cli", "download", link, "--keep-seeding"];
require('./node_modules/webtorrent-cli/bin/cmd');
