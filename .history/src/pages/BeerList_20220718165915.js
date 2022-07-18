import axios from 'axios'
const BeerList = () => {
    const getBeers=()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then(
            (response)=>{
                setBeers(response.data)
            }
        ).catch((err)=>console.log(err))
        }
    }
    return ( <div>
        <h2>Beer List</h2>

    </div> );
}
 
export default BeerList;