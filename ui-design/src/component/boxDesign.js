import Dropdown from './dropdown.js';
import "../component/design.css";

function Design() {

    function handleClick() {
        <Dropdown />
    }

  return (
    <div className='box-wrapper'>
      <div >
        <h1 className='divider'>Bundle & Save</h1>
      </div>
     <div className='box1'>
        <input type='radio' className='pleft'  onClick={handleClick} />
        <label className='pleft' for="show" >1 Pair <br />DKK 195.00</label>
        <p className='pright'>50% OFF</p>
     </div>
     <div className='box1'>
     <input type='radio' className='pleft' onClick={handleClick} />
        <label className='pleft'>2 Pair <br />DKK 345.00</label>
        <p className='pright'>40% OFF</p>
        <div ><Dropdown /></div>
     </div>
     <div className='box1'>
     <input type='radio' className='pleft' onClick={handleClick} />
        <label className='pleft'>3 Pair <br />DKK 528.00</label>
        <p className='pright'>60% OFF</p>
     </div>
     <div>
      <p class="alignleft">Free 2Day Shipping</p>
      <p class="alignright">Total: <strong>DKK 360.00</strong></p>
     </div>
     <button className='button'> + Add to Cart</button>
     <p className="p">&copy; Powered by Pumber</p>
    </div>
    
  )
}

export default Design;
