import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Search extends Component{
    
    state={
        loading:true,
        movies:[],
        query:'',
        filteredMovies:[],
        filteredImages:[]
    };

    handleChange = (event) => {
        this.setState({
            query: event.target.value.toLowerCase()
        })
    }
    

    handleSubmit = () => {
        let searchString = this.state.query;
        const a = this.state.movies.filter(movie => {       
            if (movie.show.name.toLowerCase().indexOf(searchString)!==-1){
                return movie;
            } 
              });

        console.log(a)
        const tab = []
        const tab1 = []
        
        for ( let i =0 ; i< a.length ; i++)
        {
            
            // this.setState({filteredMovies:tab})
            if(a[i].show.image!==null) {
                tab.push({name  :a[i].show.name,image : a[i].show.image.medium})
                tab1.push(a[i].show.image.medium)
                // this.setState({filteredImages:tab1})
            }
            else{
                tab.push({name  :a[i].show.name,image :"null"})
                tab1.push("null")
            }
           
                  
        }
        console.log('tab' , tab)
        console.log('tab1' , tab1)
        this.setState({filteredMovies:tab})
        this.setState({filteredImages:tab1})  
        
    }
    async componentDidMount(){
        const url='https://api.tvmaze.com/search/shows?q=test';
        const response = await fetch(url);
        const data= await response.json();
        // console.log(data);
        this.setState({movies:data, loading: false})
    }

    render(){
        const { filteredMovies  } = this.state;
        const movies = filteredMovies.map(filteredMovie => {
            return (
              <Link to="/MoviePage">
      
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={filteredMovie.image} />
                </ListItemAvatar>
                <ListItemText primary={filteredMovie.name} />
              </ListItem>
              </Link>
            );
          });
                if (this.state.loading){
                    return <div> loading...</div>;
                }

                if (!this.state.movies.length){
                    return <div> there are no movies </div>;
                }

                return(
                    <div>   
                     <TextField
                        onChange={this.handleChange}
                        margin="normal"
                        placeholder="Rechercher un film..."
                    />
                    <div> 
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}> submit </Button></div>
                    <div>
                    <List>
                       {movies}
                    </List>
              
                    </div>
                    </div>
                    );
    }
}
export default Search;