import React from 'react'

const Cards = (props) => {

    const handleAddToCart = () => {
        console.log("hello")
    }

return (
    //using props to assign data to cards
    <>
    
    {props.details.map((value,index) => (

    <div className='col-md-6 col-lg-4 '>
    <div className="card mt-5" style={{border:"1px solid black",boxShadow: "0 0 10px black", borderRadius:"0px"}} key={index}>
        <img src={value.img} style={{height: "200px", objectFit:"cover",borderRadius:"0px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
            <p className="card-text">{value.description}</p>
            <div className='d-flex'>
                <div className='quantity' style={{minWidth:"160px"}}>
                <button className="btn btn-primary mt-0" type="submit" style={{borderTopRightRadius:"0px",borderBottomRightRadius:"0px",pointerEvents:"none"}}>Quantity:</button>
                <select href="#" className="btn btn-primary ms-0" style={{borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px",borderLeft:"2px dashed black"}}>
                    {Array.from(Array(7), (e,i) => {                        // To Make a quantity Dropdown
                        return(
                            <option key={i+1} value={i+1}>{i+1}</option>
                        )
                    })}
                </select>
                </div>
            <h3 className='ms-5' >{value.price}</h3>
            </div>    
            <hr/>
            <button  onClick={handleAddToCart} className="btn btn-dark w-100" type="submit" style={{borderRadius:"2px",boxShadow: "0 0 5px black"}}>Add To Cart</button>
        </div>
    </div>
    </div>
    
    ))}
    </>
)
}

export default Cards






/*
    
    let qty=1;
    let addItem = async(a,b) => {

        let isExisting = false;

        const result = await axios.get("http://localhost:3001/orderItem")
        if(result.data.length === 0){
            const order = { name:a, price:b, qty:qty };
            axios.post("http://localhost:3001/orderItem", order)
        } else{
            result.data.map((orderItem) => {
                if (a === orderItem.name){
                    orderItem.qty += 1;
                    const order = {
                        name: a,
                        price: b,
                        qty: orderItem.qty
                    };
                    axios.put(`"http://localhost:3001/orderItem/"${orderItem.id}`, order)
                    isExisting = true;
                }
            })
            if (isExisting === false){
                const order={
                    name: a,
                    price: b,
                    qty: qty
                }
                axios.post("http://localhost:3001/orderItem", order)
            }
        }
    }
*/