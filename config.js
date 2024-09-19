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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtPeHVEQWVOREFxdGc3R3pnczI4SFA2TjB6RURzcEQwTVBnMDhHSWZYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjQ5aGtnUkllQW9BK3ZSeXBrZ2svTXc0QmlTUU94MDJzblQ1bXZwNXBtZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTTM4SCs4WUZmcjFrWS84ZDZUY3dKcDQ1TkxBdERpcDdCNlYySW81OGw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVeXMyVnVVUEN4TXBmM05ZRVIvS0xFNmFkNnV4NXk4TDJab2cvei8wSTFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNKSWE2NTlwMVFzckF1WjlpaUlQYkJ2SGdaTHB0U1NTekJGS0I0NEduRW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImowejJPRUtlYzJyOUpqaHVUSENxU2U2T2paWFlkUnRRZzZPWjVlc05rbTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0oyZHdvb3JEK3YwL0luWEFnY0RBUXhFRlhqdEkxMld1cGFxR0F5NzlrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJPdFlIS3dvOWpSQXkwdnpidy9qeXFlb1BRV0l4c2FlUm5RbncvZ3ZWZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9jSStIbENxeUFOL1dsRFZyN1NjQ2R0WEw5NmdaZXFra1YyU0FaelozWUVxY3RkQ0FiRFBOYUM0N0FwVXVJN0wzZTMrTzZaektRK3hyc0szdDA5WGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiJDVTdoeG9ISlpKWmFZVWU2eFBqbWlGUThEUnBoK0RBRVZxWUhJZS83dEE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQ3MjMzNTM1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFCNjA0OTRGMjVFRUFEN0FEMzhGMEU0RjI5NzBFRTU1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY3NzcwMzZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjdJOE13U2Z0VGZxVTgxNHg0S2JRUnciLCJwaG9uZUlkIjoiN2NlZmZlMTMtNWNjYS00OTM2LThhNTItZWYzNDg2M2I3Y2Q3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNhVGRBVUt0ZVlnRmFSMjFhOWlXeEUzYkd3ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsUEd2Nmg5S0I5alJIdXorS0p3eTdkeFRNU3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDNLOVREN0ciLCJtZSI6eyJpZCI6IjUwOTQ3MjMzNTM1OjIxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJYUN4dHdERUx1TnNyY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnUUdZRFZUa091VnhzQ2ZINE5qVmJ6MmtxamlUcDJsdU1VVXdtOG5xTUFvPSIsImFjY291bnRTaWduYXR1cmUiOiJWTTdvenpZL1VzN1k2M2FlKzVETGxyMWV3THVLUkcxMEtqaDQzelZ2Z0NzZ1JuUndraW1vMHJ6VzFwNWpNZnd5dStqcW4zWTZ0NWo5bkdxOHJOT01BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUFFEOEYwbjdITW9lV3lJcHo5SG51ajVFOU5qRjFrSmFXQkJSdGRkWXpkcmQ3NkZic3h6d29PdmdveXJzaXhQbXpPQ2NZQ1ZKeDZhcXdGQ1pNdmJoZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0NzIzMzUzNToyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZRUJtQTFVNURybGNiQW54K0RZMVc4OXBLbzRrNmRwYmpGRk1Kdko2akFLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2Nzc3MDMyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZWOSJ9"
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
