/*
 * Information
 * Creator / Developer: Dani Ramdani (Dani Techno.) - FullStack Engineer
 * Contact creator / Developer: 0895 1254 5999 (WhatsApp), contact@danitechno.com (Email)
*/

/* Thanks to
 * Dani Techno. - FullStack Engineer (Creator / Developer)
 * daniapi.biz.id (API provider)
 * api.caliph.biz.id (API provider)
 * @danitech/scraper (Scraper provider)
 * @whiskeysockets/baileys (Library "Baileys" provider)
 * @adiwajshing/keyed-db
 * @hapi/boom
 * pino
 * qrcode-terminal
 * chalk
 * mongoose
 * node-cron
 * nodemon
 * other
*/

/*
true = enable,
false = disable.
gBjFG0kR6lI7OasM
mongodb+srv://kpranata141:gBjFG0kR6lI7OasM@datauserwabot.bpwcilm.mongodb.net/?retryWrites=true&w=majority
understand?
*/

module.exports = {
  pairing_mode: true,
  session_folder_name: 'session',
  browser: ["Chrome (Windows)", "latest"],
  prefix: '.',
  public_mode: true,
  chat_mode: 'both', // Private, Group, Both/All
  offline_status: true,
  auto_update_profile_status: true,
  auto_read_messages: true,
  auto_typing: false,
  auto_recording: false,
  mongodb_uri: 'mongodb+srv://kpranata141:gBjFG0kR6lI7OasM@datauserwabot.bpwcilm.mongodb.net/?retryWrites=true&w=majority', // Register here: https://mongodb.com/#sign-up
  api: {
    dani: {
      api_url: 'https://daniapi.biz.id',
      api_key: 'sk-t1atdzvpout65lvvl' // Register here: https://daniapi.biz.id/#sign-up
    },
    caliph: {
      api_url: 'https://api.caliph.biz.id', // Register here: https://api.caliph.biz.id/#sign-up
      api_key: 'MBK73EO7'
    }
  },
  bot: {
    name: 'Ciluk Bot',
    profile_status: 'Bot aktif hingga kiamat or 24/7'
  },
  owner: {
    name: ["0xff_404"],
    number: ["6282220727243"]
  },
  daily_limit: {
    free: 50,
    premium: Infinity
  },
  watermark: {
    sticker: {
      package_name: 'Created by',
      author_name: '0xff_404'
    }
  },
  react: {
    process: '⏳',
    success: '✅',
    failed: '❌'
  },
  cron_jobs: {
    time: '0 0 * * *',
    timzone: 'Asia/Jakarta'
  },
  media: {
    image: { url: 'https://telegra.ph/file/c3668b52e52264996085e.jpg' },
    audio: { url: 'https://cdn.danitechno.com/audio/dj-joanna-breakbeat.mp3' }
  },
  message: {


    plans_and_pricing: '*VALORANT Triggerbot V.2*\n\n*Harian =* 20k*\nMingguan  =* 100k\n*Permanen =* 350k\n*Contact owner:* https://discord.com/invite/P4xccXeXGC',
    not_registered: 'Anda belum terdaftar sebagai pengguna. Untuk mendaftar, ketik: *.register*.',
    especially_premium: 'Anda harus ganteng untuk mengakses fitur ini. Ketik: *.upgrade* untuk mengupgrade wajahmu.',
    especially_owners: 'Anda tidak diizinkan mengakses fitur ini. Fitur ini hanya bisa diakses oleh owner bot.',
    daily_limit: 'Maaf, sudah sampai batas maksimal crot👉👌💦. Sperm akan direset setiap pukul jam 12 malam WIB.\nKetik: *.upgrade* untuk mengupgrade diri, dan dapatkan benefit limit crot tanpa batas.'
  },
  date: {
    country: 'id-ID',
    time_zone: 'Asia/Jakarta'
  }
};