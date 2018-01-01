// stream是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。
// 流从键盘输入到应用程序时对应着一个名字：标准输入流（stdin）。
// 如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流，这个流也有名字：标准输出流（stdout）。流的特点是数据是有序的而且必须依次读取，或者依次写入，不能像Array那样随机定位。

'use strict';

const fs = require('fs');

// 打开一个流:

var rs = fs.createReadStream('testFile.txt', 'utf-8');

// 注意，data事件可能会有多次，每次传递的chunk是流的一部分数据。

// 要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束

// rs.on('data', function (chunk) {
//     console.log('DATA:')
//     console.log(chunk);
// });

// rs.on('end', function () {
//     console.log('END');
// });

// rs.on('error', function (err) {
//     console.log('ERROR: ' + err);
// });


// var ws1 = fs.createWriteStream('testFile.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据.');
// ws1.end();


// pipe

// 就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。

// 在Node.js中，Readable流有一个pipe()方法，就是用来干这件事的。

// 让我们用pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序
var rs = fs.createReadStream('testFile.txt');
var ws = fs.createWriteStream('forPipe.txt');
rs.pipe(ws);
// rs.pipe(ws, { end: false });//默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数：

