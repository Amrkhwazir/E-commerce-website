import React, { useState } from 'react';
import {useSelector } from 'react-redux';

const PaymentReceiptModal = () => {
  const payment = useSelector((state) => state.payment);
  console.log(payment)
const [isopenModal, setIsModalOpen ] = useState(true)

  const closeModal = () => {
    setIsModalOpen(false)
  };

  return (
    <div style={{backgroundColor: "white", width: "500px", height: "570px", position: "absolute", top: 100, left: 400, border: "2px solid black",  display: !isopenModal  ? "none" : "block", boxShadow: "0px 1px 4px 1px gray"}}>
        <div className="modal" >
          <div className="modal-content" style={{display: "flex", flexDirection: "column", padding: '10px'}}>
            <span className="close" onClick={closeModal} style={{fontSize: "25px", marginLeft: "10px", cursor: "pointer"}} >
              &times;
            </span>
            <h2 style={{textAlign: "center"}}>PAYMENT RECIEPT</h2>
            <div className='customer-detail' style={{width: '100%', marginTop: "20px", marginLeft: "10px", lineHeight: "1.5", fontSize: '14px'}}>
            <p>Customer Name : {payment?.currentPayment?.billing_details?.name  || "N/A"}</p>
            <p>Contact No. {payment?.currentPayment?.billing_details?.phone  || "N/A"}</p>
            <p>Email: {payment?.currentPayment?.receipt_email || "N/A"}</p>
            <br />
            <p>Date: 28 Feb 2024</p>  
            <p>Service By:</p>
            <p>Payment Type: {payment?.currentPayment?.payment_method_details.card.brand || "N/A"}</p>
            </div>
            <div className='invoice-detail' style={{display: "flex", justifyContent: "space-between", marginTop: "20px", padding: "10px"}}>
            <h5>Invoice No.</h5>
            <h5 style={{width: "230px"}}>Invoice Description</h5>
            <h5> Invoice Total</h5>
            </div>
            <div className='amount-detail' style={{textAlign: "right", marginTop: "20px", marginRight: "12px", fontSize: "14px", lineHeight: "1.8", marginBottom: "30px"}}>
            <p>Sub Total ------------ {`$${payment?.currentPayment?.amount}` || "N/A"}</p>
            <p>Taxes Rate ------------ $5.00</p>
            <p>Sale Tax ------------ $5.00</p>
            <p>Other ------------ $0.00</p>
            <p>Total Due ------------ {`$${payment?.currentPayment?.amount}` || "N/A"}</p>
            </div>
            <hr />
            <div className='company-detail' style={{display: "flex", justifyContent: "space-between", padding: "10px"}}>
          <div style={{fontSize: "12px", lineHeight: 1.4}}>
            <p>MegaMart@gmail.com</p>
            <p>Sir Syed University of Engineering. <br /> 11 street Gulshan Iqbal,Karachi,Pakistan</p>
            <p>www.MegaMart.com</p>
          </div>
          <h2>MegaMart</h2>
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default PaymentReceiptModal;
