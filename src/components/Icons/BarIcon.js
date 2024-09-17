import useSidebarStore from '@/store/sidebarStore';
const BarIcon = () => {
    const { toggleSidebar } = useSidebarStore();

    return (
        <button
            className='hover:bg-slate-700 rounded-full p-2 transition-all duration-400 ease-in-out z-50'
            onClick={toggleSidebar}
        >
            <svg
                width={25}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                    <path
                        d='M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z'
                        fill='#ffffff'
                    ></path>
                    <path
                        d='M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z'
                        fill='#ffffff'
                    ></path>
                    <path
                        d='M3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z'
                        fill='#ffffff'
                    ></path>
                </g>
            </svg>
        </button>
    );
};

export default BarIcon;
