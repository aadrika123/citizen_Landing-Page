import newImg from '../TradeAssests/new.png';
import renew from '../TradeAssests/renew.png';
import amend from '../TradeAssests/amend.png';
import flag from '../TradeAssests/flag.png';
import energy from '../TradeAssests/energy.png';

import React, { useState, useEffect } from 'react'

function TradeAssetComponent(props) {
    const applicationType = props.applicationType;
    const iconContainerStyle = "w-full mx-4 my-2";
    const iconBoxStyle = "flex text-gray-500 text-lg font-mono";
    const iconStyle = "w-6 h-6 opacity-75";

    return (
        <div className={`${iconContainerStyle}`}>
            {applicationType == 1 && <div className={`${iconBoxStyle}`}><img className={`${iconStyle}`} src={newImg} alt="application type" title='New Application' /> &nbsp;Apply New  <span className='text-xs pt-2 font-semibold'> (TRADE LICENSE)</span></div>}
            {applicationType == 2 && <div className={`${iconBoxStyle}`}> <img className={`${iconStyle}`} src={energy} alt="application type" title='Renewal' /> &nbsp;Apply Renewal <span className='text-xs pt-2 font-semibold'>(TRADE LICENSE)</span></div>}
            {applicationType == 3 && <div className={`${iconBoxStyle}`}>New Application <img className={`${iconStyle}`} src={amend} alt="application type" title='Amendment' />&nbsp;Apply Amendment <span className='text-xs pt-2 font-semibold'>(TRADE LICENSE)</span></div>}
            {applicationType == 4 && <div className={`${iconBoxStyle}`}> <img className={`${iconStyle}`} src={flag} alt="application type" title='Surrender' />&nbsp; Apply Surrender <span className='text-xs pt-2 font-semibold'>(TRADE LICENSE)</span></div>}
        </div>
    )
}

export default TradeAssetComponent;

