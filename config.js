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
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349037004393";
global.owner = process.env.OWNER_NUMBER || "23490370043)3";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVA2S0MwUkw1QVhuV2xmL0xwRTJvenhCYzVqai9wWlRXVFNOY3pLRnRVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZCtsaERicFVab2JWcVRWZUZUbnoxTC9TRTl3NFA0Yzg2YlBkb1JEZlN3bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Q0NjZzllV2tsazNRNVJ2VCtQSmg5SzZpcVFGRlk2dTZWWXF2NGZrVG1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsS09aOFZoVDQ0UndITldySk5sa1JSL2Npb1Iza1BCL0FERVpkWkpOL3lBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFISUVqelNEZmxYU2Frai91aElnZk9zenNZM0RaeWJoRjFhaGZRU1psR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImMxeWpwL1BmZDgwNTVaVkkzaWhOY0dpZWhyNlRnMnByenpZcUttRFJjbk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FNNGJNVi9rNEZxTWkwcjNCMkFVdHM1NG84NjhMNnh2SEU1MWlRbDhFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYi9nNkNGbmI1dVIxd0FidG5Pb0pkRXpvUzZxWGVPSDVLa1dVeGx2d29sND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1OSHRveGYySGMwZ01WcFRTY0lKNjlrY0s4c2R4d3VVTDdwU1h4RW5HY1NmTWRZTzEweUhDZGQvZzFsWjJ6VnRhck9DbXZsYm5sclV2OFd0Ymx6RGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjksImFkdlNlY3JldEtleSI6IlpacVJqdTBjbHJWaGtGYSttNEVOaWd0bGJBVGdTc0RZTUI0NEgzR21pK3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImlEc2hFVWxfU2hHSktrYmNwX0VHYXciLCJwaG9uZUlkIjoiNzkwYTk1Y2YtNjVjNC00YWRhLTg4ZjMtOGVmNzdhYzQ2YTBhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlloVlhPb1dReXNNMm1ZUFpzcGZUYWVYRnA1TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2c1NsNTYzVlhGYVJzYWsreEw1YzV6YWVtcTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0g3RUxKS0UiLCJtZSI6eyJpZCI6IjIzNDkwMzcwMDQzOTM6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQk9UIERFUExPWUVSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPTGF1SXNCRU5uQ2s3a0dHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLdE1Uak5nejBEdndHQURqb2hUbG5tUVlOOGQrYmM1Zm11dFFYRk5oeUFJPSIsImFjY291bnRTaWduYXR1cmUiOiIyNGFkS1RwcWU4RVcxYnJ2dDZJREl3ZGxkb1VLeldHYWVFb3FNQm1VVHZaQnVwQTgvWGs2SHI1VUlUakFya1l5akRjZDVvSVViWGtQcGRHWVI2TC9BUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR1RHa3UxSnI3ays3d3FLWFFBZ01HNkRDNXFlMVhGY0xybXduZ2pKVmpzazRpSmRCS014a2Vtbk9sVnFWOE1UUVZpSFVoWW53NmdFdUxuSE9LajZTZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDM3MDA0MzkzOjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNyVEU0ellNOUE3OEJnQTQ2SVU1WjVrR0RmSGZtM09YNXJyVUZ4VFljZ0MifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA0NzAyNDZ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "BOT DEPLOYER",
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
