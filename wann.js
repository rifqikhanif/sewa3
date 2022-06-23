///module jgn di hapus klo gk mau error

const {
	BufferJSON, 
	WA_DEFAULT_EPHEMERAL, 
	generateWAMessageFromContent, 
	proto, 
	generateWAMessageContent, 
	generateWAMessage, 
	prepareWAMessageMedia, 
	makeInMemoryStore, 
	areJidsSameUser, 
	getContentType 
} = require('@adiwajshing/baileys');
const {
	exec, 
	spawn, 
	execSync 
} = require("child_process");
const fetch = (...args) => import('node-fetch').then(({
	default: fetch
}) => fetch(...args));
const { JSDOM } = require('jsdom');
const { performance } = require('perf_hooks');
const { Primbon } = require('scrape-primbon');
const fs = require('fs');
const pino = require('pino');
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const path = require('path');
const hx = require('hxz-api');
const xfar = require('xfarr-api');
const os = require('os');
const FormData = require("form-data");
const ms = require('parse-ms');
const toMs = require('ms');
const moment = require('moment-timezone');
const speed = require('performance-now');
const primbon = new Primbon();
const speedofbot = require("performance-now");
const Dym = require("didyoumean");
const {
	onGoing, 
	dadu, 
	asupan 
} = require("./FuncBot/otakudesu.js");
const {
	smsg, 
	formatp, 
	formatDate, 
	getTime, 
	isUrl, 
	sleep, 
	clockString, 
	fetchJson, 
	getBuffer, 
	jsonformat, 
	format, 
	parseMention, 
	getRandom 
} = require('./FuncBot/myfunc');
const {
	addLevelingId, 
	addLevelingLevel, 
	addLevelingXp, 
	getLevelingId, 
	getLevelingLevel, 
	getLevelingXp 
} = require("./FuncBot/lvlfunction");
const {
	color, 
	mylog, 
	infolog 
} = require("./FuncBot/color");
const {
	isLimit, 
	limitAdd, 
	getDeposit, 
	addDeposit, 
	kurangDeposit, 
	getLimit, 
	giveLimit, 
	addlistml, 
	kuranglistml, 
	addBalance, 
	kurangBalance, 
	getBalance, 
	isGame, 
	gameAdd, 
	givegame, 
	cekGLimit 
} = require("./FuncBot/limit");
const {
	addResponList, 
	delResponList, 
	isAlreadyResponList, 
	isAlreadyResponListGroup, 
	sendResponList, 
	updateResponList, 
	getDataResponList 
} = require('./FuncBot/respon-list');
const {
	addRespons, 
	checkRespons, 
	deleteRespons
} = require('./FuncBot/respon');
const premium = require("./FuncBot/premium");

let Wann = fs.readFileSync('./media/Wann.jpg');
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));

global.db = JSON.parse(fs.readFileSync('./src/database.json'));
if (global.db) global.db = {
	sticker: {},
	database: {},
	game: {},
	others: {},
	users: {},
	chats: {},
	...(global.db || {})
}

global.called = false
global.Prefix = 'Multi'
global.ownerNumber = '6283160624440'
global.botname = 'REGHI-BOTZ' 
global.ownername = 'KANG GABUT'
global.owner = ['6283160624440'] 
global.pemilik = ['6283160624440'] 
global.pengguna = 'KANG GABUT'
global.ownernma = 'KANG GABUT'
global.packname = 'KANG GABUT' 
global.author = 'KANG GABUT' 
global.sessionName = 'session'
global.limitawal = { premium: "∞", free: 100 }
global.thumb = fs.readFileSync('./media/Wann.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')
global.hargadmff = 1261
global.hargadmml = 1700
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
let judullist = []
let trennama = db.others.trennama = []
let trenemail = db.others.trenemail =[]
let trenpw = db.others.trenpw =[]
let daftarlist = []
let lolkey = 'Apikey1' //Jangan Ganti link yt jika mau pake apikey ini
let antiyt = JSON.parse(fs.readFileSync('./database/antiyt.json'));
let antitele = JSON.parse(fs.readFileSync('./database/antitele.json'));
let antibitly = JSON.parse(fs.readFileSync('./database/antibitly.json'));
let akinator = JSON.parse(fs.readFileSync('./database/akinator.json'));
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let money = JSON.parse(fs.readFileSync('./uang.json'));
let deposit = JSON.parse(fs.readFileSync('./deposit.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));
let responDB = JSON.parse(fs.readFileSync('./database/respon.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));

	
const stire = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
module.exports = wann = async (wann, m, mentioned, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const args = chath.split(' ')
        const command = chath.toLowerCase().split(' ')[0] || ''
        const isCmd = command.startsWith(prefix)
        const pushname = m.pushName || "No Name"
        const botNumber = await wann.decodeJid(wann.user.id)
        const isWann = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = chath.slice(command.length + 1, chath.length)
        const from = m.chat
        const sender = m.sender
        const isGroup = m.isGroup
        const tanggal = moment().format("ll")
        const jam = moment().format("HH:mm:ss z")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await wann.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const isAntiYt = isGroup ? antiyt.includes(from) : false
        const isAntiTele = isGroup ? antitele.includes(from) : false
        const isAntiBitly = isGroup ? antibitly.includes(from) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isUser = pendaftar.includes(sender)
    	const isPremium = isWann ? true : premium.checkPremiumUser(m.sender, _premium)
        moment.tz.setDefault("Asia/Jakarta").locale("id");
        const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user
		const { ownerNumber, botName, gamewaktu, limitCount } = setting
		
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)	
		const runtime = function (seconds) {
			seconds = Number(seconds);
			var d = Math.floor(seconds / (3600 * 24));
			var h = Math.floor((seconds % (3600 * 24)) / 3600);
			var m = Math.floor((seconds % 3600) / 60);
			var s = Math.floor(seconds % 60);
			var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
			var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
			var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
			var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
			return dDisplay + hDisplay + mDisplay + sDisplay;
		}

		function _0x9b02(_0x201167,_0x4e09bd){const _0x5c5149=_0x5c51();return _0x9b02=function(_0x9b0293,_0x426938){_0x9b0293=_0x9b0293-0xb6;let _0x286358=_0x5c5149[_0x9b0293];return _0x286358;},_0x9b02(_0x201167,_0x4e09bd);}(function(_0x597bca,_0x1ebaf8){const _0x311ac9=_0x9b02,_0x525298=_0x597bca();while(!![]){try{const _0x3f5d01=parseInt(_0x311ac9(0xb9))/0x1+-parseInt(_0x311ac9(0xbd))/0x2*(-parseInt(_0x311ac9(0xbb))/0x3)+parseInt(_0x311ac9(0xbc))/0x4+-parseInt(_0x311ac9(0xc3))/0x5+-parseInt(_0x311ac9(0xc4))/0x6*(-parseInt(_0x311ac9(0xb7))/0x7)+-parseInt(_0x311ac9(0xba))/0x8+parseInt(_0x311ac9(0xc2))/0x9*(-parseInt(_0x311ac9(0xbe))/0xa);if(_0x3f5d01===_0x1ebaf8)break;else _0x525298['push'](_0x525298['shift']());}catch(_0x1a437a){_0x525298['push'](_0x525298['shift']());}}}(_0x5c51,0x6aaa0));const mentions=(_0x386cc5,_0x4136ed,_0x410cec)=>{const _0x3a5293=_0x9b02;_0x410cec==null||_0x410cec==undefined||_0x410cec==![]?wann[_0x3a5293(0xc7)](from,{'text':_0x386cc5[_0x3a5293(0xb8)](),'jpegThumbnail':fs[_0x3a5293(0xb6)](_0x3a5293(0xc5))},text,{'sendEphemeral':!![],'contextInfo':{'mentions':_0x4136ed}}):wann['sendMessage'](from,{'text':_0x386cc5[_0x3a5293(0xb8)](),'jpegThumbnail':fs[_0x3a5293(0xb6)](_0x3a5293(0xc5))},text,{'sendEphemeral':!![],'quoted':m,'contextInfo':{'mentions':_0x4136ed}});},reply=_0x111e51=>{const _0x30c52f=_0x9b02;wann[_0x30c52f(0xc7)](m[_0x30c52f(0xbf)],{'text':_0x111e51,'contextInfo':{'externalAdReply':{'title':'\x20'+global['botname'],'body':''+global['botname'],'previewType':_0x30c52f(0xc1),'thumbnailUrl':'','thumbnail':fs[_0x30c52f(0xb6)](_0x30c52f(0xc5)),'sourceUrl':_0x30c52f(0xc6)}}},{'quoted':m});},reply1=_0x324abc=>{const _0x428b1c=_0x9b02;wann[_0x428b1c(0xc7)](m[_0x428b1c(0xbf)],{'text':_0x324abc,'contextInfo':{'externalAdReply':{'title':'\x20'+global[_0x428b1c(0xc0)],'body':'','previewType':'PHOTO','thumbnailUrl':'','thumbnail':fs[_0x428b1c(0xb6)](_0x428b1c(0xc5)),'sourceUrl':_0x428b1c(0xc6)}}},{'quoted':m});};function _0x5c51(){const _0x380967=['./media/Wann.jpg','https://wa.me/6283160624440','sendMessage','readFileSync','829703yfFCKz','trim','179202LOmFxh','2468536sNztYF','273qcGktA','1440448WLMWsk','15292kOcrVa','2680LEpXeA','chat','botname','PHOTO','30141XfbsPr','1516395uJdFpI','36qbGApa'];_0x5c51=function(){return _0x380967;};return _0x5c51();}


		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			let user = global.db.users[m.sender]
			if (typeof user !== 'object') global.db.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.afkTime)) user.afkTime = -1
				if (!('afkReason' in user)) user.afkReason = ''
				if (!isNumber(user.limit)) user.limit = limitUser
			} else global.db.users[m.sender] = {
				afkTime: -1,
				afkReason: '',
				limit: limitUser,
				depo: '0',
			}
			let chats = global.db.chats[m.chat]
			if (typeof chats !== 'object') global.db.chats[m.chat] = {}
			if (chats) {
				if (!('mute' in chats)) chats.mute = false
				if (!('wame' in chats)) chats.wame = false
			} else global.db.chats[m.chat] = {
				mute: false,
				wame: false,
			}
			} catch (err) {
				console.error(err)
			}
	    
			if (!wann.public) {
				if (!m.key.fromMe) return
			}

			function ngelistisi(){
				let list = '';
				list += `${judullist[0]}\n`;
				daftarlist.forEach(function (item, index){
					index = index+1;
					list += `${index}. ${item}\n`
				});
				return list;
			}

			function ngelisttugas(){
				let list = '';
				list += "Daftar tugas : \n"
				tugas.forEach(function (item, index){
					index = index+1;
					list += `${index}. ${item}\n`
				});
				return list;
			}
			
			const casinoSave = (db, obj, session) => {
				var mine = db
				const dbdir = `./database/${session}.json`
				fs.writeFileSync(dbdir, JSON.stringify(obj, null, 2))
			}
			const setCasino = (session) => {
				const dbdir = `./database/${session}.json`
				if (!fs.existsSync(dbdir)) {
					const objcas = {
						status: true,
						turn: 'Z',
						session: session,
						Z: null,
						Y: null,
						nominal: null,
					}
					casinoSave(dbdir, objcas, session)
					return objcas
				} else {
					const read = JSON.parse(fs.readFileSync(dbdir))
					return read
				}
			}
			const deleteCasino = (from) => {
				return fs.unlinkSync('./database/' + from + '.json')
			}
			
			async function akiStart() {
				var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkey}`)
				return data
			}
			async function akiAnswer(server, frontaddr, session, signature, step, answer) {
				var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
				return data
			}
			async function akiBack(server, frontaddr, session, signature, step, answer) {
				var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/back?apikey=${lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
				return data
			}
			async function akiEnd(server, session, signature, step) {
				var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/end?apikey=${lolkey}&server=${server}&session=${session}&signature=${signature}&step=${step}`)
				return data
			}
			
			async function addCountCmdUser(nama, sender, u) {
				var posi = null
				var pos = null
				Object.keys(u).forEach((i) => {
					if (u[i].jid === sender) {
						posi = i
					}
				})
				if (posi === null) {
					u.push({jid: sender, db: [{nama: nama, count: 0}]})
					fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
					Object.keys(u).forEach((i) => {
						if (u[i].jid === sender) {
							posi = i
						}
					})
				}
				if (posi !== null) {
					Object.keys(u[posi].db).forEach((i) => {
						if (u[posi].db[i].nama === nama) {
							pos = i
						}
					})
					if (pos === null) {
						u[posi].db.push({nama: nama, count: 1})
						fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
					} else {
						u[posi].db[pos].count += 1
						fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
					}
				}
			}
			
			async function getPosiCmdUser(sender, _db) {
				var posi = null
				Object.keys(_db).forEach((i) => {
					if (_db[i].jid === sender) {
						posi = i
					}
				})
				return posi
			}
			
			function monospace(string) {
				return '```' + string + '```'
			}
			function randomNomor(min, max = null) {
				if (max !== null) {
					min = Math.ceil(min);
					max = Math.floor(max);
					return Math.floor(Math.random() * (max - min + 1)) + min;
				} else {
					return Math.floor(Math.random() * min) + 1
				}
			}
			
			const pickRandom = (arr) => {
				return arr[Math.floor(Math.random() * arr.length)]
			}
			const nebal = (angka) => {
                   return Math.floor(angka)
			}
			
			async function addCountCmd(nama, sender, _db) {
				addCountCmdUser(nama, sender, _cmdUser)
				var posi = null
				Object.keys(_db).forEach((i) => {
					if (_db[i].nama === nama) {
						posi = i
					}
				})
				if (posi === null) {
					_db.push({nama: nama, count: 1})
					fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
				} else {
					_db[posi].count += 1
					fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
				}
			}
			
			function clockString(ms) {
				let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
				let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
				let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
				return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
			}
			
			const buttonsDefault = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6283160624440` } },
			{ urlButton: { displayText: `Instagram Owner`, url : `https://instagram.com/` } },
			{ quickReplyButton: { displayText: `🧑 Owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `💰 Donasi`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `📜 Dashboard`, id: `${prefix}dashboard` } }
			]
			const buttonsFirst = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6283160624440` } },
			{ urlButton: { displayText: `Instagram Owner`, url : `https://instagram.com/` } },
			{ quickReplyButton: { displayText: `🧑 Owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `📝 Menu`, id: `${prefix}menu` } },
			{ quickReplyButton: { displayText: `📜 Rules`, id: `${prefix}rules` } }
			]
			const buttonsAnon = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6283160624440` } },
			{ urlButton: { displayText: `Instagram Owner`, url : `https://instagram.com/` } },
			{ quickReplyButton: { displayText: `📱 Search`, id: `${prefix}search` } },
			{ quickReplyButton: { displayText: `📲 Skip`, id: `${prefix}skip` } }
			]

			const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
				let po = prepareMessageFromContent(from, {
					"listMessage": {
						"title": title,
						"description": desc,
						"buttonText": "CLICK HERE",
						"listType": "SINGLE_SELECT",
						"sections": list
					}
				}, {})
				return wann.relayWAMessage(po, {waitForAck: true})
			}

			global.mess = {
				success: 'Berhasil.',
				admin: 'Fitur Khusus Admin Group!',
				botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
				owner: 'Fitur Khusus Owner Bot',
				group: 'Fitur Digunakan Hanya Untuk Group!',
				private: 'Fitur Digunakan Hanya Untuk Private Chat!',
				bot: 'Fitur Khusus Pengguna Nomor Bot',
				wait: 'Loading...',
				done: 'Done',
				endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
				wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
				example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)',
				example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
			}

			if (isCmd && !isUser) {
				pendaftar.push(sender)
				fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
			}
			
			if (m.message) {
				wann.sendReadReceipt(m.chat, m.sender, [m.key.id])
				if (!m.isGroup && isCmd && !m.key.fromMe) {
					console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command.slice(1)} [${args.length}]`), 'from', color(pushname))
				}
				if (m.isGroup && isCmd && !m.key.fromMe) {
					console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command.slice(1)} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
				}
			}

			const levelRole = getLevelingLevel(m.sender)
			var role = 'Warrior III'
			if (levelRole <= 5) {
				role = 'Warrior II'
			} else if (levelRole <= 10) {
				role = 'Warrior I'
			} else if (levelRole <= 15) {
				role = 'Elite III'
			} else if (levelRole <= 20) {
				role = 'Elite II'
			} else if (levelRole <= 25) {
				role = 'Elite I'
			} else if (levelRole <= 30) {
				role = 'Master III'
			} else if (levelRole <= 35) {
				role = 'Master II'
			} else if (levelRole <= 40) {
				role = 'Master I'
			} else if (levelRole <= 45) {
				role = 'GrandMaster III'
			} else if (levelRole <= 50) {
				role = 'GrandMaster II'
			} else if (levelRole <= 55) {
				role = 'GrandMaster I'
			} else if (levelRole <= 60) {
				role = 'Epic III'
			} else if (levelRole <= 65) {
				role = 'Epic II'
			} else if (levelRole <= 70) {
				role = 'Epic I'
			} else if (levelRole <= 75) {
				role = 'Legend III'
			} else if (levelRole <= 80) {
				role = 'Legend II'
			} else if (levelRole <= 85) {
				role = 'Legend I'
			} else if (levelRole <= 90) {
				role = 'Mythic'
			} else if (levelRole <= 95) {
				role = 'Mythical Glory'
			} else if (levelRole >= 100) {
				role = 'Immortal'
			} 
	
			// Anti link yt
			if (isGroup && isAntiYt && !isWann && !isAdmins && isBotAdmins) {
				if (chath.match(/(youtu.be\/)/gi)) {
					reply(`*「 YOUTUBE LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link youtube, maaf kamu akan di kick`)
					await wann.groupParticipantsUpdate(m.chat, [sender], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
			}
			// Anti link tele
			if (isGroup && isAntiTele && !isWann && !isAdmins && isBotAdmins) {
				if (chath.match(/(t.me\/)/gi)) {
					reply(`*「 TELEGRAM LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link telegram, maaf kamu akan di kick`)
					await wann.groupParticipantsUpdate(m.chat, [sender], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
			}
			// Anti bitly
			if (isGroup && isAntiBitly && !isWann && !isAdmins && isBotAdmins) {
				if (chath.match(/(bit.ly\/)/gi)) {
					reply(`*「 BIT.LY LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link bit.ly, maaf kamu akan di kick`)
					await wann.groupParticipantsUpdate(m.chat, [sender], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
			}
			// Anti link grup
			if (isAntiLink) 
			if (budy.includes('https://chat.whatsapp.com/')) {
				m.reply(`*「 GROUP LINK DETECTOR 」*\n\n Bot Mendeteksi Anda Telah Mengirim Link Group\nMaaf Anda Akan Di Kick! `)
				if (isAdmins) return reply(`Admin Mah Bebas Bro`)
				if (isWann) return reply(`Owner Mah Bebas Bro`)
				let sianj = m.sender
				await wann.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			}
			// Anti link wame
			if (db.chats[m.chat].wame) {
				if (budy.match(`wa.me/`)) {
					m.reply(`「 WA.ME DETECTED 」\n\nYou have been detected sending a wa.me link, sorry you will be kicked !`)
					if (!isBotAdmins) return reply(`Bot must be admin first`)
					let gclink = (`https://wa.me/`)
					let isLinkThisGc = new RegExp(gclink, 'i')
					let isgclink = isLinkThisGc.test(m.text)
					if (isgclink) return reply(`Eh sorry it didn't happen, because you sent this wa.me link`)
					if (isAdmins) return reply(`Admin Mah Bebas Bro`)
					if (isWann) return reply(`Owner Mah Bebas Bro`)
					wann.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
			
			if (db.chats[m.chat].mute && !isAdmins && !isWann) {
				return
			}
			setInterval(() => {
				fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
			}, 60 * 1000)
			let cron = require('node-cron')
			cron.schedule('00 12 * * *', () => {
				let user = Object.keys(global.db.users)
				let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
				for (let jid of user) global.db.users[jid].limit = limitUser
				console.log('Reseted Limit')
			}, {
				scheduled: true,
				timezone: "Asia/Kolkata"
			})
			
			if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
				let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
				let { text, mentionedJid } = hash
				let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
					userJid: wann.user.id,
					quoted: m.quoted && m.quoted.fakeObj
				})
				messages.key.fromMe = areJidsSameUser(m.sender, wann.user.id)
				messages.key.id = m.key.id
				messages.pushName = m.pushName
				if (m.isGroup) messages.participant = m.sender
				let msg = {
					...chatUpdate,
					messages: [proto.WebMessageInfo.fromObject(messages)],
					type: 'append'
				}
				wann.ev.emit('messages.upsert', msg)
			}
			
			if (('family100'+m.chat in _family100) && !isCmd) {
				kuis = true
				let room = _family100['family100'+m.chat]
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
				let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
				if (!isSurender) {
					let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
					if (room.terjawab[index]) return !0
					room.terjawab[index] = m.sender
				}
				let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
				let caption = `
			Jawab pertanyaan dibawah ini :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
			${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
			${Array.from(room.jawaban, (jawaban, index) => {
				return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
			}).filter(v => v).join('\n')}
			${isSurender ? '' : `Perfect Player`}`.trim()
            wann.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
			}

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, wann.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, wann.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, wann.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, wann.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, wann.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, wann.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, wann.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await wann.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await wann.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    wann.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    wann.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) wann.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) wann.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) wann.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    wann.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) wann.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) wann.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    wann.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        const addMonUser = (sender, amount) => {
      let position = false
      Object.keys(money).forEach((i) => {
        if (money[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        money[position].money += amount
        fs.writeFileSync('./uang.json', JSON.stringify(money))
      }
    }
    const moneyAdd = (sender, amount) => {
      let position = false
      Object.keys(money).forEach((i) => {
        if (money[i].id == sender) {
          position = i
        }
      })
      if (position !== false) {
        money[position].money -= amount
        fs.writeFileSync('./uang.json', JSON.stringify(money))
      }
    }
    const getMonUser = (sender) => {
        let fiendh = false
      for (let potonlmt of money) {
        if (potonlmt.id === sender) {
           global.userPoton = potonlmt.money
          fiendh = true
          return global.userPoton
        }
      }
      //function adven
      if (fiendh === false) {
        let obj = { id: sender, money: 0 }
        money.push(obj)
        fs.writeFileSync('./uang.json', JSON.stringify(money))
      }
      }
        // Auto Write Database Akinator Every 1 Minutes
               setInterval(() => {
                  fs.writeFileSync('./database/akinator.json', JSON.stringify(akinator, null, 2))
               }, 30 * 1000)

               // Akinator
               if (!isGroup && akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd && ["0", "1", "2", "3", "4"].includes(chath)) {
                 var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
                 var jwb = (await akiAnswer(server, frontaddr, session, signature, step, chath)).result
                 if (jwb.hasOwnProperty('name')) {
                   var img = await getBuffer(jwb.image)
                   var cpt = `*HASIL DITEMUKAN*\n\nNama : ${jwb.name}\nDeskripsi : ${jwb.description}`
                   wann.sendMessage(from, { image: img, caption: cpt }, { quoted: m })
                   .then( res => {
                     delete akinator[sender.split("@")[0]]
                   })
                   return
                 }
                 /* if (chath == "5") {
                   var bhasil = (await akiBack(server, frontaddr, session, signature, step, chath)).result
                   var bques = bhasil.question
                   var bstep = bhasil.step
                   var bteks = `${question}\n\n`
                   bteks += `0 - Ya\n`
                   bteks += `1 - Tidak\n`
                   bteks += `2 - Tidak Tahu\n`
                   bteks += `3 - Mungkin\n`
                   bteks += `4 - Mungkin Tidak`
                   wann.sendMessage(from, { text: bteks }, { quoted: m }).then( res => {
                     var baki = akinator[sender.split("@")[0]]
                     baki.question = bques
                     baki.step = bstep
                     akinator[sender.split("@")[0]] = baki
                   })
                 } else {*/
                   var jques = jwb.question
                   var jstep = jwb.step
                   var jteks = `${jques}\n\n`
                   jteks += `0 - Ya\n`
                   jteks += `1 - Tidak\n`
                   jteks += `2 - Tidak Tahu\n`
                   jteks += `3 - Mungkin\n`
                   jteks += `4 - Mungkin Tidak`
                   wann.sendMessage(from, { text: jteks }, { quoted: m }).then( res => {
                     var jaki = akinator[sender.split("@")[0]]
                     jaki.question = jques
                     jaki.step = jstep
                     akinator[sender.split("@")[0]] = jaki
                   })
                 // }
               }
        
        var _0x652d69=_0x231b;function _0x231b(_0x26cafd,_0x441913){var _0x9a648a=_0x9a64();return _0x231b=function(_0x231b89,_0x313c7b){_0x231b89=_0x231b89-0xac;var _0x4414ef=_0x9a648a[_0x231b89];return _0x4414ef;},_0x231b(_0x26cafd,_0x441913);}(function(_0x58d461,_0x3eb043){var _0x6f0dd5=_0x231b,_0x5a446b=_0x58d461();while(!![]){try{var _0x30c210=-parseInt(_0x6f0dd5(0xb5))/0x1+parseInt(_0x6f0dd5(0xb7))/0x2+parseInt(_0x6f0dd5(0xb1))/0x3+parseInt(_0x6f0dd5(0xb9))/0x4*(parseInt(_0x6f0dd5(0xba))/0x5)+parseInt(_0x6f0dd5(0xb3))/0x6+-parseInt(_0x6f0dd5(0xac))/0x7*(parseInt(_0x6f0dd5(0xb0))/0x8)+parseInt(_0x6f0dd5(0xaf))/0x9*(parseInt(_0x6f0dd5(0xb4))/0xa);if(_0x30c210===_0x3eb043)break;else _0x5a446b['push'](_0x5a446b['shift']());}catch(_0x28244d){_0x5a446b['push'](_0x5a446b['shift']());}}}(_0x9a64,0x7dcd4));function _0x9a64(){var _0x1ac196=['127860fRMzcc','367924lIkVRb','chat','1011754wINsNG','image_url','4JPlkjV','1447265XuPzOi','5668383axBkPo','isImage','isGroup','81OtIITJ','8PmXoSV','1690890xnHogc','response','1313658bpnkbd'];_0x9a64=function(){return _0x1ac196;};return _0x9a64();}if(!isCmd&&m[_0x652d69(0xae)]&&isAlreadyResponList(m['chat'],chath,db_respon_list)){var get_data_respon=getDataResponList(m['chat'],chath,db_respon_list);get_data_respon[_0x652d69(0xad)]===![]?wann['sendMessage'](m[_0x652d69(0xb6)],{'text':sendResponList(m['chat'],chath,db_respon_list)},{'quoted':m}):(buff=await getBuffer(get_data_respon[_0x652d69(0xb8)]),wann['sendImage'](m[_0x652d69(0xb6)],buff,''+get_data_respon[_0x652d69(0xb2)],m));}
        
	    if (fs.existsSync(`./database/${from}.json`)) {
          var casinoo = setCasino(`${from}`)
          if (sender == `${casinoo.Y}@s.whatsapp.net` && chath.toLowerCase() == 'n') {
          wann.sendMessage(from, { text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y} Membatalkan Game`, mentions: [casinoo.Y+"@s.whatsapp.net"] }, {quoted: m })
          deleteCasino(from)
          }
        if (sender == `${casinoo.Y}@s.whatsapp.net` && chath.toLowerCase() == 'y') {
          var angka1 = await randomNomor(10, 20)
          var angka2 = await randomNomor(10, 20)
          if (angka1 > angka2) {
          starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
        wann.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net"]}, {quoted: m })
            await addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
            await kurangBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
            deleteCasino(from)
        } else if (angka1 < angka2) {
           starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
        wann.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net"] }, {quoted: m })
        await addBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
        await kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
        deleteCasino(from)
          } else if (angka1 = angka2) {
        starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
            wann.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net" ]}, { quoted: m })
            deleteCasino(from)
        }
    }
}

        switch(command) {          
case prefix+'menu':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
                anu = `╭───╼[ REGHY BOTZ - MD ]╾──➲*
                
 *│* ${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}
 *├* Library : *Baileys-MD*.
 *├* Prefix : ( ${prefix} )
 *├* Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
 *├* Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
  
 *├* Status Anda : ${isWann ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 *├* Limit Harian : ${isWann ? '∞' : isPremium ? '∞' : global.db.users[m.sender].limit}
 *├* Limit Game : ${cekGLimit(sender, gcount, glimit)}
 *├* Total Pengguna : ${pendaftar.length}
 *├* ${readmore}

 *┞─╼* ANONYMOUS MENU   	
 *├* ${prefix}anonymous
 *├* ${prefix}start
 *├* ${prefix}next
 *├* ${prefix}stop
 *├* ${prefix}sendprofile
 *├* ${prefix}author
 *├* ${prefix}bug
 *├*
 *┞─╼* STORE MENU 
 *├* ${prefix}menu
 *├* ${prefix}listadd
 *├* ${prefix}update
 *├* ${prefix}listdel
 *├* proses
 *├* done
 *├*
 *┞─╼* MOVIE MENU    
 *├* ${prefix}addtugas
 *├* ${prefix}resettugas
 *├* ${prefix}outputtugas
 *├* ${prefix}hapustugas
 *├* ${prefix}addjudultugas
 *├* ${prefix}tambah
 *├* ${prefix}kali
 *├* ${prefix}kurang
 *├* ${prefix}bagi
 *├*
 *┞─╼*  BANK & PAYMENT  
 *├* ${prefix}topbalance
 *├* ${prefix}buylimit
 *├* ${prefix}buyglimit
 *├* ${prefix}transfer
 *├* ${prefix}checklimit
 *├* ${prefix}balance
 *├*
 *┞─╼*  GROUP MENU  
 *├* ${prefix}linkgroup
 *├* ${prefix}antilink [enable/disable]
 *├* ${prefix}ephemeral [option]
 *├* ${prefix}setppgc [image]
 *├* ${prefix}setname [text]
 *├* ${prefix}setdesc [text]
 *├* ${prefix}group [option]
 *├* ${prefix}editinfo [option]
 *├* ${prefix}add @tag
 *├* ${prefix}kick @tag
 *├* ${prefix}hidetag [text]
 *├* ${prefix}tagall [text]
 *├* ${prefix}promote @tag
 *├* ${prefix}demote @tag
 *├* ${prefix}vote [text]
 *├* ${prefix}devote
 *├* ${prefix}upvote
 *├* ${prefix}cekvote
 *├* ${prefix}hapusvote         
 *├*
 *┞─╼*  OWNER MENU     
 *├* ${prefix}chat [option]
  *├* ${prefix}getcase [name]
 *├* ${prefix}join [link]
 *├* ${prefix}leave
 *├* ${prefix}setbotpp
 *├* ${prefix}block @user
 *├* ${prefix}unblock @user
 *├* ${prefix}bcgroup
 *├* ${prefix}bcall
 *├* ${prefix}self
 *├* ${prefix}public
 *├* ${prefix}setcmd
 *├* ${prefix}listcmd
 *├* ${prefix}delcmd
 *├* ${prefix}lockcmd
 *├* ${prefix}addmsg
 *├* ${prefix}listmsg
 *├* ${prefix}getmsg
 *├* ${prefix}delmsg
 
 *┞─╼*  MAIN MENU   
 *├* ${prefix}ping
 *├* ${prefix}owner
 *├* ${prefix}donate
 *├* ${prefix}menu
 *├* ${prefix}delete
 *├* ${prefix}chatinfo
 *├* ${prefix}quoted
 *├* ${prefix}listpc
 *├* ${prefix}listgc
 *├* ${prefix}listonline
 *├* ${prefix}report     
 *├* ${prefix}dashboard
 *├* ${prefix}rules
  
 *┞─╼* MOVIE MENU    
 *├* ${prefix}drakorongoing
 *├* ${prefix}lk21 query
 *├* ${prefix}wattpad url_wattpad
 *├* ${prefix}wattpadsearch query
 *├* ${prefix}cerpen
 *├* ${prefix}ceritahoror
 
 *┞─╼*RANDOM TEXT MENU    
 *├* ${prefix}quotes
 *├* ${prefix}quotesdiLan
 *├* ${prefix}quotesanime
 *├* ${prefix}quotesimage
 *├* ${prefix}faktaunik
 *├* ${prefix}katabijak
 *├* ${prefix}pantun
 *├* ${prefix}bucin
 *├* ${prefix}randomnama
  
 *┞─╼* WIBU MENU   
 *├* ${prefix}'
 *├* ${prefix}manga
 *├* ${prefix}anime 
 *├* ${prefix}videoanime
 *├* ${prefix}husbu
 *├* ${prefix}waifu
 *├* ${prefix}milf
 *├* ${prefix}neko
 *├* ${prefix}kanna
 *├* ${prefix}sagiri
 *├* ${prefix}hentai
 *├* ${prefix}cosplay
 *├* ${prefix}wallnime
 *├* ${prefix}kusonime
 *├* ${prefix}megumin
 *├* ${prefix}otakudesu
 *├* ${prefix}doujindesu
 *├* ${prefix}storyanime
 *├* ${prefix}nakanomiku
 *├* ${prefix}nakanonino
 *├* ${prefix}nakanoitsuki
 *├* ${prefix}otakuongoing
 *├* ${prefix}nhentai *code*
 *├* ${prefix}nekopoi *link*
 *├* ${prefix}nekopoisearch
 
 *┞─╼*  FUN GAME MENU   	
 *├* ${prefix}piatu
 *├* ${prefix}holoh
 *├* ${prefix}jadian
 *├* ${prefix}jodohku
 *├* ${prefix}delttt
 *├* ${prefix}tictactoe
 *├* ${prefix}family100
 *├* ${prefix}tebak [option]
 *├* ${prefix}math [mode]
 *├* ${prefix}suitpvp [@tag]
 *├* ${prefix}casino
 *├* ${prefix}delcasino
 *├* ${prefix}akinator
 *├* ${prefix}cancelakinator
  
 *┞─╼* DOWNLOAD MENU  
 *├* ${prefix}tiktok [url]
 *├* ${prefix}tiktokaudio [url]
 *├* ${prefix}tiktoknowm [url]     
 *├* ${prefix}instagram [url]
 *├* ${prefix}twitter [url]
 *├* ${prefix}twittermp3 [url]
 *├* ${prefix}facebook [url]
 *├* ${prefix}pinterestdl [url]
 *├* ${prefix}ytmp3 [url]
 *├* ${prefix}ytmp4 [url]
 *├* ${prefix}getmusic [query]
 *├* ${prefix}getvideo [query]
 *├* ${prefix}umma [url]
 *├* ${prefix}joox [query]
 *├* ${prefix}soundcloud [url]
 *├* ${prefix}ttnowm [url] 
 *├* ${prefix}ttaudio [url]     
                
 *┞─╼* TOOLS MENU  
 *├* ${prefix}toimage
 *├* ${prefix}removebg
 *├* ${prefix}sticker
 *├* ${prefix}emojimix
 *├* ${prefix}tovideo
 *├* ${prefix}togif
 *├* ${prefix}tourl
 *├* ${prefix}tovn
 *├* ${prefix}tomp3
 *├* ${prefix}toaudio
 *├* ${prefix}ebinary
 *├* ${prefix}dbinary

 *┞─╼*  RANDOM MENU  
 *├* ${prefix}coffe
 *├* ${prefix}quotesanime
 *├* ${prefix}motivasi
 *├* ${prefix}dilanquote
 *├* ${prefix}bucinquote
 *├* ${prefix}katasenja
 *├* ${prefix}puisi
 *├* ${prefix}ppcp
 *├* ${prefix}anime
 *├* ${prefix}waifu
 *├* ${prefix}husbu
 *├* ${prefix}neko
 *├* ${prefix}shinobu
 *├* ${prefix}megumin
 *├* ${prefix}loli

 *┞─╼*  SEARCH MENU  
 *├* ${prefix}play [query]
 *├* ${prefix}yts [query]
 *├* ${prefix}google [query]
 *├* ${prefix}gimage [query]
 *├* ${prefix}pinterest [query]
 *├* ${prefix}wallpaper [query]
 *├* ${prefix}wikimedia [query]
 *├* ${prefix}ytsearch [query]
 *├* ${prefix}ringtone [query]
 *├* ${prefix}nickff 
 *├* ${prefix}nickml
 *├* ${prefix}nickpubg
 *├* ${prefix}nickdomino
  
 *┞─╼*  VOCAL MENU   	
 *├* ${prefix}halah
 *├* ${prefix}hilih
 *├* ${prefix}huluh
 *├* ${prefix}heleh
 *├* ${prefix}holoh
  
 *┞─╼*  AUDIO MENU   	
 *├* ${prefix}bass
 *├* ${prefix}blown
 *├* ${prefix}deep
 *├* ${prefix}earrape
 *├* ${prefix}fast
 *├* ${prefix}fat
 *├* ${prefix}nightcore
 *├* ${prefix}reverse
 *├* ${prefix}robot
 *├* ${prefix}slow
 *├* ${prefix}squirrel

 *┞─╼* ISLAM MENU   	
 *├* ${prefix}iqra
 *├* ${prefix}hadith
 *├* ${prefix}alquran
 *├* ${prefix}juzamma
 *├* ${prefix}tafsirsurah
 
 *┞─╼* CEK MENU  	
 *├* ${prefix}goblokcek 
 *├* ${prefix}jelekcek 
 *├* ${prefix}rate
 *├* ${prefix}haram
 *├* ${prefix}gaycek
 *├* ${prefix}lesbicek
 *├* ${prefix}gantengcek 
 *├* ${prefix}cantikcek
 *├* ${prefix}begocek 
 *├* ${prefix}suhucek
 *├* ${prefix}pintercek
 *├* ${prefix}jagocek
 *├* ${prefix}nolepcek
 *├* ${prefix}babicek
 *├* ${prefix}bebancek
 *├* ${prefix}baikcek
 *├* ${prefix}jahatcek
 *├* ${prefix}anjingcek
 *├* ${prefix}haramcek
 *├* ${prefix}pakboycek
 *├* ${prefix}pakgirlcek
 *├* ${prefix}sangecek 
 *├* ${prefix}bapercek
 *├* ${prefix}fakboycek
 *├* ${prefix}alimcek
 *├* ${prefix}suhucek
 *├* ${prefix}fakgirlcek
 *├* ${prefix}kerencek
 *├* ${prefix}wibucek
 *├* ${prefix}pasarkascek
 
 *┞─╼*  STALKING MENU   	
 *├* ${prefix}stalkig    _<nama>_
 *├* ${prefix}stalkgithub    _<nama>_
 *├* ${prefix}stalktwitter    _<nama>_
 *├* ${prefix}mlstalk    _<nama>_

 *┞─╼*  PRIMBON MENU  	
 *├* ${prefix}nomorhoki
 *├* ${prefix}artimimpi
 *├* ${prefix}artinama
 *├* ${prefix}ramaljodoh
 *├* ${prefix}ramaljodohbali
 *├* ${prefix}suamiistri
 *├* ${prefix}ramalcinta
 *├* ${prefix}cocoknama
 *├* ${prefix}pasangan
 *├* ${prefix}jadiannikah
 *├* ${prefix}sifatusaha
 *├* ${prefix}rezeki
 *├* ${prefix}pekerjaan
 *├* ${prefix}nasib
 *├* ${prefix}penyakit
 *├* ${prefix}tarot
 *├* ${prefix}fengshui
 *├* ${prefix}haribaik
 *├* ${prefix}harisangar
 *├* ${prefix}harisial
 *├* ${prefix}nagahari
 *├* ${prefix}arahrezeki
 *├* ${prefix}peruntungan
 *├* ${prefix}weton
 *├* ${prefix}karakter
 *├* ${prefix}keberuntungan
 *├* ${prefix}memancing
 *├* ${prefix}masasubur
 *├* ${prefix}zodiak
 *├* ${prefix}shio

 **┞─╼**  BOT MENU  	
 *├* ${prefix}antilink On/Off
 *├* ${prefix}mute On/Off
 *├* ${prefix}antiwame On/Off
 *├* ${prefix}antiyt On/Off
 *├* ${prefix}antitele On/Off
 *├* ${prefix}antibitly On/Off
 
  *├* Text Pro Me  	
 *├* ${prefix}blackpink text
 *├* ${prefix}neon text
 *├* ${prefix}greenneon text
 *├* ${prefix}advanceglow text
 *├* ${prefix}futureneon text
 *├* ${prefix}sandwriting text
 *├* ${prefix}sandsummer text
 *├* ${prefix}sandengraved text
 *├* ${prefix}metaldark text
 *├* ${prefix}neonlight text
 *├* ${prefix}holographic text
 *├* ${prefix}text1917 text
 *├* ${prefix}minion text
 *├* ${prefix}deluxesilver text
 *├* ${prefix}newyearcard text
 *├* ${prefix}bloodfrosted text
 *├* ${prefix}halloween text
 *├* ${prefix}jokerlogo text
 *├* ${prefix}fireworksparkle text
 *├* ${prefix}natureleaves text
 *├* ${prefix}bokeh text
 *├* ${prefix}toxic text
 *├* ${prefix}strawberry text
 *├* ${prefix}box3d text
 *├* ${prefix}roadwarning text
 *├* ${prefix}breakwall text
 *├* ${prefix}icecold text
 *├* ${prefix}luxury text
 *├* ${prefix}cloud text
 *├* ${prefix}summersand text
 *├* ${prefix}horrorblood text
 *├* ${prefix}thunder text
 *├* ${prefix}pornhub text1 text2
 *├* ${prefix}glitch text1 text2
 *├* ${prefix}avenger text1 text2
 *├* ${prefix}space text1 text2
 *├* ${prefix}ninjalogo text1 text2
 *├* ${prefix}marvelstudio text1 text2
 *├* ${prefix}lionlogo text1 text2
 *├* ${prefix}wolflogo text1 text2
 *├* ${prefix}steel3d text1 text2
 *├* ${prefix}wallgravity text1 text2

  *├* Nsfw Anime  	
 *├* ${prefix}chiisaihentai
 *├* ${prefix}trap
 *├* ${prefix}blowjob
 *├* ${prefix}yaoi
 *├* ${prefix}ecchi
 *├* ${prefix}hentai
 *├* ${prefix}ahegao
 *├* ${prefix}hololewd
 *├* ${prefix}sideoppai
 *├* ${prefix}animefeets
 *├* ${prefix}animebooty
 *├* ${prefix}animethighss
 *├* ${prefix}hentaiparadise
 *├* ${prefix}animearmpits
 *├* ${prefix}hentaifemdom
 *├* ${prefix}lewdanimegirls
 *├* ${prefix}biganimetiddies
 *├* ${prefix}animebellybutton
 *├* ${prefix}hentai4everyone

  *├* Random Image  	
 *├* ${prefix}bj
 *├* ${prefix}ero
 *├* ${prefix}ppcp
 *├* ${prefix}cum
 *├* ${prefix}feet
 *├* ${prefix}yuri
 *├* ${prefix}trap
 *├* ${prefix}lewd
 *├* ${prefix}feed
 *├* ${prefix}eron
 *├* ${prefix}solo
 *├* ${prefix}gasm
 *├* ${prefix}poke
 *├* ${prefix}anal
 *├* ${prefix}holo
 *├* ${prefix}tits
 *├* ${prefix}kuni
 *├* ${prefix}kiss
 *├* ${prefix}erok
 *├* ${prefix}smug
 *├* ${prefix}baka
 *├* ${prefix}solog
 *├* ${prefix}feetg
 *├* ${prefix}lewdk
 *├* ${prefix}waifu
 *├* ${prefix}pussy
 *├* ${prefix}femdom
 *├* ${prefix}cuddle
 *├* ${prefix}hentai
 *├* ${prefix}eroyuri
 *├* ${prefix}cum_jpg
 *├* ${prefix}blowjob
 *├* ${prefix}erofeet
 *├* ${prefix}holoero
 *├* ${prefix}classic
 *├* ${prefix}erokemo
 *├* ${prefix}fox_girl
 *├* ${prefix}futanari
 *├* ${prefix}lewdkemo
 *├* ${prefix}wallpaper
 *├* ${prefix}pussy_jpg
 *├* ${prefix}kemonomimi
 *├* ${prefix}nsfw_avatar
 *├* ${prefix}ngif
 *├* ${prefix}nsfw_neko_gif
 *├* ${prefix}random_hentai_gif
  
  *├* Photo Oxy  	
 *├* ${prefix}shadow text
 *├* ${prefix}cup text
 *├* ${prefix}cup1 text
 *├* ${prefix}romance text
 *├* ${prefix}smoke text
 *├* ${prefix}burnpaper text
 *├* ${prefix}lovemessage text
 *├* ${prefix}undergrass text
 *├* ${prefix}love text
 *├* ${prefix}coffe text
 *├* ${prefix}woodheart text
 *├* ${prefix}woodenboard text
 *├* ${prefix}summer3d text
 *├* ${prefix}wolfmetal text
 *├* ${prefix}nature3d text
 *├* ${prefix}underwater text
 *├* ${prefix}goldenrose text
 *├* ${prefix}summernature text
 *├* ${prefix}letterleaves text
 *├* ${prefix}glowingneon text
 *├* ${prefix}fallleaves text
 *├* ${prefix}flamming text
 *├* ${prefix}harrypotter text
 *├* ${prefix}carvedwood text
 *├* ${prefix}tiktok text1 text2
 *├* ${prefix}arcade8bit text1 text2
 *├* ${prefix}battlefield4 text1 text2
 *├* ${prefix}pubg text1 text2

  *├* Ephoto 360  	
 *├* ${prefix}wetglass text
 *├* ${prefix}multicolor3d text
 *├* ${prefix}watercolor text
 *├* ${prefix}luxurygold text
 *├* ${prefix}galaxywallpaper text
 *├* ${prefix}lighttext text
 *├* ${prefix}beautifulflower text
 *├* ${prefix}puppycute text
 *├* ${prefix}royaltext text
 *├* ${prefix}heartshaped text
 *├* ${prefix}birthdaycake text
 *├* ${prefix}galaxystyle text
 *├* ${prefix}hologram3d text
 *├* ${prefix}greenneon text
 *├* ${prefix}glossychrome text
 *├* ${prefix}greenbush text
 *├* ${prefix}metallogo text
 *├* ${prefix}noeltext text
 *├* ${prefix}glittergold text
 *├* ${prefix}textcake text
 *├* ${prefix}starsnight text
 *├* ${prefix}wooden3d text
 *├* ${prefix}textbyname text
 *├* ${prefix}writegalacy text
 *├* ${prefix}galaxybat text
 *├* ${prefix}snow3d text
 *├* ${prefix}birthdayday text
 *├* ${prefix}goldplaybutton text
 *├* ${prefix}silverplaybutton text
 *├* ${prefix}freefire text`
 wann.sendMessage(m.chat, { caption: anu, image: { url: "./media/menu.jpg" }, templateButtons: buttonsDefault, footer: 'REGHY BOTZ ', mentions: [m.sender] })
break 
}
//FITUR WITH TRENDTODAY BY MANIK DENGAN DISTRIBUTOR RAFLI RUSDIANA
		case prefix+'casino':
                 if (!isGroup)return reply(mess.OnlyGrup)
                 if (isGame(sender, isWann, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal`)
                 if (mentionUser.length == 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
                 if (mentionUser.length > 2) return reply('Hanya bisa dengan 1 orang')
                 if (mentionUser[0] === sender) return reply(`Sad amat main sama diri sendiri`)
				 if (mentionUser[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                 if (fs.existsSync(`./database/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
                 if (args.length == 2) return reply('Masukan Nominal Nya')
                 if (args[2].includes('-')) return reply(`Jangan menggunakan -`)
                 if (isNaN(parseInt(args[2]))) return reply('Nominal Harus Berupa Angka!')
                 var anu = getBalance(sender, balance)
                 var ani = getBalance(mentionUser[0], balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 if (ani < args[2] || ani == 'undefined') return reply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
                 var casinoo = setCasino(`${from}`)
                 casinoo.Z = sender.replace("@s.whatsapp.net", "")
                 casinoo.Y = mentionUser[0].split("@")[0]
                 casinoo.nominal = parseInt(args[2])
                 addCountCmd('#casino', sender, _cmd)
                 fs.writeFileSync(`./database/${from}.json`, JSON.stringify(casinoo, null, 2))
                 gameAdd(sender, glimit)
                 var starGame = `🎰 Memulai Game Casino 💰\n\n• @${sender.replace("@s.whatsapp.net", "")} Menantang ${args[1]}, dengan Nominal: *$ ${parseInt(args[2])}*\n• Ketik Y/N untuk menerima atau menolak Permainan!`
                 wann.sendMessage(from, { text: starGame, mentions: [sender, args[1].replace("@", "") + "@s.whatsapp.net"] }, { quoted: m })
                 break
            case prefix+'delcasino':
                 if (fs.existsSync('./database/'+from+'.json')) {
                 var csn = JSON.parse(fs.readFileSync('./database/'+from+'.json'))
		 if (csn.Z.includes(sender)) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
                   reply('Berhasil Menghapus Sesi Casino')
		 } else if (csn.Y.includes(sender)) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
		   reply('Berhasil Menghapus Sesi Casino')
		 } else if (isAdmins) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
		   reply('Berhasil Menghapus Sesi Casino')
		 } else if (isWann) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
		   reply('Berhasil Menghapu Sesi Casino')
		 } else {
	           reply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
		 }
                 } else {
                  reply('Tidak ada sesi yang berlangsung')
                 }
                 break
//------------------< Premium >-------------------
       case prefix+'premium': 
       addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
              if (!isWann || m.key.fromMe) return reply(mess.only.owner)
              if (args[1] === 'add') {
              if (m.message.extendedTextMessage != undefined) {
              mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
              premium.addPremiumUser(mentioned[0], args[3], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[3])).days} day(s) ${ms(toMs(args[3])).hours} hour(s) ${ms(toMs(args[3])).minutes} minute(s)`)
        
              } else {
            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[3], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[3])).days} day(s) ${ms(toMs(args[3])).hours} hour(s) ${ms(toMs(args[3])).minutes} minute(s)`)
}
              } else if (args[1] === 'del') {
              if (m.message.extendedTextMessage != undefined) {
              mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              reply('Sukses')
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              reply('Sukses')
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case prefix+'premiumcheck':
       case prefix+'cekpremium': 
       addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
              if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case prefix+'listprem':
       case prefix+'listpremium':          
       addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
                case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
                    var limitPrib = global.db.users[m.sender].limit
                    reply(`Name: ${pushname}\nLimit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(m.sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
				break
	    case prefix+'family100':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
	if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
                if ('family100'+m.chat in _family100) {
                    reply('There are still unfinished sessions!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await wann.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            //Bank & Payment Menu
			case prefix+'topbalance':{
			    addCountCmd('#topbalance', sender, _cmd)
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getMoney(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                addCountCmd('#buylimit', sender, _cmd)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 2000`)
                 if (mentionUser.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 addCountCmd('#transfer', sender, _cmd)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentionUser[0], parseInt(args[2]), balance)
                 mentions(`Sukses transfer balance sebesar $${args[2]} kepada @${mentionUser[0].split("@")[0]}`, [mentionUser[0]], true)
            }
                 break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                addCountCmd('#buygamelimit', sender, _cmd)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, listml)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
                case prefix+'akinator':
                if (isGroup) return reply(mess.OnlyPM)
                if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesain yg sebelumnya dulu atuh")
                var get_result = await akiStart()
                if (get_result.status == 200) {
                  var { server, frontaddr, session, signature, question, step } = get_result.result
                  const data = {}
                  data["server"] = server
                  data["frontaddr"] = frontaddr
                  data["session"] = session
                  data["signature"] = signature
                  data["question"] = question
                  data["step"] = step
                  var ini_txt = `${question}\n\n`
                  ini_txt += "0 - Ya\n"
                  ini_txt += "1 - Tidak\n"
                  ini_txt += "2 - Saya Tidak Tau\n"
                  ini_txt += "3 - Mungkin\n"
                  ini_txt += "4 - Mungkin Tidak"
                  wann.sendMessage(from, { text: ini_txt }, { quoted: m }).then(() => {
                     akinator[sender.split('@')[0]] = data
                  })
                } else {
                  reply(mess.error.api)
                }
                break
            case prefix+'cancelakinator':
                if (isGroup) return reply(mess.OnlyPM)
                if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
                delete akinator[sender.split("@")[0]]
                reply(`Sukses`)
                break
            case prefix+'tebak':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
                if (!text) reply(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong`)
                if (args[1] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await wann.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    wann.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, wann.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wann.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, wann.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wann.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, wann.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wann.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, wann.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wann.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, wann.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wann.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, wann.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            case prefix+'afk':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
        case prefix+'ttc': case prefix+'ttt': case prefix+'tictactoe':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
            let TicTacToe = require("./FuncBot/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await wann.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await wann.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command.slice(1)} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case prefix+'delttc': case prefix+'delttt':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            wann.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else throw '?'
            } catch (e) {
            reply('error')
            }
            }
            break
            case prefix+'suitpvp': case prefix+'suit':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await wann.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) wann.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case prefix+'donasi': case prefix+'donate': case prefix+'sewabot': case prefix+'sewa': case prefix+'buypremium': case prefix+'donate':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                reply(` MENU DONATE \n\nHi ${pushname} \n\`\`\`Dana : 085870824804\`\`\`\n\`\`\`\`\nTerimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini _^\n THX FOR YOU ! `)
            }
            break
            case prefix+'sc': case prefix+'script':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                reply('*Minta Ke Owner Aja Klo Dikasi Kau Beruntung*')
            }
            break
            case prefix+'chat':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            
                if (!isWann) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[1] === 'mute') {
                    wann.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'unmute') {
                    wann.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'archive') {
                    wann.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'unarchive') {
                    wann.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'read') {
                    wann.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'unread') {
                    wann.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'delete') {
                    wann.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break 
            case prefix+'mathquiz': case prefix+'math':{
            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                wann.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case prefix+'mysoulmate':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: prefix+'❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, jawab, wann.user.name, m, {mentions: ments})
            }
            break
            case prefix+'couple':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: prefix+'❤️congrats', buttonText: { displayText: '❤️congrats' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, jawab, wann.user.name, m, {mentions: menst})
            }
            break
            case prefix+'join':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[1]) && !args[1].includes('whatsapp.com')) throw 'Link Invalid!'
                reply('Segera Tuan')
                let result = args[1].split('https://chat.whatsapp.com/')[1]
                await wann.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case prefix+'leave':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                await wann.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case prefix+'kick':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await wann.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case prefix+'add':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await wann.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case prefix+'promote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await wann.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case prefix+'demote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await wann.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case prefix+'block':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isWann) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await wann.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case prefix+'unblock':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isWann) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await wann.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case prefix+'setname': case prefix+'setsubject':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await wann.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case prefix+'setdesc': case prefix+'setdesk':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await wann.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case prefix+'setppbot': case prefix+'setbotpp':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                await wann.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case prefix+'setppgroup': case prefix+'setgrouppp': case prefix+'setgcpp': case prefix+'setppgrup': case prefix+'setppgc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                await wann.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
case prefix+'grupinfo': case prefix+'groupinfo':
try{
 var pic = await wann.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
wann.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case prefix+'tagall': case prefix+'tag':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `≻ @${mem.id.split('@')[0]}\n`
                }
                wann.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case prefix+'hidetag':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            wann.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case prefix+'style': case prefix+'styletext':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		            db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./FuncBot/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `≻ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case prefix+'vote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
               if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`
            reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
• Total: ${vote[m.chat][1].length}

 [ DEVOTE ]
• Total: ${vote[m.chat][2].length}

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: wann.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            wann.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case prefix+'upvote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
               if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes`
            let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: wann.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            wann.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case prefix+'devote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You Have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes`
            let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: wann.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            wann.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case prefix+'cekvote':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes
`
wann.sendTextWithMentions(m.chat, teks_vote, m)
break
		case prefix+'deletevote': case prefix+'delvote': case prefix+'hapusvote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
               case prefix+'group': case prefix+'grup':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[1] === 'close'){
                    await wann.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'open'){
                    await wann.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: prefix+'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: prefix+'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `Group Mode`, wann.user.name, m)

             }
            }
            break
            case prefix+'editinfo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[1] === 'open'){
                await wann.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[1] === 'close'){
                await wann.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: prefix+'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: prefix+'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `Mode Edit Info`, wann.user.name, m)

            }
            }
            break
                        case prefix+'antiyt':
        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
            if (isAntiYt) return reply(`Udah aktif`)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            antiyt.push(from)
            fs.writeFileSync('./database/antiyt.json', JSON.stringify(antiyt, null, 3))
            reply('Anti link youtube aktif')
        } else if (args[1] === 'off') {
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            let anu = antiyt.indexOf(from)
            antiyt.splice(anu, 1)
            fs.writeFileSync('./database/antiyt.json', JSON.stringify(antiyt, null, 3))
            reply('Anti link youtube nonaktif')
            }
            break
        case prefix+'antitele':
        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
            if (isAntiTele) return reply(`Udah aktif`)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            antitele.push(from)
            fs.writeFileSync('./database/antitele.json', JSON.stringify(antitele, null, 3))
            reply('Antilink Telegram aktif')
        } else if (args[1] === 'off') {
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            let anu = antitele.indexOf(from)
            antitele.splice(anu, 1)
            fs.writeFileSync('./database/antitele.json', JSON.stringify(antitele, null, 3))
            reply('Antilink Telegram nonaktif')
            }
            break
            case prefix+'antibitly':
        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
            if (isAntiBitly) return reply(`Udah aktif`)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            antibitly.push(from)
            fs.writeFileSync('./database/antibitly.json', JSON.stringify(antibitly, null, 3))
            reply('Antilink Bitly aktif')
        } else if (args[1] === 'off') {
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            let anu = antibitly.indexOf(from)
            antibitly.splice(anu, 1)
            fs.writeFileSync('./database/antibitly.json', JSON.stringify(antibitly, null, 3))
            reply('Antilink Bitly nonaktif')
        }
        break
case prefix+'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
						if (isAntiLink) return reply('Already Activated')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('```ANTILINK ACTIIVED IN GROUP```')
						wann.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[1] === 'off') {
						if (!isAntiLink) return reply('already deactivated')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('```ANTILINK NOT ACTIVE IN GROUP```')
					} else if (!q){
 reply(`Pilih Antilink On / Off `)
					}
					break 
					case prefix+'antiwame':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[1] === "on") {
                if (db.chats[m.chat].wame) return reply(`Already Activated`)
                db.chats[m.chat].wame = true
                reply(`Anti Wa.me Activated!`)
                } else if (args[1] === "off") {
                if (!db.chats[m.chat].wame) return reply(`Already deactivated`)
                db.chats[m.chat].wame = false
                reply(`Anti Wa.me is not activated!`)
                } else {
                 let buttons = [
                        { buttonId: prefix+'antiwame on', buttonText: { displayText: 'ENABLE' }, type: 1 },
                        { buttonId: prefix+'antiwame off', buttonText: { displayText: 'DISABLE' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, wann.user.name, m)
                }
             }
             break
             // Menu Search
        case prefix+'nickff':{
        const axios = require('axios')
if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 646675175`)
            axios.get(`https://api.lolhuman.xyz/api/freefire/${args[1]}?apikey=${lolkey}`)
            .then(({data}) => {
            let epep = `*🔎 CHECK NICK FREE FIRE 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(epep)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickml':{
        const axios = require('axios')
 var args1 = q.split("/")[0]
            var args2 = q.split("/")[1]                
            if (!q.includes("/")) return reply(`Gunakan dengan cara ${command} *id/server*\n\n_Contoh_\n\n${command} 617243212/8460`)
            axios.get(`https://api.lolhuman.xyz/api/mobilelegend/${args1}/${args2}?apikey=${lolkey}`)
            .then(({data}) => {
            let emel = `*🔎 CHECK NICK MOBILE LEGENDS 🔍*

ID : ${args[1]}
Nick : ${data.result}`
reply(emel)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickpubg':{
        const axios = require('axios')
            if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 5217933016`)
            axios.get(`https://api.lolhuman.xyz/api/pubg/${args[1]}?apikey=${lolkey}`)
            .then(({data}) => {
            let pubg = `*🔎 CHECK NICK PUBG 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(pubg)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickdomino':{
        const axios = require('axios')
               if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 291756557`)
            axios.get(`https://api.lolhuman.xyz/api/higghdomino/${args[1]}?apikey=${lolkey}`)
            .then(({data}) => {
            let domino = `*🔎 CHECK NICK HIGGS DOMINO 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(domino)
            limitAdd(sender, limit)
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
					   case prefix+'mute':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (args[1] === "on") {
                if (db.chath[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${wann.user.name} has been muted in this group !`)
                } else if (args[1] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${wann.user.name} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: prefix+'mute on', buttonText: { displayText: 'MUTE' }, type: 1 },
                        { buttonId: prefix+'mute off', buttonText: { displayText: 'UNMUTE' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `Mute Bot`, wann.user.name, m)
                }
             }
             break
             case prefix+'rules':
             rulesBot = `

 # RULES BOT

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

4. Gpp sc gw jelek yg penting 
Bot gw jalan awokawoak
Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

Owner  BOTZ:
wa.me/6283160624440
`
             reply(rulesBot)
             break
            case prefix+'linkgroup': case prefix+'grouplink': case prefix+'gclink': case prefix+'linkgc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                let response = await wann.groupInviteCode(m.chat)
                wann.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            case prefix+'ephemeral':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                if (args[1] === 'enable') {
                    await wann.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'disable') {
                    await wann.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case prefix+'delete': case prefix+'del':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                wann.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case prefix+'bcgc': case prefix+'bcgroup':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
                let getGroups = await wann.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./media/Wann.jpg')
                      let txt = `「 BROADCAST BOT 」\n\n${text}`
                      wann.send5ButImg(i, txt, wann.user.name, fatihgans, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case prefix+'bc': case prefix+'broadcast': case prefix+'bcall':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} halo`
                let anu = await stire.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nIn ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./media/Wann.jpg')
                      let txt = `「 BROADCAST BOT 」\n\n${text}`
                      wann.send5ButImg(yoi, txt, `${global.pengguna}`, fatihgans, btn)
		}
		reply('Broadcast Success')
            }
            break
            case prefix+'chatinfo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) reply('Reply to mesaage')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `≻ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━≻ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ≻ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                wann.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case prefix+'q': case prefix+'quoted':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await wann.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case prefix+'listpc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                 let anu = await stire.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `❏ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = stire.messages[i].array[0].pushName
                     teks += `≻ *Name :* ${nama}\n≻ *User :* @${i.split('@')[0]}\n≻ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 wann.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case prefix+'listgc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                 let anu = await stire.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `❏ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await wann.groupMetadata(i)
                     teks += `≻ *Name :* ${metadata.subject}\n≻ *Owner :* @${metadata.owner.split('@')[0]}\n≻ *ID :* ${metadata.id}\n≻ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n≻ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 wann.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case prefix+'listonline': case prefix+'onlinelist': case prefix+'liston':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                    let id = args && /\d+\-\d+@g.us/.test(args[1]) ? args[1] : m.chat
                    let online = [...Object.keys(stire.presences[id]), botNumber]
                    wann.sendText(m.chat, 'Online List:\n\n' + online.map(v => '≻ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case prefix+'sticker': case prefix+'s': case prefix+'stickergif': case prefix+'sgif':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await wann.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await wann.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case prefix+'ebinary':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./FuncBot/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case prefix+'dbinary':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./FuncBot/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case prefix+'emojimix':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
	        if (!text) throw `Example : ${prefix + command} ðŸ˜…+ðŸ¤”`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await wann.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case prefix+'toimage': case prefix+'toimg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    wann.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case prefix+'tomp4': case prefix+'tovideo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${command}*`
		let { webp2mp4File } = require('./FuncBot/uploader')
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await wann.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case prefix+'toaud': case prefix+'toaudio':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            let media = await quoted.download()
            let { toAudio } = require('./FuncBot/converter')
            let audio = await toAudio(media, 'mp4')
            wann.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case prefix+'tomp3':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            let media = await quoted.download()
            let { toAudio } = require('./FuncBot/converter')
            let audio = await toAudio(media, 'mp4')
            wann.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${wann.user.name}.mp3`}, { quoted : m })
            }
            break
            case prefix+'tovn': case prefix+'toptt':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            let media = await quoted.download()
            let { toPTT } = require('./FuncBot/converter')
            let audio = await toPTT(media, 'mp4')
            wann.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case prefix+'togif':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
		let { webp2mp4File } = require('./FuncBot/uploader')
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await wann.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case prefix+'tourl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./FuncBot/uploader')
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case prefix+'imagenobg': case prefix+'removebg': case prefix+'remove-bg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await wann.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    wann.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case prefix+'yts': case prefix+'ytsearch':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `≻ No : ${no++}\n≻ Type : ${i.type}\n≻ Video ID : ${i.videoId}\n≻ Title : ${i.title}\n≻ Views : ${i.views}\n≻ Duration : ${i.timestamp}\n≻ Upload At : ${i.ago}\n≻ Author : ${i.author.name}\n≻ Url : ${i.url}\n\n─────────────────\n\n`
                }
                wann.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case prefix+'google':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `≻ *Title* : ${g.title}\n`
                teks += `≻ *Description* : ${g.snippet}\n`
                teks += `≻ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case prefix+'gimage': case prefix+'googleimage':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
        if (!text) throw `Example : ${prefix + command} ml nana`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: wann.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                wann.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case prefix+'play': case prefix+'ytplay':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} bts boy with luv`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
≻ Title : ${anu.title}
≻ Ext : Search
≻ ID : ${anu.videoId}
≻ Duration : ${anu.timestamp}
≻ Viewers : ${anu.views}
≻ Uploaded : ${anu.ago}
≻ Author : ${anu.author.name}
≻ Channel : ${anu.author.url}
≻ Description : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   wann.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Playing To ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Video Source',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎵Audio🎵',
                                    id: `.ytmp3 ${anu.url} 320kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥VIdeo🎥',
                                    id: `.ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  wann.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case prefix+'ytmp3': case prefix+'ytaudio':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                let { yta } = require('./FuncBot/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`
                let quality = args[2] ? args[2] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                wann.sendImage(m.chat, media.thumb, `≻ Title : ${media.title}\n≻ File Size : ${media.filesizeF}\n≻ Url : ${isUrl(text)}\n≻ Ext : MP3\n≻ Resolution : ${args[2] || '320kbps'}`, m)
                wann.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case prefix+'ytmp4': case prefix+'ytvideo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                let { ytv } = require('./FuncBot/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[2] ? args[2] : '360p'
                let media = await ytv(args[1], quality)
                if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
                wann.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `≻ Title : ${media.title}\n≻ File Size : ${media.filesizeF}\n≻ Url : ${isUrl(text)}\n≻ Ext : MP3\n≻ Resololution : ${args[2] || '360p'}` }, { quoted: m })
            }
            break
	    case prefix+'getmusic':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./FuncBot/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[2] ? args[2] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100000) return reply('File Melebihi Batas'+util.format(media))
                wann.sendImage(m.chat, thumbnail, `âž£ Title : ${title}\nâž£ File Size : ${media[0].formattedSize}\nâž£ Url : ${url}\nâž£ Ext : MP3\nâž£ Resolusi : ${args[2] || '128kbps'}`, m)
                wann.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case prefix+'getvideo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./FuncBot/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[2] ? args[2] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100000) return reply('File Melebihi Batas'+util.format(media))
                wann.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `âž£ Title : ${title}\nâž£ File Size : ${media[0].formattedSize}\nâž£ Url : ${url}\nâž£ Ext : MP4\nâž£ Resolusi : ${args[2] || '360p'}` }, { quoted: m })
            }
            break
            case prefix+'pinterest':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { pinterest } = require('./FuncBot/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                wann.sendMessage(m.chat, { image: { url: result }, caption: 'âž£ Media Url : '+result }, { quoted: m })
            }
            break
case prefix+'waifu':{
const axios = require('axios')
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
reply('Loading...')
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
sendFile(m.chat, data.url, 'Ni Cewe 2D Lu')
})
break
}
case prefix+'cry':case prefix+'kill':case prefix+'hug':case prefix+'pat':case prefix+'lick':case prefix+'kiss':case prefix+'bite':case prefix+'yeet':case prefix+'neko':case prefix+'bully':case prefix+'bonk':case prefix+'wink':case prefix+'poke':case prefix+'nom':case prefix+'slap':case prefix+'waifu':case prefix+'smile':case prefix+'wave':case prefix+'awoo':case prefix+'blush':case prefix+'smug':case prefix+'glomp':case prefix+'happy':case prefix+'dance':case prefix+'cringe':case prefix+'cuddle':case prefix+'highfive':case prefix+'shinobu':case prefix+'megumin':case prefix+'handhold':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
reply('Loading...')
const axios = require('axios')
axios.get(`https://api.waifu.pics/sfw/${command.slice(1)}`)
.then(({data}) => {
sendFile(from, data.url, mess.done)
})
}
break			
	    case prefix+'couple': case prefix+'ppcp':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                wann.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                wann.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case prefix+'coffee': case prefix+'kopi':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕Random Coffee☕`,
                    footer: wann.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                wann.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'wallpaper':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./FuncBot/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `≻ Title : ${result.title}\n≻ Category : ${result.type}\n≻ Detail : ${result.source}\n≻ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: wann.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                wann.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'wikimedia':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./FuncBot/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `≻ Title : ${result.title}\n≻ Source : ${result.source}\n≻ Media Url : ${result.image}`,
                    footer: wann.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                wann.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case prefix+'mode': case prefix+'set':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
        const buttons = [
{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF'}, type: 1},
{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC'}, type: 1}
]

const buttonMessage = {
text: "Pilih Salah Satu",
footerText: 'Hello Owner',
buttons: buttons,
headerType: 1
}
                wann.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break            
            case prefix+'yatim':{
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
 if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let oi = m.sender
            let ytm = member[Math.floor(Math.random() * member.length)]
            let mty = `Cieee Yatim Baru

 @${ytm.split('@')[0]}`
            let ments = [oi, ytm]
            let buttons = [
                        { buttonId: prefix+'yatim', buttonText: { displayText: 'Yatim' }, type: 1 }
                    ]
                     wann.sendButtonText(m.chat, buttons, mty, wann.user.name, m, {mentions: ments})
}
break
case prefix+'piatu':
case prefix+'piyatu':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
 if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let bh = m.sender
            let bra = member[Math.floor(Math.random() * member.length)]
            let bruh = `Cieee Piatu Baru

 @${bra.split('@')[0]}`
            let ments = [bh, bra]
            let buttons = [
                        { buttonId: prefix+'piatu', buttonText: { displayText: 'Piatu' }, type: 1 }
                    ]
                     wann.sendButtonText(m.chat, buttons, bruh, wann.user.name, m, {mentions: ments})
}
break
            case prefix+'quotesanime': case prefix+'quoteanime':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { quotesAnime } = require('./FuncBot/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                wann.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
                // Ephoto 360 //
                case prefix+'wetglass':case prefix+'multicolor3d':case prefix+'watercolor':case prefix+'luxurygold':case prefix+'galaxywallpaper':case prefix+'lighttext':case prefix+'beautifulflower':case prefix+'puppycute':case prefix+'royaltext':case prefix+'heartshaped':case prefix+'birthdaycake':case prefix+'galaxystyle':case prefix+'hologram3d':case prefix+'greenneon':case prefix+'glossychrome':case prefix+'greenbush':case prefix+'metallogo':case prefix+'noeltext':case prefix+'glittergold':case prefix+'textcake':case prefix+'starsnight':case prefix+'wooden3d':case prefix+'textbyname':case prefix+'writegalacy':case prefix+'galaxybat':case prefix+'snow3d':case prefix+'birthdayday':case prefix+'goldplaybutton':case prefix+'silverplaybutton':case prefix+'freefire':{
 if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                               if (!text) throw 'No Query Text'
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'ttlogo':case prefix+'arcade8bit':case prefix+'battlefield4':case prefix+'pubg':{
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw 'No Query Text'
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy2/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            // Photo Oxy //
            case prefix+'shadow':case prefix+'cup':case prefix+'cup1':case prefix+'romance':case prefix+'smoke':case prefix+'burnpaper':case prefix+'lovemessage':case prefix+'undergrass':case prefix+'love':case prefix+'coffe':case prefix+'woodheart':case prefix+'woodenboard':case prefix+'summer3d':case prefix+'wolfmetal':case prefix+'nature3d':case prefix+'underwater':case prefix+'goldenrose':case prefix+'summernature':case prefix+'letterleaves':case prefix+'glowingneon':case prefix+'fallleaves':case prefix+'flamming':case prefix+'harrypotter':case prefix+'carvedwood':{
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw 'No Query Text'
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'pornhub':case prefix+'glitch':case prefix+'avenger':case prefix+'space':case prefix+'ninjalogo':case prefix+'marvelstudio':case prefix+'lionlogo':case prefix+'wolflogo':case prefix+'steel3d':case prefix+'wallgravity':{
            if (!text) throw 'No Query Text'
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'jodohku':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: prefix+'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, jawab, wann.user.name, m, {mentions: ments})
            }
            break
            case prefix+'jadian':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian 💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: prefix+'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, jawab, wann.user.name, m, {mentions: menst})
            }
            break
                // Textprome //
                case prefix+'blackpink':case prefix+'neon':case prefix+'greenneon':case prefix+'advanceglow':case prefix+'futureneon':case prefix+'sandwriting':case prefix+'sandsummer':case prefix+'sandengraved':case prefix+'metaldark':case prefix+'neonlight':case prefix+'holographic':case prefix+'text1917':case prefix+'minion':case prefix+'deluxesilver':case prefix+'newyearcard':case prefix+'bloodfrosted':case prefix+'halloween':case prefix+'jokerlogo':case prefix+'fireworksparkle':case prefix+'natureleaves':case prefix+'bokeh':case prefix+'toxic':case prefix+'strawberry':case prefix+'box3d':case prefix+'roadwarning':case prefix+'breakwall':case prefix+'icecold':case prefix+'luxury':case prefix+'cloud':case prefix+'summersand':case prefix+'horrorblood':case prefix+'thunder':{
                if (!text) throw 'No Query Text'
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'bj':case prefix+'ero':case prefix+'cum':case prefix+'feet':case prefix+'yuri':case prefix+'trap':case prefix+'lewd':case prefix+'feed':case prefix+'eron':case prefix+'solo':case prefix+'gasm':case prefix+'poke':case prefix+'anal':case prefix+'holo':case prefix+'tits':case prefix+'kuni':case prefix+'kiss':case prefix+'erok':case prefix+'smug':case prefix+'baka':case prefix+'solog':case prefix+'feetg':case prefix+'lewdk':case prefix+'waifu':case prefix+'pussy':case prefix+'femdom':case prefix+'cuddle':case prefix+'hentai':case prefix+'eroyuri':case prefix+'cum_jpg':case prefix+'blowjob':case prefix+'erofeet':case prefix+'holoero':case prefix+'classic':case prefix+'erokemo':case prefix+'fox_girl':case prefix+'futanari':case prefix+'lewdkemo':case prefix+'wallpaper':case prefix+'pussy_jpg':case prefix+'kemonomimi':case prefix+'nsfw_avatar':{
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random2/${command.slice(1)}?apikey=${lolkey}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'chiisaihentai':case prefix+'trap':case prefix+'blowjob':case prefix+'yaoi':case prefix+'ecchi':case prefix+'ahegao':case prefix+'hololewd':case prefix+'sideoppai':case prefix+'animefeets':case prefix+'animebooty':case prefix+'animethighss':case prefix+'hentaiparadise':case prefix+'animearmpits':case prefix+'hentaifemdom':case prefix+'lewdanimegirls':case prefix+'biganimetiddies':case prefix+'animebellybutton':case prefix+'hentai4everyone':{
            if (!text) throw 'No Query Text'
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command.slice(1)}?apikey=${lolkey}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
	    case prefix+'nomerhoki': case prefix+'nomorhoki':{
             const _0x564e9f=_0x5a94;function _0x5a94(_0x590c16,_0x19e5b5){const _0x40da31=_0x40da();return _0x5a94=function(_0x5a949d,_0x3b86f0){_0x5a949d=_0x5a949d-0x154;let _0x52baef=_0x40da31[_0x5a949d];return _0x52baef;},_0x5a94(_0x590c16,_0x19e5b5);}function _0x40da(){const _0x11f04e=['status','7xWEqNw','kesehatan','\x0a-\x20Kehancuran\x20:\x20','19938jpsIAZ','energi_negatif','persentase','5183631FdpTZi','\x0a≻\x20*Energi\x20Negatif\x20:*\x0a-\x20Perselisihan\x20:\x20','1147767frIuTG','message','6968988WETTsL','3907944YFfmeV','energi_positif','4JiUzom','cinta','\x0a≻\x20*Angka\x20Shuzi\x20:*\x20','10hmhsQG','\x0a-\x20Kestabilan\x20:\x20','nomer_hoki','\x0a-\x20Kehilangan\x20:\x20','\x206288292024190','kehancuran','\x0a-\x20Persentase\x20:\x20','1089902iAveoU','74NNyGzz','3107090feNvfK','slice','\x0a≻\x20*Energi\x20Positif\x20:*\x0a-\x20Kekayaan\x20:\x20','\x0a-\x20Kesehatan\x20:\x20','malapetaka','≻\x20*Nomor\x20HP\x20:*\x20','kestabilan','\x0a-\x20Cinta\x20:\x20','perselisihan','nomer_hp','kekayaan','sendText'];_0x40da=function(){return _0x11f04e;};return _0x40da();}(function(_0x5988de,_0x10d55e){const _0x5dbf33=_0x5a94,_0x5c8246=_0x5988de();while(!![]){try{const _0x304496=-parseInt(_0x5dbf33(0x175))/0x1*(-parseInt(_0x5dbf33(0x164))/0x2)+parseInt(_0x5dbf33(0x154))/0x3*(parseInt(_0x5dbf33(0x159))/0x4)+-parseInt(_0x5dbf33(0x165))/0x5+parseInt(_0x5dbf33(0x156))/0x6+parseInt(_0x5dbf33(0x172))/0x7*(-parseInt(_0x5dbf33(0x157))/0x8)+parseInt(_0x5dbf33(0x178))/0x9*(-parseInt(_0x5dbf33(0x15c))/0xa)+parseInt(_0x5dbf33(0x163))/0xb;if(_0x304496===_0x10d55e)break;else _0x5c8246['push'](_0x5c8246['shift']());}catch(_0x57108e){_0x5c8246['push'](_0x5c8246['shift']());}}}(_0x40da,0xa9add),addCountCmd('#'+command[_0x564e9f(0x166)](0x1),sender,_cmd));if(!Number(text))throw'Example\x20:\x20'+(prefix+command)+_0x564e9f(0x160);let anu=await primbon[_0x564e9f(0x15e)](Number(text));if(anu[_0x564e9f(0x171)]==![])return m['reply'](anu[_0x564e9f(0x155)]);wann[_0x564e9f(0x170)](m['chat'],_0x564e9f(0x16a)+anu[_0x564e9f(0x155)][_0x564e9f(0x16e)]+_0x564e9f(0x15b)+anu[_0x564e9f(0x155)]['angka_shuzi']+_0x564e9f(0x167)+anu['message'][_0x564e9f(0x158)][_0x564e9f(0x16f)]+_0x564e9f(0x168)+anu[_0x564e9f(0x155)][_0x564e9f(0x158)][_0x564e9f(0x173)]+_0x564e9f(0x16c)+anu[_0x564e9f(0x155)][_0x564e9f(0x158)][_0x564e9f(0x15a)]+_0x564e9f(0x15d)+anu[_0x564e9f(0x155)][_0x564e9f(0x158)][_0x564e9f(0x16b)]+_0x564e9f(0x162)+anu[_0x564e9f(0x155)][_0x564e9f(0x158)][_0x564e9f(0x177)]+_0x564e9f(0x179)+anu['message'][_0x564e9f(0x176)][_0x564e9f(0x16d)]+_0x564e9f(0x15f)+anu[_0x564e9f(0x155)][_0x564e9f(0x176)]['kehilangan']+'\x0a-\x20Malapetaka\x20:\x20'+anu[_0x564e9f(0x155)][_0x564e9f(0x176)][_0x564e9f(0x169)]+_0x564e9f(0x174)+anu[_0x564e9f(0x155)][_0x564e9f(0x176)][_0x564e9f(0x161)]+_0x564e9f(0x162)+anu[_0x564e9f(0x155)]['energi_negatif'][_0x564e9f(0x177)],m);
            }
            break
            case prefix+'artimimpi': case prefix+'tafsirmimpi':{
                const _0x22705a=_0x205e;(function(_0x578c27,_0x4d3f77){const _0x18922a=_0x205e,_0x3db322=_0x578c27();while(!![]){try{const _0x334b1f=parseInt(_0x18922a(0x105))/0x1*(parseInt(_0x18922a(0x10d))/0x2)+parseInt(_0x18922a(0xfe))/0x3+-parseInt(_0x18922a(0x10e))/0x4*(-parseInt(_0x18922a(0xfc))/0x5)+-parseInt(_0x18922a(0xfd))/0x6+-parseInt(_0x18922a(0x109))/0x7*(-parseInt(_0x18922a(0x107))/0x8)+-parseInt(_0x18922a(0x102))/0x9+parseInt(_0x18922a(0x10a))/0xa*(-parseInt(_0x18922a(0x10c))/0xb);if(_0x334b1f===_0x4d3f77)break;else _0x3db322['push'](_0x3db322['shift']());}catch(_0x4a71dd){_0x3db322['push'](_0x3db322['shift']());}}}(_0x4711,0x6257c),addCountCmd('#'+command['slice'](0x1),sender,_cmd));if(!text)throw'Example\x20:\x20'+(prefix+command)+_0x22705a(0xfb);let anu=await primbon[_0x22705a(0x104)](text);if(anu['status']==![])return m[_0x22705a(0x103)](anu[_0x22705a(0x106)]);function _0x4711(){const _0x33ba53=['3359727GJwFea','reply','tafsir_mimpi','98330fVCBuQ','message','83728RaPclQ','\x0a≻\x20*Solusi\x20:*\x20','189TMgTWV','122930xTGbeR','solusi','154MhrzvH','6hpCGmg','4DYGaNf','≻\x20*Mimpi\x20:*\x20','\x20belanja','455335WYcZeM','2519028bnaqcl','2098248nLwDFR','chat','\x0a≻\x20*Arti\x20:*\x20','arti'];_0x4711=function(){return _0x33ba53;};return _0x4711();}function _0x205e(_0x506b16,_0x21866b){const _0x4711ff=_0x4711();return _0x205e=function(_0x205ebb,_0x1d9102){_0x205ebb=_0x205ebb-0xfb;let _0x58f157=_0x4711ff[_0x205ebb];return _0x58f157;},_0x205e(_0x506b16,_0x21866b);}wann['sendText'](m[_0x22705a(0xff)],_0x22705a(0x10f)+anu[_0x22705a(0x106)]['mimpi']+_0x22705a(0x100)+anu['message'][_0x22705a(0x101)]+_0x22705a(0x108)+anu[_0x22705a(0x106)][_0x22705a(0x10b)],m);
            }
            break
            case prefix+'ramalanjodoh': case prefix+'ramaljodoh':{
             const _0x3e7629=_0x3f84;function _0x442c(){const _0x44f18d=['status','107751uwnLJU','≻\x20*Nama\x20Anda\x20:*\x20','tgl_lahir','Example\x20:\x20','result','ramalan_jodoh','518958FayclC','reply','message','\x20Lia,\x2028,\x2010,\x202005,\x20Dini,\x201,\x207,\x202004','catatan','chat','521172lusrjU','nama_pasangan','5606790UNMAso','\x0a≻\x20*Lahir\x20Pasangan\x20:*\x20','\x0a≻\x20*Hasil\x20:*\x20','1453430WHQORZ','699208muooSm','1016cEQHpA','nama_anda','\x0a≻\x20*Lahir\x20Anda\x20:*\x20','769056cyYlJf','split'];_0x442c=function(){return _0x44f18d;};return _0x442c();}(function(_0x535397,_0x1c67ed){const _0x324691=_0x3f84,_0x413f11=_0x535397();while(!![]){try{const _0x5f429e=-parseInt(_0x324691(0x17b))/0x1+-parseInt(_0x324691(0x17f))/0x2+parseInt(_0x324691(0x16f))/0x3+parseInt(_0x324691(0x175))/0x4+parseInt(_0x324691(0x17a))/0x5+-parseInt(_0x324691(0x177))/0x6+parseInt(_0x324691(0x182))/0x7*(parseInt(_0x324691(0x17c))/0x8);if(_0x5f429e===_0x1c67ed)break;else _0x413f11['push'](_0x413f11['shift']());}catch(_0x1084d9){_0x413f11['push'](_0x413f11['shift']());}}}(_0x442c,0x818f3),addCountCmd('#'+command['slice'](0x1),sender,_cmd));function _0x3f84(_0x1ddc70,_0x99849a){const _0x442cf3=_0x442c();return _0x3f84=function(_0x3f8409,_0x5003ed){_0x3f8409=_0x3f8409-0x16c;let _0x3c4a60=_0x442cf3[_0x3f8409];return _0x3c4a60;},_0x3f84(_0x1ddc70,_0x99849a);}if(!text)throw _0x3e7629(0x16c)+(prefix+command)+_0x3e7629(0x172);let [nama1,tgl1,bln1,thn1,nama2,tgl2,bln2,thn2]=text[_0x3e7629(0x180)]`,`,anu=await primbon[_0x3e7629(0x16e)](nama1,tgl1,bln1,thn1,nama2,tgl2,bln2,thn2);if(anu[_0x3e7629(0x181)]==![])return m[_0x3e7629(0x170)](anu[_0x3e7629(0x171)]);wann['sendText'](m[_0x3e7629(0x174)],_0x3e7629(0x183)+anu['message']['nama_anda']['nama']+_0x3e7629(0x17e)+anu[_0x3e7629(0x171)][_0x3e7629(0x17d)][_0x3e7629(0x184)]+'\x0a≻\x20*Nama\x20Pasangan\x20:*\x20'+anu[_0x3e7629(0x171)][_0x3e7629(0x176)]['nama']+_0x3e7629(0x178)+anu[_0x3e7629(0x171)][_0x3e7629(0x176)][_0x3e7629(0x184)]+_0x3e7629(0x179)+anu[_0x3e7629(0x171)][_0x3e7629(0x16d)]+'\x0a≻\x20*Catatan\x20:*\x20'+anu[_0x3e7629(0x171)][_0x3e7629(0x173)],m);
             }
            break
            case prefix+'ramalanjodohbali': case prefix+'ramaljodohbali':{
            const _0xd8e26e=_0x271b;(function(_0x3d4469,_0x1c50c7){const _0x152e09=_0x271b,_0x29120c=_0x3d4469();while(!![]){try{const _0x2eef28=-parseInt(_0x152e09(0xa6))/0x1+parseInt(_0x152e09(0xa1))/0x2*(parseInt(_0x152e09(0xa3))/0x3)+-parseInt(_0x152e09(0xb0))/0x4+parseInt(_0x152e09(0xae))/0x5+parseInt(_0x152e09(0xac))/0x6*(parseInt(_0x152e09(0x9f))/0x7)+parseInt(_0x152e09(0x9e))/0x8*(parseInt(_0x152e09(0x9b))/0x9)+-parseInt(_0x152e09(0xa7))/0xa*(parseInt(_0x152e09(0xad))/0xb);if(_0x2eef28===_0x1c50c7)break;else _0x29120c['push'](_0x29120c['shift']());}catch(_0x6ef3f){_0x29120c['push'](_0x29120c['shift']());}}}(_0x3d1b,0x4980b),addCountCmd('#'+command[_0xd8e26e(0x9a)](0x1),sender,_cmd));if(!text)throw _0xd8e26e(0x9d)+(prefix+command)+_0xd8e26e(0xb3);function _0x271b(_0x5ad2f0,_0x4eaba3){const _0x3d1b03=_0x3d1b();return _0x271b=function(_0x271b6c,_0x2eff50){_0x271b6c=_0x271b6c-0x99;let _0xd09f0d=_0x3d1b03[_0x271b6c];return _0xd09f0d;},_0x271b(_0x5ad2f0,_0x4eaba3);}let [nama1,tgl1,bln1,thn1,nama2,tgl2,bln2,thn2]=text[_0xd8e26e(0x9c)]`,`,anu=await primbon[_0xd8e26e(0xb1)](nama1,tgl1,bln1,thn1,nama2,tgl2,bln2,thn2);function _0x3d1b(){const _0x1ac48e=['1921065azEXYn','\x0a≻\x20*Catatan\x20:*\x20','867148fOUDia','ramalan_jodoh_bali','message','\x20Lia,\x2028,\x2010,\x202005,\x20Dini,\x201,\x207,\x202004','\x0a≻\x20*Hasil\x20:*\x20','sendText','slice','9eMuJsE','split','Example\x20:\x20','3348728tofpSK','13216gdLgXV','nama_anda','9542DjBrOY','nama','333SDzcVj','\x0a≻\x20*Lahir\x20Pasangan\x20:*\x20','reply','477474rCBsyn','10AwIDhd','tgl_lahir','≻\x20*Nama\x20Anda\x20:*\x20','\x0a≻\x20*Nama\x20Pasangan\x20:*\x20','\x0a≻\x20*Lahir\x20Anda\x20:*\x20','1140sJKpga','7653547poSBJV'];_0x3d1b=function(){return _0x1ac48e;};return _0x3d1b();}if(anu['status']==![])return m[_0xd8e26e(0xa5)](anu[_0xd8e26e(0xb2)]);wann[_0xd8e26e(0x99)](m['chat'],_0xd8e26e(0xa9)+anu[_0xd8e26e(0xb2)][_0xd8e26e(0xa0)][_0xd8e26e(0xa2)]+_0xd8e26e(0xab)+anu[_0xd8e26e(0xb2)][_0xd8e26e(0xa0)][_0xd8e26e(0xa8)]+_0xd8e26e(0xaa)+anu[_0xd8e26e(0xb2)]['nama_pasangan'][_0xd8e26e(0xa2)]+_0xd8e26e(0xa4)+anu[_0xd8e26e(0xb2)]['nama_pasangan']['tgl_lahir']+_0xd8e26e(0xb4)+anu[_0xd8e26e(0xb2)]['result']+_0xd8e26e(0xaf)+anu['message']['catatan'],m);
            }
            break
            case prefix+'suamiistri':{
            const _0x504771=_0x3249;(function(_0x469a15,_0x3587ae){const _0x8640ce=_0x3249,_0x4790c6=_0x469a15();while(!![]){try{const _0x7150bd=-parseInt(_0x8640ce(0x183))/0x1*(-parseInt(_0x8640ce(0x172))/0x2)+-parseInt(_0x8640ce(0x17e))/0x3+parseInt(_0x8640ce(0x18b))/0x4*(parseInt(_0x8640ce(0x18a))/0x5)+parseInt(_0x8640ce(0x175))/0x6*(-parseInt(_0x8640ce(0x173))/0x7)+parseInt(_0x8640ce(0x17b))/0x8*(-parseInt(_0x8640ce(0x17d))/0x9)+parseInt(_0x8640ce(0x177))/0xa*(parseInt(_0x8640ce(0x180))/0xb)+parseInt(_0x8640ce(0x176))/0xc;if(_0x7150bd===_0x3587ae)break;else _0x4790c6['push'](_0x4790c6['shift']());}catch(_0x24f3db){_0x4790c6['push'](_0x4790c6['shift']());}}}(_0x1549,0xbe54d),addCountCmd('#'+command[_0x504771(0x18f)](0x1),sender,_cmd));if(!text)throw _0x504771(0x179)+(prefix+command)+_0x504771(0x17a);let [nama1,tgl1,bln1,thn1,nama2,tgl2,bln2,thn2]=text['split']`,`,anu=await primbon[_0x504771(0x178)](nama1,tgl1,bln1,thn1,nama2,tgl2,bln2,thn2);function _0x1549(){const _0x590a42=['147119eSFWtW','\x0a≻\x20*Nama\x20Istri\x20:*\x20','348lNwsau','10617492BHyLIc','130ATDngP','suami_istri','Example\x20:\x20','\x20Lia,\x2028,\x2010,\x202005,\x20Dini,\x201,\x207,\x202004','1648vkkYjx','\x0a≻\x20*Lahir\x20Suami\x20:*\x20','18171yKiPlG','3009444EMOCnN','\x0a≻\x20*Hasil\x20:*\x20','1066549lEbTGq','tgl_lahir','nama','2uONJTa','result','catatan','chat','\x0a≻\x20*Catatan\x20:*\x20','istri','≻\x20*Nama\x20Suami\x20:*\x20','5mxcMfu','3830028zbPCOK','\x0a≻\x20*Lahir\x20Istri\x20:*\x20','sendText','message','slice','reply','314880vicHsv'];_0x1549=function(){return _0x590a42;};return _0x1549();}function _0x3249(_0x212a89,_0x3e5cd){const _0x1549a3=_0x1549();return _0x3249=function(_0x324995,_0x1d36b0){_0x324995=_0x324995-0x171;let _0x302464=_0x1549a3[_0x324995];return _0x302464;},_0x3249(_0x212a89,_0x3e5cd);}if(anu['status']==![])return m[_0x504771(0x171)](anu[_0x504771(0x18e)]);wann[_0x504771(0x18d)](m[_0x504771(0x186)],_0x504771(0x189)+anu['message']['suami']['nama']+_0x504771(0x17c)+anu[_0x504771(0x18e)]['suami'][_0x504771(0x181)]+_0x504771(0x174)+anu[_0x504771(0x18e)][_0x504771(0x188)][_0x504771(0x182)]+_0x504771(0x18c)+anu[_0x504771(0x18e)]['istri']['tgl_lahir']+_0x504771(0x17f)+anu[_0x504771(0x18e)][_0x504771(0x184)]+_0x504771(0x187)+anu[_0x504771(0x18e)][_0x504771(0x185)],m); 
            }
            break
            case prefix+'ramalancinta': case prefix+'ramalcinta':{
             const _0x42aaa0=_0x3421;(function(_0x184b54,_0x1e9081){const _0x407d98=_0x3421,_0x51ad02=_0x184b54();while(!![]){try{const _0x2590d6=-parseInt(_0x407d98(0x1a1))/0x1*(parseInt(_0x407d98(0x19d))/0x2)+parseInt(_0x407d98(0x1ac))/0x3+-parseInt(_0x407d98(0x1a0))/0x4+parseInt(_0x407d98(0x1aa))/0x5*(-parseInt(_0x407d98(0x1a7))/0x6)+-parseInt(_0x407d98(0x194))/0x7+parseInt(_0x407d98(0x1a3))/0x8+parseInt(_0x407d98(0x1ad))/0x9;if(_0x2590d6===_0x1e9081)break;else _0x51ad02['push'](_0x51ad02['shift']());}catch(_0x2c4ac8){_0x51ad02['push'](_0x51ad02['shift']());}}}(_0x3c8d,0x26d99),addCountCmd('#'+command[_0x42aaa0(0x1a5)](0x1),sender,_cmd));function _0x3421(_0x5eacee,_0x5ded37){const _0x3c8d2e=_0x3c8d();return _0x3421=function(_0x3421a5,_0x509c96){_0x3421a5=_0x3421a5-0x192;let _0x4e6831=_0x3c8d2e[_0x3421a5];return _0x4e6831;},_0x3421(_0x5eacee,_0x5ded37);}if(!text)throw _0x42aaa0(0x19b)+(prefix+command)+_0x42aaa0(0x1a9);let [nama1,tgl1,bln1,thn1,nama2,tgl2,bln2,thn2]=text[_0x42aaa0(0x19a)]`,`,anu=await primbon['ramalan_cinta'](nama1,tgl1,bln1,thn1,nama2,tgl2,bln2,thn2);function _0x3c8d(){const _0x539ea2=['status','\x0a≻\x20*Sisi\x20Positif\x20:*\x20','372050JexHSP','sendText','tgl_lahir','catatan','\x0a≻\x20*Lahir\x20Anda\x20:*\x20','sisi_negatif','split','Example\x20:\x20','\x0a≻\x20*Lahir\x20Pasangan\x20:*\x20','2HSoViR','\x0a≻\x20*Sisi\x20Negatif\x20:*\x20','nama_pasangan','1141172bgLqpC','143195idjxYT','\x0a≻\x20*Nama\x20Pasangan\x20:*\x20','2028592SYyLRe','sisi_positif','slice','\x0a≻\x20*Catatan\x20:*\x20','30WAUrwM','message','\x20Lia,\x2028,\x2010,\x202005,\x20Dini,\x201,\x207,\x202004','224215mpCHbk','chat','825285cmjTgn','3026817UPNubW'];_0x3c8d=function(){return _0x539ea2;};return _0x3c8d();}if(anu[_0x42aaa0(0x192)]==![])return m['reply'](anu['message']);wann[_0x42aaa0(0x195)](m[_0x42aaa0(0x1ab)],'≻\x20*Nama\x20Anda\x20:*\x20'+anu[_0x42aaa0(0x1a8)]['nama_anda']['nama']+_0x42aaa0(0x198)+anu['message']['nama_anda'][_0x42aaa0(0x196)]+_0x42aaa0(0x1a2)+anu[_0x42aaa0(0x1a8)][_0x42aaa0(0x19f)]['nama']+_0x42aaa0(0x19c)+anu[_0x42aaa0(0x1a8)][_0x42aaa0(0x19f)]['tgl_lahir']+_0x42aaa0(0x193)+anu['message'][_0x42aaa0(0x1a4)]+_0x42aaa0(0x19e)+anu[_0x42aaa0(0x1a8)][_0x42aaa0(0x199)]+_0x42aaa0(0x1a6)+anu[_0x42aaa0(0x1a8)][_0x42aaa0(0x197)],m);
                 }
            break
            case prefix+'artinama':{
                const _0x460e0b=_0x3b20;(function(_0x3a3821,_0x2f211d){const _0x3139b5=_0x3b20,_0x539054=_0x3a3821();while(!![]){try{const _0x5479c7=-parseInt(_0x3139b5(0x1f3))/0x1+-parseInt(_0x3139b5(0x1f8))/0x2+parseInt(_0x3139b5(0x1f0))/0x3*(-parseInt(_0x3139b5(0x1f4))/0x4)+-parseInt(_0x3139b5(0x1ed))/0x5+parseInt(_0x3139b5(0x202))/0x6*(-parseInt(_0x3139b5(0x1f7))/0x7)+-parseInt(_0x3139b5(0x1f5))/0x8*(-parseInt(_0x3139b5(0x1fa))/0x9)+parseInt(_0x3139b5(0x1f6))/0xa;if(_0x5479c7===_0x2f211d)break;else _0x539054['push'](_0x539054['shift']());}catch(_0x539f0b){_0x539054['push'](_0x539054['shift']());}}}(_0x4943,0xa67c8),addCountCmd('#'+command[_0x460e0b(0x1ec)](0x1),sender,_cmd));if(!text)throw _0x460e0b(0x1ff)+(prefix+command)+_0x460e0b(0x1ef);let anu=await primbon[_0x460e0b(0x201)](text);function _0x4943(){const _0x2134f8=['arti','chat','sendText','Example\x20:\x20','catatan','arti_nama','186462QTUGKN','message','slice','3070330JBwHDp','reply','\x20Lia','102jkwOBY','nama','status','754109lEDKYQ','86084NHygnX','190544qLXvfI','36716770RaRGZW','35aIexcC','2183490YcGCja','≻\x20*Nama\x20:*\x20','135PZwGiP','\x0a≻\x20*Arti\x20:*\x20'];_0x4943=function(){return _0x2134f8;};return _0x4943();}function _0x3b20(_0x1405b5,_0xa35c54){const _0x49436a=_0x4943();return _0x3b20=function(_0x3b2067,_0x26f88c){_0x3b2067=_0x3b2067-0x1eb;let _0x594a3a=_0x49436a[_0x3b2067];return _0x594a3a;},_0x3b20(_0x1405b5,_0xa35c54);}if(anu[_0x460e0b(0x1f2)]==![])return m[_0x460e0b(0x1ee)](anu['message']);wann[_0x460e0b(0x1fe)](m[_0x460e0b(0x1fd)],_0x460e0b(0x1f9)+anu['message'][_0x460e0b(0x1f1)]+_0x460e0b(0x1fb)+anu[_0x460e0b(0x1eb)][_0x460e0b(0x1fc)]+'\x0a≻\x20*Catatan\x20:*\x20'+anu[_0x460e0b(0x1eb)][_0x460e0b(0x200)],m);
          }
            break
            case prefix+'kecocokannama': case prefix+'cocoknama':{
           function _0x2e03(_0x2c7123,_0x567cbd){const _0x535e94=_0x535e();return _0x2e03=function(_0x2e0374,_0x40843e){_0x2e0374=_0x2e0374-0x17b;let _0x4399a8=_0x535e94[_0x2e0374];return _0x4399a8;},_0x2e03(_0x2c7123,_0x567cbd);}const _0x11979c=_0x2e03;function _0x535e(){const _0x15f5eb=['message','9xAOBQU','75IkKBhL','\x20Lia,\x2028,\x2010,\x202005','18mpHfqx','persentase_kecocokan','destiny','split','39058279Uiapsw','nama','1244MdcBYg','\x0a≻\x20*Destiny\x20Desire\x20:*\x20','Example\x20:\x20','life_path','status','sendText','slice','594504MiWAEI','11VwhLJp','personality','21WkXErX','tgl_lahir','\x0a≻\x20*Personality\x20:*\x20','\x0a≻\x20*Life\x20Path\x20:*\x20','1021096JMeTXW','1345aUdNaC','6372dxVptT','\x0a≻\x20*Persentase\x20:*\x20','≻\x20*Nama\x20:*\x20','\x0a≻\x20*Destiny\x20:*\x20','5804410zzodTa','14148720QhobdN','kecocokan_nama'];_0x535e=function(){return _0x15f5eb;};return _0x535e();}(function(_0x47741b,_0x39c486){const _0x1a149c=_0x2e03,_0x14e649=_0x47741b();while(!![]){try{const _0x3b5572=parseInt(_0x1a149c(0x17d))/0x1*(-parseInt(_0x1a149c(0x18f))/0x2)+parseInt(_0x1a149c(0x186))/0x3*(parseInt(_0x1a149c(0x196))/0x4)+parseInt(_0x1a149c(0x187))/0x5*(parseInt(_0x1a149c(0x17e))/0x6)+-parseInt(_0x1a149c(0x199))/0x7*(-parseInt(_0x1a149c(0x17c))/0x8)+parseInt(_0x1a149c(0x189))/0x9*(-parseInt(_0x1a149c(0x182))/0xa)+-parseInt(_0x1a149c(0x197))/0xb*(parseInt(_0x1a149c(0x183))/0xc)+parseInt(_0x1a149c(0x18d))/0xd;if(_0x3b5572===_0x39c486)break;else _0x14e649['push'](_0x14e649['shift']());}catch(_0x4042d1){_0x14e649['push'](_0x14e649['shift']());}}}(_0x535e,0xa439e),addCountCmd('#'+command[_0x11979c(0x195)](0x1),sender,_cmd));if(!text)throw _0x11979c(0x191)+(prefix+command)+_0x11979c(0x188);let [nama,tgl,bln,thn]=text[_0x11979c(0x18c)]`,`,anu=await primbon[_0x11979c(0x184)](nama,tgl,bln,thn);if(anu[_0x11979c(0x193)]==![])return m['reply'](anu['message']);wann[_0x11979c(0x194)](m['chat'],_0x11979c(0x180)+anu[_0x11979c(0x185)][_0x11979c(0x18e)]+'\x0a≻\x20*Lahir\x20:*\x20'+anu[_0x11979c(0x185)][_0x11979c(0x19a)]+_0x11979c(0x17b)+anu[_0x11979c(0x185)][_0x11979c(0x192)]+_0x11979c(0x181)+anu[_0x11979c(0x185)][_0x11979c(0x18b)]+_0x11979c(0x190)+anu['message']['destiny_desire']+_0x11979c(0x19b)+anu['message'][_0x11979c(0x198)]+_0x11979c(0x17f)+anu[_0x11979c(0x185)][_0x11979c(0x18a)],m);
           }
            break
            case prefix+'kecocokanpasangan': case prefix+'cocokpasangan': case prefix+'pasangan':{
                const _0x2c3cf5=_0x6561;(function(_0x5818fb,_0x36c549){const _0x1524d0=_0x6561,_0x4fc983=_0x5818fb();while(!![]){try{const _0x282a12=-parseInt(_0x1524d0(0x15a))/0x1+-parseInt(_0x1524d0(0x14d))/0x2*(-parseInt(_0x1524d0(0x162))/0x3)+parseInt(_0x1524d0(0x163))/0x4*(parseInt(_0x1524d0(0x165))/0x5)+-parseInt(_0x1524d0(0x14e))/0x6+parseInt(_0x1524d0(0x156))/0x7*(parseInt(_0x1524d0(0x160))/0x8)+-parseInt(_0x1524d0(0x14b))/0x9+parseInt(_0x1524d0(0x14f))/0xa*(parseInt(_0x1524d0(0x15d))/0xb);if(_0x282a12===_0x36c549)break;else _0x4fc983['push'](_0x4fc983['shift']());}catch(_0x393aae){_0x4fc983['push'](_0x4fc983['shift']());}}}(_0x276e,0x2942b),addCountCmd('#'+command[_0x2c3cf5(0x164)](0x1),sender,_cmd));if(!text)throw'Example\x20:\x20'+(prefix+command)+_0x2c3cf5(0x15b);function _0x276e(){const _0x5257f2=['\x0a≻\x20*Sisi\x20Negatif\x20:*\x20','544ftXUWS','message','5097PdVZFg','1136yGQDod','slice','710daIYfE','2856330TFoWOb','\x0a≻\x20*Sisi\x20Positif\x20:*\x20','386KBAmNk','98388LzjeUe','3340sQxGzJ','chat','nama_pasangan','gambar','sisi_negatif','kecocokan_nama_pasangan','≻\x20*Nama\x20Anda\x20:*\x20','22715JnMLKd','sendImage','nama_anda','\x0a≻\x20*Nama\x20Pasangan\x20:*\x20','179978jKgqEq','\x20Lia|Dini','reply','3091lnTyDP','sisi_positif'];_0x276e=function(){return _0x5257f2;};return _0x276e();}let [nama1,nama2]=text['split']`|`,anu=await primbon[_0x2c3cf5(0x154)](nama1,nama2);if(anu['status']==![])return m[_0x2c3cf5(0x15c)](anu[_0x2c3cf5(0x161)]);function _0x6561(_0x54b595,_0x1fc98f){const _0x276ed7=_0x276e();return _0x6561=function(_0x6561d0,_0x55290d){_0x6561d0=_0x6561d0-0x14b;let _0x517486=_0x276ed7[_0x6561d0];return _0x517486;},_0x6561(_0x54b595,_0x1fc98f);}wann[_0x2c3cf5(0x157)](m[_0x2c3cf5(0x150)],anu[_0x2c3cf5(0x161)][_0x2c3cf5(0x152)],_0x2c3cf5(0x155)+anu['message'][_0x2c3cf5(0x158)]+_0x2c3cf5(0x159)+anu[_0x2c3cf5(0x161)][_0x2c3cf5(0x151)]+_0x2c3cf5(0x14c)+anu[_0x2c3cf5(0x161)][_0x2c3cf5(0x15e)]+_0x2c3cf5(0x15f)+anu[_0x2c3cf5(0x161)][_0x2c3cf5(0x153)],m);
             }
            break
            case prefix+'jadianpernikahan': case prefix+'jadiannikah':{
                const _0x28d3c2=_0x4104;(function(_0x2d50a8,_0x15fe61){const _0x52a94e=_0x4104,_0x4992c7=_0x2d50a8();while(!![]){try{const _0x9f509b=-parseInt(_0x52a94e(0x17b))/0x1*(-parseInt(_0x52a94e(0x175))/0x2)+parseInt(_0x52a94e(0x180))/0x3*(parseInt(_0x52a94e(0x181))/0x4)+-parseInt(_0x52a94e(0x17d))/0x5+-parseInt(_0x52a94e(0x176))/0x6+-parseInt(_0x52a94e(0x17e))/0x7+-parseInt(_0x52a94e(0x178))/0x8+parseInt(_0x52a94e(0x16e))/0x9;if(_0x9f509b===_0x15fe61)break;else _0x4992c7['push'](_0x4992c7['shift']());}catch(_0x512a6){_0x4992c7['push'](_0x4992c7['shift']());}}}(_0x28f6,0x6b291),addCountCmd('#'+command[_0x28d3c2(0x16f)](0x1),sender,_cmd));function _0x4104(_0x1a9042,_0x3634fd){const _0x28f6d7=_0x28f6();return _0x4104=function(_0x410473,_0x34f160){_0x410473=_0x410473-0x16d;let _0x46f62f=_0x28f6d7[_0x410473];return _0x46f62f;},_0x4104(_0x1a9042,_0x3634fd);}function _0x28f6(){const _0x4fec3c=['tanggal','karakteristik','≻\x20*Tanggal\x20Pernikahan\x20:*\x20','tanggal_jadian_pernikahan','6UVzszG','1359708eciFmo','split','2073200RZrRIi','message','Example\x20:\x20','223415ymyDgd','reply','3712880RWbzWY','5263818AYXejr','status','960081TwTSfj','4nJYbLr','\x206,\x2012,\x202020','12860775QFBRNW','slice','\x0a≻\x20*karakteristik\x20:*\x20'];_0x28f6=function(){return _0x4fec3c;};return _0x28f6();}if(!text)throw _0x28d3c2(0x17a)+(prefix+command)+_0x28d3c2(0x16d);let [tgl,bln,thn]=text[_0x28d3c2(0x177)]`,`,anu=await primbon[_0x28d3c2(0x174)](tgl,bln,thn);if(anu[_0x28d3c2(0x17f)]==![])return m[_0x28d3c2(0x17c)](anu['message']);wann['sendText'](m['chat'],_0x28d3c2(0x173)+anu[_0x28d3c2(0x179)][_0x28d3c2(0x171)]+_0x28d3c2(0x170)+anu['message'][_0x28d3c2(0x172)],m);
             }
            break
            case prefix+'sifatusaha':{
                function _0x15d4(){const _0x27d83b=['chat','360382CiViQT','\x0a≻\x20*Usaha\x20:*\x20','170YiCBfF','usaha','sifat_usaha_bisnis','reply','924459AQzLcF','1211zGhgKD','hari_lahir','message','3154779NGuoHO','2UUbGTQ','Example\x20:\x20','status','split','sendText','4iPUtEs','1290490yrSrdX','16746jeruok','≻\x20*Lahir\x20:*\x20','slice','\x2028,\x2012,\x202021','2965722wokQiM','1879944UXweBz'];_0x15d4=function(){return _0x27d83b;};return _0x15d4();}const _0x3d9e11=_0x1247;(function(_0x23e8e9,_0x54cb17){const _0x495fce=_0x1247,_0x5e2ed3=_0x23e8e9();while(!![]){try{const _0x51ba35=-parseInt(_0x495fce(0xc3))/0x1*(parseInt(_0x495fce(0xc8))/0x2)+parseInt(_0x495fce(0xd3))/0x3+-parseInt(_0x495fce(0xcd))/0x4*(-parseInt(_0x495fce(0xce))/0x5)+parseInt(_0x495fce(0xcf))/0x6*(-parseInt(_0x495fce(0xc4))/0x7)+-parseInt(_0x495fce(0xd4))/0x8+parseInt(_0x495fce(0xc7))/0x9+parseInt(_0x495fce(0xbf))/0xa*(parseInt(_0x495fce(0xbd))/0xb);if(_0x51ba35===_0x54cb17)break;else _0x5e2ed3['push'](_0x5e2ed3['shift']());}catch(_0x1de540){_0x5e2ed3['push'](_0x5e2ed3['shift']());}}}(_0x15d4,0x7cf76),addCountCmd('#'+command[_0x3d9e11(0xd1)](0x1),sender,_cmd));function _0x1247(_0x162d8b,_0x535c55){const _0x15d4be=_0x15d4();return _0x1247=function(_0x124791,_0x1aaae1){_0x124791=_0x124791-0xbc;let _0xdddad0=_0x15d4be[_0x124791];return _0xdddad0;},_0x1247(_0x162d8b,_0x535c55);}if(!ext)throw _0x3d9e11(0xc9)+(prefix+command)+_0x3d9e11(0xd2);let [tgl,bln,thn]=text[_0x3d9e11(0xcb)]`,`,anu=await primbon[_0x3d9e11(0xc1)](tgl,bln,thn);if(anu[_0x3d9e11(0xca)]==![])return m[_0x3d9e11(0xc2)](anu[_0x3d9e11(0xc6)]);wann[_0x3d9e11(0xcc)](m[_0x3d9e11(0xbc)],_0x3d9e11(0xd0)+anu[_0x3d9e11(0xc6)][_0x3d9e11(0xc5)]+_0x3d9e11(0xbe)+anu['message'][_0x3d9e11(0xc0)],m);
             }
            break
            case prefix+'rejeki': case prefix+'rezeki':{
                const _0x1c65b5=_0x4f22;(function(_0x27f5e3,_0x422d45){const _0x1126b5=_0x4f22,_0x35ceb1=_0x27f5e3();while(!![]){try{const _0x5e379f=-parseInt(_0x1126b5(0x194))/0x1+parseInt(_0x1126b5(0x189))/0x2+-parseInt(_0x1126b5(0x18b))/0x3*(parseInt(_0x1126b5(0x191))/0x4)+parseInt(_0x1126b5(0x193))/0x5+-parseInt(_0x1126b5(0x182))/0x6+parseInt(_0x1126b5(0x188))/0x7*(-parseInt(_0x1126b5(0x18a))/0x8)+parseInt(_0x1126b5(0x181))/0x9*(parseInt(_0x1126b5(0x187))/0xa);if(_0x5e379f===_0x422d45)break;else _0x35ceb1['push'](_0x35ceb1['shift']());}catch(_0x204ad2){_0x35ceb1['push'](_0x35ceb1['shift']());}}}(_0x41b8,0xd7e89),addCountCmd('#'+command[_0x1c65b5(0x17e)](0x1),sender,_cmd));if(!text)throw'Example\x20:\x20'+(prefix+command)+_0x1c65b5(0x17f);let [tgl,bln,thn]=text[_0x1c65b5(0x183)]`,`,anu=await primbon['rejeki_hoki_weton'](tgl,bln,thn);if(anu[_0x1c65b5(0x190)]==![])return m[_0x1c65b5(0x192)](anu['message']);function _0x4f22(_0xebe165,_0x42c927){const _0x41b877=_0x41b8();return _0x4f22=function(_0x4f2289,_0xce59a2){_0x4f2289=_0x4f2289-0x17e;let _0x3e7f02=_0x41b877[_0x4f2289];return _0x3e7f02;},_0x4f22(_0xebe165,_0x42c927);}wann['sendText'](m[_0x1c65b5(0x18d)],_0x1c65b5(0x185)+anu[_0x1c65b5(0x18f)][_0x1c65b5(0x180)]+_0x1c65b5(0x18e)+anu[_0x1c65b5(0x18f)][_0x1c65b5(0x184)]+_0x1c65b5(0x18c)+anu[_0x1c65b5(0x18f)][_0x1c65b5(0x186)],m);function _0x41b8(){const _0x5c5f73=['slice','\x2028,\x2010,\x202005','hari_lahir','6180156kccLwW','2368338KtHTwI','split','rejeki','≻\x20*Lahir\x20:*\x20','catatan','50nrBEet','7WxvWQh','3351130szlsqi','8440424YbdKnD','2282541BDwhbM','\x0a≻\x20*Catatan\x20:*\x20','chat','\x0a≻\x20*Rezeki\x20:*\x20','message','status','8fNpBYy','reply','959570lAohts','1445068CuvPlr'];_0x41b8=function(){return _0x5c5f73;};return _0x41b8();}
             }
            break
            case prefix+'pekerjaan': case prefix+'kerja':{
                function _0xabd8(_0x46a4ab,_0x10522c){const _0xed0485=_0xed04();return _0xabd8=function(_0xabd887,_0x2e6b0e){_0xabd887=_0xabd887-0xc0;let _0x8a97fc=_0xed0485[_0xabd887];return _0x8a97fc;},_0xabd8(_0x46a4ab,_0x10522c);}const _0x2d94c3=_0xabd8;(function(_0x9ed952,_0x15755e){const _0x5da745=_0xabd8,_0x1a52cd=_0x9ed952();while(!![]){try{const _0x3d949d=parseInt(_0x5da745(0xc4))/0x1+-parseInt(_0x5da745(0xca))/0x2*(-parseInt(_0x5da745(0xc5))/0x3)+parseInt(_0x5da745(0xd6))/0x4*(-parseInt(_0x5da745(0xc8))/0x5)+-parseInt(_0x5da745(0xd4))/0x6+parseInt(_0x5da745(0xcf))/0x7*(-parseInt(_0x5da745(0xce))/0x8)+parseInt(_0x5da745(0xd5))/0x9*(-parseInt(_0x5da745(0xcb))/0xa)+parseInt(_0x5da745(0xd0))/0xb;if(_0x3d949d===_0x15755e)break;else _0x1a52cd['push'](_0x1a52cd['shift']());}catch(_0x129cee){_0x1a52cd['push'](_0x1a52cd['shift']());}}}(_0xed04,0x95a14),addCountCmd('#'+command[_0x2d94c3(0xc3)](0x1),sender,_cmd));if(!text)throw _0x2d94c3(0xc2)+(prefix+command)+'\x2028,\x2010,\x202005';let [tgl,bln,thn]=text['split']`,`,anu=await primbon[_0x2d94c3(0xd1)](tgl,bln,thn);if(anu[_0x2d94c3(0xc6)]==![])return m[_0x2d94c3(0xd3)](anu[_0x2d94c3(0xcd)]);wann['sendText'](m['chat'],_0x2d94c3(0xcc)+anu[_0x2d94c3(0xcd)][_0x2d94c3(0xc7)]+_0x2d94c3(0xc0)+anu[_0x2d94c3(0xcd)][_0x2d94c3(0xd2)]+_0x2d94c3(0xc9)+anu[_0x2d94c3(0xcd)][_0x2d94c3(0xc1)],m);function _0xed04(){const _0x296df6=['status','hari_lahir','2193665zDJAef','\x0a≻\x20*Catatan\x20:*\x20','519866HNoMja','790UgqxOU','≻\x20*Lahir\x20:*\x20','message','56mRWzJJ','147BfXZBq','335159XxhdJL','pekerjaan_weton_lahir','pekerjaan','reply','3418980piNAaW','23931JmmBgX','4pYxagM','\x0a≻\x20*Pekerjaan\x20:*\x20','catatan','Example\x20:\x20','slice','1021387cMemFa','9HejJHN'];_0xed04=function(){return _0x296df6;};return _0xed04();}
             }
            break
            case prefix+'ramalannasib': case prefix+'ramalnasib': case prefix+'nasib':{
                const _0x5d0b08=_0x2c11;function _0x2b82(){const _0xdf3f50=['99yagUrD','57600088ATxSsg','slice','message','49611CFBjPe','sifat','≻\x20*Analisa\x20:*\x20','split','chat','11nyuiSw','2741570oBgclV','5oWVbUj','8TmTJQF','analisa','152mYWUYa','angka_akar','Example\x20:\x2028,\x2010,\x202005','1eonlBU','11883324jPAWmy','\x0a≻\x20*Angka\x20Akar\x20:*\x20','reply','2803974ZEvfzp','423070UnRrzL','10169453YoFpAR','elemen','sendText'];_0x2b82=function(){return _0xdf3f50;};return _0x2b82();}(function(_0x43cc40,_0x167513){const _0x126bef=_0x2c11,_0x45c149=_0x43cc40();while(!![]){try{const _0x43ffaf=parseInt(_0x126bef(0x155))/0x1*(parseInt(_0x126bef(0x14e))/0x2)+parseInt(_0x126bef(0x148))/0x3*(parseInt(_0x126bef(0x152))/0x4)+-parseInt(_0x126bef(0x14f))/0x5*(-parseInt(_0x126bef(0x159))/0x6)+-parseInt(_0x126bef(0x15b))/0x7*(-parseInt(_0x126bef(0x150))/0x8)+-parseInt(_0x126bef(0x144))/0x9*(-parseInt(_0x126bef(0x15a))/0xa)+parseInt(_0x126bef(0x14d))/0xb*(parseInt(_0x126bef(0x156))/0xc)+-parseInt(_0x126bef(0x145))/0xd;if(_0x43ffaf===_0x167513)break;else _0x45c149['push'](_0x45c149['shift']());}catch(_0x3ebe44){_0x45c149['push'](_0x45c149['shift']());}}}(_0x2b82,0xe6831),addCountCmd('#'+command[_0x5d0b08(0x146)](0x1),sender,_cmd));if(!text)throw _0x5d0b08(0x154);function _0x2c11(_0x23ed4f,_0x370468){const _0x2b82c8=_0x2b82();return _0x2c11=function(_0x2c11e1,_0x184490){_0x2c11e1=_0x2c11e1-0x142;let _0x110ef3=_0x2b82c8[_0x2c11e1];return _0x110ef3;},_0x2c11(_0x23ed4f,_0x370468);}let [tgl,bln,thn]=text[_0x5d0b08(0x14b)]`,`,anu=await primbon['ramalan_nasib'](tgl,bln,thn);if(anu['status']==![])return m[_0x5d0b08(0x158)](anu['message']);wann[_0x5d0b08(0x143)](m[_0x5d0b08(0x14c)],_0x5d0b08(0x14a)+anu[_0x5d0b08(0x147)][_0x5d0b08(0x151)]+_0x5d0b08(0x157)+anu[_0x5d0b08(0x147)][_0x5d0b08(0x153)]+'\x0a≻\x20*Sifat\x20:*\x20'+anu['message'][_0x5d0b08(0x149)]+'\x0a≻\x20*Elemen\x20:*\x20'+anu['message'][_0x5d0b08(0x142)]+'\x0a≻\x20*Angka\x20Keberuntungan\x20:*\x20'+anu[_0x5d0b08(0x147)]['angka_keberuntungan'],m);
             }
            break
            case prefix+'potensipenyakit': case prefix+'penyakit':{
                const _0x20baef=_0x54e8;function _0x30d0(){const _0x555813=['\x0a≻\x20*Elemen\x20:*\x20','elemen','75324cCdUai','status','cek_potensi_penyakit','\x0a≻\x20*Sektor\x20:*\x20','7233UxMihB','analisa','catatan','≻\x20*Analisa\x20:*\x20','1919840NzXTAG','2373565zNrYFC','sendText','Example\x20:\x20','465878RNOnij','608nfFNIC','\x2028,\x2010,\x202005','1616616UjXXBD','message','118337AVMrcK','slice','chat','6bTFklK'];_0x30d0=function(){return _0x555813;};return _0x30d0();}(function(_0x748cbf,_0x575c9e){const _0x26a191=_0x54e8,_0x5f4a59=_0x748cbf();while(!![]){try{const _0x5bac71=-parseInt(_0x26a191(0x1ef))/0x1+-parseInt(_0x26a191(0x1de))/0x2+-parseInt(_0x26a191(0x1e2))/0x3*(parseInt(_0x26a191(0x1eb))/0x4)+parseInt(_0x26a191(0x1e7))/0x5*(parseInt(_0x26a191(0x1db))/0x6)+-parseInt(_0x26a191(0x1ea))/0x7+parseInt(_0x26a191(0x1e6))/0x8+parseInt(_0x26a191(0x1ed))/0x9;if(_0x5bac71===_0x575c9e)break;else _0x5f4a59['push'](_0x5f4a59['shift']());}catch(_0x30edee){_0x5f4a59['push'](_0x5f4a59['shift']());}}}(_0x30d0,0x4a88c),addCountCmd('#'+command[_0x20baef(0x1f0)](0x1),sender,_cmd));function _0x54e8(_0x3bd6e6,_0x130322){const _0x30d0d1=_0x30d0();return _0x54e8=function(_0x54e8aa,_0x3b868f){_0x54e8aa=_0x54e8aa-0x1da;let _0x239027=_0x30d0d1[_0x54e8aa];return _0x239027;},_0x54e8(_0x3bd6e6,_0x130322);}if(!text)throw _0x20baef(0x1e9)+(prefix+command)+_0x20baef(0x1ec);let [tgl,bln,thn]=text['split']`,`,anu=await primbon[_0x20baef(0x1e0)](tgl,bln,thn);if(anu[_0x20baef(0x1df)]==![])return m['reply'](anu[_0x20baef(0x1ee)]);wann[_0x20baef(0x1e8)](m[_0x20baef(0x1da)],_0x20baef(0x1e5)+anu[_0x20baef(0x1ee)][_0x20baef(0x1e3)]+_0x20baef(0x1e1)+anu[_0x20baef(0x1ee)]['sektor']+_0x20baef(0x1dc)+anu[_0x20baef(0x1ee)][_0x20baef(0x1dd)]+'\x0a≻\x20*Catatan\x20:*\x20'+anu[_0x20baef(0x1ee)][_0x20baef(0x1e4)],m);
             }
            break
            case prefix+'artitarot': case prefix+'tarot':{
                function _0x374b(){const _0x406d4e=['≻\x20*Lahir\x20:*\x20','arti','\x0a≻\x20*Arti\x20:*\x20','40ePEmSy','6261360nNPlsa','1932492KYAZrj','slice','2124675miXOzU','1047838CDwEFj','12SCCRDd','\x2028,\x2010,\x202005','928623NxRnjR','chat','\x0a≻\x20*Catatan\x20:*\x20','split','1CqylSO','catatan','\x0a≻\x20*Simbol\x20Tarot\x20:*\x20','message','2067268tOUWlF','50725APpUQJ','status','378ULLBsl','Example\x20:\x20'];_0x374b=function(){return _0x406d4e;};return _0x374b();}const _0x33b964=_0x2685;(function(_0x398763,_0x47648e){const _0x1ab60a=_0x2685,_0x4d56f7=_0x398763();while(!![]){try{const _0x29cbcb=parseInt(_0x1ab60a(0x89))/0x1*(parseInt(_0x1ab60a(0x7f))/0x2)+-parseInt(_0x1ab60a(0x85))/0x3*(-parseInt(_0x1ab60a(0x83))/0x4)+parseInt(_0x1ab60a(0x76))/0x5*(-parseInt(_0x1ab60a(0x78))/0x6)+parseInt(_0x1ab60a(0x75))/0x7+-parseInt(_0x1ab60a(0x7e))/0x8+parseInt(_0x1ab60a(0x81))/0x9+-parseInt(_0x1ab60a(0x7d))/0xa*(parseInt(_0x1ab60a(0x82))/0xb);if(_0x29cbcb===_0x47648e)break;else _0x4d56f7['push'](_0x4d56f7['shift']());}catch(_0x12249f){_0x4d56f7['push'](_0x4d56f7['shift']());}}}(_0x374b,0x98347),addCountCmd('#'+command[_0x33b964(0x80)](0x1),sender,_cmd));if(!text)throw _0x33b964(0x79)+(prefix+command)+_0x33b964(0x84);function _0x2685(_0xbda0e0,_0x30ecdf){const _0x374b30=_0x374b();return _0x2685=function(_0x268592,_0x277868){_0x268592=_0x268592-0x72;let _0x235de8=_0x374b30[_0x268592];return _0x235de8;},_0x2685(_0xbda0e0,_0x30ecdf);}let [tgl,bln,thn]=text[_0x33b964(0x88)]`,`,anu=await primbon['arti_kartu_tarot'](tgl,bln,thn);if(anu[_0x33b964(0x77)]==![])return m['reply'](anu[_0x33b964(0x74)]);wann['sendImage'](m[_0x33b964(0x86)],anu[_0x33b964(0x74)]['image'],_0x33b964(0x7a)+anu[_0x33b964(0x74)]['tgl_lahir']+_0x33b964(0x73)+anu[_0x33b964(0x74)]['simbol_tarot']+_0x33b964(0x7c)+anu[_0x33b964(0x74)][_0x33b964(0x7b)]+_0x33b964(0x87)+anu['message'][_0x33b964(0x72)],m);
              }
            break
            case prefix+'fengshui':{
             function _0x19b5(){const _0x456ed3=['≻\x20*Nama\x20:*\x20','sektor_baik','nama','3369690ppwhrV','200IUAUyT','status','\x0a≻\x20*Sektor\x20Buruk\x20:*\x20','16ufPftr','389712HheFpC','Example\x20:\x20','tahun_lahir','47260ssEOmG','\x0a≻\x20*Kelompok\x20:*\x20','\x0a≻\x20*Gender\x20:*\x20','1932502qcGRZg','\x0a≻\x20*Lahir\x20:*\x20','perhitungan_feng_shui','sektor_buruk','10OWLInx','message','42jvBnFo','kelompok','split','reply','\x20Lia,\x201,\x202005\x0a\x0aNote\x20:\x20','jenis_kelamin','385056oRbxwy','156776LtyOSP','\x0a≻\x20*Angka\x20Kua\x20:*\x20','\x20Nama,\x20gender,\x20tahun\x20lahir\x0aGender\x20:\x201\x20untuk\x20laki-laki\x20&\x202\x20untuk\x20perempuan','sendText','angka_kua','slice','790397wcekxF'];_0x19b5=function(){return _0x456ed3;};return _0x19b5();}const _0x1dbce2=_0x2d80;(function(_0x194a7f,_0x4ef40e){const _0x7c53e6=_0x2d80,_0x293caa=_0x194a7f();while(!![]){try{const _0x373181=parseInt(_0x7c53e6(0xe8))/0x1+-parseInt(_0x7c53e6(0xf0))/0x2*(parseInt(_0x7c53e6(0xf1))/0x3)+parseInt(_0x7c53e6(0xed))/0x4*(parseInt(_0x7c53e6(0xf4))/0x5)+parseInt(_0x7c53e6(0xec))/0x6+-parseInt(_0x7c53e6(0xfd))/0x7*(parseInt(_0x7c53e6(0xe2))/0x8)+parseInt(_0x7c53e6(0xe1))/0x9+parseInt(_0x7c53e6(0xfb))/0xa*(-parseInt(_0x7c53e6(0xf7))/0xb);if(_0x373181===_0x4ef40e)break;else _0x293caa['push'](_0x293caa['shift']());}catch(_0x5c47e2){_0x293caa['push'](_0x293caa['shift']());}}}(_0x19b5,0x82974),addCountCmd('#'+command[_0x1dbce2(0xe7)](0x1),sender,_cmd));if(!text)throw _0x1dbce2(0xf2)+(prefix+command)+_0x1dbce2(0x101)+(prefix+command)+_0x1dbce2(0xe4);function _0x2d80(_0x2ed4a7,_0x494094){const _0x19b5dd=_0x19b5();return _0x2d80=function(_0x2d80fd,_0x298587){_0x2d80fd=_0x2d80fd-0xe1;let _0xc5d345=_0x19b5dd[_0x2d80fd];return _0xc5d345;},_0x2d80(_0x2ed4a7,_0x494094);}let [nama,gender,tahun]=text[_0x1dbce2(0xff)]`,`,anu=await primbon[_0x1dbce2(0xf9)](nama,gender,tahun);if(anu[_0x1dbce2(0xee)]==![])return m[_0x1dbce2(0x100)](anu['message']);wann[_0x1dbce2(0xe5)](m['chat'],_0x1dbce2(0xe9)+anu[_0x1dbce2(0xfc)][_0x1dbce2(0xeb)]+_0x1dbce2(0xf8)+anu[_0x1dbce2(0xfc)][_0x1dbce2(0xf3)]+_0x1dbce2(0xf6)+anu['message'][_0x1dbce2(0x102)]+_0x1dbce2(0xe3)+anu[_0x1dbce2(0xfc)][_0x1dbce2(0xe6)]+_0x1dbce2(0xf5)+anu[_0x1dbce2(0xfc)][_0x1dbce2(0xfe)]+'\x0a≻\x20*Karakter\x20:*\x20'+anu[_0x1dbce2(0xfc)]['karakter']+'\x0a≻\x20*Sektor\x20Baik\x20:*\x20'+anu[_0x1dbce2(0xfc)][_0x1dbce2(0xea)]+_0x1dbce2(0xef)+anu['message'][_0x1dbce2(0xfa)],m);
             }
            break
            case prefix+'haribaik':{
                function _0x1978(){const _0x54f2b8=['\x0a≻\x20*Info\x20:*\x20','560274IHUUam','message','59913EjgxGR','status','petung_hari_baik','chat','catatan','8RmGTfG','slice','reply','info','370512qQPVVg','Example\x20:\x20','≻\x20*Lahir\x20:*\x20','kala_tinantang','939169XDmCUj','sendText','tgl_lahir','1950VofGpd','122991EHzMmS','1791uLmXNy','4gRodEa','304245qCMIIz','\x2028,\x2010,\x202005','split','\x0a≻\x20*Catatan\x20:*\x20'];_0x1978=function(){return _0x54f2b8;};return _0x1978();}const _0x21b4b6=_0xd1ce;(function(_0x27da36,_0x3d8a0e){const _0x3dfd85=_0xd1ce,_0x449b34=_0x27da36();while(!![]){try{const _0x544b87=-parseInt(_0x3dfd85(0x167))/0x1*(-parseInt(_0x3dfd85(0x17a))/0x2)+-parseInt(_0x3dfd85(0x178))/0x3+-parseInt(_0x3dfd85(0x170))/0x4+-parseInt(_0x3dfd85(0x160))/0x5+parseInt(_0x3dfd85(0x165))/0x6+-parseInt(_0x3dfd85(0x174))/0x7*(-parseInt(_0x3dfd85(0x16c))/0x8)+parseInt(_0x3dfd85(0x179))/0x9*(-parseInt(_0x3dfd85(0x177))/0xa);if(_0x544b87===_0x3d8a0e)break;else _0x449b34['push'](_0x449b34['shift']());}catch(_0x3abd3b){_0x449b34['push'](_0x449b34['shift']());}}}(_0x1978,0x1bdad),addCountCmd('#'+command[_0x21b4b6(0x16d)](0x1),sender,_cmd));if(!text)throw _0x21b4b6(0x171)+(prefix+command)+_0x21b4b6(0x161);let [tgl,bln,thn]=text[_0x21b4b6(0x162)]`,`,anu=await primbon[_0x21b4b6(0x169)](tgl,bln,thn);if(anu[_0x21b4b6(0x168)]==![])return m[_0x21b4b6(0x16e)](anu['message']);function _0xd1ce(_0x2cbb4d,_0x101692){const _0x197832=_0x1978();return _0xd1ce=function(_0xd1ce31,_0x4fa3d7){_0xd1ce31=_0xd1ce31-0x160;let _0x5cabfd=_0x197832[_0xd1ce31];return _0x5cabfd;},_0xd1ce(_0x2cbb4d,_0x101692);}wann[_0x21b4b6(0x175)](m[_0x21b4b6(0x16a)],_0x21b4b6(0x172)+anu[_0x21b4b6(0x166)][_0x21b4b6(0x176)]+'\x0a≻\x20*Kala\x20Tinantang\x20:*\x20'+anu[_0x21b4b6(0x166)][_0x21b4b6(0x173)]+_0x21b4b6(0x164)+anu[_0x21b4b6(0x166)][_0x21b4b6(0x16f)]+_0x21b4b6(0x163)+anu['message'][_0x21b4b6(0x16b)],m);
             }
            break
            case prefix+'harisangar': case prefix+'taliwangke':{
                const _0x32c2d3=_0x1972;(function(_0x3887ad,_0x3e2d0a){const _0x536115=_0x1972,_0x3c9c31=_0x3887ad();while(!![]){try{const _0x2135d8=-parseInt(_0x536115(0xf0))/0x1*(-parseInt(_0x536115(0xe4))/0x2)+-parseInt(_0x536115(0xe5))/0x3*(parseInt(_0x536115(0xea))/0x4)+parseInt(_0x536115(0xe9))/0x5+-parseInt(_0x536115(0xfd))/0x6*(-parseInt(_0x536115(0xe1))/0x7)+parseInt(_0x536115(0xef))/0x8*(-parseInt(_0x536115(0xf3))/0x9)+parseInt(_0x536115(0xfa))/0xa+parseInt(_0x536115(0xe7))/0xb*(parseInt(_0x536115(0xf9))/0xc);if(_0x2135d8===_0x3e2d0a)break;else _0x3c9c31['push'](_0x3c9c31['shift']());}catch(_0x35613e){_0x3c9c31['push'](_0x3c9c31['shift']());}}}(_0x176b,0x46cc6),addCountCmd('#'+command[_0x32c2d3(0xfc)](0x1),sender,_cmd));function _0x176b(){const _0x5506fc=['tgl_lahir','303017cCESwX','message','2140715TRRPNR','1123484jKGfnR','\x0a≻\x20*Catatan\x20:*\x20','≻\x20*Lahir\x20:*\x20','split','reply','8BcoxWT','260395mNWrSQ','\x0a≻\x20*Info\x20:*\x20','info','5031621UFZEEr','catatan','\x2028,\x2010,\x202005','status','chat','sendText','72rarnrC','1751760BlOLuM','\x0a≻\x20*Hasil\x20:*\x20','slice','302802klAfWN','14SJsovV','result','hari_sangar_taliwangke','2uYBTaz','3PazXha'];_0x176b=function(){return _0x5506fc;};return _0x176b();}function _0x1972(_0x2a05fb,_0x408baf){const _0x176bd4=_0x176b();return _0x1972=function(_0x1972c0,_0x295ebc){_0x1972c0=_0x1972c0-0xe1;let _0xc61832=_0x176bd4[_0x1972c0];return _0xc61832;},_0x1972(_0x2a05fb,_0x408baf);}if(!text)throw'Example\x20:\x20'+(prefix+command)+_0x32c2d3(0xf5);let [tgl,bln,thn]=text[_0x32c2d3(0xed)]`,`,anu=await primbon[_0x32c2d3(0xe3)](tgl,bln,thn);if(anu[_0x32c2d3(0xf6)]==![])return m[_0x32c2d3(0xee)](anu[_0x32c2d3(0xe8)]);wann[_0x32c2d3(0xf8)](m[_0x32c2d3(0xf7)],_0x32c2d3(0xec)+anu[_0x32c2d3(0xe8)][_0x32c2d3(0xe6)]+_0x32c2d3(0xfb)+anu[_0x32c2d3(0xe8)][_0x32c2d3(0xe2)]+_0x32c2d3(0xf1)+anu[_0x32c2d3(0xe8)][_0x32c2d3(0xf2)]+_0x32c2d3(0xeb)+anu[_0x32c2d3(0xe8)][_0x32c2d3(0xf4)],m);
             }
            break
            case prefix+'harinaas': case prefix+'harisial':{
                const _0xb44e53=_0x1543;(function(_0xc620d4,_0x204b37){const _0x51847f=_0x1543,_0x4c0710=_0xc620d4();while(!![]){try{const _0x5587fb=parseInt(_0x51847f(0x142))/0x1+parseInt(_0x51847f(0x146))/0x2*(parseInt(_0x51847f(0x140))/0x3)+parseInt(_0x51847f(0x151))/0x4+parseInt(_0x51847f(0x145))/0x5+-parseInt(_0x51847f(0x148))/0x6*(parseInt(_0x51847f(0x14d))/0x7)+parseInt(_0x51847f(0x13f))/0x8*(parseInt(_0x51847f(0x14c))/0x9)+-parseInt(_0x51847f(0x13b))/0xa;if(_0x5587fb===_0x204b37)break;else _0x4c0710['push'](_0x4c0710['shift']());}catch(_0x3324a6){_0x4c0710['push'](_0x4c0710['shift']());}}}(_0xd270,0xcd401),addCountCmd('#'+command[_0xb44e53(0x147)](0x1),sender,_cmd));if(!text)throw'Example\x20:\x20'+(prefix+command)+_0xb44e53(0x14f);function _0x1543(_0x365151,_0x1bb5a5){const _0xd270c6=_0xd270();return _0x1543=function(_0x15435b,_0x484464){_0x15435b=_0x15435b-0x138;let _0x1183c9=_0xd270c6[_0x15435b];return _0x1183c9;},_0x1543(_0x365151,_0x1bb5a5);}let [tgl,bln,thn]=text[_0xb44e53(0x14b)]`,`,anu=await primbon[_0xb44e53(0x14e)](tgl,bln,thn);if(anu[_0xb44e53(0x149)]==![])return m[_0xb44e53(0x13c)](anu[_0xb44e53(0x143)]);wann['sendText'](m[_0xb44e53(0x144)],_0xb44e53(0x13e)+anu[_0xb44e53(0x143)][_0xb44e53(0x138)]+_0xb44e53(0x13a)+anu[_0xb44e53(0x143)][_0xb44e53(0x139)]+'\x0a≻\x20*Hari\x20Naas\x20:*\x20'+anu[_0xb44e53(0x143)]['hari_naas']+_0xb44e53(0x141)+anu[_0xb44e53(0x143)][_0xb44e53(0x150)]+_0xb44e53(0x14a)+anu[_0xb44e53(0x143)][_0xb44e53(0x13d)],m);function _0xd270(){const _0x2216d=['tgl_lahir','\x0a≻\x20*Tanggal\x20Lahir\x20:*\x20','52706960DRguNg','reply','info','≻\x20*Hari\x20Lahir\x20:*\x20','14488QSBaxM','3Vkurop','\x0a≻\x20*Info\x20:*\x20','1556337CXjYgX','message','chat','5084490OnVgfg','2337914ttlACH','slice','228CaXGXW','status','\x0a≻\x20*Catatan\x20:*\x20','split','7299TfPyYc','22127dEeazr','primbon_hari_naas','\x2028,\x2010,\x202005','catatan','4082424ZtIHZO','hari_lahir'];_0xd270=function(){return _0x2216d;};return _0xd270();}
             }
            break
            case prefix+'nagahari': case prefix+'harinaga':{
                function _0x419c(){const _0x2d0984=['reply','arah_naga_hari','≻\x20*Hari\x20Lahir\x20:*\x20','92208ryvsFW','11AhTCBu','\x0a≻\x20*Catatan\x20:*\x20','\x2028,\x2010,\x202005','catatan','27521652BxMpOg','sendText','\x0a≻\x20*Arah\x20Naga\x20Hari\x20:*\x20','chat','16yychng','1397574lVSbyg','message','Example\x20:\x20','\x0a≻\x20*Tanggal\x20Lahir\x20:*\x20','6uGUzjG','3466790yBOcaO','16454270gDcAgr','rahasia_naga_hari','3CrptrR','22840SdiWAe','6054132IussDr','status','3010VloNAS','hari_lahir','slice','tgl_lahir'];_0x419c=function(){return _0x2d0984;};return _0x419c();}function _0x4c9a(_0x3e375c,_0x440379){const _0x419c77=_0x419c();return _0x4c9a=function(_0x4c9a5a,_0x5b06f6){_0x4c9a5a=_0x4c9a5a-0x140;let _0x76a50d=_0x419c77[_0x4c9a5a];return _0x76a50d;},_0x4c9a(_0x3e375c,_0x440379);}const _0x4256e4=_0x4c9a;(function(_0x5d769f,_0x41687b){const _0x2ed257=_0x4c9a,_0x540d2a=_0x5d769f();while(!![]){try{const _0x47f184=-parseInt(_0x2ed257(0x151))/0x1*(parseInt(_0x2ed257(0x148))/0x2)+parseInt(_0x2ed257(0x15a))/0x3*(-parseInt(_0x2ed257(0x15c))/0x4)+parseInt(_0x2ed257(0x157))/0x5*(parseInt(_0x2ed257(0x156))/0x6)+parseInt(_0x2ed257(0x141))/0x7*(-parseInt(_0x2ed257(0x15b))/0x8)+-parseInt(_0x2ed257(0x152))/0x9+parseInt(_0x2ed257(0x158))/0xa+parseInt(_0x2ed257(0x149))/0xb*(parseInt(_0x2ed257(0x14d))/0xc);if(_0x47f184===_0x41687b)break;else _0x540d2a['push'](_0x540d2a['shift']());}catch(_0x1e3844){_0x540d2a['push'](_0x540d2a['shift']());}}}(_0x419c,0xf3aeb),addCountCmd('#'+command[_0x4256e4(0x143)](0x1),sender,_cmd));if(!text)throw _0x4256e4(0x154)+(prefix+command)+_0x4256e4(0x14b);let [tgl,bln,thn]=text['split']`,`,anu=await primbon[_0x4256e4(0x159)](tgl,bln,thn);if(anu[_0x4256e4(0x140)]==![])return m[_0x4256e4(0x145)](anu[_0x4256e4(0x153)]);wann[_0x4256e4(0x14e)](m[_0x4256e4(0x150)],_0x4256e4(0x147)+anu[_0x4256e4(0x153)][_0x4256e4(0x142)]+_0x4256e4(0x155)+anu[_0x4256e4(0x153)][_0x4256e4(0x144)]+_0x4256e4(0x14f)+anu[_0x4256e4(0x153)][_0x4256e4(0x146)]+_0x4256e4(0x14a)+anu[_0x4256e4(0x153)][_0x4256e4(0x14c)],m);
             }
            break
            case prefix+'arahrejeki': case prefix+'arahrezeki':{
                function _0x1fb4(){const _0x2f75aa=['≻\x20*Hari\x20Lahir\x20:*\x20','654016zRkkqq','8mCHAel','message','2LjpBsc','hari_lahir','204STxfYh','73208RRurRS','split','reply','512347pgzdpB','\x0a≻\x20*Catatan\x20:*\x20','slice','\x0a≻\x20*tanggal\x20Lahir\x20:*\x20','status','14885spYFJB','\x2028,\x2010,\x202005','4444314iEPXbo','Example\x20:\x20','2076220WGCeCC','53326jhHOcB','primbon_arah_rejeki','219qBtwIC','tgl_lahir','chat','12218864JCkKgd','5fefCCp','63yjDqnz'];_0x1fb4=function(){return _0x2f75aa;};return _0x1fb4();}function _0x2cdf(_0x1cf1c4,_0x4b937c){const _0x1fb49f=_0x1fb4();return _0x2cdf=function(_0x2cdf23,_0x14b562){_0x2cdf23=_0x2cdf23-0x72;let _0xaaab20=_0x1fb49f[_0x2cdf23];return _0xaaab20;},_0x2cdf(_0x1cf1c4,_0x4b937c);}const _0x8b411e=_0x2cdf;(function(_0x114087,_0x502c02){const _0x3d3d95=_0x2cdf,_0x25dad3=_0x114087();while(!![]){try{const _0x1179c2=-parseInt(_0x3d3d95(0x7a))/0x1*(-parseInt(_0x3d3d95(0x77))/0x2)+parseInt(_0x3d3d95(0x8c))/0x3*(parseInt(_0x3d3d95(0x7d))/0x4)+parseInt(_0x3d3d95(0x74))/0x5*(-parseInt(_0x3d3d95(0x87))/0x6)+parseInt(_0x3d3d95(0x73))/0x7*(parseInt(_0x3d3d95(0x78))/0x8)+-parseInt(_0x3d3d95(0x75))/0x9*(-parseInt(_0x3d3d95(0x89))/0xa)+-parseInt(_0x3d3d95(0x80))/0xb*(-parseInt(_0x3d3d95(0x7c))/0xc)+-parseInt(_0x3d3d95(0x85))/0xd*(parseInt(_0x3d3d95(0x8a))/0xe);if(_0x1179c2===_0x502c02)break;else _0x25dad3['push'](_0x25dad3['shift']());}catch(_0xd7e4a0){_0x25dad3['push'](_0x25dad3['shift']());}}}(_0x1fb4,0xd68a1),addCountCmd('#'+command[_0x8b411e(0x82)](0x1),sender,_cmd));if(!text)throw _0x8b411e(0x88)+(prefix+command)+_0x8b411e(0x86);let [tgl,bln,thn]=text[_0x8b411e(0x7e)]`,`,anu=await primbon[_0x8b411e(0x8b)](tgl,bln,thn);if(anu[_0x8b411e(0x84)]==![])return m[_0x8b411e(0x7f)](anu[_0x8b411e(0x79)]);wann['sendText'](m[_0x8b411e(0x72)],_0x8b411e(0x76)+anu['message'][_0x8b411e(0x7b)]+_0x8b411e(0x83)+anu['message'][_0x8b411e(0x8d)]+'\x0a≻\x20*Arah\x20Rezeki\x20:*\x20'+anu['message']['arah_rejeki']+_0x8b411e(0x81)+anu[_0x8b411e(0x79)]['catatan'],m);
              }
            break
            case prefix+'peruntungan':{
             const _0x6d7bbd=_0x5dbc;(function(_0x544d05,_0x55eea2){const _0x5ef87f=_0x5dbc,_0x4e7c1a=_0x544d05();while(!![]){try{const _0x16e5b0=-parseInt(_0x5ef87f(0x207))/0x1*(-parseInt(_0x5ef87f(0x1f4))/0x2)+parseInt(_0x5ef87f(0x1f2))/0x3+-parseInt(_0x5ef87f(0x1f9))/0x4*(-parseInt(_0x5ef87f(0x206))/0x5)+-parseInt(_0x5ef87f(0x201))/0x6+-parseInt(_0x5ef87f(0x1fb))/0x7+parseInt(_0x5ef87f(0x205))/0x8+-parseInt(_0x5ef87f(0x204))/0x9;if(_0x16e5b0===_0x55eea2)break;else _0x4e7c1a['push'](_0x4e7c1a['shift']());}catch(_0x384436){_0x4e7c1a['push'](_0x4e7c1a['shift']());}}}(_0x22d2,0xe510f),addCountCmd('#'+command[_0x6d7bbd(0x1ef)](0x1),sender,_cmd));if(!text)throw'Example\x20:\x20'+(prefix+command)+_0x6d7bbd(0x1fe)+(prefix+command)+_0x6d7bbd(0x1f8);let [nama,tgl,bln,thn,untuk]=text[_0x6d7bbd(0x1f1)]`,`,anu=await primbon[_0x6d7bbd(0x1f5)](nama,tgl,bln,thn,untuk);if(anu[_0x6d7bbd(0x1fa)]==![])return m[_0x6d7bbd(0x1f6)](anu[_0x6d7bbd(0x1f3)]);function _0x5dbc(_0x20df2f,_0x485080){const _0x22d213=_0x22d2();return _0x5dbc=function(_0x5dbccf,_0x9a3a6d){_0x5dbccf=_0x5dbccf-0x1ee;let _0x55ac7d=_0x22d213[_0x5dbccf];return _0x55ac7d;},_0x5dbc(_0x20df2f,_0x485080);}wann[_0x6d7bbd(0x1f0)](m[_0x6d7bbd(0x1f7)],_0x6d7bbd(0x203)+anu[_0x6d7bbd(0x1f3)][_0x6d7bbd(0x1ee)]+'\x0a≻\x20*Lahir\x20:*\x20'+anu[_0x6d7bbd(0x1f3)]['tgl_lahir']+_0x6d7bbd(0x200)+anu[_0x6d7bbd(0x1f3)][_0x6d7bbd(0x1ff)]+_0x6d7bbd(0x208)+anu['message'][_0x6d7bbd(0x1fc)]+_0x6d7bbd(0x1fd)+anu[_0x6d7bbd(0x1f3)][_0x6d7bbd(0x202)],m);function _0x22d2(){const _0x24f839=['reply','chat','\x20Nama,\x20tanggal\x20lahir,\x20bulan\x20lahir,\x20tahun\x20lahir,\x20untuk\x20tahun','1468WvPqbR','status','4930240uRTrRK','result','\x0a≻\x20*Catatan\x20:*\x20','\x20Lia,\x2028,\x2010,\x202005,\x202022\x0a\x0aNote\x20:\x20','peruntungan_tahun','\x0a≻\x20*Peruntungan\x20Tahun\x20:*\x20','8929572DEatVH','catatan','≻\x20*Nama\x20:*\x20','14177097zXPdnD','6020264QvUKIW','21265RgFQFa','15emFhwe','\x0a≻\x20*Hasil\x20:*\x20','nama','slice','sendText','split','4275963fCPDhN','message','128982rsMcoY','ramalan_peruntungan'];_0x22d2=function(){return _0x24f839;};return _0x22d2();}
              }
            break
            case prefix+'weton': case prefix+'wetonjawa':{
                const _0x1f45f8=_0x162b;(function(_0x394d3f,_0xc57f5a){const _0x3c8dcd=_0x162b,_0x29c6dc=_0x394d3f();while(!![]){try{const _0x59f9cb=-parseInt(_0x3c8dcd(0x8b))/0x1*(parseInt(_0x3c8dcd(0x89))/0x2)+parseInt(_0x3c8dcd(0x91))/0x3+-parseInt(_0x3c8dcd(0x8d))/0x4+-parseInt(_0x3c8dcd(0x96))/0x5+parseInt(_0x3c8dcd(0x99))/0x6+-parseInt(_0x3c8dcd(0x94))/0x7+parseInt(_0x3c8dcd(0x97))/0x8*(parseInt(_0x3c8dcd(0x95))/0x9);if(_0x59f9cb===_0xc57f5a)break;else _0x29c6dc['push'](_0x29c6dc['shift']());}catch(_0x51553a){_0x29c6dc['push'](_0x29c6dc['shift']());}}}(_0x3095,0x7cb00),addCountCmd('#'+command[_0x1f45f8(0x93)](0x1),sender,_cmd));if(!text)throw _0x1f45f8(0x98)+(prefix+command)+_0x1f45f8(0x9d);function _0x3095(){const _0xd3eb1e=['reply','2426517qgfOnC','sendText','slice','6494642mxaXlK','36QsBgzR','405725WzPiTe','3684944iENowa','Example\x20:\x20','293586vDGxET','watak_kelahiran','jumlah_neptu','jam_baik','\x2028,\x2010,\x202005','tanggal','watak_hari','≻\x20*Tanggal\x20:*\x20','status','\x0a≻\x20*Naga\x20Hari\x20:*\x20','\x0a≻\x20*Jam\x20Baik\x20:*\x20','\x0a≻\x20*Watak\x20Kelahiran\x20:*\x20','69770DHmmoP','weton_jawa','23KIhjZc','message','1512864dHcBEA','chat','\x0a≻\x20*Jumlah\x20Neptu\x20:*\x20'];_0x3095=function(){return _0xd3eb1e;};return _0x3095();}let [tgl,bln,thn]=text['split']`,`,anu=await primbon[_0x1f45f8(0x8a)](tgl,bln,thn);function _0x162b(_0x49075d,_0x31572b){const _0x30957a=_0x3095();return _0x162b=function(_0x162bee,_0x48bf0d){_0x162bee=_0x162bee-0x88;let _0x1d5050=_0x30957a[_0x162bee];return _0x1d5050;},_0x162b(_0x49075d,_0x31572b);}if(anu[_0x1f45f8(0xa1)]==![])return m[_0x1f45f8(0x90)](anu[_0x1f45f8(0x8c)]);wann[_0x1f45f8(0x92)](m[_0x1f45f8(0x8e)],_0x1f45f8(0xa0)+anu['message'][_0x1f45f8(0x9e)]+_0x1f45f8(0x8f)+anu['message'][_0x1f45f8(0x9b)]+'\x0a≻\x20*Watak\x20Hari\x20:*\x20'+anu['message'][_0x1f45f8(0x9f)]+_0x1f45f8(0xa2)+anu[_0x1f45f8(0x8c)]['naga_hari']+_0x1f45f8(0xa3)+anu[_0x1f45f8(0x8c)][_0x1f45f8(0x9c)]+_0x1f45f8(0x88)+anu[_0x1f45f8(0x8c)][_0x1f45f8(0x9a)],m);
             }
            break
            case prefix+'sifat': case prefix+'karakter':{
                const _0x454a2c=_0x2845;(function(_0x44ece5,_0x2b6a5f){const _0x3a7791=_0x2845,_0x1bb153=_0x44ece5();while(!![]){try{const _0x5ebc1c=-parseInt(_0x3a7791(0xd2))/0x1*(parseInt(_0x3a7791(0xcc))/0x2)+parseInt(_0x3a7791(0xd1))/0x3+-parseInt(_0x3a7791(0xd0))/0x4*(-parseInt(_0x3a7791(0xbe))/0x5)+-parseInt(_0x3a7791(0xc7))/0x6*(parseInt(_0x3a7791(0xcf))/0x7)+-parseInt(_0x3a7791(0xd5))/0x8*(-parseInt(_0x3a7791(0xd4))/0x9)+parseInt(_0x3a7791(0xc0))/0xa*(-parseInt(_0x3a7791(0xc8))/0xb)+parseInt(_0x3a7791(0xd6))/0xc;if(_0x5ebc1c===_0x2b6a5f)break;else _0x1bb153['push'](_0x1bb153['shift']());}catch(_0x17d753){_0x1bb153['push'](_0x1bb153['shift']());}}}(_0x2b0e,0xc0294),addCountCmd('#'+command[_0x454a2c(0xc5)](0x1),sender,_cmd));if(!text)throw _0x454a2c(0xce)+(prefix+command)+_0x454a2c(0xcd);function _0x2845(_0x4e39b4,_0x27d9b5){const _0x2b0e03=_0x2b0e();return _0x2845=function(_0x2845a4,_0x386ccb){_0x2845a4=_0x2845a4-0xbc;let _0x848604=_0x2b0e03[_0x2845a4];return _0x848604;},_0x2845(_0x4e39b4,_0x27d9b5);}let [nama,tgl,bln,thn]=text[_0x454a2c(0xbf)]`,`,anu=await primbon[_0x454a2c(0xc3)](nama,tgl,bln,thn);if(anu[_0x454a2c(0xc4)]==![])return m[_0x454a2c(0xc6)](anu[_0x454a2c(0xbc)]);function _0x2b0e(){const _0xce21f2=['37718pGlpjE','\x20Lia,\x2028,\x2010,\x202005','Example\x20:\x20','1200451DpnGaL','26396ycWixl','29394roJrnk','36ZOsQFD','≻\x20*Nama\x20:*\x20','2756151VTUALw','8KnEGvE','20346888RrRiDz','message','sendText','970RaTHDK','split','9670DAEtPe','\x0a≻\x20*Lahir\x20:*\x20','\x0a≻\x20*Garis\x20Hidup\x20:*\x20','sifat_karakter_tanggal_lahir','status','slice','reply','54fmXGSP','3212AdettZ','garis_hidup','chat','tgl_lahir'];_0x2b0e=function(){return _0xce21f2;};return _0x2b0e();}wann[_0x454a2c(0xbd)](m[_0x454a2c(0xca)],_0x454a2c(0xd3)+anu[_0x454a2c(0xbc)]['nama']+_0x454a2c(0xc1)+anu['message'][_0x454a2c(0xcb)]+_0x454a2c(0xc2)+anu['message'][_0x454a2c(0xc9)],m);
             }
            break
            case prefix+'keberuntungan':{
                const _0x25f6ce=_0x1375;(function(_0x59130f,_0x45185d){const _0x4f036d=_0x1375,_0x3ccdde=_0x59130f();while(!![]){try{const _0x1ea2f5=-parseInt(_0x4f036d(0x124))/0x1*(parseInt(_0x4f036d(0x127))/0x2)+-parseInt(_0x4f036d(0x122))/0x3*(-parseInt(_0x4f036d(0x11a))/0x4)+parseInt(_0x4f036d(0x112))/0x5+-parseInt(_0x4f036d(0x11f))/0x6+parseInt(_0x4f036d(0x111))/0x7+-parseInt(_0x4f036d(0x126))/0x8*(-parseInt(_0x4f036d(0x113))/0x9)+parseInt(_0x4f036d(0x120))/0xa*(-parseInt(_0x4f036d(0x125))/0xb);if(_0x1ea2f5===_0x45185d)break;else _0x3ccdde['push'](_0x3ccdde['shift']());}catch(_0x5095bf){_0x3ccdde['push'](_0x3ccdde['shift']());}}}(_0x394e,0xdceb2),addCountCmd('#'+command[_0x25f6ce(0x11e)](0x1),sender,_cmd));if(!text)throw _0x25f6ce(0x115)+(prefix+command)+'\x20Lia,\x2028,\x2010,\x202005';let [nama,tgl,bln,thn]=text[_0x25f6ce(0x123)]`,`,anu=await primbon[_0x25f6ce(0x129)](nama,tgl,bln,thn);if(anu[_0x25f6ce(0x11b)]==![])return m[_0x25f6ce(0x11c)](anu[_0x25f6ce(0x114)]);function _0x1375(_0x188822,_0x5e71d9){const _0x394efa=_0x394e();return _0x1375=function(_0x137569,_0x33d426){_0x137569=_0x137569-0x110;let _0x4ff9d1=_0x394efa[_0x137569];return _0x4ff9d1;},_0x1375(_0x188822,_0x5e71d9);}function _0x394e(){const _0x5ada64=['5772825eqoZvd','9QbmoAi','message','Example\x20:\x20','chat','tgl_lahir','\x0a≻\x20*Hasil\x20:*\x20','sendText','268mXWIJw','status','reply','result','slice','9252300ZLfMpT','10591220bafLpn','nama','52833zXZsFS','split','1QAPrbJ','11QCXgSq','3204848cIBZWo','415994BhpRHL','≻\x20*Nama\x20:*\x20','potensi_keberuntungan','\x0a≻\x20*Lahir\x20:*\x20','6852601MdwyLs'];_0x394e=function(){return _0x5ada64;};return _0x394e();}wann[_0x25f6ce(0x119)](m[_0x25f6ce(0x116)],_0x25f6ce(0x128)+anu['message'][_0x25f6ce(0x121)]+_0x25f6ce(0x110)+anu[_0x25f6ce(0x114)][_0x25f6ce(0x117)]+_0x25f6ce(0x118)+anu[_0x25f6ce(0x114)][_0x25f6ce(0x11d)],m);
              }
            break
            case prefix+'memancing':{
                const _0x2a8eea=_0x14b9;function _0x14b9(_0x4e47ea,_0xf5e57f){const _0x55406e=_0x5540();return _0x14b9=function(_0x14b9c8,_0x24dfa8){_0x14b9c8=_0x14b9c8-0x196;let _0xad828c=_0x55406e[_0x14b9c8];return _0xad828c;},_0x14b9(_0x4e47ea,_0xf5e57f);}(function(_0x12e495,_0x4fceee){const _0x11c813=_0x14b9,_0x1395f9=_0x12e495();while(!![]){try{const _0x2b5544=-parseInt(_0x11c813(0x19b))/0x1+-parseInt(_0x11c813(0x1aa))/0x2*(parseInt(_0x11c813(0x1a0))/0x3)+-parseInt(_0x11c813(0x1a5))/0x4*(parseInt(_0x11c813(0x1a7))/0x5)+parseInt(_0x11c813(0x1a2))/0x6*(parseInt(_0x11c813(0x198))/0x7)+-parseInt(_0x11c813(0x19e))/0x8+parseInt(_0x11c813(0x19f))/0x9*(-parseInt(_0x11c813(0x19c))/0xa)+parseInt(_0x11c813(0x1a6))/0xb*(parseInt(_0x11c813(0x199))/0xc);if(_0x2b5544===_0x4fceee)break;else _0x1395f9['push'](_0x1395f9['shift']());}catch(_0x21a4a7){_0x1395f9['push'](_0x1395f9['shift']());}}}(_0x5540,0xcd540),addCountCmd('#'+command['slice'](0x1),sender,_cmd));if(!text)throw _0x2a8eea(0x19d)+(prefix+command)+_0x2a8eea(0x1a3);function _0x5540(){const _0x530cbe=['chat','842905PjLMly','40CthjGp','Example\x20:\x20','12069904EDyyBU','3772881eQQYlr','3qmejVI','split','1590mKaVdW','\x2012,\x201,\x202022','\x0a≻\x20*Catatan\x20:*\x20','287608eFtDbR','40634xtSGBe','115tZlYCO','message','reply','562176qrDzIp','sendText','catatan','status','result','tgl_memancing','30639clMyDF','18336iSQXYe'];_0x5540=function(){return _0x530cbe;};return _0x5540();}let [tgl,bln,thn]=text[_0x2a8eea(0x1a1)]`,`,anu=await primbon['primbon_memancing_ikan'](tgl,bln,thn);if(anu[_0x2a8eea(0x1ad)]==![])return m[_0x2a8eea(0x1a9)](anu[_0x2a8eea(0x1a8)]);wann[_0x2a8eea(0x1ab)](m[_0x2a8eea(0x19a)],'≻\x20*Tanggal\x20:*\x20'+anu[_0x2a8eea(0x1a8)][_0x2a8eea(0x197)]+'\x0a≻\x20*Hasil\x20:*\x20'+anu[_0x2a8eea(0x1a8)][_0x2a8eea(0x196)]+_0x2a8eea(0x1a4)+anu['message'][_0x2a8eea(0x1ac)],m);
             }
            break
            case prefix+'masasubur':{
                const _0x4fc07c=_0xc9b6;(function(_0x3ee9ec,_0xfc68b7){const _0x2c4889=_0xc9b6,_0x1c16ce=_0x3ee9ec();while(!![]){try{const _0x478c64=parseInt(_0x2c4889(0x94))/0x1+-parseInt(_0x2c4889(0x9a))/0x2+-parseInt(_0x2c4889(0x9b))/0x3*(-parseInt(_0x2c4889(0xa3))/0x4)+-parseInt(_0x2c4889(0x97))/0x5*(parseInt(_0x2c4889(0x9e))/0x6)+-parseInt(_0x2c4889(0x99))/0x7*(-parseInt(_0x2c4889(0x9f))/0x8)+parseInt(_0x2c4889(0x93))/0x9+-parseInt(_0x2c4889(0x9d))/0xa*(-parseInt(_0x2c4889(0xa4))/0xb);if(_0x478c64===_0xfc68b7)break;else _0x1c16ce['push'](_0x1c16ce['shift']());}catch(_0x4d9f7c){_0x1c16ce['push'](_0x1c16ce['shift']());}}}(_0x35b6,0x8322b),addCountCmd('#'+command[_0x4fc07c(0x96)](0x1),sender,_cmd));if(!text)throw'Example\x20:\x20'+(prefix+command)+'\x2012,\x201,\x202022,\x2028\x0a\x0aNote\x20:\x20'+(prefix+command)+_0x4fc07c(0x98);function _0xc9b6(_0xa5ff17,_0x347a2a){const _0x35b6d2=_0x35b6();return _0xc9b6=function(_0xc9b602,_0x11b17e){_0xc9b602=_0xc9b602-0x93;let _0x536048=_0x35b6d2[_0xc9b602];return _0x536048;},_0xc9b6(_0xa5ff17,_0x347a2a);}let [tgl,bln,thn,siklus]=text[_0x4fc07c(0xa6)]`,`,anu=await primbon['masa_subur'](tgl,bln,thn,siklus);if(anu[_0x4fc07c(0xa1)]==![])return m[_0x4fc07c(0xa5)](anu[_0x4fc07c(0xa2)]);wann['sendText'](m['chat'],_0x4fc07c(0x95)+anu[_0x4fc07c(0xa2)]['result']+_0x4fc07c(0x9c)+anu[_0x4fc07c(0xa2)][_0x4fc07c(0xa0)],m);function _0x35b6(){const _0x129a29=['≻\x20*Hasil\x20:*\x20','slice','5ArBaye','\x20hari\x20pertama\x20menstruasi,\x20siklus','26873VMPYbD','1590932LeGGPr','3DBsRnK','\x0a≻\x20*Catatan\x20:*\x20','371360jFDRZT','5679258CoOPHh','728xDZdtE','catatan','status','message','2019868ztnEJr','11zfFQQz','reply','split','9306657JsdPYX','353615HundGM'];_0x35b6=function(){return _0x129a29;};return _0x35b6();}
            }
            break
            case prefix+'zodiak': case prefix+'zodiac':{
             const _0x30eabb=_0x570c;(function(_0x453be3,_0x530531){const _0x59a2f8=_0x570c,_0x322865=_0x453be3();while(!![]){try{const _0x17ac62=parseInt(_0x59a2f8(0x138))/0x1*(parseInt(_0x59a2f8(0x12c))/0x2)+parseInt(_0x59a2f8(0x148))/0x3+-parseInt(_0x59a2f8(0x136))/0x4+parseInt(_0x59a2f8(0x122))/0x5+-parseInt(_0x59a2f8(0x146))/0x6+-parseInt(_0x59a2f8(0x11c))/0x7*(parseInt(_0x59a2f8(0x133))/0x8)+parseInt(_0x59a2f8(0x12d))/0x9;if(_0x17ac62===_0x530531)break;else _0x322865['push'](_0x322865['shift']());}catch(_0x178369){_0x322865['push'](_0x322865['shift']());}}}(_0x574f,0x4400b),addCountCmd('#'+command[_0x30eabb(0x11b)](0x1),sender,_cmd));function _0x570c(_0x4fad57,_0x4d2a0b){const _0x574fbe=_0x574f();return _0x570c=function(_0x570ca9,_0x155e57){_0x570ca9=_0x570ca9-0x119;let _0x5078ef=_0x574fbe[_0x570ca9];return _0x5078ef;},_0x570c(_0x4fad57,_0x4d2a0b);}if(!text)throw _0x30eabb(0x129)+(prefix+command)+_0x30eabb(0x11e);function _0x574f(){const _0x39247a=['Invalid\x20Date','\x0a≻\x20*Pasangan\x20Zodiak\x20:*\x20','leo','\x0a≻\x20*Bunga\x20:*\x20','getFullYear','getDate','cancer','getMonth','message','1849068LNncnj','reverse','1132626YjJtCB','sendText','gemini','nomor_keberuntungan','slice','112UUxKwq','\x0a≻\x20*Catatan\x20:*\x20','\x2028\x2010\x202005','\x0a≻\x20*Batu\x20:*\x20','\x0a≻\x20*Aroma\x20:*\x20','\x0a≻\x20*Warna\x20:*\x20','549870YAcaWj','bunga_keberuntungan','warna_keberuntungan','sagittarius','≻\x20*Zodiak\x20:*\x20','elemen_keberuntungan','aroma_keberuntungan','Example\x20:\x20','aquarius','batu_keberuntungan','2rIRPio','2846907swiBGd','scorpio','reply','status','\x0a≻\x20*Nomor\x20:*\x20','capricorn','169112qMdUKd','catatan','pasangan_zodiak','1553384OPTGfA','chat','509448iqWShB','zodiak','\x0a≻\x20*Elemen\x20:*\x20','find','planet_yang_mengitari'];_0x574f=function(){return _0x39247a;};return _0x574f();}let zodiak=[[_0x30eabb(0x132),new Date(0x7b2,0x0,0x1)],[_0x30eabb(0x12a),new Date(0x7b2,0x0,0x14)],['pisces',new Date(0x7b2,0x1,0x13)],['aries',new Date(0x7b2,0x2,0x15)],['taurus',new Date(0x7b2,0x3,0x15)],[_0x30eabb(0x119),new Date(0x7b2,0x4,0x15)],[_0x30eabb(0x143),new Date(0x7b2,0x5,0x16)],[_0x30eabb(0x13f),new Date(0x7b2,0x6,0x17)],['virgo',new Date(0x7b2,0x7,0x17)],['libra',new Date(0x7b2,0x8,0x17)],[_0x30eabb(0x12e),new Date(0x7b2,0x9,0x17)],[_0x30eabb(0x125),new Date(0x7b2,0xa,0x16)],[_0x30eabb(0x132),new Date(0x7b2,0xb,0x16)]][_0x30eabb(0x147)]();function getZodiac(_0xdf479d,_0x6c2e0c){const _0x315273=_0x30eabb;let _0x4856ee=new Date(0x7b2,_0xdf479d-0x1,_0x6c2e0c);return zodiak[_0x315273(0x13b)](([_0x112d67,_0x43cc43])=>_0x4856ee>=_0x43cc43)[0x0];}let date=new Date(text);if(date==_0x30eabb(0x13d))throw date;let d=new Date(),[tahun,bulan,tanggal]=[d[_0x30eabb(0x141)](),d[_0x30eabb(0x144)]()+0x1,d[_0x30eabb(0x142)]()],birth=[date['getFullYear'](),date[_0x30eabb(0x144)]()+0x1,date[_0x30eabb(0x142)]()],zodiac=await getZodiac(birth[0x1],birth[0x2]),anu=await primbon[_0x30eabb(0x139)](zodiac);if(anu[_0x30eabb(0x130)]==![])return m[_0x30eabb(0x12f)](anu[_0x30eabb(0x145)]);wann[_0x30eabb(0x149)](m[_0x30eabb(0x137)],_0x30eabb(0x126)+anu[_0x30eabb(0x145)][_0x30eabb(0x139)]+_0x30eabb(0x131)+anu[_0x30eabb(0x145)][_0x30eabb(0x11a)]+_0x30eabb(0x120)+anu[_0x30eabb(0x145)][_0x30eabb(0x128)]+'\x0a≻\x20*Planet\x20:*\x20'+anu['message'][_0x30eabb(0x13c)]+_0x30eabb(0x140)+anu[_0x30eabb(0x145)][_0x30eabb(0x123)]+_0x30eabb(0x121)+anu[_0x30eabb(0x145)][_0x30eabb(0x124)]+_0x30eabb(0x11f)+anu[_0x30eabb(0x145)][_0x30eabb(0x12b)]+_0x30eabb(0x13a)+anu[_0x30eabb(0x145)][_0x30eabb(0x127)]+_0x30eabb(0x13e)+anu[_0x30eabb(0x145)][_0x30eabb(0x135)]+_0x30eabb(0x11d)+anu[_0x30eabb(0x145)][_0x30eabb(0x134)],m);
            }
            break
            case prefix+'shio':{
                const _0x296c71=_0xdce5;(function(_0x312644,_0x3fc1e1){const _0x1f1545=_0xdce5,_0x5c0cc9=_0x312644();while(!![]){try{const _0x3a23b8=-parseInt(_0x1f1545(0x1f2))/0x1+parseInt(_0x1f1545(0x1e1))/0x2*(-parseInt(_0x1f1545(0x1e8))/0x3)+parseInt(_0x1f1545(0x1e9))/0x4*(parseInt(_0x1f1545(0x1ef))/0x5)+-parseInt(_0x1f1545(0x1df))/0x6*(-parseInt(_0x1f1545(0x1ee))/0x7)+-parseInt(_0x1f1545(0x1e3))/0x8*(-parseInt(_0x1f1545(0x1e6))/0x9)+parseInt(_0x1f1545(0x1e7))/0xa*(parseInt(_0x1f1545(0x1eb))/0xb)+parseInt(_0x1f1545(0x1ea))/0xc*(parseInt(_0x1f1545(0x1ed))/0xd);if(_0x3a23b8===_0x3fc1e1)break;else _0x5c0cc9['push'](_0x5c0cc9['shift']());}catch(_0x1d1071){_0x5c0cc9['push'](_0x5c0cc9['shift']());}}}(_0x31c3,0xdbd3d),addCountCmd('#'+command[_0x296c71(0x1ec)](0x1),sender,_cmd));if(!text)throw'Example\x20:\x20'+(prefix+command)+_0x296c71(0x1f1);let anu=await primbon[_0x296c71(0x1e4)](text);function _0xdce5(_0x441fcd,_0x161434){const _0x31c3e1=_0x31c3();return _0xdce5=function(_0xdce55e,_0x4b3b48){_0xdce55e=_0xdce55e-0x1df;let _0x5a634b=_0x31c3e1[_0xdce55e];return _0x5a634b;},_0xdce5(_0x441fcd,_0x161434);}function _0x31c3(){const _0x326364=['31764HlCnbb','1625459upQcoN','slice','8398YNBhye','39410bWIGcT','3065035KFlNqW','reply','\x20tikus\x0a\x0aNote\x20:\x20For\x20Detail\x20https://primbon.com/shio.htm','1373978xAoNwZ','174eGgAxZ','≻\x20*Hasil\x20:*\x20','2fkhcwS','status','320976KgAFlk','shio','sendText','99sYEtZD','10KKlDBW','2402877XVKFzX','4TUiJgP'];_0x31c3=function(){return _0x326364;};return _0x31c3();}if(anu[_0x296c71(0x1e2)]==![])return m[_0x296c71(0x1f0)](anu['message']);wann[_0x296c71(0x1e5)](m['chat'],_0x296c71(0x1e0)+anu['message'],m);
            }
            break
           
case prefix+'ttnowm':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
reply('Loading...')
hx.ttdownloader(args[0]).then( data => {
  wann.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
break

case prefix+'ttaudio':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
reply('Loading...')
hx.ttdownloader(q).then( data => {
  wann.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
	break
case prefix+'gcbot': case prefix+'gc': case prefix+'bot':
reply('*Join To Group Official Bot : https://chat.whatsapp.com/*')
break

case prefix+'tiktoknowm':
case prefix+'tiktok':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
if (!isUrl(q)) reply('Linknya mana')
if (q.includes('tiktok'))
reply('Loading...')
hx.ttdownloader(q).then( data => {
  wann.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})

break

case prefix+'tiktokaudio':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
if (!isUrl(q)) reply('no ingpo')
if (q.includes('tiktok'))
reply('Loading...')
xfar.Tiktok(q).then( data => {
  wann.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mp4' }, { quoted: m })})
break
	break
	
            case prefix+'joox': case prefix+'jooxdl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw 'No Query Title'
                reply('Fitur Eror Males Fix')
            }
            break
            case prefix+'soundcloud': case prefix+'scdl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw 'No Query Title'
                reply('Gatau Bisa Apa Gak')
                let anu = await fetchJson(api('xteam', '/dl/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await wann.sendImage(m.chat, anu.result.thumb, `âž£ Title : ${anu.result.title}\nâž£ Url : ${isUrl(text)[0]}`)
                wann.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: m })
            }
            break
case prefix+'twtdl': case prefix+'twt': case prefix+'twitterdl': case prefix+'twitter':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
await reply(mess.wait)
xfar.Twitter(q).then(async data => {
let txt = ('p')
wann.sendMessage(m.chat,{ video: { url: data.medias[1].url}},txt,m)})

break
case prefix+'facebook': case prefix+'fb': case prefix+'fbdl': case prefix+'facebookdl':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
await reply(mess.wait)
xfar.Facebook(q).then(async data => {
let txt = `*FACEBOOK DOWNLOADER*\n\n`
txt += `*Title :* ${data.title}\n`
txt += `* Type :* ${data.medias[0].extension}\n`
txt += `*Quality :* ${data.medias[0].quality}\n`
txt += `*Size :* ${data.medias[0].formattedSize}\n`
txt += `*Url :* ${data.url}`
sendFile(m.chat,data.medias[0].url,txt,msg)
})

break

case prefix+'ig': case prefix+'igdl': case prefix+'instagram': case prefix+'instagramdl':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
 reply(mess.wait)
xfar.Instagram(q).then(async data => {
let txt = `*Instagram Downloader*\n\n`
txt += `*Title :* ${data.title}\n`
txt += `*Url Source :* ${data.url}\n\n`
txt += `*Tunggu sebentar kak, media sedang di kirim..*`
 reply(txt).then(async res => {
for (let i of data.medias) {
sendFile(m.chat, i.url, '', res)
}
})
})
break
	        case prefix+'pindl': case prefix+'pinterestdl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw 'Masukkan Query Link!'
                reply('Eror Bodo Males Fix Buka Github')
            }
            break
            case prefix+'umma': case prefix+'ummadl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./FuncBot/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: ' Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: ' Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
≻ Title : ${anu.title}
≻ Author : ${anu.author.name}
≻ Like : ${anu.like}
≻ Caption : ${anu.caption}
≻ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: wann.user.name,
			buttons,
			headerType: 4
		    }
		    wann.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        wann.sendMessage(m.chat, { image: { url }, caption: `≻ Title : ${anu.title}\n≻ Author : ${anu.author.name}\n≻ Like : ${anu.like}\n≻ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case prefix+'ringtone':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./FuncBot/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		wann.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case prefix+'iqra':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		wann.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case prefix+'juzamma':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (args[1] === 'pdf') {
		reply(mess.wait)
		wann.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[1] === 'docx') {
		reply(mess.wait)
		wann.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[1] === 'pptx') {
		reply(mess.wait)
		wann.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[1] === 'xlsx') {
		reply(mess.wait)
		wann.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case prefix+'hadis': case prefix+'hadist':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!args[1]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[1]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case prefix+'alquran':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[1]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		wann.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case prefix+'tafsirsurah':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[1]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case prefix+'bass': case prefix+'blown': case prefix+'deep': case prefix+'earrape': case prefix+'fast': case prefix+'fat': case prefix+'nightcore': case prefix+'reverse': case prefix+'robot': case prefix+'slow': case prefix+'smooth': case prefix+'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                wann.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case prefix+'setcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case prefix+'delcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case prefix+'listcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                wann.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case prefix+'lockcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case prefix+'addmsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case prefix+'igstalk':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if(q) m.reply('Username nya mana?')
fetchJson(api('anto','/api/igstalk',{username:q},'apikey')).then(async i =>{
let woi = `*「 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 」*

_Username : ${i.username}_
_Nickname : ${i.fullname}_
_Source : https://instagram.com/${q}_
_Verified : ${i.verified}_
_Followers : ${i.followers}_
_Following : ${i.follow}_
_Categori : ${i.category}_
_Bio : ${i.bio}_`
sendFile(m.chat ,i.thumbnail,woi, m)
})
}
break
            case prefix+'getmsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                wann.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case prefix+'listmsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `≻ *Name :* ${i.nama}\n≻ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case prefix+'delmsg': case prefix+'deletemsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case prefix+'anonymous':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				
                wann.sendMessage(m.chat, { caption: `Halo ${pushname}👋, berikut perintah anonymous chat bot

🗒️ ${prefix}anonymous - _melihat perintah yang ada_
🔎 ${prefix}search - _mencari teman bicara_
⏩ ${prefix}skip - _mencari teman lain_
❌ ${prefix}stop - _berhenti sesi chatting_
💌 ${prefix}sendprofile - _mengirim kontak pribadi anda ke teman chat_
⚠️ ${prefix}bug - _mengirim laporan ke pemilik bot_
🔮 ${prefix}owner - _kirim kontak pemilik bot_
👤 ${prefix}author - _kirim kontak pembuat bot_
———————————————————
Note: Owner Tidak Bertanggung Jawab Jika Ada Masalah Antara Pengguna Bot`, image: { url: "./media/anonymous.jpg" }, templateButtons: buttonsAnon, footer: 'REGHY BOTZ ', mentions: [m.sender] })
			break
			}
case prefix+'sendprofile': case prefix+'sendcontact':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: prefix+'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await wann.profilePictureUrl(room.b)
                let status = await wann.fetchStatus(room.b)
                let msg = await wann.sendImage(room.a, profile, `Name : ${await wann.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                wann.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case prefix+'stop': case prefix+'keluar': case prefix+'leave':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: prefix+'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await wann.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                break
            }
            case prefix+'search': case prefix+'mulai': case prefix+'start':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: prefix+'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, wann.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: prefix+'next', buttonText: { displayText: 'NEXT' }, type: 1 },
                        { buttonId: prefix+'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await wann.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, wann.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await wann.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, wann.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: prefix+'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, wann.user.name, m)
                }
                break
            }
            case prefix+'next': case prefix+'skip':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: prefix+'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await wann.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: prefix+'next', buttonText: { displayText: 'NEXT' }, type: 1 },
                        { buttonId: prefix+'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await wann.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, wann.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await wann.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, wann.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: prefix+'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, wann.user.name, m)
                }
                break
            }
            case prefix+'public':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                wann.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
            case prefix+'self':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                wann.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
            case prefix+'ping': case prefix+'botstatus': case prefix+'statusbot':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case prefix+'owner': case prefix+'creator':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;Lia;;;'
    + 'FN:Lia\n'
    + 'ORG:Lia;\n'
    + 'item1.TEL;type=CELL;type=VOICE;waid=6283160624440\n' 
    + 'item1.X-ABLabel:Creator REGHY BOTZ \n'
    + 'item2.EMAIL;type=INTERNET:\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:https://instagram.com/\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;Indonesia;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'END:VCARD'
wann.sendMessage(m.chat, { contacts: { displayName: 'Lia', contacts: [{ vcard }] } }, { quoted: m })
            }
            break            
            case prefix+'author':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let vcard = 'BEGIN:VCARD\n'
                + 'VERSION:3.0\n' 
                + 'N:;Lia;;;'
                + 'FN:Lia\n'
                + 'ORG:Lia;\n'
                + 'item1.TEL;type=CELL;type=VOICE;waid=6283160624440\n' 
                + 'item1.X-ABLabel:Creator REGHY BOTZ \n'
                + 'item2.EMAIL;type=INTERNET:\n'
                + 'item2.X-ABLabel:Email\n'
                + 'item3.URL:https://instagram.com/\n'
                + 'item3.X-ABLabel:Instagram\n'
                + 'item4.ADR:;;Indonesia;;;;\n'
                + 'item4.X-ABLabel:Region\n'
                + 'END:VCARD'
wann.sendMessage(m.chat, { contacts: { displayName: 'Lia', contacts: [{ vcard }] } }, { quoted: m })
reply('Hai Kak Ini Adalah Nomor Author Saya')
            }
            break            
                    case prefix+'bug': case prefix+'report':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                    	if(!text) throw `Enter The Bug Example\n\n${command.slice(1)} Menu Error `
                    	wann.sendMessage(`6283160624440@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break 
             case prefix+'sendbuffer':{
try{
 await reply('Tunggu sebentar...')
 wann.sendImage(m.chat, isUrl(q)[0], mess.done, m)
} catch (err){
 reply(err)
console.log(err)
}
}
break

//================================>ADD FITUR BY REGHY BOTZ <================================//
case prefix+'loli':
       case prefix+'husbu':
       case prefix+'milf':
       case prefix+'cosplay':
       case prefix+'wallml':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://Hikari.github.io`)
              let wipu = await fetchJson(`https://raw.githubusercontent.com/Wann-was/endak-tau/main/${command.slice(1)}.json`)
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              lolis = await getBuffer(wipi)
              wann.sendImage(m.chat, lolis, `Nih Kak😊`, m)
              break
            case prefix+'halah': case prefix+'hilih': case prefix+'huluh': case prefix+'heleh': case prefix+'holoh': 
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
case prefix+'manga':
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              if (!text) throw `Example : ${prefix + command} black rover`
              reply('Tunggu Ya Kakak😊, REGHY BOTZ  Carikan')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${text}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Title : ${get_result.title.romaji}\n`
              ini_txt += `English : ${get_result.title.english}\n`
              ini_txt += `Native : ${get_result.title.native}\n`
              ini_txt += `Format : ${get_result.format}\n`
              ini_txt += `Chapters : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Source : ${get_result.source}\n`
              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Score : ${get_result.averageScore}%\n`
              ini_txt += `Characters : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescription : ${get_result.description}`
              buff = await getBuffer(get_result.coverImage.large)
              wann.sendImage(m.chat, buff, `${ini_txt}`, m)
         break
         case prefix+'anime':
             if (!text) throw `Example : ${prefix + command} black rover`
             reply('Tunggu Ya Kakak😊, REGHY BOTZ  Carikan')
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${text}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Title : ${get_result.title.romaji}\n`
             ini_txt += `English : ${get_result.title.english}\n`
             ini_txt += `Native : ${get_result.title.native}\n`
             ini_txt += `Format : ${get_result.format}\n`
             ini_txt += `Episodes : ${get_result.episodes}\n`
             ini_txt += `Duration : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Season : ${get_result.season}\n`
             ini_txt += `Season Year : ${get_result.seasonYear}\n`
             ini_txt += `Source : ${get_result.source}\n`
             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Score : ${get_result.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             wann.sendImage(m.chat, thumbnail, `${ini_txt}`, m)
             break
      case prefix+'kusonime':
             if (!text) throw `Example : ${prefix + command} black rover`
             reply('Tunggu Ya Kakak😊, REGHY BOTZ  Carikan')
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             wann.sendImage(m.chat, ini_buffer, `${ini_txt}`, m)
             break
       case prefix+'otakudesu':
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              if (!text) throw `Example : ${prefix + command} black rover`
             reply('Tunggu Ya Kakak😊, REGHY BOTZ  Carikan')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title : ${get_result.title}\n`
              ini_txt += `Japanese : ${get_result.japanese}\n`
              ini_txt += `Judul : ${get_result.judul}\n`
              ini_txt += `Type : ${get_result.type}\n`
              ini_txt += `Episode : ${get_result.episodes}\n`
              ini_txt += `Aired : ${get_result.aired}\n`
              ini_txt += `Producers : ${get_result.producers}\n`
              ini_txt += `Genre : ${get_result.genres}\n`
              ini_txt += `Duration : ${get_result.duration}\n`
              ini_txt += `Studios : ${get_result.status}\n`
              ini_txt += `Rating : ${get_result.rating}\n`
              ini_txt += `Credit : ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              reply(ini_txt)
              break
              case prefix+'neko':
       case prefix+'kanna':
       case prefix+'sagiri':
       case prefix+'megumin':
       case prefix+'wallnime':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              reply('Tunggu Ya Kak😊, REGHY BOTZ  Carikan')
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command.slice(1)}?apikey=${lolkey}`)
              wann.sendImage(m.chat, buff, `Nih Kak😊`, m)
              break
       
       
    
              break
       case prefix+'nakanoitsuki':
       case prefix+'nakanonino':
       case prefix+'nakanomiku':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              reply(mess.wait)
              res = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${command.slice(1)}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              wann.sendImage(m.chat, random, `Nih Kak😊`, m)
              break
              case prefix+'lolkey':
       case prefix+'cekapikey':
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              if (!text) throw `Example : ${prefix + command} Textnya Mana Kak😡`
              anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`)
              teks = `*YOUR APIKEY*\n\n➸ Username= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://api.lolhuman.xyz`
              reply(teks)
              break
       case prefix+'storyanime':
              case prefix+'videoanime':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              reply('Tunggu Ya Kak😊, REGHY BOTZ  Carikan')
              anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
              wann.sendMessage(m.chat, { video: { url: anu.result }, mimetype: 'video/mp4', caption: `Nih Kak😊` }, { quoted: m })
              break
              case prefix+'doujindesu':
             if (!text) throw `Example : ${prefix + command} Textnya Mana Kak😡`
             reply('Tunggu Ya Kakak😊, REGHY BOTZ  Carikan')
             try {
             doujinnya = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${text}&apiKey=administrator`)
             let { data } = await doujinnya
             xixixai = `*Doujindesu Search*\n`
             for (let i = 0; i < data.length; i++) {
             xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
}
             buffer = await getBuffer(data[0].thumb)
             wann.sendImage(m.chat, buffer, xixixai, m)
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
             case prefix+'otakuongoing':              
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
              wann.sendImage(m.chat, buff, ot, m)
break

case prefix+'quotes':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
    quotes = quotes.result
    author = quotes.by
    quotes = quotes.quote
    reply(`_${quotes}_\n\n*├* ${author}*`)
    break
case prefix+'quotesanime':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
    quotes = quotes.result
    quote = quotes.quote
    char = quotes.character
    anime = quotes.anime
    episode = quotes.episode
    reply(`_${quote}_\n\n*├* ${char}*\n*├* ${anime} ${episode}*`)
    break
case prefix+'quotesdilan':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=${lolkey}`)
    reply(get_result.result)
   break
    break
case prefix+'quotesimage':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command.slice(1)}?apikey=${lolkey}`)
    wann.sendImage(m.chat, buff, `REGHY BOTZ  - By ©Lia`, m)
 break
case prefix+'faktaunik':
case prefix+'katabijak':
case prefix+'pantun':
case prefix+'bucin':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command.slice(1)}?apikey=${lolkey}`)
   reply(get_result.result)
        break;
    break
case prefix+'randomnama':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
   reply(anu.result)
        break;
    break
       // Movie & Story
case prefix+'lk21':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Link : ${get_result.link}\n`
    ini_txt += `Genre : ${get_result.genre}\n`
    ini_txt += `Views : ${get_result.views}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `Tahun : ${get_result.tahun}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
    ini_txt += `Location : ${get_result.location}\n`
    ini_txt += `Date Release : ${get_result.date_release}\n`
    ini_txt += `Language : ${get_result.Language}\n`
    ini_txt += `Link Download : ${get_result.link_dl}`
    thumbnail = await getBuffer(get_result.thumbnail)
    wann.sendImage(m.chat, thumbnail, `${ini_txt}`, m)
    break
case prefix+'drakorongoing':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = "Ongoing Drakor\n\n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Thumbnail : ${x.thumbnail}\n`
        ini_txt += `Year : ${x.category}\n`
        ini_txt += `Total Episode : ${x.total_episode}\n`
        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
    }
    reply(ini_txt)
    break
case prefix+'wattpad':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
    ini_url = args[1]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${lolkey}&url=${ini_url}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Motify date : ${get_result.modifyDate}\n`
    ini_txt += `Create date: ${get_result.createDate}\n`
    ini_txt += `Word : ${get_result.word}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Vote : ${get_result.vote}\n`
    ini_txt += `Reader : ${get_result.reader}\n`
    ini_txt += `Pages : ${get_result.pages}\n`
    ini_txt += `Description : ${get_result.desc}\n\n`
    ini_txt += `Story : \n${get_result.story}`
    thumbnail = await getBuffer(get_result.photo)
    wann.sendImage(m.chat, thumbnail, `${ini_txt}`, m)
    break
case prefix+'wattpadsearch':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${query}`)
    get_result = get_result.result
    ini_txt = "Wattpad Seach : \n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Url : ${x.url}\n`
        ini_txt += `Part : ${x.parts}\n`
        ini_txt += `Motify date : ${x.modifyDate}\n`
        ini_txt += `Create date: ${x.createDate}\n`
        ini_txt += `Coment count: ${x.commentCount}\n\n`
    }
    reply(ini_txt)
    break
case prefix+'cerpen':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Creator : ${get_result.creator}\n`
    ini_txt += `Story :\n${get_result.cerpen}`
    titid = ini_txt
   reply(titid)
    break
case prefix+'ceritahoror':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Story :\n${get_result.story}\n`
    buff = await getBuffer(get_result.thumbnail)
    wann.sendImage(m.chat, buff, `${ini_txt}`, m)
        break
    case prefix+'bisakah':
 if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					bisakah = body.slice(1)
					const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 🙉','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					wann.sendMessage(m.chat, { text: keh }, { quoted: m })
					break

case prefix+'kapan':
case prefix+'kapankah':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					kapankah = body.slice(1)
					const kapan =['Besok','YNTKTS','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					wann.sendMessage(m.chat, { text: koh }, { quoted: m })
					break

					
case prefix+'apakah':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					apakah = body.slice(1)
					const apa =['iya dong jelas itu','YNTKTS','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak 🙀','Haha mna mungkin 😎']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					wann.sendMessage(m.chat, { text: kah }, { quoted: m })
					break
					
case prefix+'bagaimanakah':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					wann.sendMessage(m.chat, { text: mana }, { quoted: m })
					break
					


case prefix+'goblokcek': case prefix+'jelekcek': case prefix+'rate':case prefix+'haram':case prefix+'gaycek':
case prefix+'lesbicek':case prefix+'gantengcek': case prefix+'cantikcek':case prefix+'begocek': case prefix+'suhucek':case prefix+'pintercek':
case prefix+'jagocek':case prefix+'nolepcek':case prefix+'babicek':case prefix+'bebancek':case prefix+'baikcek':
case prefix+'jahatcek':case prefix+'anjingcek':case prefix+'haramcek':case prefix+'pakboycek':
case prefix+'pakgirlcek':case prefix+'sangecek': case prefix+'bapercek':case prefix+'fakboycek':case prefix+'alimcek':case prefix+'suhucek':
case prefix+'fakgirlcek':case prefix+'kerencek':case prefix+'wibucek':case prefix+'pasarkascek':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[m.sender].limit -= 1 // -1 limit
cantik = body.slice(1)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
wann.sendMessage(m.chat, { text: yn }, { quoted: m })
break

case prefix+'readmore': case prefix+'more':
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
 if (!q.includes('|')) return  setReply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
reply( text1 + readmore + text2)
break

case prefix+'berkas':
case prefix+'pile':
if (m.isGroup) throw mess.private
if (!isWann) return reply(mess.owner)
if (args.length < 1) return reply ("*Mau nyari file apa kak*")
sendfile = `${q}`
anuu = fs.readFileSync(sendfile)
wann.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `${q}`}, {quoted:m})                  
///wann.sendMessage(m.chat, anuu, document, {mimetype: "application/octet-stream", filename: `${q}`, quoted: m})
break 

case prefix+'getcase':
if (!isWann) return reply(mess.owner)
if (args.length < 1) return reply ("*Mau nyari case apa kak*") 
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("wann.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply (`${getCase(q)}`)
break

case prefix+'getidgc':
if (!m.isGroup) return reply(mess.group)
reply (`${m.chat}`)
break
    

case prefix+'hu':
case prefix+'culik':
if (!m.isGroup) return reply(mess.group)
         if (!isWann) return reply(mess.owner)
  if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
  let pantek = []
  for (let i of groupMembers) {
      pantek.push(i.jid)
  }
  await wann.groupParticipantsUpdate(m.chat, [pantek], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 // wann.groupAdd(q, pantek)
  break
case prefix+'stalkig':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jessnolimit`)
                    username = args[1]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `Username : ${ini_result.username}\n`
                    ini_txt += `Full Name : ${ini_result.fullname}\n`
                    ini_txt += `Posts : ${ini_result.posts}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    wann.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})
                    break
                case prefix+'stalkgithub':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL-Human`)
                    username = args[1]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    await wann.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                case prefix+'stalktwitter':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
                    username = args[1]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    await wann.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                
                case prefix+'shortlink':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[1]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
                case prefix+'spamsms':
                if (!isPremium && !m.key.fromMe && !isWann) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[1]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${nomor}`)
                    reply("Success")
                    break
                    case prefix+'limit+': 
if (!global.db.users[m.sender].limit < 1) return reply(`S u k s e s Menambah Limit`) // respon ketika limit habis
db.users[m.sender].limit += 1
break
case prefix+'checklimit': 
reply(`Limit Kamu : *${global.db.users[m.sender].limit}*`)
break
case prefix+'react':
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!text) throw `Example : ${prefix + command} Emot Mana Kak😡`
const reactionMessage = {
    react: {
        text: `${text}`,
        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
    }
}

 wann.sendMessage(m.chat, reactionMessage)
 break
 
        // Menu Store
        case '/menu':
        const _0x540e19=_0xe2f0;(function(_0x3875e6,_0x3b8333){const _0x1e3abc=_0xe2f0,_0x1d921f=_0x3875e6();while(!![]){try{const _0x35063f=-parseInt(_0x1e3abc(0x116))/0x1*(parseInt(_0x1e3abc(0x117))/0x2)+parseInt(_0x1e3abc(0x118))/0x3+-parseInt(_0x1e3abc(0x123))/0x4+parseInt(_0x1e3abc(0x124))/0x5*(-parseInt(_0x1e3abc(0x11e))/0x6)+parseInt(_0x1e3abc(0x119))/0x7*(parseInt(_0x1e3abc(0x11f))/0x8)+parseInt(_0x1e3abc(0x11b))/0x9*(parseInt(_0x1e3abc(0x11d))/0xa)+parseInt(_0x1e3abc(0x120))/0xb;if(_0x35063f===_0x3b8333)break;else _0x1d921f['push'](_0x1d921f['shift']());}catch(_0x2fffe2){_0x1d921f['push'](_0x1d921f['shift']());}}}(_0x382e,0xa5a85));if(!m[_0x540e19(0x113)])return reply(mess[_0x540e19(0x126)]);if(!m['isGroup'])return reply(mess[_0x540e19(0x121)]);function _0x382e(){const _0x168404=['Belum\x20ada\x20list\x20message\x20di\x20database','3681qoYvza','558XWocIq','1463370dbgBPa','25858xyeYMY','Belum\x20ada\x20list\x20message\x20yang\x20terdaftar\x20di\x20group\x20ini','78507UnliSZ','key','10LTCObB','5269098UIDDCg','1104uKKPTq','21982851OXodDH','OnlyGrup','Menu','1684044zqFodo','5RMqlFF','length','group','isGroup','sendMessage'];_0x382e=function(){return _0x168404;};return _0x382e();}if(db_respon_list[_0x540e19(0x125)]===0x0)return reply(_0x540e19(0x115));if(!isAlreadyResponListGroup(from,db_respon_list))return reply(_0x540e19(0x11a));function _0xe2f0(_0x30f191,_0x15937e){const _0x382e3c=_0x382e();return _0xe2f0=function(_0xe2f00f,_0x11b420){_0xe2f00f=_0xe2f00f-0x113;let _0x524d7a=_0x382e3c[_0xe2f00f];return _0x524d7a;},_0xe2f0(_0x30f191,_0x15937e);}var arr_rows=[];for(let x of db_respon_list){x['id']===from&&arr_rows['push']({'title':x[_0x540e19(0x11c)],'rowId':x[_0x540e19(0x11c)]});}const listMessage={'text':'List\x20Menu','buttonText':_0x540e19(0x122),'sections':[{'title':'Pilih\x20salah\x20satu','rows':arr_rows}],'listType':0x1},sendMsg=await wann[_0x540e19(0x114)](m['chat'],listMessage);
        break
        case '/additem': case '/listadd':
        var _0x17b207=_0x1716;(function(_0x40fd08,_0x20d524){var _0x4c9885=_0x1716,_0xfcd92c=_0x40fd08();while(!![]){try{var _0x30fbd0=parseInt(_0x4c9885(0xf1))/0x1+-parseInt(_0x4c9885(0xf7))/0x2*(-parseInt(_0x4c9885(0x10c))/0x3)+-parseInt(_0x4c9885(0xf0))/0x4+parseInt(_0x4c9885(0x106))/0x5*(-parseInt(_0x4c9885(0xf6))/0x6)+parseInt(_0x4c9885(0xf4))/0x7*(parseInt(_0x4c9885(0xf8))/0x8)+-parseInt(_0x4c9885(0x10b))/0x9+parseInt(_0x4c9885(0x102))/0xa;if(_0x30fbd0===_0x20d524)break;else _0xfcd92c['push'](_0xfcd92c['shift']());}catch(_0x2a64db){_0xfcd92c['push'](_0xfcd92c['shift']());}}}(_0x46ae,0x65fe5));if(!m[_0x17b207(0xfc)])return reply(mess[_0x17b207(0xf3)]);if(!m['isGroup'])return reply(mess[_0x17b207(0xee)]);if(!isAdmins&&!isWann)return reply(_0x17b207(0xf9));var args1=text[_0x17b207(0x105)](',')[0x0],args2=text[_0x17b207(0x105)](',')[0x1];if(!q['includes'](','))return reply(_0x17b207(0xfd)+command['slice'](0x1)+_0x17b207(0x10a)+command['slice'](0x1)+'\x20Dm\x20Ml,\x20List');if(isAlreadyResponList(from,args1,db_respon_list))return reply('List\x20respon\x20dengan\x20key\x20:\x20*'+args1+_0x17b207(0xef));if(/image/[_0x17b207(0xfe)](mime)){let media=await wann['downloadAndSaveMediaMessage'](m['message'][_0x17b207(0x111)]||m[_0x17b207(0xf2)][_0x17b207(0x10d)]?.['contextInfo'][_0x17b207(0x110)][_0x17b207(0x111)],_0x17b207(0x109));const fd=new FormData();fd[_0x17b207(0x107)](_0x17b207(0x103),fs[_0x17b207(0x101)](media),_0x17b207(0xfa),_0x17b207(0x100)),fetch(_0x17b207(0x104),{'method':_0x17b207(0xff),'body':fd})[_0x17b207(0x10e)](_0x2fc2b3=>_0x2fc2b3[_0x17b207(0x10f)]())[_0x17b207(0x10e)](_0xa7827b=>{var _0x2ab621=_0x17b207;addResponList(from,args1,args2,!![],_0x2ab621(0xed)+_0xa7827b[0x0]['src'],db_respon_list),reply(_0x2ab621(0x108)+args1+'*');if(fs[_0x2ab621(0xfb)](media))fs[_0x2ab621(0xf5)](media);});}else addResponList(from,args1,args2,![],'-',db_respon_list),reply('Sukses\x20set\x20list\x20message\x20dengan\x20key\x20:\x20*'+args1+'*');function _0x1716(_0x16ca3d,_0x7443cf){var _0x46aeee=_0x46ae();return _0x1716=function(_0x171633,_0x2280ff){_0x171633=_0x171633-0xed;var _0x52af43=_0x46aeee[_0x171633];return _0x52af43;},_0x1716(_0x16ca3d,_0x7443cf);}function _0x46ae(){var _0x54a94b=['\x20*Nama\x20Item,Item*\x0a\x0a_Contoh_\x0a\x0a','4869000wxakSk','21oWmXtF','extendedTextMessage','then','json','quotedMessage','imageMessage','https://telegra.ph','OnlyGrup','*\x20sudah\x20ada\x20di\x20group\x20ini.','1025540CaxTYN','189375EJxGhF','message','group','833uWNLzW','unlinkSync','42QwAciL','62026fITMuv','20192DEXbnD','Only\x20Admins','.tmp','existsSync','isGroup','Gunakan\x20dengan\x20cara\x20','test','POST','.jpg','readFileSync','6414190TiFgQA','file','https://telegra.ph/upload','split','95065nYNqmX','append','Sukses\x20set\x20list\x20message\x20dengan\x20key\x20:\x20*','image'];_0x46ae=function(){return _0x54a94b;};return _0x46ae();}
            break
        case '/listdel':
        function _0x9395(_0x169c0d,_0xc3c88b){var _0x1bf3a7=_0x1bf3();return _0x9395=function(_0x939537,_0xc65200){_0x939537=_0x939537-0x1ad;var _0x178621=_0x1bf3a7[_0x939537];return _0x178621;},_0x9395(_0x169c0d,_0xc3c88b);}var _0x24bc8e=_0x9395;(function(_0xe8eeb7,_0x56ed54){var _0x2d1878=_0x9395,_0x57318a=_0xe8eeb7();while(!![]){try{var _0x4e08d8=-parseInt(_0x2d1878(0x1bf))/0x1+-parseInt(_0x2d1878(0x1c4))/0x2*(parseInt(_0x2d1878(0x1b2))/0x3)+parseInt(_0x2d1878(0x1c5))/0x4*(-parseInt(_0x2d1878(0x1ad))/0x5)+parseInt(_0x2d1878(0x1b7))/0x6*(parseInt(_0x2d1878(0x1b4))/0x7)+-parseInt(_0x2d1878(0x1b9))/0x8*(parseInt(_0x2d1878(0x1c0))/0x9)+parseInt(_0x2d1878(0x1ba))/0xa*(-parseInt(_0x2d1878(0x1af))/0xb)+parseInt(_0x2d1878(0x1c2))/0xc*(parseInt(_0x2d1878(0x1c1))/0xd);if(_0x4e08d8===_0x56ed54)break;else _0x57318a['push'](_0x57318a['shift']());}catch(_0x1a40af){_0x57318a['push'](_0x57318a['shift']());}}}(_0x1bf3,0x73d8c));if(!m[_0x24bc8e(0x1b5)])return reply(mess[_0x24bc8e(0x1b0)]);if(!m['isGroup'])return reply(mess[_0x24bc8e(0x1bc)]);function _0x1bf3(){var _0x1535e5=['11576EHxwEq','1003920wYjbKz','Only\x20Admins','OnlyGrup','Sukses\x20delete\x20list\x20message\x20dengan\x20key\x20*','\x20*Nama\x20Item*\x0a\x0a_Contoh_\x0a\x0a','67581gPCdCj','5256szjhhg','764296dAkQKX','360fRpzQX','Gunakan\x20dengan\x20cara\x20','50LVoDXt','72088CNAFDm','175oWPslQ','List\x20Item\x20dengan\x20Nama\x20*','22SOiJpG','group','slice','25179hctuEY','Belum\x20ada\x20list\x20message\x20di\x20database','28IYBWyI','isGroup','\x20Dm\x20Ml','997134YCHnRD','length'];_0x1bf3=function(){return _0x1535e5;};return _0x1bf3();}if(!isAdmins&&!isWann)return reply(_0x24bc8e(0x1bb));if(db_respon_list[_0x24bc8e(0x1b8)]===0x0)return reply(_0x24bc8e(0x1b3));if(!q)return reply(_0x24bc8e(0x1c3)+command[_0x24bc8e(0x1b1)](0x1)+_0x24bc8e(0x1be)+command[_0x24bc8e(0x1b1)](0x1)+_0x24bc8e(0x1b6));if(!isAlreadyResponList(from,q,db_respon_list))return reply(_0x24bc8e(0x1ae)+q+'*\x20tidak\x20ada\x20di\x20database!');delResponList(from,q,db_respon_list),reply(_0x24bc8e(0x1bd)+q+'*');
            break
        case '/update':
            var _0x5a16d0=_0x1d6c;(function(_0x448869,_0x1a3498){var _0x264464=_0x1d6c,_0x53a2cd=_0x448869();while(!![]){try{var _0x4999ac=-parseInt(_0x264464(0x132))/0x1*(parseInt(_0x264464(0x13f))/0x2)+parseInt(_0x264464(0x144))/0x3+parseInt(_0x264464(0x136))/0x4*(-parseInt(_0x264464(0x143))/0x5)+parseInt(_0x264464(0x12f))/0x6*(-parseInt(_0x264464(0x141))/0x7)+-parseInt(_0x264464(0x126))/0x8*(-parseInt(_0x264464(0x13c))/0x9)+-parseInt(_0x264464(0x13d))/0xa*(-parseInt(_0x264464(0x145))/0xb)+parseInt(_0x264464(0x122))/0xc;if(_0x4999ac===_0x1a3498)break;else _0x53a2cd['push'](_0x53a2cd['shift']());}catch(_0x3fd884){_0x53a2cd['push'](_0x53a2cd['shift']());}}}(_0x352b,0x77cd0));function _0x352b(){var _0x5a4d4b=['4RixFSn','quotedMessage','extendedTextMessage','unlinkSync','contextInfo','\x20Dm\x20Ml,\x20List','14787wvTWAy','70HiPjox','test','25742KFgwHk','append','289471LYcBJV','\x20*Nama\x20Item,Item*\x0a\x0a_Contoh_\x0a\x0a','4204555cOWxor','555ePwVOI','944009kuvUhQ','13767540fJtFPV','message','Sukses\x20update\x20respon\x20list\x20dengan\x20key\x20*','split','3064fGFuRh','Gunakan\x20dengan\x20cara\x20','src','includes','imageMessage','https://telegra.ph','image','*\x20belum\x20terdaftar\x20di\x20group\x20ini','Sukses\x20update\x20list\x20message\x20dengan\x20key\x20:\x20*','120BoyfYR','Maaf,\x20untuk\x20key\x20*','readFileSync','17zlPlLd','existsSync','slice','downloadAndSaveMediaMessage'];_0x352b=function(){return _0x5a4d4b;};return _0x352b();}if(!m['isGroup'])return reply(mess['OnlyGrup']);function _0x1d6c(_0x375a7a,_0x2b9c6a){var _0x352bc8=_0x352b();return _0x1d6c=function(_0x1d6c92,_0x4b1055){_0x1d6c92=_0x1d6c92-0x122;var _0x542056=_0x352bc8[_0x1d6c92];return _0x542056;},_0x1d6c(_0x375a7a,_0x2b9c6a);}if(!isAdmins&&!isWann)return reply('Only\x20Admins');var args1=q['split'](',')[0x0],args2=q[_0x5a16d0(0x125)](',')[0x1];if(!q[_0x5a16d0(0x129)](','))return reply(_0x5a16d0(0x127)+command[_0x5a16d0(0x134)](0x1)+_0x5a16d0(0x142)+command['slice'](0x1)+_0x5a16d0(0x13b));if(!isAlreadyResponListGroup(from,db_respon_list))return reply(_0x5a16d0(0x130)+args1+_0x5a16d0(0x12d));if(/image/[_0x5a16d0(0x13e)](mime)){let media=await wann[_0x5a16d0(0x135)](m[_0x5a16d0(0x123)][_0x5a16d0(0x12a)]||m[_0x5a16d0(0x123)][_0x5a16d0(0x138)]?.[_0x5a16d0(0x13a)][_0x5a16d0(0x137)][_0x5a16d0(0x12a)],_0x5a16d0(0x12c));const fd=new FormData();fd[_0x5a16d0(0x140)]('file',fs[_0x5a16d0(0x131)](media),'.tmp','.jpg'),fetch('https://telegra.ph/upload',{'method':'POST','body':fd})['then'](_0x1f0444=>_0x1f0444['json']())['then'](_0x291b28=>{var _0x41dee=_0x5a16d0;updateResponList(from,args1,args2,!![],_0x41dee(0x12b)+_0x291b28[0x0][_0x41dee(0x128)],db_respon_list),reply(_0x41dee(0x12e)+args1+'*');if(fs[_0x41dee(0x133)](media))fs[_0x41dee(0x139)](media);});}else updateResponList(from,args1,args2,![],'-',db_respon_list),reply(_0x5a16d0(0x124)+args1+'*');
            break

        case prefix+'tambah':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one + nilai_two}`)
            break
        case prefix+'kurang':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one - nilai_two}`)
            break
        case prefix+'kali':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one * nilai_two}`)
            break
        case prefix+'bagi':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one / nilai_two}`)
            break
        case 'cekproses':
            if (!isGroup) return
            if (!isWann && !groupAdmins) return
            if (!m.quoted) return reply('Reply Bukti Pembayaran!!')
            if (!m.quoted.text) {
            reply('Catatannya mana?')
            }
            if (m.quoted.text) {
            let catad = m.quoted.text
            let nimb = quoted.sender
            let prses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${catad}\n\nPesanan @${nimb.split("@")[0]} sedang di proses!`
            mentions(prses, [nimb], true)
            }
            break
        case '.P': case'P': case'.p': case'p':
            if (!m.isGroup) return
            if (!isWann && !groupAdmins) return
            let numb = m.sender
            let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${text}\n\nPesanan @${numb.split("@")[0]} sedang di proses!`
            mentions(proses, numb, true)
            m.quoted.copyNForward(`6283160624440@s.whatsapp.net`, true)
            wann.sendMessage(`6283160624440@s.whatsapp.net`, {text: proses })
            break
            case prefix+'react':
                var _0x443d08=_0x3888;(function(_0x57f38e,_0xe98f90){var _0x3dc4c7=_0x3888,_0x367da9=_0x57f38e();while(!![]){try{var _0xd27893=parseInt(_0x3dc4c7(0x150))/0x1*(parseInt(_0x3dc4c7(0x148))/0x2)+parseInt(_0x3dc4c7(0x145))/0x3+-parseInt(_0x3dc4c7(0x14b))/0x4*(parseInt(_0x3dc4c7(0x14e))/0x5)+-parseInt(_0x3dc4c7(0x14f))/0x6*(-parseInt(_0x3dc4c7(0x151))/0x7)+parseInt(_0x3dc4c7(0x14a))/0x8+parseInt(_0x3dc4c7(0x144))/0x9*(parseInt(_0x3dc4c7(0x153))/0xa)+-parseInt(_0x3dc4c7(0x140))/0xb;if(_0xd27893===_0xe98f90)break;else _0x367da9['push'](_0x367da9['shift']());}catch(_0x526484){_0x367da9['push'](_0x367da9['shift']());}}}(_0x3070,0x7eee9));if(!isWann)return reply(_0x443d08(0x141));if(!isQuotedMsg)return reply(_0x443d08(0x14c));if(args[_0x443d08(0x146)]<0x2)return reply(_0x443d08(0x154));if(!isEmoji(args[0x1]))return reply(_0x443d08(0x142));function _0x3888(_0x5b65fd,_0x101d3e){var _0x3070ef=_0x3070();return _0x3888=function(_0x3888b7,_0x54dfb1){_0x3888b7=_0x3888b7-0x140;var _0x41ca74=_0x3070ef[_0x3888b7];return _0x41ca74;},_0x3888(_0x5b65fd,_0x101d3e);}if(isEmoji(args[0x1])[_0x443d08(0x146)]>0x1)return reply(_0x443d08(0x147));var reactMsg={'reactionMessage':{'key':{'remoteJid':m[_0x443d08(0x149)],'fromMe':m[_0x443d08(0x152)]['fromMe'],'id':m[_0x443d08(0x152)]['id'],'participant':m[_0x443d08(0x152)][_0x443d08(0x14d)]},'text':args[0x1]}};wann[_0x443d08(0x143)](m[_0x443d08(0x149)],reactMsg);function _0x3070(){var _0x103efb=['18882dZpWzf','2750583vAHgQp','length','Satu\x20aja\x20emojinya','22588dKILYW','chat','4387728gyIAfg','4151012QKmjws','Balas\x20pesannya','sender','5VzOfEZ','133062YsmzbK','83SGVnJR','252HNdVrR','quotedMsg','10OCJqKx','Masukkan\x201\x20emoji','18100863tcHVRF','wann\x20Aja','Itu\x20bukan\x20emoji!','sendMessageFromContent'];_0x3070=function(){return _0x103efb;};return _0x3070();}
                      break
          case prefix+'addjudultugas':
            const _0x1ef6f2=_0x5aec;(function(_0x1c8c1e,_0x4a970c){const _0x1344d1=_0x5aec,_0x291a3b=_0x1c8c1e();while(!![]){try{const _0x1b6740=parseInt(_0x1344d1(0xb5))/0x1*(parseInt(_0x1344d1(0xba))/0x2)+-parseInt(_0x1344d1(0xb6))/0x3*(-parseInt(_0x1344d1(0xb4))/0x4)+-parseInt(_0x1344d1(0xac))/0x5*(parseInt(_0x1344d1(0xb9))/0x6)+parseInt(_0x1344d1(0xb2))/0x7*(parseInt(_0x1344d1(0xae))/0x8)+-parseInt(_0x1344d1(0xb0))/0x9*(parseInt(_0x1344d1(0xaa))/0xa)+-parseInt(_0x1344d1(0xab))/0xb*(parseInt(_0x1344d1(0xad))/0xc)+parseInt(_0x1344d1(0xa7))/0xd;if(_0x1b6740===_0x4a970c)break;else _0x291a3b['push'](_0x291a3b['shift']());}catch(_0x4aafd8){_0x291a3b['push'](_0x291a3b['shift']());}}}(_0x3859,0x41c9d));function _0x3859(){const _0x492124=['4wRPhDS','7PpwgJS','413607VJxYXA','push','Tugas\x20sudah\x20ditambahkan,\x20untuk\x20menambahkan\x20tugas\x20menggunakan\x20command\x20','6EhphaU','66176NCCPrO','7542366dXxSUy','addjudultugas\x20|\x20<judul\x20tugas>','Buat\x20list\x20dengan\x20judul\x0a\x0aContoh\x20:\x20','10Jdvbnb','55PwHskc','942010jBWzjA','906360zLjvVr','8ChzUlh','addtugas\x20|\x20<nama\x20tugas>','1940877vxFfUq','Mohon\x20untuk\x20reset\x20tugas\x20terlebih\x20dahulu\x20dengan\x20command\x20','710549QJZYlQ','length'];_0x3859=function(){return _0x492124;};return _0x3859();}if(args[_0x1ef6f2(0xb3)]===0x0)return reply(_0x1ef6f2(0xa9)+prefix+_0x1ef6f2(0xa8));if(judullist[_0x1ef6f2(0xb3)]>0x0)return reply(_0x1ef6f2(0xb1)+prefix+'resettugas');function _0x5aec(_0x142cce,_0x401e2a){const _0x3859bb=_0x3859();return _0x5aec=function(_0x5aec74,_0x202932){_0x5aec74=_0x5aec74-0xa7;let _0x3d09e0=_0x3859bb[_0x5aec74];return _0x3d09e0;},_0x5aec(_0x142cce,_0x401e2a);}const isijudullist=q['split']('|')[0x1],judulin=judullist[_0x1ef6f2(0xb7)](isijudullist);if(judulin)return reply(_0x1ef6f2(0xb8)+prefix+_0x1ef6f2(0xaf));
            break;
        
        case prefix+'addtugas':
            const _0x371ff8=_0x327d;(function(_0x1de418,_0x76211e){const _0x255dd8=_0x327d,_0x360c4d=_0x1de418();while(!![]){try{const _0x357048=parseInt(_0x255dd8(0x15f))/0x1*(-parseInt(_0x255dd8(0x158))/0x2)+-parseInt(_0x255dd8(0x15b))/0x3*(parseInt(_0x255dd8(0x154))/0x4)+-parseInt(_0x255dd8(0x15a))/0x5+parseInt(_0x255dd8(0x159))/0x6*(parseInt(_0x255dd8(0x15e))/0x7)+-parseInt(_0x255dd8(0x153))/0x8+-parseInt(_0x255dd8(0x152))/0x9*(parseInt(_0x255dd8(0x151))/0xa)+parseInt(_0x255dd8(0x15c))/0xb;if(_0x357048===_0x76211e)break;else _0x360c4d['push'](_0x360c4d['shift']());}catch(_0x2e61e7){_0x360c4d['push'](_0x360c4d['shift']());}}}(_0x5ef6,0xc7edf));function _0x327d(_0x338c01,_0x939f8){const _0x5ef668=_0x5ef6();return _0x327d=function(_0x327d13,_0x13b8bc){_0x327d13=_0x327d13-0x151;let _0x1e2178=_0x5ef668[_0x327d13];return _0x1e2178;},_0x327d(_0x338c01,_0x939f8);}if(args[_0x371ff8(0x157)]===0x0)return reply('Tambah\x20daftar\x20Tugas\x20dengan\x20isi\x0a\x0aContoh\x20:\x20'+prefix+_0x371ff8(0x15d));function _0x5ef6(){const _0xa8ce31=['577563reFIhn','568375zwXKBR','90bzZlei','531243tzppiI','5879136XnHYFZ','8540Whflnc','split','push','length','4rKAGUW','24SNqzPW','7801550RyBZYv','2019dIEkOg','64778175ThcAJK','addtugas\x20|\x20<nama\x20tugas>'];_0x5ef6=function(){return _0xa8ce31;};return _0x5ef6();}if(judullist['length']===0x0)return reply('Mohon\x20untuk\x20membuat\x20judul\x20Tugas\x20terlebih\x20dahulu\x20dengan\x20command\x20'+prefix+'addjudultugas');const isilist=q[_0x371ff8(0x155)]('|')[0x1],isiin=daftarlist[_0x371ff8(0x156)](isilist);if(isiin){const isidaftar=ngelistisi();reply(isidaftar);}
          break;
        
        case prefix+'hapustugas':
            function _0x4cce(_0x50a561,_0xae2bfb){const _0x55b727=_0x55b7();return _0x4cce=function(_0x4cce9d,_0x149748){_0x4cce9d=_0x4cce9d-0xf2;let _0xbed8e9=_0x55b727[_0x4cce9d];return _0xbed8e9;},_0x4cce(_0x50a561,_0xae2bfb);}const _0x3fc345=_0x4cce;(function(_0x2c5deb,_0x17648d){const _0x40c3e7=_0x4cce,_0x5dcecb=_0x2c5deb();while(!![]){try{const _0x2c581a=-parseInt(_0x40c3e7(0x104))/0x1*(-parseInt(_0x40c3e7(0xf5))/0x2)+-parseInt(_0x40c3e7(0xf8))/0x3+-parseInt(_0x40c3e7(0xf4))/0x4+-parseInt(_0x40c3e7(0xf7))/0x5*(-parseInt(_0x40c3e7(0xfb))/0x6)+-parseInt(_0x40c3e7(0xfe))/0x7*(parseInt(_0x40c3e7(0xf2))/0x8)+-parseInt(_0x40c3e7(0x101))/0x9*(-parseInt(_0x40c3e7(0xfa))/0xa)+parseInt(_0x40c3e7(0xfd))/0xb*(parseInt(_0x40c3e7(0x102))/0xc);if(_0x2c581a===_0x17648d)break;else _0x5dcecb['push'](_0x5dcecb['shift']());}catch(_0xf78c18){_0x5dcecb['push'](_0x5dcecb['shift']());}}}(_0x55b7,0xe4fa0));if(args['length']===0x0)return reply('Hapus\x20item\x20pada\x20List\x20dengan\x20nomor\x20item\x0a\x0aContoh\x20:\x20'+prefix+_0x3fc345(0xf3));if(daftarlist[_0x3fc345(0x103)]===0x0)return reply(_0x3fc345(0xf6)+prefix+_0x3fc345(0xff));if(judullist[_0x3fc345(0x103)]===0x0)return reply(_0x3fc345(0x100)+prefix+'addjudultugas');var i=args[0x1];i--;const hapusinlist=daftarlist[_0x3fc345(0xf9)](i,0x1);function _0x55b7(){const _0x103bdb=['splice','1463930DNVoim','8772enbnQR','Item\x20dengan\x20nomor\x20','1507dhbfso','2370438dCYxwD','addtugas\x20|\x20<nama\x20tugas>','Mohon\x20untuk\x20membuat\x20judul\x20tugas\x20terlebih\x20dahulu\x20dengan\x20command\x20','90LJXeLJ','36732tkhVDl','length','192GdASVn','24TAtYyp','hapustugas\x201','6833548crQXOS','13262nYuQhh','Tambah\x20daftar\x20tugas\x20dengan\x20isi\x0a\x0aContoh\x20:\x20','2965xXiXEf','1083684FjpBzk'];_0x55b7=function(){return _0x103bdb;};return _0x55b7();}if(hapusinlist){reply(_0x3fc345(0xfc)+args+'\x20telah\x20dihapus\x20!');const isidaftar=ngelistisi();reply(isidaftar);}
          break;

        case prefix+'listtugas':
            const _0x250eb9=_0xecba;(function(_0x3050ba,_0x214ce3){const _0x49d686=_0xecba,_0x1d9ca9=_0x3050ba();while(!![]){try{const _0x1c6be6=parseInt(_0x49d686(0x129))/0x1*(-parseInt(_0x49d686(0x127))/0x2)+parseInt(_0x49d686(0x131))/0x3*(-parseInt(_0x49d686(0x12b))/0x4)+parseInt(_0x49d686(0x12e))/0x5+parseInt(_0x49d686(0x132))/0x6+parseInt(_0x49d686(0x130))/0x7+-parseInt(_0x49d686(0x12d))/0x8+-parseInt(_0x49d686(0x12f))/0x9;if(_0x1c6be6===_0x214ce3)break;else _0x1d9ca9['push'](_0x1d9ca9['shift']());}catch(_0x1e4163){_0x1d9ca9['push'](_0x1d9ca9['shift']());}}}(_0x5bb0,0xb59e4));if(daftarlist[_0x250eb9(0x12c)]===0x0)return reply('Tambah\x20daftar\x20tugas\x20dengan\x20isi\x0a\x0aContoh\x20:\x20'+prefix+'addtugas\x20|\x20<ini\x20tugas>');if(judullist['length']===0x0)return reply(_0x250eb9(0x128)+prefix+_0x250eb9(0x12a));const isidaftar=ngelistisi();function _0x5bb0(){const _0x7d1b72=['4749976HXhRkh','655833qZzFHD','8912034PQVXRT','2nIgBsV','Mohon\x20untuk\x20membuat\x20judul\x20tugas\x20terlebih\x20dahulu\x20dengan\x20command\x20','956486ogYoNx','addjudultugas','4picviN','length','9267472GwOjgc','4866810PzQzfA','538470LaPYKt'];_0x5bb0=function(){return _0x7d1b72;};return _0x5bb0();}function _0xecba(_0x1d0d85,_0x307756){const _0x5bb0a7=_0x5bb0();return _0xecba=function(_0xecbacf,_0x430f95){_0xecbacf=_0xecbacf-0x127;let _0x12b897=_0x5bb0a7[_0xecbacf];return _0x12b897;},_0xecba(_0x1d0d85,_0x307756);}reply(isidaftar);
          break;

        case prefix+'resettugas':
        var _0xb55103=_0x25f4;function _0x2fe7(){var _0x372142=['pop','48BiCQbY','length','12954046vxEqRp','26720930hmhJpQ','13444376exuKJg','114VCAHnm','399795FvnqiM','6487eKBRZD','tugas\x20sudah\x20di\x20reset\x20!','1721898cyCSGQ','386zDCjeQ','430743DsDZQr'];_0x2fe7=function(){return _0x372142;};return _0x2fe7();}(function(_0x6f17b,_0x19c4b8){var _0x4567bf=_0x25f4,_0x4b12df=_0x6f17b();while(!![]){try{var _0x5c50c6=-parseInt(_0x4567bf(0x195))/0x1*(parseInt(_0x4567bf(0x198))/0x2)+parseInt(_0x4567bf(0x18c))/0x3*(parseInt(_0x4567bf(0x18e))/0x4)+-parseInt(_0x4567bf(0x194))/0x5*(-parseInt(_0x4567bf(0x193))/0x6)+-parseInt(_0x4567bf(0x190))/0x7+-parseInt(_0x4567bf(0x192))/0x8+-parseInt(_0x4567bf(0x197))/0x9+parseInt(_0x4567bf(0x191))/0xa;if(_0x5c50c6===_0x19c4b8)break;else _0x4b12df['push'](_0x4b12df['shift']());}catch(_0xe24898){_0x4b12df['push'](_0x4b12df['shift']());}}}(_0x2fe7,0xe5748));while(daftarlist[_0xb55103(0x18f)]){daftarlist[_0xb55103(0x18d)]();}while(judullist[_0xb55103(0x18f)]){judullist[_0xb55103(0x18d)]();}function _0x25f4(_0x31dcba,_0x3c61c0){var _0x2fe757=_0x2fe7();return _0x25f4=function(_0x25f408,_0x29ffa6){_0x25f408=_0x25f408-0x18c;var _0x415a8b=_0x2fe757[_0x25f408];return _0x415a8b;},_0x25f4(_0x31dcba,_0x3c61c0);}if(daftarlist['length']===0x0&&judullist['length']===0x0)return reply(_0xb55103(0x196));
          break;
          case prefix+'dashboard':
	        var _0x39ea7e=_0x4667;(function(_0x2cd410,_0x2828d5){var _0x4fa655=_0x4667,_0x53f865=_0x2cd410();while(!![]){try{var _0x767468=parseInt(_0x4fa655(0xde))/0x1*(parseInt(_0x4fa655(0xd3))/0x2)+-parseInt(_0x4fa655(0xe8))/0x3*(parseInt(_0x4fa655(0xe2))/0x4)+-parseInt(_0x4fa655(0xdd))/0x5*(-parseInt(_0x4fa655(0xdf))/0x6)+parseInt(_0x4fa655(0xe9))/0x7+-parseInt(_0x4fa655(0xe3))/0x8*(-parseInt(_0x4fa655(0xd6))/0x9)+-parseInt(_0x4fa655(0xd7))/0xa*(parseInt(_0x4fa655(0xd8))/0xb)+-parseInt(_0x4fa655(0xe5))/0xc*(parseInt(_0x4fa655(0xe6))/0xd);if(_0x767468===_0x2828d5)break;else _0x53f865['push'](_0x53f865['shift']());}catch(_0x2b8921){_0x53f865['push'](_0x53f865['shift']());}}}(_0xed97,0xbb824),addCountCmd('#dashboard',sender,_cmd));var posi=await getPosiCmdUser(sender,_cmdUser);_cmdUser[posi]['db'][_0x39ea7e(0xe1)]((_0x529f9f,_0x101d58)=>_0x529f9f[_0x39ea7e(0xe0)]<_0x101d58['count']?0x1:-0x1),_cmd[_0x39ea7e(0xe1)]((_0xac91e2,_0x1a28e9)=>_0xac91e2[_0x39ea7e(0xe0)]<_0x1a28e9['count']?0x1:-0x1);var posi=await getPosiCmdUser(sender,_cmdUser),jumlahCmd=_cmd[_0x39ea7e(0xdb)];function _0xed97(){var _0xc34144=['botname','\x0a•\x20USER\x20:\x20','207LfDGZr','10QIdQRi','1610587FmVYyU','\x20:\x20','\x0a*Most\x20Command\x20User*\x0a','length','*Most\x20Command\x20Global*\x0a','5OFqrTH','5zlugiy','8737446bUIeyp','count','sort','136424wDJMns','502896MnCOEp','\x20DASHBOARD*\x0a\x0a*HIT*\x0a•\x20GLOBAL\x20:\x20','48uCMbKM','8008195ayiPeS','nama','87TIXlje','10160115ABvBfE','5630gkxdbO'];_0xed97=function(){return _0xc34144;};return _0xed97();}if(jumlahCmd>0xa)jumlahCmd=0xa;function _0x4667(_0x3519fa,_0x1223f1){var _0xed97c7=_0xed97();return _0x4667=function(_0x4667b8,_0x471fee){_0x4667b8=_0x4667b8-0xd3;var _0x36d00e=_0xed97c7[_0x4667b8];return _0x36d00e;},_0x4667(_0x3519fa,_0x1223f1);}var jumlah=_cmdUser[posi]['db'][_0x39ea7e(0xdb)];if(jumlah>0x5)jumlah=0x5;var totalUser=0x0;for(let x of _cmdUser[posi]['db']){totalUser=totalUser+x['count'];}var total=0x0;for(let o of _cmd){total=total+o[_0x39ea7e(0xe0)];}var teks='*'+global[_0x39ea7e(0xd4)]+_0x39ea7e(0xe4)+total+_0x39ea7e(0xd5)+totalUser+'\x0a\x0a';teks+=_0x39ea7e(0xdc);for(let u=0x0;u<jumlahCmd;u++){teks+='•\x20'+_cmd[u][_0x39ea7e(0xe7)]+_0x39ea7e(0xd9)+_cmd[u][_0x39ea7e(0xe0)]+'\x0a';}teks+=_0x39ea7e(0xda);for(let i=0x0;i<jumlah;i++){teks+='•\x20'+_cmdUser[posi]['db'][i][_0x39ea7e(0xe7)]+'\x20:\x20'+_cmdUser[posi]['db'][i][_0x39ea7e(0xe0)]+'\x0a';}reply(teks);
            break
//================================>ADD FITUR BY REGHY BOTZ <================================//

default:
	if(isCmd) {
		if (args[0].length > 1) {
			var detect = await Dym(command.split(prefix)[1], listCmd)
			if (detect !== null) {
				reply(`Mungkin yang anda maksud adalah ${prefix + detect} abaikan jika salah!`)
			}
			if (detect === null) {
				reply(`Maaf kak fitur ${command} tidak terdaftar di list ${prefix+'menu'}`)
			}
		} else {
			var detect2 = await Dym(args[1], listCmd)
			if (detect2 !== null) {
				reply(`Pastikan antara simbol/prefix jangan dipisah, contoh ${prefix+args[1]}`)
			}
		}
	}
	if (budy.startsWith('=>')) {
		function Return(sul) {
			sat = JSON.stringify(sul, null, 2)
			bang = util.format(sat)
			if (sat == undefined) {
				bang = util.format(sul)
			}
			return m.reply(bang)
		}
		try {
			reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
		} catch (e) {
			m.reply(String(e))
		}
	}

	if (budy.startsWith('>')) {
		try {
			let evaled = await eval(budy.slice(2))
			if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
			await m.reply(evaled)
		} catch (err) {
			await m.reply(String(err))
		}
	}
	if (budy.startsWith('$')) {
		exec(budy.slice(2), (err, stdout) => {
			if(err) return m.reply(err)
			if (stdout) return m.reply(stdout)
		})
	}
	if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
		this.anonymous = this.anonymous ? this.anonymous : {}
		let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
		if (room) {
			if (/^.*(next|leave|start)/.test(m.text)) return
			if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
			let other = [room.a, room.b].find(user => user !== m.sender)
			m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
				contextInfo: {
					...m.msg.contextInfo,
					forwardingScore: 0,
					isForwarded: true,
					participant: other
				}
			} : {})
		}
		return !0
	}
	if (isCmd && budy.toLowerCase() != undefined) {
		if (m.chat.endsWith('broadcast')) return
		if (m.isBaileys) return
		let msgs = global.db.database
		if (!(budy.toLowerCase() in msgs)) return
		wann.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
	}
	}
	} catch (err) {
	wann.sendMessage(`6283160624440@s.whatsapp.net`, {text: `*Bug Report From:* ${util.format(err)}` })
	}
}
