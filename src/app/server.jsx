import express from 'express'
import render from '../server/render'
import { createProxyMiddleware } from 'http-proxy-middleware'
const app = express()

app.use('/api', createProxyMiddleware({
    target: 'http://study.duyiedu.com',
    changeOrigin: true,
    logLevel: 'debug',
    onProxyReq(proxyReq, req, res) {
        //console.log('[HPM] Proxying request to:', proxyReq.path);
    }
}));

app.use(express.static('./public'))
// console.log('[DEBUG] proxy middleware:', createProxyMiddleware);

app.get("/", render)

app.listen(8080, () => {
    console.log('8080')
})