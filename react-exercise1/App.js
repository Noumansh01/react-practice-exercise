import {Basket} from "./component/basket";
import {Button} from "./component/button";
import right_arrow_img from "./assets/images/Right-Arrow-PNG-Image.png";
const App = ()=>{
  let left_apples=10;
  let right_apples=0;
  return(
     <div className="container">
            <Basket applevalue={left_apples} basketName="Basket 1"/>
            {/* <Button  imagesrc={left_arrow_img} /> */}
            <Button  imagesrc={right_arrow_img} />
            <Basket applevalue={right_apples} basketName="Basket 2"/>
     </div>
  )
}
export default App;