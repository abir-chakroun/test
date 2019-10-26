import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Search extends Component{
    
    state={
        loading:true,
        movies:[],
        query:'',
        searchString:[]
        
    };

    handleChange = (event) => {
        this.setState({
            query: event.target.value.toLowerCase()
        })
    }
    

    handleSubmit = () => {
        let filteredMovies=[];
        let searchString = this.state.query;
        if(searchString.length > 0){
            console.log(searchString)
        

        filteredMovies= this.state.movies.filter(
            (movie) =>
            {
                //  movie.show.name.toLowerCase().indexOf(searchString) !== -1;
            
            console.log(movie)
        }
        );
    }
    else{
        return <div> aucun film trouvé </div>
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
        // let filteredMovies= this.state.movies.filter(
        //     (movie) =>
        //     {
        //         return movie.show.name.toLowerCase().indexOf(this.state.query) !== -1;
        //     }
        // );
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
                    <div> <button onClick={this.handleSubmit}> submit </button></div>

                      
            
                    </div>
                    );
    }
}
export default Search;

