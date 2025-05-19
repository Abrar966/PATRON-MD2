const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu2",
    alias: ["allmenu","fullmenu"],
    use: '.menu2',
    desc: "Show all bot commands",
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
        let dec = `╭━━〔 🚀 *PATRON-MD* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 👑 Owner : *${config.OWNER_NAME}*
┃◈┃• ⚙️ Prefix : *[${config.PREFIX}]*
┃◈┃• 📦 Version : *2.0.0*
┃◈┃• ⏱️ Runtime : *${runtime(process.uptime())}*
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 📥 *DOWNLOAD MENU* 〕━━┈⊷
​┃◈ *ᴜsᴇ .ᴘᴀᴛʀᴏɴ ᴛᴏ sᴇᴇ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs ᴀʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ*
┃◈╭─────────────────·๏
┃◈┃• 🟦 facebook
┃◈┃• 📁 mediafire
┃◈┃• 🎵 tiktok
┃◈┃• 🐦 twitter
┃◈┃• 📷 insta
┃◈┃• 📦 apk
┃◈┃• 🖼️ img
┃◈┃• ▶️ tt2
┃◈┃• 📌 pins
┃◈┃• 🔄 apk2
┃◈┃• 🔵 fb2
┃◈┃• 📍 pinterest
┃◈┃• 🎶 spotify
┃◈┃• 🌐 ttsearch
┃◈┃• 🎧 play
┃◈┃• 🎧 play2
┃◈┃• 🔉 audio
┃◈┃• 🎬 video
┃◈┃• 📹 video2
┃◈┃• 🎵 ytmp3
┃◈┃• 📹 ytmp4
┃◈┃• 🎶 song
┃◈┃• 🎬 darama
┃◈┃• ☁️ gdrive
┃◈┃• 🌐 ssweb
┃◈┃• 🎵 tiks
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 👥 *GROUP MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🔗 grouplink
┃◈┃• 🔗 antitag
┃◈┃• 🚪 kickall
┃◈┃• 🚷 kickall2
┃◈┃• 🚫 kickall3
┃◈┃• 🚪 setlid
┃◈┃• 🚪 getlid
┃◈┃• ➕ add
┃◈┃• ➖ remove
┃◈┃• 👢 kick
┃◈┃• 👤 out
┃◈┃• 👤 savecontact
┃◈┃• ⬆️ promote
┃◈┃• ⬇️ demote
┃◈┃• 🚮 dismiss
┃◈┃• 🔄 revoke
┃◈┃• 👋 goodbye
┃◈┃• 🎉 welcome
┃◈┃• 🗑️ delete
┃◈┃• 🖼️ getpic
┃◈┃• ℹ️ ginfo
┃◈┃• 📝 requestlist
┃◈┃• 📜 pdm
┃◈┃• ✏️ updategname
┃◈┃• 📝 updategdesc
┃◈┃• 📩 acceptall
┃◈┃• 📩 rejectall
┃◈┃• 📨 senddm
┃◈┃• 🏃 nikal
┃◈┃• 🔇 mute
┃◈┃• 🔊 unmute
┃◈┃• 🔒 lockgc
┃◈┃• 🔓 unlockgc
┃◈┃• 📩 invite
┃◈┃• #️⃣ tag
┃◈┃• 🏷️ hidetag
┃◈┃• @️⃣ tagall
┃◈┃• 👔 tagadmins
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎭 *REACTIONS MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 👊 bully @tag
┃◈┃• 🤗 cuddle @tag
┃◈┃• 😢 cry @tag
┃◈┃• 🤗 hug @tag
┃◈┃• 🐺 awoo @tag
┃◈┃• 💋 kiss @tag
┃◈┃• 👅 lick @tag
┃◈┃• 🖐️ pat @tag
┃◈┃• 😏 smug @tag
┃◈┃• 🔨 bonk @tag
┃◈┃• 🚀 yeet @tag
┃◈┃• 😊 blush @tag
┃◈┃• 😄 smile @tag
┃◈┃• 👋 wave @tag
┃◈┃• ✋ highfive @tag
┃◈┃• 🤝 handhold @tag
┃◈┃• 🍜 nom @tag
┃◈┃• 🦷 bite @tag
┃◈┃• 🤗 glomp @tag
┃◈┃• 👋 slap @tag
┃◈┃• 💀 kill @tag
┃◈┃• 😊 happy @tag
┃◈┃• 😉 wink @tag
┃◈┃• 👉 poke @tag
┃◈┃• 💃 dance @tag
┃◈┃• 😬 cringe @tag
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎨 *LOGO MAKER* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 💡 neonlight
┃◈┃• 🎀 blackpink
┃◈┃• 🐉 dragonball
┃◈┃• 🎭 3dcomic
┃◈┃• 🇺🇸 america
┃◈┃• 🍥 naruto
┃◈┃• 😢 sadgirl
┃◈┃• ☁️ clouds
┃◈┃• 🚀 futuristic
┃◈┃• 📜 3dpaper
┃◈┃• ✏️ eraser
┃◈┃• 🌇 sunset
┃◈┃• 🍃 leaf
┃◈┃• 🌌 galaxy
┃◈┃• 💀 sans
┃◈┃• 💥 boom
┃◈┃• 💻 hacker
┃◈┃• 😈 devilwings
┃◈┃• 🇳🇬 nigeria
┃◈┃• 💡 bulb
┃◈┃• 👼 angelwings
┃◈┃• ♈ zodiac
┃◈┃• 💎 luxury
┃◈┃• 🎨 paint
┃◈┃• ❄️ frozen
┃◈┃• 🏰 castle
┃◈┃• 🖋️ tatoo
┃◈┃• 🔫 valorant
┃◈┃• 🐻 bear
┃◈┃• 🔠 typography
┃◈┃• 🎂 birthday
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 👑 *OWNER MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 👑 owner
┃◈┃• 📜 menu
┃◈┃• 📜 menu2
┃◈┃• 📊 vv
┃◈┃• 📊 vv2 / 🥹
┃◈┃• 📋 listcmd
┃◈┃• 📚 allmenu
┃◈┃• 📦 repo
┃◈┃• 🚫 block
┃◈┃• ✅ unblock
┃◈┃• 🖼️ getpp
┃◈┃• 📜 listsudo
┃◈┃• 👑 setsudo
┃◈┃• 🗑️ delsudo
┃◈┃• 🖼️ setpp
┃◈┃• 🖼️ getpp
┃◈┃• 🖼️ getgpp
┃◈┃• 🔄 restart
┃◈┃• ⏹️ shutdown
┃◈┃• 🔄 update
┃◈┃• 📦 checkupdate
┃◈┃• 🔢setaza
┃◈┃• 🔢 aza
┃◈┃• 💚 alive
┃◈┃• 💚 alive2
┃◈┃• 🏓 ping
┃◈┃• 🆔 gjid
┃◈┃• 🆔 jid
┃◈│• 🛠️ pfilter
┃◈│• 🛠️ gfilter 
┃◈│• 🛠️ listfilter
┃◈│• 🛠️ pstop
┃◈│• 🛠️ gstop
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎉 *FUN MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🥳 squidgame
┃◈┃• 🤪 shapar
┃◈┃• ⭐ rate
┃◈┃• 🤬 insult
┃◈┃• 💻 hack
┃◈┃• 💘 ship
┃◈┃• 🎭 character
┃◈┃• 💌 pickup
┃◈┃• 😆 joke
┃◈┃• ❤️ hrt
┃◈┃• 😊 hpy
┃◈┃• 😔 syd
┃◈┃• 😠 anger
┃◈┃• 😳 shy
┃◈┃• 💋 kiss
┃◈┃• 🧐 mon
┃◈┃• 😕 cunfuzed
┃◈┃• 🖼️ setpp
┃◈┃• ✋ hand
┃◈┃• 🏃 nikal
┃◈┃• 🤲 hold
┃◈┃• 🤗 hug
┃◈┃• 🏃 nikal
┃◈┃• 🎵 hifi
┃◈┃• 👉 poke
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🔄 *CONVERT MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🏷️ sticker
┃◈┃• 🏷️ sticker2
┃◈┃• 😀 emojimix
┃◈┃• ✨ fancy
┃◈┃• 🖼️ take
┃◈┃• 🎵 tomp3
┃◈┃• 🎵 toptt
┃◈┃• 🖼️ toimg
┃◈┃• 🗣️ tts
┃◈┃• 🗣️ tts2
┃◈┃• 🗣️ tts3
┃◈┃• 🗣️ aivoice
┃◈┃• 🖼️ topdf
┃◈┃• 🌐 trt
┃◈┃• 🔢 base64
┃◈┃• 🔠 unbase64
┃◈┃• 010 binary
┃◈┃• 🔤 dbinary
┃◈┃• 🔗 tinyurl
┃◈┃• 🌐 urldecode
┃◈┃• 🌐 urlencode
┃◈┃• 🌐 url
┃◈┃• 🔁 repeat
┃◈┃• ❓ ask
┃◈┃• 📖 readmore
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🤖 *AI MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🤖 patonai
┃◈┃• 🤖 gpt
┃◈┃• 🤖 openai
┃◈┃• 🔵 gemini
┃◈┃• 🧠 meta
┃◈┃• 📦 deepseek
┃◈┃• 🎨 imagine
┃◈┃• 🖼️ imagine2
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 ⚡ *MAIN MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈│• 🛠️ *Games*
┃◈┃• 🦑 squidgame
┃◈┃•  *More soon*
┃◈╭─────────────────·๏
┃◈┃• 🏓 ping
┃◈┃• 🏓 ping2
┃◈┃• 🚀 speed
┃◈┃• 📡 live
┃◈┃• 💚 alive
┃◈┃• 💚 alive2
┃◈┃• ⏱️ runtime
┃◈┃• ⏳ uptime
┃◈┃• 📊 ytstalk
┃◈┃• 📊 wstalk
┃◈┃• 📊 tiktokstalk
┃◈┃• 📊 xstalk
┃◈┃• 📦 repo
┃◈┃• 👑 owner
┃◈┃• 📜 menu
┃◈┃• 📜 menu2
┃◈┃• 🔄 restart
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎎 *ANIME MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🤬 fack
┃◈┃• ✅ truth
┃◈┃• 😨 dare
┃◈┃• 🐶 dog
┃◈┃• 🐺 awoo
┃◈┃• 👧 garl
┃◈┃• 👰 waifu
┃◈┃• 🐱 neko
┃◈┃• 🧙 megnumin
┃◈┃• 🐱 neko
┃◈┃• 👗 maid
┃◈┃• 👧 loli
┃◈┃• 🎎 animegirl
┃◈┃• 🎎 animegirl1
┃◈┃• 🎎 animegirl2
┃◈┃• 🎎 animegirl3
┃◈┃• 🎎 animegirl4
┃◈┃• 🎎 animegirl5
┃◈┃• 🎬 anime1
┃◈┃• 🎬 anime2
┃◈┃• 🎬 anime3
┃◈┃• 🎬 anime4
┃◈┃• 🎬 anime5
┃◈┃• 📰 animenews
┃◈┃• 🦊 foxgirl
┃◈┃• 🍥 naruto
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━━〔 *Settings Menu* 〕━━━┈⊷  
┃★╭──────────────
┃★│• 🛠️ allvar [view all settings] 
┃★│• 🔤 setprefix [prefix] 
┃★│• 🔒 mode [private/public] 
┃★│• ⌨️ auto-typing [on/off] 
┃★│• 📢 mention-reply [on/off] 
┃★│• 🌐 always-online [on/off] 
┃★│• 🎥 auto-recording [on/off] 
┃★│• 👀 auto-seen [on/off] 
┃★│• ❤️ status-react [on/off] 
┃★│• 📖 read-message [on/off] 
┃★│• 🚫 anti-bad [on/off] 
┃★│• 👀 antidel-path [same/log]
┃★│• 💬 auto-reply [on/off] 
┃★│• 😍 auto-react [on/off] 
┃★│• 🔄 status-reply [on/off] 
┃★│• 🏷️ sticker-name [name] 
┃★│• ✨ custom-react [on/off] 
┃★│• 📦 status-msg [message]
┃★│• 😎 setcustomemojis [emojis] 
┃★│• 📞 owner-number [number] 
┃★│• 🧑 owner-name [name] 
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭━━〔 ℹ️ *OTHER MENU* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 🕒 timenow
┃◈┃• 📅 date
┃◈┃• 🔢 count
┃◈┃• 🧮 calculate
┃◈┃• 🔢 countx
┃◈┃• 🎲 flip
┃◈┃• 🪙 coinflip
┃◈┃• 🎨 rcolor
┃◈┃• 🎲 roll
┃◈┃• ℹ️ fact
┃◈│• 📨 otpbox 
┃◈│• 📞 tempnum 
┃◈│• 📋 templist
┃◈┃• 📧 tempmail
┃◈┃• 📩 inbox
┃◈┃• 💻 cpp
┃◈┃• 🎲 rw
┃◈┃• 💑 pair
┃◈┃• ✨ fancy
┃◈┃• 🎨 logo <text>
┃◈┃• 📖 define
┃◈┃• 📖 bible
┃◈┃• 📰 news
┃◈┃• 🎬 movie
┃◈┃• ☀️ weather
┃◈┃• 📦 srepo
┃◈┃• 🤬 insult
┃◈┃• 💾 save
┃◈┃• 🌐 wikipedia
┃◈┃• 🔑 gpass
┃◈┃• 👤 githubstalk
┃◈┃• 🔍 yts
┃◈┃• 📹 ytv
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴀᴛʀᴏɴ TᴇᴄʜＸ 🚹* `;

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
                        newsletterName: 'ᴘᴀᴛʀᴏɴTᴇᴄʜＸ 🚹',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Itzpatron/PATRON-DATA/raw/refs/heads/main/autovoice/SLAVA_FUNK.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});
