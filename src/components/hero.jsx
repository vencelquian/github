import backgroundimg from '../images/mainbg.jpg';

const Hero = () => {
    return (
        <>
        <div className='backgroundimage'>
            <img src={backgroundimg} alt="bgi" />
            <div className='relative w-100 h-100 flex '>
                <h1 className="[font-family:'Inter-Regular',Helvetica] font-black text-[#fff7f7] text-[24px] tracking-[0] leading-[normal]">Making Every Sip A Step In The Right Direction!</h1></div>
        </div>

        </>
    )
}

export default Hero;