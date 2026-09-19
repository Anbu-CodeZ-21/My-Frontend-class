const Product=()=>{
    return(
        <>
        <div className="box">
            <img src="./images/bike.jpg" alt="" />
            <h2>MT15</h2>
            <h3>250000</h3>
            <button>Buy now</button>
        </div>
        <Car/>
        </>
    )
}
export default Product

export const Car =()=>{
    return(
        <>
        <div className="box">
            <img src="./images/car.jpg" alt="" />
            <h2>Car</h2>
            <h3>500000</h3>
            <button>Buy now</button>
        </div>
        </>
    )
}