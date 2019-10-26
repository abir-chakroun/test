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

                return(
                    <div>   
                    <List>
                    <ListItem alignItems="flex-start"><ListItemText primary={this.state.movies.show.name}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={this.state.movies.show.id}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={this.state.movies.show.language}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={this.state.movies.show.status}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={this.state.movies.show.summary}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={this.state.movies.show.type}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={this.state.movies.show.url}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={this.state.movies.show.webChannel}  /></ListItem>
                    </List>
                    {/* <ListItemAvatar>
                                <Avatar/>
                                </ListItemAvatar> */}
                    </div>
                        );
        }
}
export default MoviePage;

