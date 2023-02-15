import { useState, useEffect } from "react";
import styled from 'styled-components'

import ConvertCurrency from "../services/ConvertCurrencyService";

import { Container, Button, Card, Form } from "react-bootstrap";

//Styled component Ul
const Wrapper = styled.div`
    display: 'flex';
    flexWrap: 'wrap';
    justifyContent: 'space-between';
`;

const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}

const TestJsonPlaceholder = () => {
    const [posts, setPosts] = useState([])
    const [photos, setPhotos] = useState([])
    const [text, setText] = useState('')

    useEffect(() => {
        onRequest()
        console.log('use effect')
    }, [])

    const { getAllPosts, getAllPhotos } = ConvertCurrency();

    const onRequest = () => {
        console.log('on request')
        getAllPosts('posts').then(res => {
            setPostsLoaded(res)
        })
        getAllPhotos().then(res => {
            console.log(res)
            setPhotosLoaded(res)
        })
    }

    const setPostsLoaded = (posts) => {
        console.log('set posts loaded')
        setPosts(posts)
    }

    const setPhotosLoaded = (photos) => {
        setPosts(posts => [...posts, ...photos])
    }

    const setNewText = (e) => {
        setText(e.target.value)
    }

    // const renderPosts = (items) => {
    //     const arr = items.map(item => {
    //         if (item.id < 25) {
    //             return (
    //                 <div key={item.id} className="item" style={{ marginBottom: 50 }}>
    //                     <Card style={{ width: '18rem' }}>
    //                         {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    //                         <Card.Body>
    //                             <Card.Header>userId: {item.userId}</Card.Header>
    //                             <Card.Title>{item.title.slice(0, 25)}</Card.Title>
    //                             <Card.Subtitle>ID: {item.id}</Card.Subtitle>                                
                                
    //                             <Card.Text>
    //                                 {item.body.slice(0, 150)}
    //                             </Card.Text>
                                
    //                         </Card.Body>
    //                     </Card>
    //                 </div>
    //             )
    //         }
    //     })
    //     return (
    //         <div style={style}>
    //             {arr}
    //         </div>
    //     )
    // }

    // const newItems = renderPosts(posts)



    return (
        <>
            <Container>
                <Form.Control
                    onChange={setNewText}
                    value={text}
                    type="text"
                    id="inputPassword5"
                    
                />

                {/* {newItems} */}
            </Container>
        </>

    )
}

export default TestJsonPlaceholder;