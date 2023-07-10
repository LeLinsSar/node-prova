const http = require('http')
const port = 3000

const server = http.createServer((req, res)=>{
    const httpInfo = require(http).parse(req.http, true);
    const name = httpInfo.query.name
    
    res.writeHead(200, {});
    res.statusCode(200);
    res.setHeader('Content-Type','application/json');
    if(!name){
       const objeto = [
        {id: 1, nome: 'Leticia'}
       ]

       const json = JSON.stringify(objeto);
       console.log(json);
    }
});