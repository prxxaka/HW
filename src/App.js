import {Suspense, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { postFetch } from 'store/slices/postSlice';
import './App.css';
import {postDelete} from "store/slices/postSlice";
import {useActionCreator} from "./helpers/actionCreator";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {postPatch} from "store/slices/postSlice";
import {authThunkToken} from "./store/thunks/authThunk";


const AboutPageChunk = React.lazy(() => import('./pages/AboutPage'))
function App() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.post.post)
    const getPostsCreator = useActionCreator(postFetch)

    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')
    const [more, setMore] = useState(true)


    function infiniteGetPost(){
        if (posts.length > 30){
            setMore(false)
            return
        }
        const params = {
            _limit:10,
            page: 1
        }
        getPostsCreator(params)
    }

    const loginUser = () => {
        const params = {
            username: value,
            password: value2
        }
        dispatch(authThunkToken(params))
    }

    return (
        <Suspense fallback={<h1>LOADING...</h1>}>
        <div className="App">
            <div className='page_wrapper'>
                <input value={value} onChange={(e) => setValue(e.target.value)}/>
                <input value={value2} onChange={(e) => setValue2(e.target.value)}/>
                <button onClick={loginUser}>AUTH</button>
            </div>

            <button onClick={infiniteGetPost}>get posts</button>
            <button onClick={postDelete}>Delete post</button>
            <button onClick={postPatch}>Patch</button>
            <InfiniteScroll
            dataLength={posts.length}
            next={infiniteGetPost}
            hasMore={more}>
            {posts?.map((item) =>
                <div key = {item.id} className={'itemCard'}>
                    {item.title}
                </div>
            )}
            </InfiniteScroll>
            <AboutPageChunk/>
        </div>
        </Suspense>
    );
}

export default App;