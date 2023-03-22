// import { useEffect, useState } from "react";
import MeeupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First MeetUp",
    image:
      "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785",
    address: "South Korea",
    description: "This is a First MeepUp",
  },
  {
    id: "m2",
    title: "Second MeetUp",
    image:
      "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785",
    address: "South Korea",
    description: "This is a Second MeepUp",
  },
];

const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  //   useEffect(() => {
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);

  return <MeeupList meetups={props.meetups} />;
};

export const getStaticProps = () => {
  // fetch.

  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
};

export default HomePage;
