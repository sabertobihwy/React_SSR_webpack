import Home from '../pages/front/home';
import React from 'react'
import Front from '../pages/front';
import Admin from '../pages/admin';
import User from '../pages/admin/user';
import Sys from '../pages/admin/sys';
import { headerAdmin, headerFront } from '../components/headers/headerData'
import { json, useLoaderData } from 'react-router-dom'
import Movies from '../pages/front/movies';
import { fetchMovies } from '../server/request';


export const routes = [
    {
        path: '/',
        id: 'root',
        element: <Front headers={headerFront} />,
        loader() {
            return json({ message: "root loader" });
        },
        children: [
            {
                index: true,
                loader() {
                    return json({ home: "Home loader" });
                },
                element: <Home />,
            },
            {
                path: 'movies',
                loader: async () => {
                    // const { data } = await fetch('/api/movies'); // 发给本地 Express 转发
                    return {
                        data: {
                            movieTotal: 44739,
                            movieList: [
                                {
                                    _id: "6095093b1aaaea32a05ccee4",
                                    rate: 7.6,
                                    title: "智能大反攻",
                                    url: "https://movie.douban.com/subject/30229667/",
                                    cover: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2637896820.jpg"
                                },
                                {
                                    _id: "6095093b1aaaea32a05ccee5",
                                    rate: 5.6,
                                    title: "冷血悍将",
                                    url: "https://movie.douban.com/subject/3010409/",
                                    cover: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2638872429.jpg"
                                }]
                        }
                    };
                },
                element: <Movies />,
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin headers={headerAdmin} />,
        children: [
            {
                index: true,
                element: <User />,
            },
            {
                path: 'user',
                element: <User />,
            },
            {
                path: 'sys',
                element: <Sys />,
            }
        ]
    }
];