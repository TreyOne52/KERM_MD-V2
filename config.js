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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZXcG9XamtlR1lXTSt3MmkwOVNsN0c5NVRXL3RJZUVZbjhBMml3NFVHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3pSeWhEa3lZaldUTmNzYnRkL09rZ2Y3ck9hSWlGVDFaMTYvMk9iOWdsMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRm9aUm04MkZMTXVBZXdXSnhIcHpEWHB0NjZIdExZUFNORFZnNVJjVjFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJOFkzN1JSaEhZMGlrWEk2akFGZndGRzQ0K2cyWExkdStzU3E0UUpRODNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9LZ3JWbUpnUHZ3Y3ozR0hoU01obEw4YjVWMU9OTldPUmc2MnpwNEkxRzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpicThkcFRmZnlvaHA4dldWbTdWMWhmWXRudUU5bFNWMlpIUkZIcUtTa1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0l3dEhZRzdIZHY5ZG9kZkQydkhpQnBHblFFU2F6VVFSQ3lzbU14V0lraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjQyaktFV2g5NzJOTUdhZUdPa1hEMGJ3WVU2QVJuVnZIWCsvWG1HM3d3cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhqQmEwSGtSR0poNnBsQzRvNmpBS1ptTlRVRDlJOVBwdW01ckJwSUovbk9wbTZBL0h3a1E5dkUvWE91UzBLNmszbDRxU2F1Y3FmSHRpYVc5OHQ1N2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiJqNDAyRm1KaUNTR0NZckNzc1BvVFFRZWtNNFMwWklUM1BwNHQ3cmFLNDFjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQ3MjMzNTM1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg4RDE5NkZDOTU0MzRGMzI1MjVENTJGMTQzODJFQkJFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjczNzU1OTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFVNy0xX0pNUzhDRzJSZ1h5TzFQQ3ciLCJwaG9uZUlkIjoiY2Y4NmZmYTQtMzIxMS00YzA5LWFlNDctMmM1M2YyYTNkNTUxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldzS3ZUbXU5Qlo3YUtjVHpQdS83T3RVTEN2az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwU2hBQjlPeEQrZE53QXZhdVJMNnh4b3NPd0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRE5FVFQxTFciLCJtZSI6eyJpZCI6IjUwOTQ3MjMzNTM1OjI3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJbUN4dHdERU52UjFyY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnUUdZRFZUa091VnhzQ2ZINE5qVmJ6MmtxamlUcDJsdU1VVXdtOG5xTUFvPSIsImFjY291bnRTaWduYXR1cmUiOiJwbWw4UlNZVElLem5xOWc3YUZiQ2lUdSs3WVJIQjRtT014V1RHK2FSdzZJZEQyVXZQc1lvZUtxUkRtOGJLTHlCYzRyR2xydkJDdjlENEF1NTdVdzVDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWjRXQXdJMEFYcmk1aXVqeVZMdTM3S3IydkFGVk4xc21NbGQ1WXFlRWZ4V1JCZVlnZTRvMU5xODFkV1FEbmxEZEczRGR5ckI2ZXNobDJkdjFCUGdLalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0NzIzMzUzNToyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZRUJtQTFVNURybGNiQW54K0RZMVc4OXBLbzRrNmRwYmpGRk1Kdko2akFLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3Mzc1NTkxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU45SCJ9"
module.exports = 
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "treyone",
  botname: process.env.BOT_NAME || "treyone",
  ownername: process.env.OWNER_NAME || "treyone",
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
