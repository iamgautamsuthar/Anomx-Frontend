'use client';

import SideButton from './sidebar/SideButton';
import useSidebarStore from '@/store/sidebarStore';

const Sidebar = () => {
    const { isOpen } = useSidebarStore();
    return (
        <>
            <div
                className={`transform transition-transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-80'
                } lg:visible duration-700 lg:fixed bg-background absolute lg:translate-x-0 ease-in-out lg:w-[14%] border-r-[0.5px] border-zinc-700 text-white h-full lg:flex flex-col lg:mt-12 mt-7 p-5`}
            >
                <p className='lg:hidden text-2xl text-white bg-background w-full'>
                    Anomx
                </p>
                <div className='border-b-[0.5px] border-zinc-700 h-fit pb-3 gap-2 flex flex-col'>
                    <SideButton />
                    <SideButton />
                    <SideButton />
                    <SideButton />
                </div>
                <div className=' border-b-[0.5px] border-zinc-700 h-fit py-3 gap-2 flex flex-col'>
                    <p className='uppercase text-zinc-500 font-semibold '>
                        popular users
                    </p>
                    <SideButton />
                    <SideButton />
                    <SideButton />
                    <SideButton />
                    <SideButton />
                </div>
                <div className=' border-b-[0.5px] border-zinc-700 h-fit py-3 gap-2 flex flex-col'>
                    <p className='uppercase text-zinc-500 font-semibold'>
                        anomx office
                    </p>
                    <SideButton />
                    <SideButton />
                    <SideButton />
                    <SideButton />
                </div>
                <p className='text-xs text-zinc-500'>
                    Anomx, Inc. © 2024. All rights reserved.
                </p>
            </div>
        </>
    );
};

export default Sidebar;
