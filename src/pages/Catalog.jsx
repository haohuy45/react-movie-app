import React from 'react'

import { useParams } from 'react-router'
import PageHeader from '../components/page-header/PageHeader'
import {category as cate} from '../api/tmdbApi'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import MovieGrid from '../components/movie-grid/MovieGrid'
import ScrollToTop from '../components/scroll/ScrollToTop'

const Catalog = () => {
    const {category} = useParams();
    return (
        <>
            <Header />
            <PageHeader>
                {category === cate.movie}
            </PageHeader>
            <div className='container'>
                <div className="section mb-3">
                    <MovieGrid category={category}/>
                </div>
            </div>
            <Footer/>
            <ScrollToTop/>
        </>
    )
}

export default Catalog
