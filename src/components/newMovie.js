import React, { Component } from 'react';
import axios from 'axios';

class MovieData extends Component {
    constructor(){
        super();
       
         this.state = {
            moviename:'',
            year:'',
            actor:'',
            actress:'',
            comedian:'',
            director:'',
            musicdirector:'',
            genre:'',
            genreList : ['select','Horror','comdey','Thriller','Action','Drama','Crime thriller'],
            musicdir : ['select','Ilayaraja','A R rahman','Yuvan','Harris Jayaraj','Imman','Aniruth','deva','G V Prakash','Vijay Antony']
        }
    }

    

    onChangeMovieName = (e) =>{
        this.setState({
            moviename:e.target.value
        })
    
    }

    onChangeYear = (e) =>{
        this.setState({
            year:e.target.value
        })
    }

    onChangeActor = (e) =>{
        this.setState({
            actor:e.target.value
        })
    }

    onChangeActress = (e) =>{
        this.setState({
            actress:e.target.value
        })
    
    }

    onChangeComedian = (e) =>{
        this.setState({
            comedian:e.target.value
        })
    }

    onChangeDirector = (e) =>{
        this.setState({
            director:e.target.value
        })
    }
    onChangeMusicDir = (e) =>{
        this.setState({
            musicdirector:e.target.value
        })
    }

    onChangeGenre = (e) =>{
        this.setState({
            genre:e.target.value
        })
    }

    onClickSubmit = (e) =>{
        e.preventDefault();
        const UserData = {
            moviename : this.state.moviename,
            year : this.state.year,
            actor : this.state.actor,
            actress : this.state.actress,
            comedian : this.state.comedian,
            director : this.state.director,
            musicdirector : this.state.musicdirector,
            genre : this.state.genre

        }
        console.log(UserData);
        axios.post('http://localhost:4000/',UserData)
            .then(response =>console.log(response.data))

        this.setState({
            moviename:'',
            year:'',
            actor:'',
            actress:'',
            comedian:'',
            director:'',
            musicdirector:'',
            genre:''
        }) 
    }
     render() {
        return (
            <div className="container-fluid ">
                <h1 className="newmovieheader">Create New Movie</h1>
            <form className="new-movie">
              <div className="form-group">
                <label className="control-label col-sm-2 movielable">Movie Name</label>
                <input type="text" value={this.state.moviename} onChange={this.onChangeMovieName}/><br/>
              </div>
              <div className="form-group">
                <label  className="control-label col-sm-2 movielable">Year</label>
                <input type="number" value={this.state.year} onChange={this.onChangeYear}/><br/>
              </div>
              <div className="form-group">
                <label  className="control-label col-sm-2 movielable">actor</label>
                <input type="text" value={this.state.actor} onChange={this.onChangeActor}/><br/>
              </div>
              <div className="form-group">
                <label  className="control-label col-sm-2 movielable">actress</label>
                <input type="text" value={this.state.actress} onChange={this.onChangeActress}/><br/>
              </div>
              <div className="form-group">
                <label  className="control-label col-sm-2 movielable">comedian</label>
                <input type="text" value={this.state.comedian} onChange={this.onChangeComedian}/><br/>
              </div>
              <div className="form-group">
                <label  className="control-label col-sm-2 movielable">Director</label>
                <input type="text" value={this.state.director} onChange={this.onChangeDirector}/><br/>
              </div>
              <div className="form-group">
                <label  className="control-label col-sm-2 movielable">Music Director</label>
                <select className="control-label" value={this.state.musicdirector} onChange={this.onChangeMusicDir}>
                    {this.state.musicdir.map((musicdir)=>{return <option key={musicdir} value={musicdir}>{musicdir}</option>})}
                </select><br/>
              </div>
              <div className="form-group">
                <label  className="control-label col-sm-2 movielable">Genre</label>
                <select className="control-label" value={this.state.genre} onChange={this.onChangeGenre}>
                    {this.state.genreList.map((genre)=>{return <option key={genre} value={genre}>{genre}</option>})}
                </select><br/>
              </div>
                <button value="submit" className="btn btn-success col-sm-2" onClick={this.onClickSubmit}>submit</button>
            </form>
            </div>
        );
    }
}

export default MovieData;