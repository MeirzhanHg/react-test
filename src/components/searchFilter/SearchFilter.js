import data from './data';
import {useState, useMemo, useDeferredValue} from 'react';

function SearchFilter() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);
    const defferedValue = useDeferredValue(text)

    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(text));
    }, [defferedValue]);

    const onValueChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <input value={text} type='text' onChange={onValueChange}/>

            <hr/>

            <div>
                {filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SearchFilter;
