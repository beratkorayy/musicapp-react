import React from 'react'
import CenterMenu from './CenterMenu'

const Header = () => {
    const buttonStyle = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]'
    return (
        <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
            {/* logo */}
            <img src={require("../img/MuzicLogo.png")} alt="" className='logo w-[42px] h-[42px]' />
            {/* side menu */}
            <CenterMenu />
            {/* buttons */}
            <div className="buttons flex">
                <button className={'mr-[35px] '+buttonStyle+' hover:bg-[#232A4E] ' }>Log in</button>
                <button className={'bg-[#232A4E] ' + buttonStyle }>Sign Up</button>
            </div> 
        </div>
    )
}

export default Header