import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
                    <ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="Name"
        defaultValue={filteredMovie.show.name}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      /></ListItem>
                    <ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="language"
        defaultValue={filteredMovie.show.language}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      /></ListItem>

      <ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="status"
        defaultValue={filteredMovie.show.status}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      /></ListItem>

            <ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="summary"
        defaultValue={filteredMovie.show.summary}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      /></ListItem>

            <ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="type"
        defaultValue={filteredMovie.show.type}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      /></ListItem>

            <ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="url"
        defaultValue={filteredMovie.show.url}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      /></ListItem>

            <ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="web Channel"
        defaultValue={filteredMovie.show.webChannel}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      />
      </ListItem>
<ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="network country name"
        defaultValue={filteredMovie.show.network.country.name}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      />
      </ListItem>
      </List>
          
                    </div>
                        );
        }
}
export default MoviePage;