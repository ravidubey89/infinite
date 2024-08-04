import React from 'react'
import "./RefundPolicy.css"
const RefundPolicy = () => {

  return (
    <div className='commonContents'>
        <div className='container'>
          <h3>Refund Policy</h3>
            <p> Thank you for choosing Infinite Epicenter for your truck rental needs. Our refund policy is designed to ensure a fair and transparent process for handling refunds.</p>
            <div className='privacy-policy-repeat'>
              <strong>1. Cancellations and Refunds</strong>
              <p><b>Cancellation by Customer: </b>If you need to cancel your truck rental reservation, please notify us as soon as possible. Cancellation policies vary depending on the rental duration and other factors, as specified in your rental agreement.</p>
              <p><b>Refund Eligibility: </b>Refunds are processed based on the following guidelines:</p>

              <ul>
                <li><b>Full Refund:</b> A full refund will be issued if the cancellation is made within [number] days/hours of the scheduled rental start time.</li>
                <li><b>Partial Refund:</b> A partial refund may be issued if the cancellation occurs after the specified period but before the rental begins. This refund amount will be prorated based on the remaining rental duration.</li>
                <li><b>No Refund:</b> No refund will be issued for cancellations made after the rental has started or for unused portions of the rental period.</li>
              </ul>
            </div>

            <div className='privacy-policy-repeat'>
              <strong>2. Refund Process</strong>
              <p><b>Requesting a Refund: </b>To request a refund, please contact our customer service team at [Contact Information]. Provide your reservation details and reason for cancellation.</p>
              <p><b>Refund Timeline: </b>Refunds are typically processed within [number] business days of receiving your cancellation request. The refund will be issued to the original method of payment used for the reservation.</p>

            </div>

            <div className='privacy-policy-repeat'>
              <strong>3. Exceptions</strong>
              <p><b>Damaged or Faulty Trucks: </b>If the rented truck is found to be damaged or faulty upon pickup, and we are unable to provide a suitable replacement, a full refund will be issued.</p>

            </div>

        </div>
    </div>
  )
}

export default RefundPolicy