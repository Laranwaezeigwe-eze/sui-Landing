import Image from "next/image";
import style from '../styles/Header/style.module.css'
import {AccessTime, CalendarMonth, PinDrop} from "@mui/icons-material";
const MainHeader=()=>{
    return(
        <div>
            <div className={`${style.body}`}>
                <div className={`tw-flex tw-items-center tw-justify-center tw-py-16 tw-gap-4`}>
                    <div className={'tw-text-xl tw-font-semibold'}>
                        <Image src="/semicolon-logo.svg" alt="Semicolon Logo" width={150} height={30}/></div>
                    <span className={'tw-text-xl tw-text-white'}>|</span>
                    <div><Image src='/sui-logo.svg' alt='sui logo' width={70} height={30}/></div>
                </div>
                <div className={'tw-flex tw-justify-center tw-pb-2'}>
                    <Image src='/HackerHouseNew[1].svg' alt='HackerHouseNew[1]' width={400} height={200}
                           className={'tw-object-contain'}/>
                </div>
                <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center tw-gap-2 md:tw-gap-8">
                    <p className="tw-text-semibold tw-text-center tw-text-3xl tw-italic tw-text-cyan-400 tw-pb-14">
                        Road to Sui Overflow
                    </p>
                </div>
            </div>
            <div className={'tw-flex tw-justify-center tw-mx-auto'}>
                <div className={`${style.sub} tw-flex md:tw-flex-row tw-flex-col tw-justify-center tw-gap-12 tw-items-center tw-rounded-lg tw-shadow-lg tw-px-4 tw-py-6 md:tw-w-1/2 tw-w-[93%] -tw-mt-8`}>
                    <div className={'tw-flex tw-items-center tw-w-32 tw-gap-2 tw-text-sm tw-font-bold'}><CalendarMonth style={{color:'#2563EB'}}/> March 24-29, 2025</div>
                    <div className={'tw-flex tw-items-center tw-w-48 tw-gap-2 tw-text-sm tw-font-bold'}><PinDrop style={{color:'#2563EB'}}/>312 Herbert Macaulay, Sabo, Yaba, Lagos, Nigeria</div>
                    <div className={'tw-flex tw-items-center tw-w-48 tw-gap-2'}><AccessTime style={{color: '#2563EB'}}/>
                        <div>
                            <p className="tw-text-sm">Application Deadline:</p>
                            <p className="tw-font-semibold tw-text-sm">March 12, 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainHeader;