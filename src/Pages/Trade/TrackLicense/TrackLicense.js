import React from 'react'
import TrackLicenseComponent from '../TrackLicense/TrackLicenseComponent';
import TradeFormReview from './TradeFormReview';

function TrackLicense() {
  return (
    <div>
    {/* Track license component for searching application or license number */}
      <TrackLicenseComponent />
      <TradeFormReview/>
    </div>
  )
}

export default TrackLicense