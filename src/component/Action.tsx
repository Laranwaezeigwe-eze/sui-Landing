import { ArrowCircleRightOutlined, Person3} from "@mui/icons-material";

const Action = ()=>{
    return (
        <div className="tw-py-16 tw-px-4 tw-relative tw-bg-[#F6F6F6]">
            <div className="tw-absolute tw-left-0 tw-right-0 tw-h-40 md:tw-bg-[#EEF5FF] tw-top-1/2 -tw-translate-y-1/2 tw-z-0"></div>

            <div className="tw-max-w-6xl tw-mx-auto tw-relative tw-z-10">
                <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-gap-16 tw-mb-12">
                    <div className="tw-bg-white tw-rounded-3xl tw-p-8 tw-text-center tw-cursor-pointer tw-flex tw-flex-col tw-items-center tw-space-y-6 tw-w-[100%] tw-h-[100%]  md:tw-w-80 md:tw-h-80 tw-border-gey-100 tw-shadow-md tw-transition-transform tw-duration-300 tw-ease-in-out tw-transform hover:tw-scale-105 hover:tw-shadow-lg">
                        <div className="tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center">
                            <Person3 style={{color:'#06B6D4'}}/>
                        </div>
                        <div>
                            <p className="tw-text-3xl md:tw-text-xl">
                                To apply as an <br/> <span className="tw-font-bold">Individual</span>, click here
                            </p>
                        </div>
                        <button
                            className="tw-bg-[#001437] hover:tw-bg-[#001437]/90 tw-text-white tw-px-8 tw-py-3 tw-rounded-full tw-flex tw-items-center">
                            Individual <span className="tw-ml-1 tw-text-lg"><ArrowCircleRightOutlined/></span>
                        </button>
                    </div>

                    <div
                        className="tw-bg-white tw-rounded-3xl tw-p-8 tw-cursor-pointer tw-text-center tw-flex tw-flex-col tw-items-center tw-space-y-6 tw-w-[100%] tw-h-[100%]  md:tw-w-80 md:tw-h-80 tw-border-gey-100 tw-shadow-md tw-transition-transform tw-duration-300 tw-ease-in-out tw-transform hover:tw-scale-105 hover:tw-shadow-lg">
                        <div className="tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center tw-text-sky-500 tw-text-4xl">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512"
                                 height="1em"
                                 width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="tw-text-3xl md:tw-text-xl">
                                To apply as a <br/> <span className="tw-font-bold">Team</span>, click here
                            </p>
                        </div>
                        <button
                            className="tw-bg-[#001437] hover:tw-bg-[#001437]/90 tw-text-white tw-px-8 tw-py-3 tw-rounded-full tw-flex tw-items-center">
                            Individual
                            <span className="tw-ml-1 tw-text-lg"><ArrowCircleRightOutlined/></span>
                        </button>
                    </div>
                </div>

                <p className="tw-text-center tw-text-lg">
                    We will inform applicants if they were selected by <span className="tw-font-bold">Monday, March 17, 2025</span>.
                </p>
            </div>
        </div>
    )
}
export default Action