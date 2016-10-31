import React from 'react'
import { connect } from 'react-redux'

import debounce from '../../debounce'

const Visual = ({ playerState }) => {
    const cn = (playerState === 'playing') ? `player active` : `player`
    return (
        <svg className={cn} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" >
            <defs>
                <rect id="path-1" x="88" y="0" width="30" height="30" rx="10"></rect>
                <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="30" height="30" fill="white">
                    <use xlinkHref="#path-1"></use>
                </mask>
                <rect id="path-3" x="96" y="8" width="15" height="15" rx="7.5"></rect>
                <mask id="mask-4" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="15" height="15" fill="white">
                    <use xlinkHref="#path-3"></use>
                </mask>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Artboard">
                    <circle id="outer-circle" stroke="#FFFFFF" cx="200.5" cy="200.5" r="112.5"></circle>
                    <circle id="inner-circle" stroke="#CB121F" cx="200.5" cy="200.5" r="28.125"></circle>
                    <path id="arcs" d="M120,200.5 C120,244.958922 156.041078,281 200.5,281 L200.5,281 M281,200.5 C281,156.041078 244.958922,120 200.5,120" id="arcs" stroke="#FFFFFF" ></path>
                    <g transform="translate(243.000000, 63.000000)" stroke="#FFFFFF">
                        <g id="stick">
                            <path d="M29.5,179.5 L102.5,30.5" id="Line" strokeWidth="2" strokeLinecap="square"></path>
                            <rect id="Rectangle" strokeWidth="2" transform="translate(16.501718, 186.496813) rotate(-31.000000) translate(-16.501718, -186.496813) " x="2.00171814" y="178.996813" width="29" height="15"></rect>
                            <use id="Rectangle-2" mask="url(#mask-2)" strokeWidth="4" xlinkHref="#path-1"></use>
                            <use id="Rectangle-2-Copy" mask="url(#mask-4)" strokeWidth="4" xlinkHref="#path-3"></use>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}


const mapStateToProps = store => {
    return {
        playerState: store.playerState
    }
}

export default connect(mapStateToProps)(Visual)