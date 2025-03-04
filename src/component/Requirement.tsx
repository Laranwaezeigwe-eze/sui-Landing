import {Verified} from "@mui/icons-material";
const Requirement = ()=>{
    return(
        <div className={'tw-mx-auto tw-max-w-6xl tw-px-4 tw-py-8 tw-my-8'}>
            <div className={'tw-grid md:tw-grid-cols-2 md:tw-gap-24 tw-gap-8'}>
                <div>
                    <img src='/participation-requirement-image.png' alt={'requirement'} className={'tw-relative tw-rounded-2xl md:tw-h-[38vh] md:tw-w-[42vw]'}/>
                </div>
                <div className={'tw-w-[90%]'}>
                    <div className={'tw-mb-6 md:tw-text-3xl tw-text-2xl tw-font-bold tw-text-blue-600'}>Participation Requirements</div>
                    <div  className={'tw-space-y-4 tw-text-base'}>
                        <p className={'tw-flex tw-gap-3'}><Verified style={{color: '#06B6D4'}}/>Teams must be physically present at the venue in Lagos
                            throughout the duration of the hacker house (March 24-29).
                        </p>
                        <p className={'tw-flex tw-gap-3'}><Verified style={{color: '#06B6D4'}}/>Teams should ensure they can be fully engaged and
                            attentive to their projects throughout the period
                        </p>
                        <p className={'tw-flex tw-gap-3'}><Verified style={{color: '#06B6D4'}}/>All participants will be required to adhere to the
                            event guidelines and code of conduct.
                        </p>
                        <p className={'tw-flex tw-gap-3'}><Verified style={{color: '#06B6D4'}}/>Intellectual property created by teams during the hacker house will be retained by those teams.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Requirement;