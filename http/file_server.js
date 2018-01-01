'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

// 创建服务器:
var server = http.createServer(function (request, response) {
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);
    console.log('filepath：'+filepath )
    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        console.log(stats)
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
        //当前path是否为文件夹
        }else if(!err && stats.isDirectory()){
            var indexPath = path.join(filepath, '/index.html');
            // 当前path下有无index.html
            fs.stat(indexPath, function (err1, stats1) {
                // 有返回
                if(!err1 && stats1.isFile()){
                    response.writeHead(200);

                    fs.createReadStream(indexPath).pipe(response);
                }else{
                    console.log(err1)
                    response.writeHead(404);
                    response.end('directory index Not Found');
                }
            })
        }else{
            var indexPath = path.join(filepath, '/index.html');
            // 当前path下有无index.html
            fs.stat(indexPath, function (err, stats) {
                if(!err && stats.isFile()){
                    response.writeHead(200);
                    fs.createReadStream(indexPath).pipe(response);
                }else{
                    // 出错了或者文件不存在:
                     console.log('404 ' + request.url);
                    // 发送404响应:
                    response.writeHead(404);
                    response.end('404 Not Found');
                }
            })
           
        }
    });
})

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');