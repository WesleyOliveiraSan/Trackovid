import React from 'react'

//Assets
import Up from '../../assets/images/up-arrow-key.png'
import Down from '../../assets/images/down-arrow-key.png'

function ScrollButton({ scroll, position }) {

    const scrollToTop = () => document.documentElement.scrollTop = 0
    const scrollToBottom = () => document.documentElement.scrollTo(0,document.body.scrollHeight)

    return (
        <>
            {
                scroll === "top" ?
                    <button className="scroll-btn d-md-none" onClick={() => scrollToTop()} style={{ bottom: `${position}px` }}><img src={Up}></img></button>
                    :
                    <button className="scroll-btn d-md-none" onClick={() => scrollToBottom()} style={{ bottom: `${position}px` }}><img src={Down}></img></button>
            }
        </>
    )
}

export default ScrollButton
