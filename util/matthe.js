// Sorununz olursa Matthe#0001 ulaşınız.

const Discord = require("discord.js")
const client = new Discord.Client()
const ayarlar = require("./ayarlar.json")
const moment = require("moment")//Matthe#1000
const fs = require("fs")
const db = require("quick.db")
const chalk = require("chalk")
require('./util/Loader.js')(client)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`)//Youtube Matthe
  files.forEach(f => {                    
    let props = require(`./commands/${f}`)
    console.log(`${props.config.name} komutu yüklendi.`)
    client.commands.set(props.config.name, props)
    props.config.aliases.forEach(alias => {       
      client.aliases.set(alias, props.config.name)
    });
  });
})

client.on('message', async message => {
  
  if(message.content === '.tag') {
    message.channel.send(`**✭**`)//Youtube Matthe
    
  }
  })

client.on("ready", () => {
    console.log(chalk.redBright(`tm`))
})
//sasa
client.on("message", message => {
    if(message.content.toLowerCase() == ".etikettag") 
      return message.channel.send(`**#2071**
`)
  });
  
// BOTUN İNTENTLERİNİ AÇMAYI UNUTMAYIN 

client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
            '0': `0`,
            '1': `1`,
            '2': `2`,
            '3': `3`,
            '4': `4`, // BOTUN OLDUĞU SUNUCUDA OLMA ŞARTI İLE HARAKETLİ EMOJİDE KOYABİLİRSİNİZ
            '5': `5`,
            '6': `6`,
            '7': `7`,
            '8': `8`,
            '9': `9`}[d];})}
    const kanal = member.guild.channels.cache.find(r => r.id === (ayarlar.hosgeldinKanal)); // HOŞGELDİNİZ KANAL İD
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY **[Yıl]** DD **[Gün]** HH **[Saat]** mm **[Dakika,]**`) 
    var kontrol;
  if (kurulus < 1296000000) kontrol = `Ve senin hesabın sunucumuza kayıt olmak için daha çok genç! <a:856182030169407518:867734355664568340>`
  if (kurulus > 1296000000) kontrol = `Ve senin hesabın sunucumuza kayıt olmak için tüm şartları karşılıyor! <a:856182031155593246:867734372220534804>`
  
    moment.locale("tr");
  
member.roles.add(ayarlar.kayıtsızRol)
member.roles.add(ayarlar.kayıtsızRol)
member.roles.add(ayarlar.kayıtsızRol)//Youtube Matthe
  
    kanal.send(`
<a:hac:867747732377829416> Sunucumuza hoş geldin, <@`+ member + `>!

<a:hac:867747732377829416> Hesabın **`+gecen+`** Önce Oluşturulmuş

<a:hac:867747732377829416> **`+kontrol+`**
    
<a:hac:867747732377829416> Seninle Beraber  **${member.guild.memberCount}** Kişi Olduk ! 

<a:hac:867747732377829416> Kayıt Olmak İçin Tag Alıp Soldaki Ses Kanallarına Girip Beklemen Yeterlidir 

<a:hac:867747732377829416> Tagımıza Bakmak İçin .tag Yazman Yeterlidir + Etiket Tagımıza Bakmak İçin .etikettag Yazman Yeterlidir
    
<a:hac:867747732377829416>  Kurallarımız <#863086672023126053> Kanalında Mevcuttur.

<a:hac:867747732377829416> <@&863086670826831874>
    `)});
///TAG ALANA ROL///
///TAG ALANA ROL///
client.on("userUpdate", async function(oldUser, newUser) {
    const guildID = "863086670458126366"//sunucu
    const roleID = "863086670785150987"//taglırolü
    const tag = " ✭"//tag
    const chat = '863086675102400576'// chat
    const log2 = '863086678197403664' // log kanalı
  
    const guild = client.guilds.cache.get(guildID)
    const role = guild.roles.cache.find(roleInfo => roleInfo.id === roleID)
    const member = guild.members.cache.get(newUser.id)
    const embed = new Discord.MessageEmbed().setAuthor(member.displayName, member.user.avatarURL({ dynamic: true })).setColor('#ff0000').setTimestamp().setFooter('🎄Developed by Winchester 🎄');
    if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(tag) && !newUser.username.includes(tag)) {
            member.roles.remove(roleID)
            client.channels.cache.get(log2).send(embed.setDescription(` ${newUser} isminden \`✭\` çıakrtarak ailemizden ayrıldı!`))
        } else if (!oldUser.username.includes(tag) && newUser.username.includes(tag)) {
            member.roles.add(roleID)
            client.channels.cache.get(chat).send(`<a:dans:868426312707096597> Tebrikler, ${newUser} Tag alarak ailemize katıldı ona sıcak bir **'Merhaba!'** diyin.(${tag})`)
            client.channels.cache.get(log2).send(embed.setDescription(`  ${newUser} ismine \`✭\` alarak ailemize katıldı`))
        }
    }
   if (newUser.discriminator !== oldUser.discriminator) {
        if (oldUser.discriminator == "2071" && newUser.discriminator !== "2071") {
            member.roles.remove(roleID)
            client.channels.cache.get(log2).send(embed.setDescription(`  <@!' + newUser + '> etiketinden \`2071\` çıakrtarak ailemizden ayrıldı!`))
        } else if (oldUser.discriminator !== "2071" && newUser.discriminator == "2071") {
            member.roles.add(roleID)
            client.channels.cache.get(log2).send(embed.setDescription(`  <@!' + newUser + '> etiketine \`2071\` alarak ailemize katıldı`))
            client.channels.cache.get(chat).send(`<a:utandm:868427205196267531 Tebrikler, ${newUser} tag alarak ailemize katıldı ona sıcak bir **'Merhaba!'** diyin.(#2071)`)
        }
    }
  
  })
////----------------------- TAG TARAMASI KISMI -----------------------\\\\
setInterval(() => {
    const server = client.guilds.cache.get("863086670458126366"); //Server ID 
    server.members.cache.forEach(async member => {
        if (member.roles.cache.has("863086670722760714") || member.roles.cache.has("867697683590676520")) return; //VİP&BOOSTER ROL İD

/*   Yasaklı Tag    */
   if(member.user.username.includes("Sântez")){
        member.roles.set(["Yasaklı Tag Rol ID"]).catch(() => {}) 
    }


 if (member.user.username.includes("tagı")) {
            await member.roles.add("taglı rolü").catch(() => {})
        }
        if (!member.user.username.includes("tag")) {
            await member.roles.set("kayıtsız rolü")
        }
    })
}, 60 * 1000)// 60(60 saniye) kısmını değiştirebilirsiniz
client.login(process.env.TOKEN)

client.on("ready", () => {
  client.channels.cache.get(ayarlar.botSesKanal).join();
  });
// davett
client.on("guildMemberRemove", async member => {
    const user = client.users.cache.get(member.id);

    member.guild.fetchInvites().then(async guildInvites => {
        const veri = await db.fetch(`veri.${member.id}.${member.guild.id}`);
        var daveteden;
        if (!veri) daveteden = "Bulunamadı"
        else daveteden = member.guild.members.cache.get(veri)

        let zaman = require("moment").duration(new Date().getTime() - client.users.cache.get(member.id).createdAt.getTime())

        if (zaman < 1296000000) {
            db.add(`fake.${daveteden.id}.${member.guild.id}`, -1);
            db.add(`davetsayi.${daveteden.id}.${member.guild.id}`, -1);
            if (veri) {
                db.delete(`veri.${member.id}.${member.guild.id}`);
            }
        } else {
            db.add(`davetsayi.${daveteden.id}.${member.guild.id}`, -1);
            if (veri) {
                db.delete(`veri.${member.id}.${member.guild.id}`);
            }
        }
        var y;
        if (daveteden.id == member.guild.id) y = "Özel URL"
        const davetsayi = await db.fetch(`davetsayi.${daveteden.id}.${member.guild.id}`);

    })
});

