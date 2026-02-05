import React, {  useState } from 'react';
import { loadWishlist, removeFromWishlist } from '../utils/localstorage';

const Installation = () => {
  const [wishlist, setWishlist] = useState(() => loadWishlist());
  const [sortOrder, setSortOrder] = useState('none');

   if (!wishlist.length) return <p>No Data Available</p>


  const sortedItem = (() => {
    if (sortOrder === 'price-asc') {
      return [...wishlist].sort((a, b) => a.size - b.size);
    } else if (sortOrder === 'price-desc') {
      return [...wishlist].sort((a, b) => b.size - a.size);
    } else {
      return wishlist;
    }
  })();

  const handleRemove = id => {
    // remove from localstorage
    removeFromWishlist(id);
    // for ui instant update
    setWishlist(prev => prev.filter(p => p.id !== id));
  };
  return (
    <div className="space-y-6">
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">
          Wishlist{' '}
          <span className="text-sm text-gray-500">
            ({sortedItem.length}) Products Found.
          </span>
        </h1>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by price</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {sortedItem.map(p => (
          <div key={p.id} className="card card-side bg-base-100 shadow border">
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{p.name}</h3>
              <p className="text-base-content/70">{p.category}</p>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <div className="font-semibold">${p.price}</div>
              <button
                onClick={() => handleRemove(p.id)}
                className="btn btn-outline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
