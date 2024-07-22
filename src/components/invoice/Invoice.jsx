import React from "react";
import { Link } from "react-router-dom";
export default function InvoiceComponent() {
  const contactData = [
    { url: "#", text: "www.gotirp.com" },
    { url: "#", text: "invoice@gotrip.com" },
    { url: "#", text: "(123) 123-456" },
  ];

  const handlePrintClick = () => {
    window.print();
  };

  const items = [
    { description: "Standard Plan", price: 443.0, vat: 921.8, total: 9243 },
    { description: "Extra Plan", price: 413.0, vat: 912.8, total: 5943 },
  ];

  const total = items.reduce((acc, item) => acc + item.total, 0);
  return (
    <div className="bg-white rounded-4">
      <div className="layout-pt-lg layout-pb-lg px-50">
        <div className="row justify-between">
          <div className="col-auto">
            {" "}
            <h1 className="h1">Hospitality Me</h1>
          </div>
          <div className="col-xl-4">
            <div className="row justify-between items-center">
              <div className="col-auto">
                <div className="text-26 fw-600">Invoice #</div>
              </div>
              <div className="col-auto">
                <div className="text-18 fw-500 text-light-1">0043128641</div>
              </div>
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="row justify-between pt-50">
          <div className="col-auto">
            <div className="text-15 text-light-1">Invoice date:</div>
            <div className="text-15 fw-500 lh-15">03/10/2022</div>
          </div>
          {/* end .col */}

          <div className="col-xl-4">
            <div className="text-15 text-light-1">Due date:</div>
            <div className="text-15 fw-500 lh-15">03/10/2022</div>
          </div>
        </div>
        {/* End .row */}

        <div className="row pt-50">
          <div className=" table-responsive">
            <table className="table col-12">
              <thead className="bg-blue-1-05 text-blue-1">
                <tr>
                  <th>Description</th>
                  <th>Price</th>
                  <th>VAT (20%)</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="table-responsive">
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.description}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${item.vat.toFixed(2)}</td>
                    <td>${item.total}</td>
                  </tr>
                ))}
                <tr>
                  <td className="text-18 fw-500">Total Due</td>
                  <td />
                  <td />
                  <td className="text-18 fw-500">${total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End layout-pt */}

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
  );
}
