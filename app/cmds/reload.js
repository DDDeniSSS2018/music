//Перезагрузка команд. ета на перед чтоб потом не делать.
module.exports.run = async (Discord, bot, message, args, id) => {
    if (message.author.id != "520295470266843157") return message.channel.send("Вы не создатель!")
    if (!args[0]) return message.channel.send("А де название команды?")
   
    let commandName = args[0].toLowerCase()
    try {
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch (e) {
        return message.channel.send(` ${args[0].toLowerCase()} не могу найти данную команду`)

    }
    message.channel.send(` ``${args[0].toUpperCase()}.js`` кастом`)
}
module.exports.help = {
    name: 'reload',
    aliases: []
}

//15 vor и новый код
//спользовать так : prefix:reload название команды в файле. 