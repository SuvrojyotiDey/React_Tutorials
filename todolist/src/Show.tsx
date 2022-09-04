import axios from "axios";
import React from 'react'

const Show = () => {
    const baseUrl = " http://localhost:3006/lists/";

    const newData =
    {
        "id": "4",
        "name": "lick",
        "email": "lick@gmail.com"
    }
    const getCall = () => {
        //To fetch data or retrieve it, make a GET request.
        axios.get(`${baseUrl}`).then((response: any) =>
            console.log(response.data, "response.data 8")
        )
    }

    const postCall = () => {
        //To create new data, make a POST request.
        axios.post(baseUrl, newData).then((response: any) =>
            console.log(response.data, "response.data 20")
        )
    }
    const updatedData = {
        "id": "2",
        "name": "oick1",
        "email": "oick@gmail.com"
    }
    const putCall = () => {
        axios.get(baseUrl).then((response: any) => {
            response.data.map((arrayData: any) => {
                if (arrayData.id === '2') {
                    /**
                     * To update a given resource, make a PUT request.
                     * PUT is a method of modifying resource 
                     * where the client sends data that updates the entire resource .
                    */
                   axios.put(`${baseUrl}/2`, updatedData).then((response: any) => {
                        console.log(response.data, "response.data 34")
                    })
                    console.log(arrayData,"arrdt")
                }
                return true;
            }
            )
        }
        )
    }
    const deleteCall=()=>{
        axios.get(baseUrl).then((response:any)=>{
            response.data.map((arrayData:any)=>{
                if(arrayData.id==='4'){
                    axios.delete(`${baseUrl}/4`).then((response:any)=>{
                        console.log(response.data,"response.data 49")
                    })
                }
                return true;
            })
        })
    }
    const patchUpdate={
        "id": "2",
        "name": "tick1",
    }
    const patchData=()=>{
        axios.get(baseUrl).then((response:any)=>{
            response.data.map((arrayData:any)=>{
                if(arrayData.id==='2')
                {
                    /**
                     * PATCH is a method of modifying resources 
                     * where the client sends partial data 
                     * that is to be updated without modifying the entire data.
                     */
                    axios.patch(`${baseUrl}/2`,patchUpdate).then((response:any)=>{
                        console.log(response.data,"response.data 73")
                    })
                }
                return true;
            })
        })
    }
    return (
        <div>
            <div>AXIOS Tutorial</div>
            <div>
                <button onClick={getCall}>GET</button>
                <button onClick={postCall}>POST</button>
                <button onClick={putCall}>PUT</button>
                <button onClick={deleteCall}>DELETE</button>
                <button onClick={patchData}>PATCH</button>
            </div>

        </div>
    )
}

export default Show;