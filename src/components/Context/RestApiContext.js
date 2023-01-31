import React, { useEffect, useState, useContext } from "react";

const FilterContext = React.createContext()
const BlackContext = React.createContext()
const NowContext = React.createContext()
const ProductContext = React.createContext()
const MyDogceo = React.createContext()
export function useMe() {
    return useContext(FilterContext)
}
export function SayMe() {
    return useContext(BlackContext)
}
export function Fetch() {
    return useContext(NowContext)
}
export function ProductBuy() {
    return useContext(ProductContext)
}
export function Doging() {
    return useContext(MyDogceo)
}
function RestApiContext({ children }) {
    const baseUrl = 'https://restcountries.com/v3.1/all';
    const [name, setName] = useState('mayor from lagos ')
    const [otherValue, setOtherValue] = useState(['one', 'nine', 'black'])
    const [product, setProducts] = useState([]);
    const [data, setData] = useState([])
    const [dogceo, setDogceo] = useState({})
    useEffect(() => {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    // const secondApi = async () => {
    //     const second = await fetch('https://dog.ceo/api/breeds/list/all');
    //     const data = await second.json()
    //     setDogceo(data)
    // }
    // const newApi = async () => {
    //     try {
    //         const fetchApi = await fetch('https://fakestoreapi.com/products');
    //         const data = await fetchApi.json();
    //         setProducts(data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    // useEffect( () => {
    //     // newApi(

    // }, [])
    // useEffect(() => {
    //     secondApi()
    // },[])
    return (
        <FilterContext.Provider value={name}>
            <BlackContext.Provider value={otherValue}>
                <NowContext.Provider value={data}>
                    <ProductContext.Provider value={product}>
                        <MyDogceo.Provider value={dogceo}>
                        {children}
                      </MyDogceo.Provider>
                    </ProductContext.Provider>
                </NowContext.Provider>
            </BlackContext.Provider>
        </FilterContext.Provider>

    )

}

export default RestApiContext;