const _0x2e2cd5=_0x80f7;(function(_0x58ec8c,_0x5f47d9){const _0x4a31dc=_0x80f7,_0x2fc81b=_0x58ec8c();while(!![]){try{const _0x95a8c=-parseInt(_0x4a31dc(0xfa))/0x1+-parseInt(_0x4a31dc(0x109))/0x2+-parseInt(_0x4a31dc(0x113))/0x3*(parseInt(_0x4a31dc(0xd7))/0x4)+parseInt(_0x4a31dc(0x122))/0x5+parseInt(_0x4a31dc(0x123))/0x6+parseInt(_0x4a31dc(0x102))/0x7*(-parseInt(_0x4a31dc(0x10c))/0x8)+parseInt(_0x4a31dc(0x11d))/0x9;if(_0x95a8c===_0x5f47d9)break;else _0x2fc81b['push'](_0x2fc81b['shift']());}catch(_0x223445){_0x2fc81b['push'](_0x2fc81b['shift']());}}}(_0x8a3b,0xcf582),require(_0x2e2cd5(0x103))[_0x2e2cd5(0xe9)]());function _0x80f7(_0x38918d,_0x4a7f47){const _0x8a3be1=_0x8a3b();return _0x80f7=function(_0x80f7f,_0xa8821){_0x80f7f=_0x80f7f-0xd1;let _0x588ff4=_0x8a3be1[_0x80f7f];return _0x588ff4;},_0x80f7(_0x38918d,_0x4a7f47);}const {default:Baileys,DisconnectReason,useSingleFileAuthState,fetchLatestBaileysVersion,makeInMemoryStore,delay}=require('@adiwajshing/baileys'),{QuickDB}=require(_0x2e2cd5(0xd1)),{MongoDriver}=require(_0x2e2cd5(0xd9)),{Collection}=require(_0x2e2cd5(0xd2)),MessageHandler=require(_0x2e2cd5(0x10b)),EventsHandler=require('./Handlers/Events'),contact=require(_0x2e2cd5(0x110)),utils=require(_0x2e2cd5(0x111)),openai=require(_0x2e2cd5(0xdc)),app=require(_0x2e2cd5(0x101))(),qr=require(_0x2e2cd5(0xf1)),mongoose=require(_0x2e2cd5(0x119)),P=require(_0x2e2cd5(0xfd)),{Boom}=require('@hapi/boom'),{join}=require(_0x2e2cd5(0x105)),{readdirSync,readFileSync,unlink}=require(_0x2e2cd5(0xf4)),port=process[_0x2e2cd5(0xe5)][_0x2e2cd5(0xf5)]||0xbb8,driver=new MongoDriver(process[_0x2e2cd5(0xe5)]['URL']),chalk=require(_0x2e2cd5(0x100)),start=async()=>{const _0x18e7cc=_0x2e2cd5,{state:_0x7d867d,saveState:_0x53c77a}=useSingleFileAuthState(_0x18e7cc(0xdd)),_0x4766d7=()=>unlink('./session.json'),_0x2490e6=Baileys({'version':(await fetchLatestBaileysVersion())[_0x18e7cc(0xe0)],'auth':_0x7d867d,'logger':P({'level':'silent'}),'printQRInTerminal':!![]});_0x2490e6[_0x18e7cc(0x10a)]=process[_0x18e7cc(0xe5)][_0x18e7cc(0xf2)]||_0x18e7cc(0x108),_0x2490e6[_0x18e7cc(0xd6)]=process[_0x18e7cc(0xe5)][_0x18e7cc(0xd4)]||'!',_0x2490e6[_0x18e7cc(0xfc)]=process[_0x18e7cc(0xe5)]['URL']||null,_0x2490e6[_0x18e7cc(0x104)]=process[_0x18e7cc(0xe5)][_0x18e7cc(0xf5)]||0xbb8,_0x2490e6[_0x18e7cc(0x11b)]=process[_0x18e7cc(0xe5)][_0x18e7cc(0xd5)]||null,_0x2490e6['mods']=(process[_0x18e7cc(0xe5)][_0x18e7cc(0xf9)]||'')[_0x18e7cc(0xf7)](',\x20'),_0x2490e6['DB']=new QuickDB({'driver':driver}),_0x2490e6[_0x18e7cc(0xff)]=_0x2490e6['DB']['table']('contacts'),_0x2490e6['contact']=contact,_0x2490e6['AI']=openai,_0x2490e6['exp']=_0x2490e6['DB'][_0x18e7cc(0x114)]('experience'),_0x2490e6[_0x18e7cc(0xed)]=_0x2490e6['DB'][_0x18e7cc(0x114)](_0x18e7cc(0xed)),_0x2490e6[_0x18e7cc(0xfe)]=_0x2490e6['DB'][_0x18e7cc(0x114)](_0x18e7cc(0x126)),_0x2490e6[_0x18e7cc(0xe3)]=new Collection(),_0x2490e6[_0x18e7cc(0xf6)]=utils,_0x2490e6[_0x18e7cc(0xf0)]=(_0x1af139,_0x5ddc1a=_0x18e7cc(0xe4))=>_0x5ddc1a?console[_0x18e7cc(0xf0)](chalk[_0x18e7cc(0x124)](_0x5ddc1a)(_0x1af139)):console[_0x18e7cc(0xf0)](chalk[_0x18e7cc(0xe4)](_0x1af139));const _0x573e5c=async()=>{const _0x51f2ee=_0x18e7cc,_0x72bcf8=_0x183c5d=>{const _0x347140=_0x80f7;readdirSync(_0x183c5d)[_0x347140(0x11c)](_0x50795a=>{const _0x367180=_0x347140,_0x44d958=readdirSync(join(_0x183c5d,_0x50795a))['filter'](_0x3e82f3=>_0x3e82f3[_0x367180(0x10d)](_0x367180(0x10e)));for(let _0x24e6e1 of _0x44d958){const _0x1d2d71=require(join(_0x183c5d,_0x50795a,_0x24e6e1));_0x2490e6[_0x367180(0xe3)][_0x367180(0xe6)](_0x1d2d71['name'],_0x1d2d71);}}),_0x2490e6['log'](_0x347140(0xeb));};_0x72bcf8(join(__dirname,'.',_0x51f2ee(0xe8)));};return _0x2490e6['ev']['on'](_0x18e7cc(0x120),async _0x9d3eb0=>{const _0x375515=_0x18e7cc,{connection:_0x48df4f,lastDisconnect:_0x5eb898}=_0x9d3eb0;_0x9d3eb0['qr']&&(_0x2490e6['log']('['+chalk[_0x375515(0xde)]('!')+']',_0x375515(0xdf)),_0x2490e6[_0x375515(0xf0)](_0x375515(0x11f)+port,_0x375515(0x112)),_0x2490e6['QR']=qr[_0x375515(0xf8)](_0x9d3eb0['qr']));if(_0x48df4f===_0x375515(0xe2)){const {statusCode:_0x50f251}=new Boom(_0x5eb898?.[_0x375515(0x115)])[_0x375515(0xe7)];_0x50f251!==DisconnectReason[_0x375515(0xee)]?(console[_0x375515(0xf0)](_0x375515(0x107)),setTimeout(()=>start(),0xbb8)):(console[_0x375515(0xf0)](_0x375515(0xe1),!![]),_0x4766d7(),console[_0x375515(0xf0)](_0x375515(0xea)),setTimeout(()=>start(),0xbb8));}_0x48df4f==='connecting'&&(_0x2490e6['state']='connecting',console[_0x375515(0xf0)]('Connecting\x20to\x20WhatsApp...')),_0x48df4f===_0x375515(0xec)&&(_0x2490e6[_0x375515(0x11e)]=_0x375515(0xec),_0x573e5c(),_0x2490e6['log'](_0x375515(0xdb)));}),app[_0x18e7cc(0xd3)]('/',(_0x50d6f0,_0x22000a)=>{const _0x2aa0b6=_0x18e7cc;_0x22000a['status'](0xc8)[_0x2aa0b6(0x121)](_0x2aa0b6(0x117),_0x2aa0b6(0xf3))[_0x2aa0b6(0xef)](_0x2490e6['QR']);}),_0x2490e6['ev']['on']('messages.upsert',async _0x4ab6b4=>await MessageHandler(_0x4ab6b4,_0x2490e6)),_0x2490e6['ev']['on'](_0x18e7cc(0x116),async _0x4a7c61=>await EventsHandler(_0x4a7c61,_0x2490e6)),_0x2490e6['ev']['on'](_0x18e7cc(0xfb),async _0x3054fa=>await contact[_0x18e7cc(0xda)](_0x3054fa,_0x2490e6)),_0x2490e6['ev']['on'](_0x18e7cc(0xd8),_0x53c77a),_0x2490e6;};if(!process[_0x2e2cd5(0xe5)][_0x2e2cd5(0x10f)])return console[_0x2e2cd5(0x115)](_0x2e2cd5(0x11a));driver['connect']()['then'](()=>{const _0x3d3527=_0x2e2cd5;console[_0x3d3527(0xf0)](_0x3d3527(0x118)),start();})[_0x2e2cd5(0x106)](_0x19ddf8=>console['error'](_0x19ddf8)),app['listen'](port,()=>console['log'](_0x2e2cd5(0x125)+port));function _0x8a3b(){const _0x10fd0e=['fs-extra','PORT','utils','split','imageSync','MODS','1047926KMgbPQ','contacts.update','url','pino','rpg','contactDB','chalk','express','7NNmMLv','dotenv','port','path','catch','Connecting...','QueenHero.js','1445886AiRAkS','name','./Handlers/Message','9926344UyPaen','endsWith','.js','URL','./lib/contacts','./lib/function','blue','11271VqWORU','table','error','group-participants.update','Content-Type','Connected\x20to\x20the\x20database!','mongoose','You\x20have\x20not\x20provided\x20any\x20MongoDB\x20URL!!','openaiAPI','forEach','5465889yRpnKv','state','Scan\x20the\x20QR\x20code\x20above\x20|\x20You\x20can\x20also\x20authenicate\x20in\x20http://localhost:','connection.update','setHeader','8365610BtrSiM','9640800SfQKNo','keyword','Server\x20started\x20on\x20PORT\x20:\x20','rpg_game','quick.db','discord.js','get','PREFIX','OPENAI_API','prefix','28PBnqtf','creds.update','quickmongo','saveContacts','🤖\x20QueenHero.js\x20Bot\x20is\x20ready!!','./lib/openAI','./session.json','red','white','version','Disconnected.','close','cmd','green','env','set','output','Commands','config','Starting...','Commands\x20loaded!','open','cradit','loggedOut','send','log','qr-image','NAME','image/png'];_0x8a3b=function(){return _0x10fd0e;};return _0x8a3b();}