/**
===========================================================================================//
//    ██╗   ██╗███████╗███╗   ███╗ █████╗ ███╗   ██╗    ███╗   ███╗██████╗        //
//    ██║   ██║██╔════╝████╗ ████║██╔══██╗████╗  ██║    ████╗ ████║██╔══██╗      //
//    ██║   ██║███████╗██╔████╔██║███████║██╔██╗ ██║    ██╔████╔██║██║  ██║      //
//    ██║   ██║╚════██║██║╚██╔╝██║██╔══██║██║╚██╗██║    ██║╚██╔╝██║██║  ██║      //
//    ╚██████╔╝███████║██║ ╚═╝ ██║██║  ██║██║ ╚████║    ██║ ╚═╝ ██║██████╔╝      //
//     ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚═╝╚═════╝         //
===========================================================================================//
 Copyright (C) 2022.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : USMAN-MD                                                                   
 * @author : usmanser123 <https://github.com/usmanser123>   
 * @description : USMAN-MD,A Multi-functional whatsapp bot.       
 * @version 1.0.1                                                                                             
 ========================================================
 **/
 
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```Authorizing...```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '*Lᴀᴛᴇɴᴄʏ*\n *' + (final - inital) + ' ms* ', edit: key});
    }
);
