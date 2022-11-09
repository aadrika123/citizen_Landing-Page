import React from 'react'
import TradeProvisionalComponent from './TradeProvisionalComponent';
import ReactToPrint from 'react-to-print-advanced';
import { useEffect } from 'react';

function ProvisionalLicense() {

  const componentRef = React.useRef();

  useEffect(() => {
    const btnRef = document.getElementById("clickButton");
    // btnRef.click();
    // btnRef.
    window.open("","_blank");
  },[1])

  return (
    <div>

      <div>
        <ReactToPrint
          trigger={() => <button id='clickButton'>Print this out!</button>}
          content={() => componentRef.current}
          copyStyles={true}
        />
        <TradeProvisionalComponent ref={componentRef} />
        {/* <SlipBody copyStyles={true} ref={componentRef} successData={props.successData} paymentData={props.paymentData} /> */}
      </div>
    </div>
  )
}

export default ProvisionalLicense