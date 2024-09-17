import SideButton from './sidebar/SideButton';

const Sidebar = () => {
    return (
        <>
            <div className='w-[14%] border-r-[0.5px] border-zinc-700 text-white h-full flex flex-col  p-5'>
                <div className=' border-b-[0.5px] border-zinc-700 h-fit pb-3 gap-2 flex flex-col'>
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
