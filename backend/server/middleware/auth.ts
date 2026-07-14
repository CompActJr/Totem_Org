import { defineEventHandler, H3Event, type EventHandlerRequest } from "h3";

export default defineEventHandler((event: H3Event<EventHandlerRequest>) => {

    console.log(`${event.req.ip} - ${event.url.pathname}`);

    //obter todos os cabeçalhos de uma requisição
    const headers = Object.fromEntries(event.req.headers);

    //extrair o token e validar

    if(!event.context.user){
        console.log("usuario não autenticado ainda no contexto desta requisição")
    }

    console.log(headers)
})