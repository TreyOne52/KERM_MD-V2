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
global.sudo = process.env.SUDO || "50940933899";
global.owner = process.env.OWNER_NUMBER || "50940933899";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VXSTNRVUNoakNRcU56K2xkOEd0V2pxb1FwSFdNbW9SYmIraTF3TlNVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2l1RmYzWXl1VStVSFY2UEUxS1NDYmptemVvWFFpWGRZVmdVTG9RaXREWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQTZFbEN0N0ZpTTRhVy9TNVZCMlA2dDVHNmtrS2ZLSENTOWprRDZMU20wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtM1ZjSnE3Z29WcnNtUGNaOExrVTlWQWFvLzJEdURDdXk5QU5Cenh0bGdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhDZmJ2R2F0NEhHbitWaEx0N3NkeTZ0SGlNUjAzMENCdkExTzBKSllZblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI3Qmg2LzFRVVpTZVhMMkQwazVzazVYSGJ2WlVuVmRCOUhHQjN4TThBRFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVZZ0pub2x3elVHRitXY3RRZjJwNnBaWGZTZGgrMlAvZUpVaVZQMW8yUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG5oUXJ2MjU5eFpOMFhqZS9LRTI1eHZMVU9Qb3NhT0ppRkhjeUZrV1FRbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZMa0oyNGdRUE0vamI5MUlaSk1xSHF4aXVXWWlxNDZlaVNqcVd0VjgxMjdwcUJPTGR0QUozRFNDTTBVUXgrMWF2SXpLZ0czSUczU1RTakV2UnZNN0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiJ4d0xqRWcreFgwc3FaT3lrRjRkOHZrV0I2bkZ4ZFB6VlNsTVNQZ3czbGp3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQwOTMzODk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIyRUM4NTI0NjBDOTRFNzQxMUQ1RDlENkExMzU5NUY1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY5NzE5NDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQwOTMzODk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ5MkEyQUEwQ0E4ODg1NjZCRjdBNTlFREE0ODlCMDE1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY5NzE5NDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQwOTMzODk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQxODU4OUZCRTI4REY2NUJBMzExMEZFODUwQjQyNzhCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY5NzE5NDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQwOTMzODk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE3RjQ5RkNFQkM0NjM1MkJBQkI4RTJEMEY3QTgwRjU1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY5NzE5NDV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZ6eDljYm5XUnJPVkdnZ0I0NlNPblEiLCJwaG9uZUlkIjoiZmQ0YTc5ZGMtZjYzZS00OWNjLTk5MDctODcyOTAxODMxYTAyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhyNVB2QUVyamMweG9ML21YVk9Uc3Y0dWRuVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVK01zTURHdWVra1QvUThqVDNlN3NzL3VJSk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWVRETkxKRjIiLCJtZSI6eyJpZCI6IjUwOTQwOTMzODk5OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+MueKDn+KDovCfkZFUUkVZ8J2En+Kcrs2i4ombT05F4pyu4oOd8J+MueKDn+KDovCfkZEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lydG44TURFSmVBdnJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijl6Q2pMNDhPTGQ5azBFTkRXOU1QRUxVTVVPT2d6TkhwcHd6bkRydGFHRmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1FVHliTkhGckVJb2dRRS9nclRrNEtkQzhwd0Z2c2RUaEZXdVdOT2s2T1ZBdGplTnR5K2UxNGlvbWJGbmU4YUlaSXBZeVlKQllhbWZDSTFBaDAyMEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzQkNCQmJVMVpZNGRjdUdDbVdmVEU3eGFKSzNvaUNnM0pEcnRvdjlhMlVac3JjYXVvS0NvdVkyRUJRclRvK3kxQWcyd2lmc3hrSk1EZXgzdXhaRDlBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQwOTMzODk5OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmN3b3krUERpM2ZaTkJEUTF2VER4QzFERkRqb016UjZhY001dzY3V2hoWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjk3MTk0MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNYjkifQ=="
module.exports = 
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "TreyOne",
  botname: process.env.BOT_NAME || "TreyOne",
  ownername: process.env.OWNER_NAME || "TreyOne",
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
