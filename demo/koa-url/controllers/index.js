module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'Welcome'
        });
    },
    'GET /index': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'Welcome'
        });
    }
};