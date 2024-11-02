//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349124252744";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUF1bU9DT0I4ejNvaDNCZkFLOHpkdml6TGdrNGw4MTB2TndMaXBVNlFsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFOYmkvNVdOa0ZmVysrNUFsazEyZGhwVEgvaUpTVE9JWXBtdngwWHYzaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQTk4b25ZRDE0NGh0Ky9JZlNxNDJYTE5mYlFWOFhrZXdodFdjMkprWVV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRYzczeDFKdThRdkZJMFRRZE9IN2hxV2J4TkJBbFAvYjdQbnhRdEVYaFJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBGVi9aUEJjWGFVWis5eklROTRIVnFJZE9ERGNGclAyOFpCbzYxays0M2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdLSUFQQjlKMmJRN21qVFdiVDFLYitCK0JMSG0rV2dzUGV4MFR6am16UUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZOT2dGK0tMajdURHlSNXRWZW84RTQrRHFxKytaV0JwWUtaZlRCS1hsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXpnVXRRaEdjVS9HODM1aDVpT21neDh3cGx2bnRCMFFXR2VDRytoU2JBcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJOXFlNC9iK3FsdXJtdEFra1VuZ0h1WGd2Q0FzWHVqeGxHQ1ZqUXpIOGpCTVM0cDg0alFhYWNqUGpiZzB0cERYWVhiN2pmY2xuZHZhUDF4U0dIdmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJZQUhxU0VyaTFSaURNUFdZU3d6eW1tK0pRMWw0SStaMWVneXRvbVdFWGhBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjQyNTI3NDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkEwMzJGQzE4MTJBNDI3RjI5NjEyQUM1RTAyQUZDMzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDUzNjA1N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyNDI1Mjc0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNDUxNTY0OUM5ODk0NTkxQkEzMjQ5OEM3NUFFQ0ZCRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNTM2MDU4fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4cGVsN1NpQVFCMlpKMFozdnFJMmN3IiwicGhvbmVJZCI6ImJjZDZkOWUwLTkzYTAtNGM5MS1hNTNlLTRmMDM5YTJkMTQ1NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyUGV4dUJQVzdXOFFBaHQwMkxncnZCK0sxWFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0d5K3kxTlpDVmFqV0QvRHlic2VoZDBNeTFnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxZUkpQSEhCIiwibWUiOnsiaWQiOiIyMzQ5MTI0MjUyNzQ0OjMxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfmKoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ptbzJJNEhFT2pFbDdrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRSVE5sOUFpQ1NQUXY5ajN2N1p6c2lNRTJKSVhtWElCQVJpQk9yRXI5MUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InVnZUhzOE4wRGt1Zjg0N2pQall4azBCMDVHT0JDNGhWTXkvUXAzM0MwYXArenVhanVhbHVUenBnVFdBR2wwdEgxeWpyeWNJZzNhTXEwZENTaVB4c0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwbE4vODB3SW5WNDI2L3JUV3RWS04zQWZOUDlwMEhOR0ZSQUpESEw3dWlkMFNpeXBBazIzN25QSEpvQnBnbWdqVVJJc1FDUVlUd2lLWWttR0RRTlVnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjQyNTI3NDQ6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUVVelpmUUlna2owTC9ZOTcrMmM3SWpCTmlTRjVseUFRRVlnVHF4Sy9kUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDUzNjA1NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHcjUifQ===" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
