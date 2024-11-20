import React from 'react'
import { Link } from 'react-router-dom'
import Chart from './../../component/chart/chart'
import { productsData } from '../../datas'
import PublishIcon from "@mui/icons-material/Publish";
import './product.css'

export default function product() {
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className='produtTitle'>Product</h1>
        <Link to='/newProduct'>
        <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className="productTop">

          <div className="productTopLeft">
            <Chart title="Sale In Month" data={productsData} dataKey='sales' />
          </div>

          <div className="productTopRight">
            <div className="productInfoTop">
              <img src="/images/Laptop.jpg" alt="Dell LapTop" className='productInfoImg' />
              <span className='productName'>Dell LapTop</span>
            </div>

            <div className="productInfoBottom">
              <div className="productInfoItem">
                <div className="productInfoKey">ID: </div>
                <div className="productInfoValue">132</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">Name: </div>
                <div className="productInfoValue">Dell Laptop</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">Sales: </div>
                <div className="productInfoValue">$90000</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">Active: </div>
                <div className="productInfoValue">Yes</div>
              </div>
              <div className="productInfoItem">
                <div className="productInfoKey">In Stock: </div>
                <div className="productInfoValue">No</div>
              </div>
            </div>

          </div>

        </div>
        <div className="productBottom">
          <form className="productForm">

            <div className='productFormLeft'>
              <label>Product Name</label>
              <input type="text" placeholder='Dell Laptop' />

              <label>In Stock</label>
              <select id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <label>Active</label>
              <select id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

            </div>

            <div className='productFormRight'>

              <div className='productUploader'>
                <img src="/images/laptop.jpg" alt="" className='productUploaderImg' />
                <label>
                  <PublishIcon />
                </label>
                <input type="file" style={{display: "none"}} />
              </div>

              <button className='productButton'>Upload (Edit)</button>

            </div>

          </form>
        </div>
    </div>
  )
}
