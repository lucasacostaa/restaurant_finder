import React from 'react';
import CreateResto from '../components/CreateResto';
import Header from '../components/Header';
import RestoTable from '../components/RestoTable';

const Home = () => {
    return (
        <>
            <Header/>
            <CreateResto/>
            <RestoTable/>
        </>
    )
}

export default Home
