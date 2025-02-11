import MeetupDetail from "@/components/meetups/MeetupDetail";
import { connectToMongodb } from "@/helper/mongodb-helper";
import { ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

const MeetupDetailPage = (props) => {
  return (
    <Fragment>
        <Head>
            <title>{props.meetupData.title}</title>
            <meta name="description" content={props.meetupData.description}/>
        </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const { client, meetupsCollection } = await connectToMongodb();
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const { client, meetupsCollection } = await connectToMongodb();
  const meetupId = context.params.meetupId;
  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        description: meetup.description,
        address: meetup.address,
        image: meetup.image,
      },
    },
  };
}

export default MeetupDetailPage;
