import React, { useCallback, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLoaderData } from 'react-router-dom'
import Pagination from '../../../components/pagination'
import { getMovies } from '../../../services/getMovies';
import * as style from './movies.module.css'

export default function Movies() {
    const [page, setPage] = useState(1);
    const {
        data,
        isLoading,
        isError,
        error,
        isFetching
    } = useQuery({
        queryKey: ['MOVIES', page],
        queryFn: () => getMovies(page, 10),
        keepPreviousData: true,
        staleTime: 1000 * 5 * 60  // 缓存 5 分钟
    })
    const pageChange = useCallback((p) => {
        // queryClient.invalidateQueries({ queryKey: ['MOVIES', page] })
        setPage(p)
    }, [])
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {error.message}</div>
    return (
        <div>
            <h2>Movies</h2>
            <ul className={style["movie-list"]}>
                {data.movieList.map((item) => (
                    <li key={item._id} className={style["movie-item"]}>
                        <img src={'/proxy?url=' + encodeURIComponent(item.cover)} alt={item.title} className={style["movie-cover"]} />
                        <div className={style["movie-info"]}>
                            <h3 className={style["movie-title"]}>{item.title}</h3>
                            <p className={style["movie-rate"]}>豆瓣评分：{item.rate}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className={style["movie-link"]}>
                                查看详情
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
            <Pagination
                totalCount={data.movieTotal}
                pageSize={10}
                currentPage={page}
                onPageChange={pageChange}
            />
        </div>
    )
}
