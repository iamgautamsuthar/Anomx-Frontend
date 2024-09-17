const Post = () => {
    return (
        <>
            <div className='h-fit w-[70%]  px-7 py-5 border-[1px] border-zinc-700 rounded-lg'>
                <div className='flex justify-between border-b-[0.5px] pb-3 border-zinc-700'>
                    <div className=' flex gap-2'>
                        <div className='rounded-full w-12 h-12 bg-slate-600'></div>
                        <div className='flex flex-col'>
                            <h1>Gautam Suthar</h1>
                            <h1 className='text-sm'>@gautamsuthar</h1>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='bg-primary px-4 py-2 rounded-full'>
                            Follow
                        </button>
                        <div className=' flex justify-center items-center h-8'>
                            <svg
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                height={18}
                            >
                                <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                                <g
                                    id='SVGRepo_tracerCarrier'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                ></g>
                                <g id='SVGRepo_iconCarrier'>
                                    <path
                                        d='M8 12C9.10457 12 10 12.8954 10 14C10 15.1046 9.10457 16 8 16C6.89543 16 6 15.1046 6 14C6 12.8954 6.89543 12 8 12Z'
                                        fill='#ffffff'
                                    ></path>
                                    <path
                                        d='M8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6Z'
                                        fill='#ffffff'
                                    ></path>
                                    <path
                                        d='M10 2C10 0.89543 9.10457 -4.82823e-08 8 0C6.89543 4.82823e-08 6 0.895431 6 2C6 3.10457 6.89543 4 8 4C9.10457 4 10 3.10457 10 2Z'
                                        fill='#ffffff'
                                    ></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='gap-2 flex pt-3 flex-col border-b-[0.5px] pb-3 border-zinc-700'>
                    <h1 className='text-3xl'>Title</h1>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus repudiandae culpa ea nulla distinctio,
                        voluptatem quaerat odit debitis voluptatum cum rem
                        sapiente esse eveniet cumque nobis quam reprehenderit
                        porro rerum at pariatur fugiat soluta mollitia earum
                        explicabo! Perferendis, excepturi ullam et, voluptate
                        hic aliquam, nobis voluptatum maiores officiis
                        distinctio molestias?
                    </p>
                </div>
                <div className='flex gap-5 pt-3'></div>
            </div>
        </>
    );
};

export default Post;
