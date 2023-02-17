import { useState, useEffect } from "react";
import styled from 'styled-components'

import apiService from "../../services/ApiService";

import { Container, Button, Card, Form } from "react-bootstrap";

//Styled component Ul
const Wrapper = styled.div`
    display: 'flex';
    flexWrap: 'wrap';
`;

const style = {
    display: 'flex',
    flexWrap: 'wrap'
}

const TestApi = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        onRequest()
    }, [])

    const { getAllData, getAllPhotos } = apiService();

    async function onRequest () {
        try {
            const promis = [getAllData(), getAllPhotos()]
            const [out1, out2] = await Promise.all(promis)
            getAllDataPhotos(out1, out2)
        } catch(err) {
            console.log(err)
            setError(true)
            setLoading(false)
        }
    }

    function getAllDataPhotos (data1, data2) {
        setData(data1.map((item, i) => {
            return {...item, ...data2[i]}
        }))
        setLoading(false)
    }

    const setNewText = (arr) => {
        return arr.filter(item => item.name.toLowerCase() >= item.name.toLowerCase().match(search.toLowerCase()))
    }

    const renderPosts = (items) => {
        const arr = items.map((item, id) => {
            
            return (
                <div key={item.id} className="item" style={{ margin: "0px 20px 50px 0px"}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.small_s3} />
                        <Card.Body>
                            <Card.Header>userId: {item.id}</Card.Header>
                            <Card.Title>Name: {item.name}</Card.Title>
                            <Card.Subtitle>Company {item.company}</Card.Subtitle>                                

                            <Card.Text>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
            )            
        })
        return (
            <div style={style}>
                {arr}
            </div>
        )
    }

    // if(data.length && photos.length && loading) setDataPhotos()
    
    const load = loading ? <div>Loading...</div> : null;
    const err = error ? <div>Error!</div> : null
    const newItems = renderPosts(setNewText(data))

    return (
        <>
            <Container>
                <Form.Control
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                    id="inputPassword5"
                />
                {err}
                {load}
                {newItems}
            </Container>
        </>

    )
}

export default TestApi;