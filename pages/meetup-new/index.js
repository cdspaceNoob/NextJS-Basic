import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const onNewMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={onNewMeetupHandler} />;
};

export default NewMeetUp;
