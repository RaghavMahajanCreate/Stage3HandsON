import React,{useState} from 'react';
import CompanyDetailsComponent from './CompanyDetailsComponent';
import {Container,Row} from 'react-bootstrap';
import axios from 'axios';


function CompaniesListComponent(props){

    const userId = 1

    const [CompanyList,setCompanyList] = useState([])
    axios.get("http://localhost:8080/companies").then((res)=>{
        setCompanyList(res.data)
    })
    var CompanyDetailsList = []
    console.log(CompanyList)
    
    CompanyList.map((company)=>{
        console.log(company)
        CompanyDetailsList.push(<CompanyDetailsComponent loggedIn={true} watch={false} userId={userId} companyId={company.companyId} companyName={company.companyName} description={company.description} price={company.currentStockPrice}/>)
        return false
})

    return(
        <Container>
            <Row>
             {CompanyDetailsList}
            </Row>
        </Container>
    )
    
}
    
export default CompaniesListComponent