const mineflayer = require("mineflayer")
// почему так мало функций??? да бл потому что этот хуев node.js все время выдает ошибку при установки нового модуля!!!
// наверно будет еещщщщщеееее больше модулей когда этот блять ноде.джеес будить работатььььЬ
const bot = mineflayer.createBot({
    host: "айпи/хост сервера",
    port: "тут должен быть твой порт(сервера)",
    version: "версия",
    username: "ник еблана(бота)" })

bot.once('spawn', function(){
    bot.chat('Привет мир!!! [made by рилгей]')
})

bot.on('chat', function Hi (username,message){
    if(username === "ник еблана(бота)") return;
    if(message === "ты бот?" && username === "твой ник"){
        setTimeout(() => bot.chat(username + ", нет я не бот."), 1000)
    } else {
        if(message !== "ты бот?") return;
        setTimeout(() => bot.chat(username + ", я тебя не знаю!"), 1000)
    }
    });

    bot.on('chat',(username,message)=>{
        if(username === bot.username) return

        switch (message){
            case 'спать':
                goToSleep()
                break
            case 'вставай':
                wakeUp()
                break
            case 'выйди':
                bot.quit()
                break
        }
    });

    bot.on('sleep',()=>{
        bot.chat('Спокойной ночи! *Засыпает*')
    });
    
    bot.on('wake',()=>{
        bot.chat('Доброе утро! *Зевает*')
    });

    async function goToSleep() {
        const bed = bot.findBlock({
            matching: block => bot.isABed(block)
        })

        if (bed) {
            try {
                await bot.sleep(bed)
                bot.chat("Я сплю...")
            } catch (err) {
            bot.chat(`Я не могу уснуть! : ${err.message}`)
            }
    } else {
    bot.chat('По близости нет кровати!')
    }
}

async function wakeUp() {
    try {
        await bot.wake()
        } catch (err) {
            bot.chat(`Я не могу проснуться! : ${err.message}`)
        }
    }

bot.on('chat',function(username,message){
    if(username === "ник еблана(бота)") return;
    if (message === "дроп" && username === "твой ник ебенат"){
        function tossNext(){
            if(bot.inventory.items().length === 0) {
                console.log("[CONSOLE] ник еблана(бота): У меня пусто...")
            } else {
                const item = bot.inventory.items()[0]
                bot.tossStack(item,tossNext)
            }
        }
        tossNext()
    }
});

    bot.on('spawn', function(){
        bot.loadPlugin(require("mineflayer-autoclicker"))
    })

    bot.on('chat', function(username, message){
        if(message === "старт") {
            bot.autoclicker.start()
        }

        if(message === "стоп") {
            bot.autoclicker.stop()
        }
    });

bot.on('chat', function (username,message){
    if(message === "хп"){
        bot.chat('У меня ' + bot.health.toFixed(0) + ' хп')
    }
    if(message === "еда"){
        bot.chat('У меня ' + bot.food + ' еды')
    }
})

    const armorManager = require('mineflayer-armor-manager')
    bot.loadPlugin(armorManager)