import React, { useState } from "react";

const HotelPolicy = ({ items, setItems }) => {
  const handleAddItem = () => {
    console.log(items);
    setItems([...items, { title: "", content: "" }]);
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setItems(newItems);
  };

  return (
    <>
      <div className="mt-20">
        <div className="fw-500 mb-20">Rules</div>
        <div className="overflow-scroll scroll-bar-1">
          <table className="table-5 -border-bottom col-12">
            <thead className="bg-light-2">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="col-5">
                    <div className="form-input">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) =>
                          handleChange(index, "title", e.target.value)
                        }
                        required
                      />
                      <label className="lh-1 text-16 text-light-1">Rule</label>
                    </div>
                  </td>
                  <td className="col-7">
                    <div className="form-input">
                      <textarea
                        value={item.content}
                        onChange={(e) =>
                          handleChange(index, "content", e.target.value)
                        }
                        required
                        rows={5}
                      />
                      <label className="lh-1 text-16 text-light-1">
                        Content
                      </label>
                    </div>
                  </td>
                  <td className="col-auto">
                    <button
                      className="flex-center bg-light-2 rounded-4 size-35"
                      onClick={() => handleRemoveItem(index)}
                    >
                      <i className="icon-trash-2 text-16 text-light-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-end">
          <button
            className="button -md -blue-1 bg-blue-1-05 text-blue-1 mt-20"
            onClick={handleAddItem}
          >
            Add Item
          </button>
        </div>
      </div>
    </>
  );
};

export default HotelPolicy;
