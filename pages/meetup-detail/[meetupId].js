import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const DetailMeetup = () => {
  return (
    <Fragment>
      <MeetupDetail
        image={
          "https://t1.kakaocdn.net/friends/new_store/prod/main_tab/feed/media/media_0_20201123185847.jpg"
        }
        imageTitle="Image Test"
        title="Meet up Detail Test"
        address="this is in tag 'address'"
      />
    </Fragment>
  );
};

export default DetailMeetup;
