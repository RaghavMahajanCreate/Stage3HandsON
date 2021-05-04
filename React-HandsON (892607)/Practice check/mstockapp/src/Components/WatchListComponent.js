import React,{useState} from 'react';
import CompanyDetailsComponent from './CompanyDetailsComponent';
import {Container,Row} from 'react-bootstrap';
import axios from 'axios';

// axios.defaults.headers.get['Access-Control-Allow-Credentials']='*'

function WatchListComponent(props){

    // const removeFromWatchList = ()=>{
    //     console.log("ASSAD")
    //     axios.delete("http://localhost:8080/watchList",{data:{"userId":1,"companyId":1}}).then((res)=>{
    //         setCompanyList(res.data)
    //         console.log(res)
    //     })
    //     alert("Removed from List Successfully!")
    // }

    // const CompanyList = []
   // const userId = 1
    const [CompanyList,setCompanyList] = useState([])
    axios.get("http://localhost:8080/watchList/1").then((res)=>{
        setCompanyList(res.data)
        console.log(res)
    })
    var CompanyDetailsList = []
    CompanyList.map((company)=>{
        CompanyDetailsList.push(<CompanyDetailsComponent onClick={()=>{
            axios.delete("http://localhost:8080/watchList",{data:{userId:1,companyId:company.company.companyId}}).then((res)=>{
                setCompanyList(res.data)
                console.log(res)
            })
            alert("Removed from List Successfully!")

        }} loggedIn={true} watch={true} companyName={company.company.companyName} description={company.company.description} price={company.company.currentStockPrice}/>)
    return false
    })




    if(CompanyList.length===0){
        return(
            <div>
                <h2>My Companies List</h2>
                <h3>No Company Stock Prices added to Stock List</h3>
            </div>
        )
    }
    else{

        return(
            <Container>
                <Row>
                    {CompanyDetailsList}
                </Row>
            </Container>
        )
    }
}

export default WatchListComponent