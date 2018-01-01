'use strict'
// Node.js内置的fs模块就是文件系统模块，负责读写文件。
// fs模块同时提供了异步和同步的方法。
const fs = require('fs');

// 1.异步读取文件
// fs.readFile('testFile.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// 读取一个图片文件 二进制
// fs.readFile('timg1.jpg', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);// <Buffer ff d8 ff e1 0d 2f 45 78 69 66 00 00 4d 4d 00 2a 00 00 00 08 00 0c 01 00 00 03 00 00 00 01 04 b0 00 00 01 01 00 03 00 00 00 01 02 d1 00 00 01 02 00 03 ... >
//         console.log(data.length + ' bytes');// 116801 bytes

//     }
// });
// 当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。
// // Buffer -> String
// var text = data.toString('utf-8');
//         // String -> Buffer
// var buf = Buffer.from(text, 'utf-8');

// 2.同步读文件
// 同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果。
// 如果同步读取文件发生错误，则需要用try...catch捕获该错误：
// try{
// 	var data = fs.readFileSync('testFile1.txt', 'utf-8');
// 	console.log(data);
// }catch(err){
// 	// console.log(err)
// }
// 3.写文件
// 将数据写入文件是通过fs.writeFile()实现的：

// var data = 'this is a test file ,is changed by writeFile;';
// // 如果传入的数据是String，默认按UTF-8编码写入文本文件，如果传入的参数是Buffer，则写入的是二进制文件。
// fs.writeFile('testFile.txt', data, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok.');
//          fs.readFile('testFile.txt', 'utf-8', function (err1, data1) {
// 		    if (err1) {
// 		        console.log(err1);
// 		    } else {
// 		        console.log(data1);
// 		    }
// 		});
//     }
// });
// // 写文件 异步
// var data = 'this is a test file ,is changed by writeFileSync;';
// fs.writeFileSync('testFile.txt', data);

// 4.stat
// 获取文件大小，创建时间等信息，返回一个Stat对象，能告诉我们文件或目录的详细信息：
fs.stat('testFile.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size+ 'bytes');
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});


// 5.异步还是同步

// 由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。

// 服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行