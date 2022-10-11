import { Link } from "react-router-dom";
const Cart = ({topic,handleToStart}) => {
    const {name,logo,total,id}= topic;
    return (
    <div className="card card-side bg-[#454545] shadow-xl text-teal-400">
        <figure><img className="w-[250px] h-56" src={logo} alt="/"/></figure>
        <div className='p-8'>
          <h2 className="card-title">{name}</h2>
          <p>Total quiz: {total}</p>
          <div className="card-actions justify-end mt-8">
            <button
             onClick={()=>handleToStart(id)}
             className="btn bg-white text-teal-500"> <Link to="/quiz"> Start practice</Link></button>
          </div>
        </div>
    </div>

    );
};

export default Cart;