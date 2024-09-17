'use client';
const Navbar = () => {
    return (
        <>
            <div className='w-screen h-[6.3%] border-b-[0.5px] border-zinc-700 text-white flex justify-center items-center '>
                <div className='w-1/3 h-full flex items-center p-9'>
                    <h1 className='text-3xl font-medium'>Anomx</h1>
                </div>
                <div className='w-1/3 h-full flex justify-center items-center'>
                    <input
                        type='search'
                        className='bg-[#363d42] rounded-full p-2 px-5 w-full'
                        placeholder='Search anything, anyone..'
                    />
                </div>
                <div className='w-1/3 h-full flex items-center justify-end gap-3 p-5'>
                    <div>
                        <button className='hover:bg-slate-700 rounded-full p-2 transition-all duration-400 ease-in-out'>
                            <svg
                                rpl=''
                                fill='currentColor'
                                height='25'
                                icon-name='chat-outline'
                                viewBox='0 0 20 20'
                                width='25'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M11.61 19.872a10.013 10.013 0 0 0 6.51-4.035A9.999 9.999 0 0 0 12.275.264c-1.28-.3-2.606-.345-3.903-.132a10.05 10.05 0 0 0-8.25 8.311 9.877 9.877 0 0 0 1.202 6.491l-1.24 4.078a.727.727 0 0 0 .178.721.72.72 0 0 0 .72.19l4.17-1.193A9.87 9.87 0 0 0 9.998 20c.54 0 1.079-.043 1.612-.128ZM1.558 18.458l1.118-3.69-.145-.24A8.647 8.647 0 0 1 1.36 8.634a8.778 8.778 0 0 1 7.21-7.27 8.765 8.765 0 0 1 8.916 3.995 8.748 8.748 0 0 1-2.849 12.09 8.763 8.763 0 0 1-3.22 1.188 8.68 8.68 0 0 1-5.862-1.118l-.232-.138-3.764 1.076ZM6.006 9a1.001 1.001 0 0 0-.708 1.707A1 1 0 1 0 6.006 9Zm4.002 0a1.001 1.001 0 0 0-.195 1.981 1 1 0 1 0 .195-1.98Zm4.003 0a1.001 1.001 0 1 0 0 2.003 1.001 1.001 0 0 0 0-2.003Z' />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button className='hover:bg-slate-700 rounded-full p-2 transition-all duration-400 ease-in-out'>
                            <svg
                                rpl=''
                                fill='currentColor'
                                height='25'
                                icon-name='notification-outline'
                                viewBox='0 0 20 20'
                                width='25'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M11 18h1a2 2 0 0 1-4 0h3Zm8-3.792v.673A1.12 1.12 0 0 1 17.883 16H2.117A1.12 1.12 0 0 1 1 14.881v-.673a3.947 3.947 0 0 1 1.738-3.277A2.706 2.706 0 0 0 3.926 8.7V7.087a6.07 6.07 0 0 1 12.138 0l.01 1.613a2.7 2.7 0 0 0 1.189 2.235A3.949 3.949 0 0 1 19 14.208Zm-1.25 0a2.7 2.7 0 0 0-1.188-2.242A3.956 3.956 0 0 1 14.824 8.7V7.088a4.819 4.819 0 1 0-9.638 0v1.615a3.956 3.956 0 0 1-1.738 3.266 2.7 2.7 0 0 0-1.198 2.239v.542h15.5v-.542Z' />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button className='hover:bg-slate-700 rounded-full p-2 transition-all duration-400 ease-in-out'>
                            <div className=' h-7 w-7 bg-red-300 rounded-full '></div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
