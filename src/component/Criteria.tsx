import Image from 'next/image'
const Criteria = ()=>{
    return (
        <div className="tw-mx-auto tw-max-w-6xl tw-px-4 tw-py-8 tw-my-8">
            <div className="tw-relative tw-rounded-xl tw-bg-[#0A1739] tw-overflow-hidden md:tw-overflow-visible">
                <div className="tw-grid md:tw-grid-cols-2 tw-items-center">
                    <div className="tw-p-16 tw-z-10 tw-relative">
                        <h3 className="tw-mb-6 tw-text-xl tw-font-bold tw-text-cyan-500">Eligibility Criteria</h3>
                        <div className="tw-space-y-4">
                            <p className="tw-text-white">
                                <span className="tw-font-semibold tw-text-cyan-500">Team Size:</span> Between 2-4
                                members
                            </p>
                            <p className="tw-text-white">
                                <span className="tw-font-semibold tw-text-cyan-500">Age:</span> 18+ years old
                            </p>
                            <p className="tw-text-white">
                                <span className="tw-font-semibold tw-text-cyan-500">Participants:</span> Open to
                                developers,
                                designers, entrepreneurs, and blockchain enthusiasts
                            </p>
                        </div>
                    </div>
                    <div className="tw-relative md:tw-static">
                        <Image
                            src="/eligibility-image.svg"
                            alt="Team members smiling"
                            width={500}
                            height={350}
                            className="tw-w-full tw-h-auto md:tw-hidden"
                        />
                        <Image
                            src="/eligibility-image.svg"
                            alt="Team members smiling"
                            width={600}
                            height={450}
                            className="tw-hidden md:tw-block tw-absolute lg:-tw-top-12 md:-tw-top-0 md:tw-right-0 md:tw-translate-x-10 md:-tw-translate-y-12"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Criteria;