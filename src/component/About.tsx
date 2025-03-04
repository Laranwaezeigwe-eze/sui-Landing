import style from '../styles/Header/style.module.css'
const About=()=>{
    return (
        <div className="tw-mx-auto tw-my-16 tw-max-w-6xl tw-px-4 tw-py-8">
            <div className={'tw-grid md:tw-grid-cols-2 tw-items-center tw-gap-8'}>
                <div className={'tw-relative'}>
                    <div style={{position:'absolute'}} className="tw-top-5 tw-left-0 tw-rounded-xl tw-bg-[#E0E1E3] tw-p-2 tw-shadow-lg tw-z-50 tw-text-sm tw-font-medium tw-text-gray-800">Web 3.0</div>
                    <div className="tw-relative tw-w-full tw-max-w-[350px] tw-aspect-square tw-overflow-hidden tw-rounded-full tw-bg-[#0A1739]">
                        <img src='/about-sui-image.svg' alt='about' className={'tw-absolute tw-object-contain'}/>
                    </div>
                    <div className="tw-absolute -tw-bottom-1 md:tw-right-48 tw-left-56 tw-rounded-xl tw-bg-[#E0E1E3] tw-p-2 tw-shadow-lg tw-text-sm tw-font-medium tw-text-gray-800">Blockchain Tech</div>
                </div>
                <div>
                    <div className={'tw-text-2xl tw-text-blue-600 tw-mb-6 tw-font-bold'}>About SUI Lagos Hacker House</div>
                    <p className={'tw-mb-4'}><span className={'tw-font-semibold tw-text-blue-600'}>Sui Lagos Hacker House</span> is a 6-day event that is designed to bring
                        together developers, engineers, builders,
                        innovators, and blockchain enthusiasts who are interested
                        in building on the Sui blockchain.</p>
                        <p className={'tw-mb-4'}>The event will feature workshops, mentorship and coaching sessions,
                        hacking, and networking opportunities to encourage innovation and
                        collaboration during and after the event. It is aimed at helping
                        Nigerian participants build robust solutions using Sui and prepare
                            for the <span className={'tw-font-semibold tw-text-blue-600'}>Sui Overflow 2023 Hackathon</span>, a global competition with over $500,000 in combined prizes.
                        </p>
                        <p>The Sui Lagos Hacker House is implemented by Semicolon and sponsored by the Sui Foundation.</p>
                </div>

            </div>

        </div>
    )
}
export default About;