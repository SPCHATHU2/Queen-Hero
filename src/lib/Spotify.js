const _0x215a87=_0x32d0;function _0x32d0(_0x2fff4a,_0x49ccd6){const _0x1aa886=_0x1aa8();return _0x32d0=function(_0x32d010,_0x54ba78){_0x32d010=_0x32d010-0x145;let _0x209e9b=_0x1aa886[_0x32d010];return _0x209e9b;},_0x32d0(_0x2fff4a,_0x49ccd6);}(function(_0x261d70,_0x112cd2){const _0x33c539=_0x32d0,_0x1495f1=_0x261d70();while(!![]){try{const _0x507106=-parseInt(_0x33c539(0x150))/0x1+-parseInt(_0x33c539(0x14a))/0x2+-parseInt(_0x33c539(0x14f))/0x3+parseInt(_0x33c539(0x14c))/0x4+-parseInt(_0x33c539(0x15d))/0x5+parseInt(_0x33c539(0x15f))/0x6*(-parseInt(_0x33c539(0x162))/0x7)+-parseInt(_0x33c539(0x161))/0x8*(-parseInt(_0x33c539(0x14d))/0x9);if(_0x507106===_0x112cd2)break;else _0x1495f1['push'](_0x1495f1['shift']());}catch(_0x4ad0e1){_0x1495f1['push'](_0x1495f1['shift']());}}}(_0x1aa8,0x66b33));const Spotify=require(_0x215a87(0x157))[_0x215a87(0x152)],canvacord=require(_0x215a87(0x15b)),TrackDetails=require(_0x215a87(0x158)),credentials={'clientId':_0x215a87(0x147),'clientSecret':_0x215a87(0x14e)},spotify=new Spotify(credentials),spotifydl=async _0x4631c2=>{const _0x63b03d=_0x215a87,_0x4c4e96=await spotify['getTrack'](_0x4631c2)['catch'](()=>{const _0x52f7d7=_0x32d0;return{'error':_0x52f7d7(0x15c)};}),_0x1609be=new canvacord[(_0x63b03d(0x148))]()['setAuthor'](_0x4c4e96[_0x63b03d(0x145)]['join'](',\x20'))[_0x63b03d(0x154)](_0x4c4e96[_0x63b03d(0x146)])[_0x63b03d(0x15a)](0x9c40)[_0x63b03d(0x159)](0x2bb38)['setBackground'](_0x63b03d(0x151),_0x63b03d(0x15e))[_0x63b03d(0x155)](_0x4c4e96[_0x63b03d(0x149)])[_0x63b03d(0x156)](_0x4c4e96[_0x63b03d(0x14b)]);return{'data':_0x4c4e96,'coverimage':await _0x1609be[_0x63b03d(0x160)](),'audio':await spotify['downloadTrack'](_0x4631c2)};};function _0x1aa8(){const _0x2dc967=['setTitle','spotifydl-x','spotifydl-x/dist/lib/details/Track','setEndTimestamp','setStartTimestamp','canvacord','Failed','147705lkEsPE','#A30000','84DyyQxN','build','198568fzNyPn','58856mABbcF','artists','album_name','acc6302297e040aeb6e4ac1fbdfd62c3','Spotify','cover_url','52046GMUHBn','name','3241488MVCjfy','207iRuETn','0e8439a1280a43aba9a5bc0a16f3f009','1249884hAassm','370692UxQUmN','COLOR','default','exports','setAlbum','setImage'];_0x1aa8=function(){return _0x2dc967;};return _0x1aa8();}module[_0x215a87(0x153)]={'spotifydl':spotifydl};