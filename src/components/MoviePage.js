import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

class MoviePage extends Component {
  render() {
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
      }
    }));
    console.log(this.props.location.state);
    const { filteredMovie } = this.props.location.state;
    console.log(filteredMovie.show.summary);

    return (
      <div className={useStyles.root}>
        <List>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              {filteredMovie.show.image == null ? (
                <Fragment />
              ) : (
                <ListItem alignItems="flex-start">
                  <Avatar
                    style={{ height: "100px", width: "100px" }}
                    src={
                      filteredMovie.show.image !== null
                        ? filteredMovie.show.image.medium
                        : "null"
                    }
                  />
                </ListItem>
              )}
            </Grid>

            <Grid item xs={3}>
              {filteredMovie.show.name == null ? (
                <Fragment />
              ) : (
                <ListItem alignItems="flex-start">
                  <TextField
                    id="filled-read-only-input"
                    label="Name"
                    defaultValue={filteredMovie.show.name}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </ListItem>
              )}
            </Grid>
            <Grid item xs={3}>
              {filteredMovie.show.language == null ? (
                <Fragment />
              ) : (
                <ListItem alignItems="flex-start">
                  <TextField
                    id="filled-read-only-input"
                    label="language"
                    defaultValue={filteredMovie.show.language}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </ListItem>
              )}
            </Grid>
            <Grid item xs={3}>
              {filteredMovie.show.status == null ? (
                <Fragment />
              ) : (
                <ListItem alignItems="flex-start">
                  <TextField
                    id="filled-read-only-input"
                    label="status"
                    defaultValue={filteredMovie.show.status}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </ListItem>
              )}
            </Grid>
          </Grid>

          <Grid container spacing={3}>
           <Grid item xs={3}>
              {filteredMovie.show.type == null ? (
                <Fragment />
              ) : (
                <ListItem alignItems="flex-start">
                  <TextField
                    id="filled-read-only-input"
                    label="type"
                    defaultValue={filteredMovie.show.type}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </ListItem>
              )}
            </Grid>
            <Grid item xs={3}>
              {filteredMovie.show.url == null ? (
                <Fragment />
              ) : (
                <ListItem alignItems="flex-start">
                  <TextField
                    id="filled-read-only-input"
                    label="url"
                    defaultValue={filteredMovie.show.url}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </ListItem>
              )}
            </Grid>
            
            <Grid item xs={3}>
              {filteredMovie.show.network.country.name == null ? (
                <Fragment />
              ) : (
                <ListItem alignItems="flex-start">
                  <TextField
                    id="filled-read-only-input"
                    label="network country name"
                    defaultValue={filteredMovie.show.network.country.name}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </ListItem>
              )}
            </Grid>
            <Grid item xs={3}>
              {filteredMovie.show.webChannel == null ? (
                <Fragment />
              ) : (
                <ListItem alignItems="flex-start">
                  <TextField
                    id="filled-read-only-input"
                    label="web Channel"
                    defaultValue={filteredMovie.show.webChannel}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </ListItem>
              )}
            </Grid>
          
          </Grid>

          <Grid container spacing={3}>
           
            <Grid item xs={12}>
              {filteredMovie.show.summary == "" ? (
                <Fragment />
              ) : (
                <ListItem alignItems="flex-start">
                  <TextField
                    id="filled-read-only-input"
                    label="summary"
                    multiline
                    fullWidth
                    defaultValue={filteredMovie.show.summary}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </ListItem>
              )}
            </Grid>
       </Grid>
        </List>
      </div>
    );
  }
}
export default MoviePage;