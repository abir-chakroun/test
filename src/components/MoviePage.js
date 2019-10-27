import React, {Component ,Fragment} from 'react'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Grid from '@material-ui/core/Grid';

class MoviePage extends Component{
    
    state={
        loading:true,
        movies:[],
        id:'', 
        image:'', 
        language:'', 
        name:'', 
        status: '',
        summary:'',
        type:'',
        url: '',
        webChannel: '',
        name: ''
    };
    
    async componentDidMount(){
       // const { filteredMovie } = this.props.location.state ;
    }
    
    render(){
        console.log(this.props.location.state)
const  {filteredMovie} = this.props.location.state
console.log(filteredMovie.show.summary) 

                return(
                        <form className={{
                            flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
  }} noValidate autoComplete="off">
 
                    <List>
                      <Grid item xs={4}> 
                   { filteredMovie.show.name == null ? <Fragment/>:<ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="Name"
        defaultValue={filteredMovie.show.name}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
       
      /></ListItem>}
      { filteredMovie.show.image == null ? <Fragment/>:<ListItem alignItems="flex-start">
        <img src={filteredMovie.show.image.medium}/> </ListItem>}

                    { filteredMovie.show.language == null ? <Fragment/>: <ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="language"
        defaultValue={filteredMovie.show.language}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
       
      /></ListItem>}

      { filteredMovie.show.status == null ? <Fragment/>:<ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="status"
        defaultValue={filteredMovie.show.status}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
       
      /></ListItem>}
      </Grid>
<Grid item xs={4}> 
           { filteredMovie.show.summary == "" ? <Fragment/>: <ListItem alignItems="flex-start"><TextField
        
        id="filled-read-only-input"
        label="summary"
        defaultValue={filteredMovie.show.summary}
        
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
       
      /></ListItem>}

           { filteredMovie.show.type == null ? <Fragment/>: <ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="type"
        defaultValue={filteredMovie.show.type}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
       
      /></ListItem>}

           { filteredMovie.show.url == null ? <Fragment/>: <ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="url"
        defaultValue={filteredMovie.show.url}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
       
      /></ListItem>}
      </Grid>
<Grid item xs={4}> 
         { filteredMovie.show.webChannel == null ? <Fragment/>:   <ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="web Channel"
        defaultValue={filteredMovie.show.webChannel}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
       
      /></ListItem>}
      { filteredMovie.show.network.country.name == null ? <Fragment/>:
<ListItem alignItems="flex-start"><TextField
        id="filled-read-only-input"
        label="network country name"
        defaultValue={filteredMovie.show.network.country.name}
   
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
       
      /></ListItem>}
                 </Grid>   </List>
          
                    </form>
                        );
        }
}
export default MoviePage;