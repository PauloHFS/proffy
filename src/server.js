//Servidor
const express = require('express');
const server = express();

const {
    pageLanding,
    pageStudy,
    pageGiveClasses
} = require('./pages')
//Configurando nunjucks (template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor
server
    //configura arquivos estaticos (css, scripts, imagens)
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    //Start do servidor
    .listen(5500);