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
    const [photos, setPhotos] = useState([])
    const [search, setSearch] = useState('')

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        onRequest()
        console.log('use effect')
    }, [])

    const { getAllData, getAllPhotos } = apiService();

    const onRequest = () => {
        getAllData().then(res => {
            setPostsLoaded(res)
        }).catch(err => {
            console.log(err)
        })
        getAllPhotos().then(res => {
            setPhotosLoaded(res)
        }).catch(err => {
            console.log(err)
        })
        
    }

    const setPostsLoaded = (data) => {
        setData(data)
    }

    const setPhotosLoaded = (dataPhotos) => {
        setPhotos(dataPhotos)
    }

    const setDataPhotos = () => {
        setData(data => data.map((item, i) => {
            if(item.id == i) {
                return {...item, ...photos[i]}
            }
            return item
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

    if(data.length && photos.length && loading) setDataPhotos()
    
    const load = loading ? <div>Loading...</div> : null
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
                {load}
                {newItems}
            </Container>
        </>

    )
}

export default TestApi;