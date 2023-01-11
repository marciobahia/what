
const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Você está conectado!');
});

client.initialize();

var nome = "xvx99*";

 
client.on('message', message => {
    if(message.body === 'oi') {
		message.reply('Olá, aqui é o Mark, Robô do Marcio');
        client.sendMessage(message.from, 'Antes de começar, me diga o seu nome');
	}

    if (message.body !== null && message.body !== 'oi' && nome === "xvx99*") {
        nome = message.body;
        console.log(nome)
        client.sendMessage(message.from, 'Olá '+nome + ', vou te mandar as opções da Pizarria');
    }


});















