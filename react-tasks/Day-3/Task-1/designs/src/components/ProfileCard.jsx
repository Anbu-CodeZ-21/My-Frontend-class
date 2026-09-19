import anbu from '../assets/images/anbu.jpg'
const ProfileCard =()=>{
    return(
        <>
        <div className='content'>
           
            <img className="logo" src={anbu} alt="" />
            <h2>Anbu A</h2>
            <h3>Web developer</h3>
            <button>click</button>


        </div>
        
        </>
    )
}
export default ProfileCard