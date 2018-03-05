import React from 'react';

const AlbumList = (props) =>{
    
    const showList = ({albumList}) =>{
        // console.log(props);
        if(albumList){
            return albumList.map((item,index)=>{
                return(
                    <img key={index} src={`/images/alums/${item.cover}.jpg`}/>
                )
            })
        }
    }

    return(
        <div className="albums_list">
            {showList(props)}
        </div>
    )
}
export default AlbumList;