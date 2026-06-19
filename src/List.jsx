import htmlimg from "./asscet/html.png"
import jsimg from "./asscet/download (1).jpg"
import cssimg from "./asscet/download.jpg"
import Card from "./Card"

function List (){
    let data =[
        {
            name:"helloworls",
            img:htmlimg,
            price:9100

        },
        {
            name:"helloworls",
            img:jsimg,
            price:100

        },
        {
            name:"helloworls",
            img:cssimg,
            price:7100

        },
        {
            name:"helloworls",
            img:cssimg,
            price:1000

        }

        
    ]
   
    const listdata = data.map((e)=> <Card name={e.name} img={e.img} price={e.price} />)
    return(
        <>
        {listdata}
        </>
    )
}
export default List