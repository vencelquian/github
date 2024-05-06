import backgroundimg from '../images/mainbg.jpg';

const Hero = () => {
    return (
        <>
        <div className='backgroundimage'>
            <img src={backgroundimg} alt="bgi" />
            <div className='relative w-100 h-100 flex justify-center'>
                <h1>Making Every Sip A Step In The Right Direction!</h1></div>
        </div>

        </>
    )
}

export default Hero;