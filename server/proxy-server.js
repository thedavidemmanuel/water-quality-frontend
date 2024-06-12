// proxy-server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();


const proxy = createProxyMiddleware({
    target: 'https://aquascan.onrender.com',
    changeOrigin: true,  
    pathRewrite: {
        '^/api': '/predict',  
    },
});


app.use('/api', proxy);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});