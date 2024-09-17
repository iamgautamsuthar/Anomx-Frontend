'use client';

import Post from '@/components/Post';

const Home = () => {
    return (
        <>
            <div className='flex flex-col gap-6 items-center lg:justify-start h-full overflow-x-hidden scrollbar-hide scrollbar-hide-2 lg:px-96 lg:py-20 py-16 text-white'>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </>
    );
};

export default Home;
