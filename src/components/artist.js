import React, {Component} from 'react';

import Header from './header'
import AlbumList from './albumList'

const REQ_URL = 'http://localhost:3004/artists'

class Artist extends Component{

    constructor(props){
        super(props);
        this.state = {
            artist:''
        }
    }

    componentDidMount(){ 
        // console.log(this.props.match.params.artistid);
        fetch(`${REQ_URL}/${this.props.match.params.artistid}`,{
            method:'GET'
        })
        .then(response => response.json())
        .then(json =>{
            this.setState({
                artist:json
            })
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="avater">
                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg')`}}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    <AlbumList albumList={this.state.artist.albums}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Artist;