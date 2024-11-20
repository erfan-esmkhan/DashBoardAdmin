import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { products } from '../../datas'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import './product.css'

export default function Product() {

  const [productDatas, setproductDatas] = useState(products)

  const productDelete = productID  => {
    setproductDatas(productDatas.filter(product => product.id !== productID))
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'title',
      headerName: 'Name',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className='userListUser'>
              <img src={params.row.avatar} className="userListImg" alt='' />
              {params.row.title}
            </div>
          </Link>
        )
      }
    },
    
    {
      field: 'price',
      headerName: 'price',
      width: 120
    },
    
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => productDelete(params.row.id)}
            />
          </>
        )
      }
    }
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={productDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={4}
        checkboxSelection
      />
    </div>
  );
}
