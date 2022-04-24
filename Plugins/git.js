/* Copyright (C) mrchrome
mone credit kalayalle
ADchrome---parthan
*/

const ADchrome = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

ADchrome.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/6tbmPj1/maaluttty.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `◄━⦁🖤 ADchrome🖤⦁━►


*owner number parthan* :https://wa.me/+1 (438) 299-9422.
            

*owner number parthan* :https://wa.me/+1 (438) 299-9422.


*owner id instagram* :https://www.instagram.com/_mr___chrome_/?hl=en


*github* : https://github.com/mrchrome69/AD_chrome.


*audio commands* :https://github.com/mrchrome69/media/tree/main/bgm.


*sticker commands* :https://github.com/mrchrome69/media/tree/main/stickers.

◄━⦁🖤 ADchrome🖤⦁━►
■□ ~parthan~ AND ~adwaith~■□ 

`}) 

}));
