import image from '../assets/image/phone.jpg'

const Phone =()=>{
    return(
        <>
        <div className="box">
            <img src={image} alt="" />
            <h2>Samsung</h2>
            <h3>49000</h3>
            <button>Buy now</button>
        </div>
        
        </>
    )
}
export default Phone