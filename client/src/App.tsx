// eslint-disable-next-line
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Post from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import memories from "./images/memories.png";
import useStyles from "./styles";

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Nostalgic
        </Typography>
        <img
          src={memories}
          className={classes.image}
          alt="memories"
          height="60"
          width="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Post />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
