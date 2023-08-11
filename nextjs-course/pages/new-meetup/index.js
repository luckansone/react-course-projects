import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredMeetupData),
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  };

  return (
    <Fragment>
        <Head>
            <title>Add New Meetup</title>
            <meta name="description" content="Add new meetup"/>
        </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />{" "}
    </Fragment>
  );
};

export default NewMeetupPage;
