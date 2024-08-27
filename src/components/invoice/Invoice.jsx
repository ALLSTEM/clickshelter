import React from "react";
import { Link } from "react-router-dom";

export default function InvoiceComponent({ payout }) {
  const contactData = [
    { url: "#", text: "www.gotirp.com" },
    { url: "#", text: "invoice@gotrip.com" },
    { url: "#", text: "(123) 123-456" },
  ];

  const handlePrintClick = () => {
    window.print();
  };

  const items = [
    {
      description: "Payout to Account",
      price: parseFloat(payout.amount),
      vat: parseFloat(payout.fee),
      total: parseFloat(payout.amount) - parseFloat(payout.fee),
    },
  ];

  const total = items.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="bg-white rounded-4">
      <div className="layout-pt-lg layout-pb-lg px-50">
        <div className="row justify-between">
          <div className="col-auto">
            <h1 className="h1">ClickShelter</h1>
          </div>
          <div className="col-xl-4">
            <div className="row justify-between items-center">
              <div className="col-auto">
                <div className="text-26 fw-600">
                  Invoice #{payout.reference}
                </div>
              </div>
              <div className="col-auto">
                <div className="text-18 fw-500 text-light-1">
                  {new Date(payout.created_at).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="row justify-between pt-50">
          <div className="col-auto">
            <div className="text-15 text-light-1">Invoice date:</div>
            <div className="text-15 fw-500 lh-15">
              {new Date(payout.created_at).toLocaleDateString()}
            </div>
          </div>
          {/* end .col */}

          <div className="col-xl-4">
            <div className="text-15 text-light-1">Due date:</div>
            <div className="text-15 fw-500 lh-15">
              {new Date(payout.date).toLocaleDateString()}
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="row pt-50">
          <div className="table-responsive">
            <table className="table col-12">
              <thead className="bg-blue-1-05 text-blue-1">
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Fee</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="table-responsive">
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.description}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${item.vat.toFixed(2)}</td>
                    <td>${item.total.toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td className="text-18 fw-500">Total Due</td>
                  <td />
                  <td />
                  <td className="text-18 fw-500">${total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* End .row */}

        <div className="pt-50">
          <div className="row">
            <div className="col-6">
              <div className="text-15 text-light-1">Account Details:</div>
              <div className="text-15 fw-500 tw-my-2">
                Account Name: {payout.account_name}
              </div>
              <div className="text-15 fw-500 tw-my-2">
                Account Number: {payout.account_number}
              </div>
              <div className="text-15 fw-500 tw-my-2">
                Bank: {payout.bank_name}
              </div>
            </div>
            <div className="col-6">
              <div className="text-15 text-light-1">Payment Details:</div>
              <div className="text-15 fw-500 tw-my-2">
                Method: {payout.payment_method}
              </div>
              <div className="text-15 fw-500 tw-my-2">
                Currency: {payout.currency}
              </div>
            </div>
          </div>
        </div>

        <div className="border-top-light py-50">
          <div className="row x-gap-60 y-gap-10 justify-center">
            {contactData.map((contact, index) => (
              <div className="col-auto" key={index}>
                <a href={contact.url} className="text-14">
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* End border-top */}
      </div>
    </div>
  );
}
