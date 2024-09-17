'use client';

const {
    MessageIcon,
    BellIcon,
    ProfileIcon,
    BarIcon,
} = require('@/components/Icons/index.js');

const Navbar = () => {
    return (
        <>
            <div className='w-screen lg:h-[6.3%] border-b-[0.5px] border-zinc-700 text-white flex lg:justify-center justify-between items-center'>
                <div className='lg:hidden pl-1'>
                    <BarIcon />
                </div>
                <div className='lg:w-1/3 w-1/4 h-full hidden lg:via-slate-50 lg:flex items-center p-2 lg:p-9'>
                    <h1 className='lg:text-3xl text-2xl lg:font-medium'>
                        Anomx
                    </h1>
                </div>
                <div className='lg:w-1/3 h-full flex justify-center items-center'>
                    <input
                        type='search'
                        className='bg-primary rounded-full p-2 px-5 h-3/4 w-full lg:text-start text-center'
                        placeholder='Search anything'
                    />
                </div>
                <div className='lg:w-1/3 h-full flex items-center justify-end lg:gap-3 lg:p-5 lg:pr-9 pr-1'>
                    <div className='lg:flex lg:gap-3 lg:visible hidden'>
                        <MessageIcon />
                        <BellIcon />
                    </div>
                    <ProfileIcon />
                </div>
            </div>
        </>
    );
};

export default Navbar;
