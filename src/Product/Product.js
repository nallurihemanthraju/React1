import React,{ useState} from 'react'

let  Product = () => {
    let[product,setproduct]=useState({
       name:"Iphone",
       price:100000 ,
       qty:1,
    })
    let incrHandler=()=>{
        setproduct({...product,qty:product.qty+1})
    }
    let decrHandler=()=>{
        setproduct({...product,qty:product.qty-1})
    }

  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-8'>
                <table className='table bg-dark bg-dark'>
                    <thead className='text-white'>
                       <th>Product Name</th>
                       <th> Price</th>
                       <th>Total Price</th>
                    </thead>
                    <tbody>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.qty}</td>
                    <td>
                        <i class='fa fas-minus-circle' onClick={decrHandler}></i>
                        <i class='fa fas-plus-circle' onClick={incrHandler}></i></td>
                    <td>{product.price*product.qty}</td>
                    </tbody>
                </table>

            </div>

        </div>
    </div>
     </>
  )
}

export default Product