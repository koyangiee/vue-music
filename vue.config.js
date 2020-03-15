module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: 'http://musicapi.leanapp.cn/',    
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    '^/api':'/'
                }
            }
        }
    }
}