import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../redux/actions/productActions';

export default function Filter() {
    const  [searchKey, setSearchKey] = useState('')
    const [sort, setSort] = useState('popular')
    const [category, setCategory] = useState('all')

    const dispatch = useDispatch();

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-3 mt-4' style={{ margin: '10px 5px' }}>
          <input
            type='text'
            value={searchKey}
            onChange={(e)=>setSearchKey(e.target.value)}
            placeholder='search products'
            className='form-control'
            style={{ width: '100%' }}
          />
        </div>
        
        <div className='col-md-3 mt-4' style={{ margin: '10px 5px' }}>
          <select className='form-control' style={{ width: '100%' }} value={sort} onChange={(e)=>setSort(e.target.value)}>
            <option value='popular'>Popular</option>
            <option value='htl'>High to Low</option>
            <option value='lth'>Low to High</option>
          </select>
        </div>
        
        <div className='col-md-3 mt-4' style={{ margin: '10px 5px' }}>
          <select className='form-control' style={{ width: '100%' }} value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value='all'>All</option>
            <option value='fashion'>Fashion</option>
            <option value='electronics'>Electronics</option>
            <option value='mobile'>Mobiles</option>
            <option value='games'>Games</option>
          </select>
        </div>
        
        <div className='col-md-2 mt-4' style={{ margin: '10px 5px' }}>
          <button
            className='btn btn-dark'
            style={{ width: '100%' }}
            onClick={()=>{dispatch(filterProducts(searchKey, sort, category))}}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
