import express from 'express'
import render from '../server/render'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'

const app = express()

app.use('/api', createProxyMiddleware({
    target: 'http://study.duyiedu.com',
    changeOrigin: true,
    logLevel: 'debug',
    onProxyReq(proxyReq, req, res) {
        console.log('[HPM] Proxying request to:', proxyReq.path);
    }
}));

app.get('/proxy', async (req, res) => {
    const imageUrl = req.query.url
    const response = await fetch(imageUrl, {
        headers: {
            // 模拟 referer
            Referer: 'https://movie.douban.com'
        }
    })
    res.set('Content-Type', response.headers.get('content-type'))
    // 转换为 Node 可用的流并通过管道输出
    await pipeline(Readable.fromWeb(response.body), res)
})

app.use(express.static('./public'))
// console.log('[DEBUG] proxy middleware:', createProxyMiddleware);

app.get("*", render)

app.listen(8080, () => {
    console.log('8080')
})
