import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Header from "../components/Header";

const Home = (props) => {
  return (
    <div className="login">
      <Header />
      <Button variant="info" type="submit">
        Login to Spotify
      </Button>
    </div>
  );
};

export default connect()(Home);
