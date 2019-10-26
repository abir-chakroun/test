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
       // const { filteredMovie } = this.props.location.state ;
    }
    
    render(){
        console.log(this.props.location.state)
const  {filteredMovie} = this.props.location.state
               

                return(
                    <div>   
                    <List>
                    <ListItem alignItems="flex-start"><ListItemText primary={filteredMovie.show.name}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={filteredMovie.show.language}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={filteredMovie.show.status}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={filteredMovie.show.summary}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={filteredMovie.show.type}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={filteredMovie.show.url}  /></ListItem>
                    <ListItem alignItems="flex-start"><ListItemText primary={filteredMovie.show.webChannel}  /></ListItem>
                    </List>
                    {/* <ListItemAvatar>
                                <Avatar/>
                                </ListItemAvatar> */}
                    </div>
                        );
        }
}
export default MoviePage;