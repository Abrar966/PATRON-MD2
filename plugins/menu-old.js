const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require("os");
const axios = require('axios');

cmd({
    pattern: "menu3",
    desc: "menu the bot",
    category: "menu2",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "⚡",
            key: m.key
        }
    });
    try {
        const dec = `╭━━━〔 *PATRON-MD Main Menu* 〕━━━╮
┃ 🚹 *Owner:* ${config.OWNER_NAME}
┃ ⚙️ *Mode:* ${config.MODE}
┃ 🧠 *Type:* NodeJs (Multi Device)
┃ ⌨️ *Prefix:* ${config.PREFIX}
┃ 🧾 *Version:* 2.0.0 Beta
╰━━━━━━━━━━━━━━━━━━━━━━━━╯
╭━━━〔 *PATRON-MD* 〕━━━╮
┃★ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*  

╭━━〔 🧩 *Command Categories* 〕━━╮
┃ 🤖 Aimenu
┃ 🎭 Animemenu
┃ 😹 Reactions
┃ 🔁 Convertmenu
┃ 🎉 Funmenu
┃ ⬇️ Dlmenu
┃ ⚒️ Listcmd
┃ 🏠 Mainmenu
┃ 👥 Groupmenu
┃ 📜 Allmenu
┃ 👑 Ownermenu
┃ 🧩 Othermenu
┃ 🖌️ Logo
┃ 📦 Repo
┃ ⚙️ Settingmenu
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* 
`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/e71nan.png' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send cool voice note with context
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Itzpatron/PATRON-DATA/raw/refs/heads/main/autovoice/SLAVA_FUNK.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 2,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363303045895814@newsletter',
                    newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`❌ Error:\n${e}`);
    }
});

cmd({
    pattern: "logo",
    alias: ["logomenu"],
    desc: "menu the bot",
    category: "menu",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "🧃",
            key: m.key
        }
    });
    try {
        let dec = `╭━━〔 *Logo List* 〕━━┈⊷
┃★ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*          
┃◈╭─────────────·๏
┃◈┃• neonlight
┃◈┃• blackpink
┃◈┃• dragonball
┃◈┃• 3dcomic
┃◈┃• america
┃◈┃• naruto
┃◈┃• sadgirl
┃◈┃• clouds
┃◈┃• futuristic
┃◈┃• 3dpaper
┃◈┃• eraser
┃◈┃• sunset
┃◈┃• leaf
┃◈┃• galaxy
┃◈┃• sans
┃◈┃• boom
┃◈┃• hacker
┃◈┃• devilwings
┃◈┃• nigeria
┃◈┃• bulb
┃◈┃• angelwings
┃◈┃• zodiac
┃◈┃• luxury
┃◈┃• paint
┃◈┃• frozen
┃◈┃• castle
┃◈┃• tatoo
┃◈┃• valorant
┃◈┃• bear
┃◈┃• typography
┃◈┃• birthday
┃◈└───────────┈⊷
╰──────────────┈⊷`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e71nan.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: "ᴘᴀᴛʀᴏɴTᴇᴄʜＸ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "reactions",
    desc: "Shows the reaction commands",
    category: "menu",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "💫",
            key: m.key
        }
    });
    try {
        let dec = `╭━━〔 *Reactions Menu* 〕━━┈⊷
┃★ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*          
┃◈╭─────────────·๏
┃◈┃• bully @tag
┃◈┃• cuddle @tag
┃◈┃• cry @tag
┃◈┃• hug @tag
┃◈┃• awoo @tag
┃◈┃• kiss @tag
┃◈┃• lick @tag
┃◈┃• pat @tag
┃◈┃• smug @tag
┃◈┃• bonk @tag
┃◈┃• yeet @tag
┃◈┃• blush @tag
┃◈┃• smile @tag
┃◈┃• wave @tag
┃◈┃• highfive @tag
┃◈┃• handhold @tag
┃◈┃• nom @tag
┃◈┃• bite @tag
┃◈┃• glomp @tag
┃◈┃• slap @tag
┃◈┃• kill @tag
┃◈┃• happy @tag
┃◈┃• wink @tag
┃◈┃• poke @tag
┃◈┃• dance @tag
┃◈┃• cringe @tag
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* `;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e71nan.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                        serverMessageId: 144
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "⤵️",
            key: m.key
        }
    });
    try {
        let dec = `╭━━〔 *Download Menu* 〕━━┈⊷
┃★ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*          
┃◈╭─────────────·๏
┃◈┃• facebook
┃◈┃• mediafire
┃◈┃• tiktok
┃◈┃• twitter
┃◈┃• Insta
┃◈┃• apk
┃◈┃• img
┃◈┃• tt2
┃◈┃• pins
┃◈┃• apk2
┃◈┃• fb2
┃◈┃• pinterest 
┃◈┃• ttsearch
┃◈┃• spotify
┃◈┃• play
┃◈┃• play2
┃◈┃• play3
┃◈┃• play4
┃◈┃• play5
┃◈┃• play6
┃◈┃• play7
┃◈┃• play8
┃◈┃• play9
┃◈┃• play10
┃◈┃• audio
┃◈┃• video
┃◈┃• video2
┃◈┃• video3
┃◈┃• video4
┃◈┃• video5
┃◈┃• video6
┃◈┃• video7
┃◈┃• video8
┃◈┃• video9
┃◈┃• video10
┃◈┃• ytmp3
┃◈┃• ytmp4
┃◈┃• song
┃◈┃• darama
┃◈┃• gdrive
┃◈┃• ssweb
┃◈┃• tiks
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* `;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e71nan.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "⤵️",
            key: m.key
        }
    });
    try
       {
        let dec = `╭━━〔 *Group Menu* 〕━━┈⊷
┃★ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*          
┃◈╭─────────────·๏
┃◈┃• grouplink
┃◈┃• antitag
┃◈┃• kickall
┃◈┃• kickall2
┃◈┃• kickall3
┃◈┃• add
┃◈┃• remove
┃◈┃• kick
┃◈┃• out
┃◈┃• getlid
┃◈┃• setlid
┃◈┃• promote 
┃◈┃• demote
┃◈┃• dismiss 
┃◈┃• revoke
┃◈┃• savecontact
┃◈┃• goodbye
┃◈┃• welcome
┃◈┃• delete 
┃◈┃• getpic
┃◈┃• ginfo
┃◈┃• pdm
┃◈┃• delete 
┃◈┃• requestlist
┃◈┃• updategname
┃◈┃• updategdesc
┃◈┃• acceptall
┃◈┃• rejectall
┃◈┃• senddm
┃◈┃• nikal
┃◈┃• mute
┃◈┃• unmute
┃◈┃• lockgc
┃◈┃• unlockgc
┃◈┃• invite
┃◈┃• tag
┃◈┃• hidetag
┃◈┃• tagall
┃◈┃• tagadmins
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* `;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e71nan.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "⤵️",
            key: m.key
        }
    });
    try {

        let dec = `╭━━〔 *Fun Menu* 〕━━┈⊷
┃★ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*          
┃◈╭─────────────·๏
┃◈┃• shapar
┃◈┃• rate
┃◈┃• insult
┃◈┃• hack
┃◈┃• ship
┃◈┃• character
┃◈┃• pickup 
┃◈┃• joke
┃◈┃• hrt
┃◈┃• hpy
┃◈┃• syd
┃◈┃• anger
┃◈┃• shy
┃◈┃• kiss
┃◈┃• mon
┃◈┃• cunfuzed
┃◈┃• setpp
┃◈┃• hand
┃◈┃• nikal
┃◈┃• hold
┃◈┃• hug
┃◈┃• nikal
┃◈┃• hifi
┃◈┃• poke
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* `;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e71nan.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "🤖",
            key: m.key
        }
    });
    try {
        let dec = `╭━━〔 *Other Menu* 〕━━┈⊷
┃★ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*          
┃◈╭─────────────·๏
┃◈┃• timenow
┃◈┃• date
┃◈┃• count
┃◈┃• calculate
┃◈┃• countx
┃◈┃• flip
┃◈┃• coinflip
┃◈┃• rcolor
┃◈┃• roll
┃◈┃• fact
┃◈┃• cpp
┃◈┃• otpbox
┃◈┃• tempnum
┃◈┃• templist 
┃◈┃• inbox
┃◈┃• tempmail
┃◈┃• bible
┃◈┃• rw
┃◈┃• fancy
┃◈┃• logo <text>
┃◈┃• define
┃◈┃• news
┃◈┃• movie
┃◈┃• weather
┃◈┃• srepo
┃◈┃• insult
┃◈┃• save
┃◈┃• wikipedia
┃◈┃• gpass
┃◈┃• githubstalk
┃◈┃• ytstalk
┃◈┃• wstalk
┃◈┃• tiktokstalk
┃◈┃• xstalk
┃◈┃• yts
┃◈┃• ytv
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* `;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e71nan.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "🚹",
            key: m.key
        }
    });
    
    try {
        let dec = `╭━━〔 *Main Menu* 〕━━┈⊷
┃◈ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ* 
┃◈╭─────────────·๏
┃◈│  *Games*
┃◈│ • squidgame
┃◈│ • *More soon*         
┃◈╭─────────────·๏
┃◈┃• ping
┃◈┃• live 
┃◈┃• alive
┃◈┃• alive2
┃◈┃• runtime
┃◈┃• uptime 
┃◈┃• repo
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* `;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e71nan.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "🔰",
            key: m.key
        }
    });
    try {
        let dec = `╭━━〔 *Owner Menu* 〕━━┈⊷
┃★ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*          
┃◈╭─────────────·๏
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• listcmd
┃◈┃• allmenu
┃◈┃• setaza
┃◈┃• aza
┃◈┃• repo
┃◈┃• block
┃◈┃• unblock
┃◈┃• vv
┃◈┃• vv2 / 🥹
┃◈┃• getpp
┃◈┃• setgpp
┃◈┃• setpp
┃◈┃• restart
┃◈┃• listsudo
┃◈┃• setsudo
┃◈┃• delsudo
┃◈┃• shutdown
┃◈┃• update
┃◈┃• checkupdate
┃◈┃• pfilter
┃◈┃• gfilter
┃◈┃• listfilter
┃◈┃• pstop
┃◈┃• gstop
┃◈┃• alive
┃◈┃• alive2
┃◈┃• ping 
┃◈┃• gjid
┃◈┃• jid
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* `;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e71nan.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "🥀",
            key: m.key
        }
    });
    try {
        let dec = `╭━━〔 *Convert Menu* 〕━━┈⊷
┃★ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*          
┃◈╭─────────────·๏
┃◈┃• sticker
┃◈┃• sticker2
┃◈┃• emojimix
┃◈┃• fancy
┃◈┃• take
┃◈┃• tomp3
┃◈┃• tomp3
┃◈┃• toptt
┃◈┃• toimg
┃◈┃• tts2
┃◈┃• ts3
┃◈┃• aivoice
┃◈┃• topdf
┃◈┃• tts
┃◈┃• trt
┃◈┃• base64
┃◈┃• unbase64
┃◈┃• binary
┃◈┃• dbinary
┃◈┃• tinyurl
┃◈┃• urldecode
┃◈┃• urlencode
┃◈┃• tourl
┃◈┃• repeat 
┃◈┃• ask
┃◈┃• readmore
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* `;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e71nan.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "🧚",
            key: m.key
        }
    });
    try {
          let dec = `╭━━〔 *Anime Menu* 〕━━┈⊷
┃★ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*            
┃◈╭─────────────·๏
┃◈┃• fack
┃◈┃• dog
┃◈┃• awoo
┃◈┃• garl
┃◈┃• waifu
┃◈┃• neko
┃◈┃• megnumin
┃◈┃• neko
┃◈┃• maid
┃◈┃• loli
┃◈┃• animegirl
┃◈┃• animegirl
┃◈┃• animegirl1
┃◈┃• animegirl2
┃◈┃• animegirl3
┃◈┃• animegirl4
┃◈┃• animegirl5
┃◈┃• anime1
┃◈┃• anime1
┃◈┃• anime2
┃◈┃• anime3
┃◈┃• anime4
┃◈┃• anime5
┃◈┃• animenews
┃◈┃• foxgirl
┃◈┃• naruto
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* `;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e71nan.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "🤖",
            key: m.key
        }
    });
    try {
        let dec = `╭━━〔 *Ai Menu* 〕━━┈⊷
┃★ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*          
┃◈╭─────────────·๏
┃◈┃• patonai
┃◈┃• gpt
┃◈┃• openai
┃◈┃• gemini
┃◈┃• meta
┃◈┃• deepseek
┃◈┃• imagine 
┃◈┃• imagine2
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* `;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e71nan.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// Add settings menu command
cmd({
    pattern: "settingmenu",
    desc: "Shows the settings commands",
    category: "menu",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    await conn.sendMessage(m.key.remoteJid, {
        react: {
            text: "⚙️",
            key: m.key
        }
    });
    try {
        let dec = `╭━━━〔 *Settings Menu* 〕━━━┈⊷
┃★ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*  
┃★╭──────────────
┃★│ 🔧 *Bot Settings*
┃★│ • allvar [view all settings]
┃★│ • setprefix [prefix]
┃★│ • mode [private/public]
┃★│ • auto-typing [on/off]
┃★│ • mention-reply [on/off]
┃★│ • always-online [on/off]
┃★│ • auto-recording [on/off]
┃★│ • auto-seen [on/off]
┃★│ • status-react [on/off]
┃★│ • read-message [on/off]
┃★│ • anti-bad [on/off]
┃★│ • auto-reply [on/off]
┃★│ • auto-react [on/off]
┃★│ • status-reply [on/off]
┃★│ • sticker-name [name]
┃★│ • custom-react [on/off]
┃★│ • status-msg [message]
┃★│ • antidel-path [same/log]
┃★│ • setcustomemojis [emojis]
┃★│ • owner-number [number]
┃★│ • owner-name [name]
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* `;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e71nan.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 2,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303045895814@newsletter',
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ',
                        serverMessageId: 144
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
