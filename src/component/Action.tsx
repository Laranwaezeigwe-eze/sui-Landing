import {ArrowCircleRight, ArrowCircleRightOutlined, Person3} from "@mui/icons-material";

const Action = ()=>{
    return (
        <div>
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center tw-gap-y-8 md:tw-gap-8 tw-p-4 tw-bg-[#EBF3FF] tw-h-[167px] tw-mt-12">
            <div className={'tw-flex tw-gap-16 '}>
                <div className="tw-bg-white tw-p-4 md:tw-p-6 tw-rounded-2xl tw-shadow-lg tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full md:tw-w-64 tw-max-w-xs">
                    <div className="tw-text-sky-500 tw-text-4xl tw-mb-4">
                        <Person3 style={{color:'#06B6D4'}}/>
                    </div>
                    <p className="tw-text-gray-600 tw-text-sm md:tw-text-base">To apply as an<br/> <strong>Individual</strong>,
                        click here
                    </p>
                    <button
                        className="tw-mt-4 tw-px-6 tw-py-1 tw-cursor-pointer tw-bg-slate-900 tw-text-white tw-rounded-full tw-flex tw-items-center tw-gap-2 tw-w-full md:tw-w-auto tw-justify-center">
                        Individual <span className="tw-text-lg"><ArrowCircleRightOutlined/></span>
                    </button>
                </div>

                <div className="tw-bg-white tw-p-4 md:tw-p-6 tw-rounded-2xl tw-shadow-lg tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full md:tw-w-64 tw-max-w-xs">
                    <div className="tw-text-sky-500 tw-text-4xl tw-mb-4">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512"
                             height="1em"
                             width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                        </svg>
                    </div>
                    <p className="tw-text-gray-600 text-sm md:text-base">To apply as a <strong>Team</strong>,<br/> click here
                    </p>
                    <button
                        className="tw-mt-4 tw-px-6 tw-py-1 tw-cursor-pointer tw-bg-slate-900 tw-text-white tw-rounded-full tw-flex tw-items-center tw-gap-2 tw-w-full md:tw-w-auto tw-justify-center">
                        Team <span className="tw-text-lg"><ArrowCircleRightOutlined/></span>
                    </button>
                </div>

            </div>

        </div>
            <div className={'tw-text-center tw-pt-12 tw-text-sm tw-mx-3 '}>We will inform applicants if they
                were selected by <span className="tw-font-bold tw-ml-1 "> Monday, March 17, 2025.</span></div>
        </div>
    )
}
export default Action