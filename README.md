## What

A torrent client for iOS which runs on [play.js](https://playdotjs.com/) - without sideloading or jailbreaking! It's a simple wrapper around the excellent [WebTorrent](https://github.com/webtorrent/webtorrent) library.

[<img src="https://github.com/nneonneo/iOS-Torrent-Client/raw/master/demo.png" alt="Demo downloading Big Buck Bunny" height="800px">](demo.png)

## Installing

1. Install play.js from the [App Store](https://itunes.apple.com/us/app/play-js/id1423330822)
2. Create a new project (tap on the Editor), name it WebTorrent, type Node.js (default), and check "Clone from git repository". Tap Create.
3. In the remote settings, fill in this repository's address (https://github.com/nneonneo/iOS-Torrent-Client) under Address. Leave username and password blank. Tap Clone.

## Using
1. Launch play.js and select the WebTorrent project.
2. Paste the magnet link you want to download in place of `magnet:paste-magnet-link-here`.
3. Press the play button. The first time you run the project you will be prompted to resolve dependencies; accept and wait a bit while WebTorrent is downloaded.
4. Sit back and watch the torrent download. When it's all done, you can use the Files app to copy or move your downloaded file anywhere you like.
