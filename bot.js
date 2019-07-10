const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';

client.on('ready', () =>{
    console.log('I am ready!');
    client.user.setActivity('Prefix is -', { type: 'PLAYING'})
})



client.on('message', msg =>{
    if(msg.content ===  "Is boss hot?"){
        msg.reply('Of course');                                                                                                                                                                                                                                                                                                     
    }
})



client.on('message', msg =>{
    if(msg.content ===  "Is acad hot?"){
        msg.reply('Heck no');
    }
})                           



client.on('message', msg =>{
    if(msg.content ===  "Is tribe hot?"){
        msg.reply('Lmao thats a joke');
    }
})



client.on('message', msg =>{

    let args = msg.content.substring(prefix.length).split(" ");
    
    switch(args[0]){
        case 'prices':
            msg.reply('B17: 250, Hawthorn: 300, R21A: 350');
            break;
        case 'B17':
            msg.channel.sendMessage('@Academy_RBLX someone is interested in buying a B17!');
            break;
        case 'Hawthorn':
            msg.channel.sendMessage('@Academy_RBLX someone is interested in buying a Hawthorn!');
            break;
        case 'R21A':
            msg.channel.sendMessage('@Academy_RBLX someone is interested in buying a R21A!');
            break;
    }
})

client.on('message', msg =>{

    let args = msg.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'kick':
            if(!args[1]) msg.channel.sendMessage('Make sure to mention a player!')
                                                            
            const user = msg.mentions.users.first();

            if(user){
                const member = msg.guild.member(user);

                if (!msg.member.hasPermission("ADMINISTRATOR")) return;

                    member.hasPermission('ADMINISTRATOR').kick('You were kicked!').then(() =>{
                        msg.reply('Member sucessfully kicked!');
                    }).catch(err =>{
                        msg.reply('Member not kicked. Something went wrong.')
                        console.log(err);
                    });
                } else{
                    msg.reply('Not in server!');

                }
            }
        
        break;
})



client.login(process.env.BOT_TOKEN);                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
