import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

class MoviePage extends Component{
    
    state={
        loading:true,
        movies:[],
        query:'',
        //show
        id:'', 
        image:'', 
        language:'', 
        name:'', 
        status: '',
        summary:'',
        type:'',
        url: '',
        webChannel: '',
        //network.country
        name: ''
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
            tab.push(a[i].show.name)
            // this.setState({filteredMovies:tab})
            if(a[i].show.image!==null) {
                tab1.push(a[i].show.image.medium)
                // this.setState({filteredImages:tab1})
            }
            else{
                tab1.push("null")
            }
            this.setState({filteredMovies:tab})
            this.setState({filteredImages:tab1})        
        }

        
    }
    async componentDidMount(){
        const url='https://api.tvmaze.com/search/shows?q=test';
        const response = await fetch(url);
        const data= await response.json();
        // console.log(data);
        this.setState({movies:data, loading: false})
    }

    render(){

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
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar src={this.state.filteredImages} />
                        </ListItemAvatar>
                        <ListItemText
                        primary={this.state.filteredMovies}  />
                    </ListItem>
                    </List>
              
                    </div>
                    </div>
                    );
    }
}
export default MoviePage;

