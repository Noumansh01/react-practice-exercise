
 export const Basket = (props) =>{
  let {applevalue,basketName} = props;
return(
  <div className="basket-1">
      <h1><span>{applevalue}</span> Apples</h1>
      <p>{basketName}</p>
    </div>
)
}
