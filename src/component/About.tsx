const About=()=>{
    return (
        <div className="tw-mx-auto tw-my-16 tw-max-w-6xl tw-px-4 tw-py-8">
            <div className={'tw-grid md:tw-grid-cols-2 tw-items-center tw-gap-8'}>
                <div className="tw-relative tw-flex tw-justify-center tw-items-center">
                    <div className="tw-relative tw-w-[350px] tw-h-[350px] tw-bg-[#0A1739] tw-rounded-full tw-overflow-hidden tw-flex tw-items-center tw-justify-center">
                        <img
                            className="tw-w-[100%] tw-h-[100%] tw-object-cover"
                            src="/about-sui-image.svg"
                            alt="person"
                        />
                    </div>
                    <div className="tw-absolute md:tw-top-16 lg:tw-top-8 tw-top-12 md:tw-left-[14%] tw-left-[20%] tw-bg-white tw-text-black tw-text-sm tw-px-3 tw-py-1 tw-rounded-lg tw-flex tw-items-center tw-shadow-md">
                        Web 3.0
                    </div>
                    <div className="tw-absolute tw-bottom-8 tw-right-[10%] tw-bg-white tw-text-black tw-text-sm tw-px-3 tw-py-1 tw-rounded-lg tw-flex tw-items-center tw-shadow-md">
                        Blockchain Tech
                    </div>
                </div>
                <div>
                    <div className={'tw-text-2xl tw-text-blue-600 tw-mb-6 tw-font-bold'}>About SUI Lagos Hacker House
                    </div>
                    <p className={'tw-mb-4'}><span className={'tw-font-semibold tw-text-blue-600'}>Sui Lagos Hacker House</span> is
                        a 6-day event that is designed to bring
                        together developers, engineers, builders,
                        innovators, and blockchain enthusiasts who are interested
                        in building on the Sui blockchain.</p>
                    <p className={'tw-mb-4'}>The event will feature workshops, mentorship and coaching sessions,
                        hacking, and networking opportunities to encourage innovation and
                        collaboration during and after the event. It is aimed at helping
                        Nigerian participants build robust solutions using Sui and prepare
                        for the <span className={'tw-font-semibold tw-text-blue-600'}>Sui Overflow 2023 Hackathon</span>,
                        a global competition with over $500,000 in combined prizes.
                    </p>
                    <p>The Sui Lagos Hacker House is implemented by Semicolon and sponsored by the Sui Foundation.</p>
                </div>

            </div>

        </div>
    )
}
export default About;