import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';
import Logo from '../images/stepbigbrew_logo.png';

const nav = () => {
    const [toggle, setToggle] = useState(false)

    function openMenu(){
        setToggle(true)
    }

    function closeMenu(){
        setToggle(false)
    }
    return (
        <>
            <div className="flex items-center justify-between p-5 lg:flex-row text-white">
                <div>
                    <a href="#" className='hover:text-orange-500 px-5 py-2 text-xl'>
                    <img class="object-scale-down h-50 w-60"src={Logo} alt="StepBigBrew Logo"/>  
                    </a>
                    
                    
                </div>
                <div className="space-x-12">
                    <div className='ssm:hidden lg:block space-x-2'>
                        <a href="#" className='hover:text-orange-500 px-5 py-2 text-lg'>Home</a>
                        <a href="#" className='hover:text-orange-500 px-5 py-2 text-lg'>About</a>
                        <a href="#" className='hover:text-orange-500 px-5 py-2 text-lg'>Contact</a>
                        <a href="#" className='text-orange-500 font-sans hover:text-gray-500 px-5 py-2 text-lg'>Buy Now</a>
                    </div>
                    <div className='ssm:block lg:hidden'>
                {toggle ? (<AiOutlineClose onClick={closeMenu} size={30} className='text-white'/>
                ):(<HiMenuAlt1 onClick={openMenu} size={30} className='text-white'/>)} 
                            
                        
                    </div>
                </div>
            </div>
            
            <div className='ssm:block lg:hidden'>
                {toggle ? (
                    <div className='flex justify-between ml-10 text-white text-lg'>
                    <ul>
                        <li>Home</li>
                        <li>Buy Coffee</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
                ):(
                    <div></div>

                )}
            </div>
        </>
    )
}

export default nav