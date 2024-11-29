
export const Button= (props)=>{
  const {imagesrc}= props;
return(
  <button>
    <img src={imagesrc} alt="image" />
  </button>
)
}