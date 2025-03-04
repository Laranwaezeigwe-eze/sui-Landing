const Footer = ()=>{
    return (
        <div className="tw-mt-12 tw-bg-[#051027] tw-py-12 tw-text-white">
            <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
                <div className="tw-grid tw-grid-cols-1 tw-gap-8 md:tw-grid-cols-2 lg:tw-gap-12">
                    <div className="tw-space-y-4">
                        <h4 className="tw-text-lg tw-font-bold tw-text-[#06b6d4]">Logistics</h4>
                        <ul className="tw-space-y-2">
                            {[
                                "Accommodation will be provided for teams from outside Lagos",
                                "Meals will be provided"
                            ].map((item, index) => (
                                <li key={index} className="tw-flex tw-items-center tw-gap-2">
                                    <span className="tw-mt-1 tw-text-white">•</span>
                                    <span className="tw-text-sm sm:tw-text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="tw-mt-12 tw-pt-8">
                            <div className={'tw-mt-20 tw-hidden md:tw-block'}>
                                <div className="tw-flex tw-items-center tw-gap-4 sm:tw-gap-8">
                                    <img
                                        alt="Semicolon logo"
                                        src="/semicolon-logo.svg"
                                        className="tw-h-6 tw-w-auto tw-object-contain"
                                    />
                                    <span className="tw-hidden tw-text-xl sm:tw-inline-block">|</span>
                                    <img
                                        alt="Sui logo"
                                        src="/sui-logo.svg"
                                        className="tw-h-6 tw-w-auto tw-object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="tw-space-y-4">
                        <h4 className="tw-text-lg tw-font-bold tw-text-[#06b6d4]">Resources and Support</h4>
                        <div className="tw-space-y-4 tw-text-sm sm:tw-text-base">
                            <p>
                                Semicolon is providing free training on Sui Move, sponsored by the Sui Foundation. It
                                isn’t too late to register for the current round of classes. Click on this link to
                                register: <a href="https://bit.ly/SC-SUI-Training"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="tw-break-words tw-underline"> https://bit.ly/SC-SUI-Training
                            </a>
                            </p>
                            <p>
                                Semicolon is a workforce development company that is solving the problem of youth
                                unemployment by training software engineers and techpreneurs. Through our one-year
                                techpreneurship program, we help individuals develop required skills to compete as
                                software engineers in the global market. To learn more about Semicolon, please visit
                                <a href="https://www.semicolon.africa"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="tw-underline"> www.semicolon.africa
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-mt-12 tw-pt-8">
                <div className={'tw-mt-20 md:tw-hidden tw-block'}>
                    <div className="tw-flex tw-items-center tw-justify-center tw-gap-4 sm:tw-gap-8">
                        <img
                            alt="Semicolon logo"
                            src="/semicolon-logo.svg"
                            className="tw-h-6 tw-w-auto tw-object-contain"
                        />
                        <span className=" tw-text-xl sm:tw-inline-block">|</span>
                        <img
                            alt="Sui logo"
                            src="/sui-logo.svg"
                            className="tw-h-6 tw-w-auto tw-object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;