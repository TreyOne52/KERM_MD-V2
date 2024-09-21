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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0JMYTlaVzNkUXZwMVlOTkxBMWhWdkZVdHprVWdmTXEvaWlGZHNrT0gxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1HYzNwb3hENXNUVFJQU08vKzZmaUl2Mkorb1JCTXNDNG9rT2VBakFIWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTlFLalQrUGJ0YnNpbzF5YTE0akJOUk96b3ZoUkhTVVY4TFAwSGlITTBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0WW43L3pUNXl3UXdvMm11S1V0WG1yLzR6TWZMYjVPTzRCQnNzUWEzWjNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhBM3BGbmtCdml3MVhiOXMvTXp0VTV0N0R3UVo3Y2oyL2JFVEhjOGVDV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ2K1FFaVRhbk92N2xUU0dza1BNQ2hJcHYxV0FvWWJRTzQ4MVJrVC9BblU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0hOVFBCRUFRa3RpMWgxOC85Mkp3L1J3QjBQdXZRQUhNdDNtanZvNGJWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGFkc0FMeVV3RU9yYi9ualh3VUljSWh5ckVKVVUrSjFPUFE3NVc2bUV5ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkwckNyLytib0VXYVJZdk9uNWMvWlVxZjZGQ2hSaTdqOGVxV2FFZVRoZ3NONm5TdVRkb0c1Tm5sZ3Y3M3k5VnU2Ti9HQ2RXR2sxK0NjcUFzNkZvR0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6IlFvaWllZTBzT0JaNnhyNEd2UVpzdVlIdjFtcDNCak9udmVjdlBiQXlqeVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJwSng2QVVYU21DZW03akljZTRhVUEiLCJwaG9uZUlkIjoiMDIzOWZmNzQtOGRlYS00ZTVkLTg2ODctNDAyMzYzMDQzNGI2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllPNTQ3VGdyczIrZERHZEJJNWJENzJNQWZzYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQzF6eUN5SC93UGlCS0pJYWxpVFhSakxoMFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWkdQMkhFREoiLCJtZSI6eyJpZCI6IjUwOTQ3MjMzNTM1OjI2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJaUN4dHdERU11MXZMY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnUUdZRFZUa091VnhzQ2ZINE5qVmJ6MmtxamlUcDJsdU1VVXdtOG5xTUFvPSIsImFjY291bnRTaWduYXR1cmUiOiJMQlI4dWVqNEMyTm04SWx2aXppamxZUytNSmZDRkxBK1ZFZUNQa2c4MlgxekQ1blJ5S2FWcnlEbEZqZTFnNm1iU1Nkc29YcmxNNC9UU2hmd3FvQVRBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV0Jrb3JxRVUxa21YU3JlQXFuMTFKYThhVlVkMnFWazNURkYvYXhMVk1yUURlRkFXaEdlVEkxNW1EbTdpcHYrVTBTYkZIb2NtSkdsTFUwRzBOQi81Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0NzIzMzUzNToyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZRUJtQTFVNURybGNiQW54K0RZMVc4OXBLbzRrNmRwYmpGRk1Kdko2akFLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2OTQ2MDA4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZXTiJ9"
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
