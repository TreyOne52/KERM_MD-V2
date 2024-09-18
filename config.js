//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "50947233535";
global.owner = process.env.OWNER_NUMBER || "50947233535";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9LRTduczFDMEFOM1pabVo4TjRQeHY5bE5VMWxkV25SdEI1ZGt2VUdtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXpLRDRkczZLSDFTQUR4Y1ZYWXRnV2VydHdOSTBWVE5jUDVhTkQ4Y0RSbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRTExdnltaG9CR3J1ZFJpRUg5b2lrbnp0NjZxNWFBa0lFMmRYbm0veUdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIOFRHSXgrWTVJL2lMckNRRklSWnk5TmxMVEtIeFF6cVVpRjZxOFlzOFZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGN2hLQXR4SG8wSWwyWnRBbVh4WEExUFkwM2x6VjBzUmVyVHh1YmxFa1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlNTlNxc3pKWnlUbWpVMVlLK2U0dDhHcmJxOGREb2hTN3I3R3N1YnBkVFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFB6UHhhUFhlT0o5OFlTUWwxOVRMMDN3dnRnWXJUc3FwaFVTQ0I4N3lIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXg4RUtjbHQ2M3JuWnBMT0FIWWRETmIxeHpuQThzVit1ZFdFaFNvNmp4bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxQSkFoYng0RlRHd20yT2dtNnNFNzRjZktidXRoRnRGNEJWOGJPbHpMMDdpc20xVGl2b29YQXBzMFJRT2YyZ0hlQWxuZ0FDeWg1dTdpekRFd1lXVkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6IlNoSjF2cEVnUjBEUjViSUc4TmFITjhZWEVDRzBMQkQvRjF1L0JQWXowT2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijd6SmFveWt1UXZ1am1LeklBeFRMYXciLCJwaG9uZUlkIjoiMGRlNWIyODktMTNhYS00MzRkLWFkZTYtOTUxMjMzNWEyOTllIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpWb1JsSllRZFlPQ1ArR0xXMG5FWU13NC9JVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1bWtBMU1kcFk3eThUbmliM3dVSTJrZDFicUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRkRHVDRDWkIiLCJtZSI6eyJpZCI6IjUwOTQ3MjMzNTM1OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKcr+C/kOC8teC9vfCdm63wnZul8J2bqPCdm6rwnZGH8J2bqeqWovCdm6jwnZuv8J2brvCdkLfwnZuv8J2RhfCdkYbwnZup8J2brvCThYLwlqSNIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJU0N4dHdERUxqbHE3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnUUdZRFZUa091VnhzQ2ZINE5qVmJ6MmtxamlUcDJsdU1VVXdtOG5xTUFvPSIsImFjY291bnRTaWduYXR1cmUiOiJXS3ZNbmk2WXMxSEo4SnFlakdsKzc3Y1dvb25yc3k4V293Rjlwdk1BdmNaYm1lWlc1U3Z2OGlpRitvaWhOL2FRZjRQckRhT1oxbjdTYVlucWJGcS9BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYzhLTVd1enZCKytGaVJUZ2xkOHQvS3FNOSs3MHh4dmE5RXdKUEZNZ0FXTzBqSFRyVU1xcytucFZMa2ZEOXh1Wjh3L0U5QzNRbkNNVlMyNFZUQ3p6Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0NzIzMzUzNToxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZRUJtQTFVNURybGNiQW54K0RZMVc4OXBLbzRrNmRwYmpGRk1Kdko2akFLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NjczNjA2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZWOSJ9"
module.exports = 
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "∆",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Mahito",
  botname: process.env.BOT_NAME || "Mahito",
  ownername: process.env.OWNER_NAME || "Mahito",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
