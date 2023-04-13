import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/K%C3%A4ferberg_-_Lindenhof_-_Schipfe_-_Limmat_-_Sicht_vom_Grossm%C3%BCnster_Karlsturm_IMG_6425.JPG/1024px-K%C3%A4ferberg_-_Lindenhof_-_Schipfe_-_Limmat_-_Sicht_vom_Grossm%C3%BCnster_Karlsturm_IMG_6425.JPG",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/K%C3%A4ferberg_-_Lindenhof_-_Schipfe_-_Limmat_-_Sicht_vom_Grossm%C3%BCnster_Karlsturm_IMG_6425.JPG/1024px-K%C3%A4ferberg_-_Lindenhof_-_Schipfe_-_Limmat_-_Sicht_vom_Grossm%C3%BCnster_Karlsturm_IMG_6425.JPG",
        address: "Some address 9, 12345 Some City",
        description: "This is a Second meetup!",
    },
];

function HomePage() {
    return (
        <Layout>
            <MeetupList meetups={DUMMY_MEETUPS} />;
        </Layout>
    );
}

export default HomePage;
