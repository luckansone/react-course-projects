import MeetupList from "@/components/meetups/MeetupList";
import { connectToMongodb } from "@/helper/mongodb-helper";
import Head from "next/head";
import { Fragment } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse all active React meetups." />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

/*export async function getServerSideProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}*/

export async function getStaticProps() {
  //fetch data from an api
  const { client, meetupsCollection } = await connectToMongodb();
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
