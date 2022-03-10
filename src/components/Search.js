import React from 'react';

function Search() {

    const [searchValue, setSearchValue] = React.useState('')
    const [searchImage, setSearchImage] = React.useState('')
    const [notices, setNotices] = React.useState([])

    function handleNewPost() {
        if (searchValue === '' || setSearchImage === '') {
            return
        }
        setNotices([...notices, {
            title: searchValue,
            image: searchImage,
            date : new Date().toDateString()
        }])
        setSearchImage('')
        setSearchValue('')
    }

    function handleSearch(event) {
        setSearchValue(event.target.value);

    }
    function handleImage(event) {
        console.log(URL.createObjectURL(event.target.files[0]));
        setSearchImage(URL.createObjectURL(event.target.files[0]));
    }
    return (
        <React.Fragment>
            <input type='text' value={searchValue} onChange={handleSearch} placeholder='Digite o titulo da sua noticia' />
            <input type='file' onChange={handleImage} placeholder='Escolher arquivo' /><br />
            <input type='submit' onClick={handleNewPost} placeholder='Enviar Post' />
            {notices.map((notice, index) => {
                return (
                    <div>
                        <p key={index}>{notice.title}</p>
                        <img src={notice.image}/>
                        <p>{notice.date}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )
}
export default Search;  