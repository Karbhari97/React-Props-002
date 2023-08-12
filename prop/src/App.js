import "./App.css";
import Layout from "./Component/Layout";

function App() {
  return (
    <div>
      <Layout
        profileImage="https://static.vecteezy.com/system/resources/thumbnails/007/208/986/small/excited-businessman-in-suit-pointing-with-finger-at-copy-space-and-looking-at-camera-photo.jpg"
        name="Eric Feng"
        headline="Why are their so many Web3 startups ?"
        desc=" This week, pitchbook published their latest Emerging Tech
      Indicator report (ETI) Which tracks early stage investment...
            activity..."
        date="Dec 4"
        time="6 min read"
        button="Web 3"
        descimg="https://miro.medium.com/v2/resize:fit:1028/1*6aMbrjX94V5HQQ7NveER3A.png"
      />
      <Layout
        profileImage="https://media.istockphoto.com/id/1151840796/photo/young-mom-holding-her-sleepy-baby-boy-beautiful-mother-with-son-in-living-room.webp?b=1&s=170667a&w=0&k=20&c=bzTFJf2FiLeUPf9vYk8b2K3mN671TouVNvje6grFVEI="
        name="Chestin butigagi"
        headline="What Marriage Means To Me"
        desc="After dropping the kids off, I came home and stopped in the kitchen to take the aftermeth of our chaotic morning together"
        date="29 Nov"
        time="3 min read"
        button="Parenting"
        descimg="https://media.istockphoto.com/id/1151840796/photo/young-mom-holding-her-sleepy-baby-boy-beautiful-mother-with-son-in-living-room.webp?b=1&s=170667a&w=0&k=20&c=bzTFJf2FiLeUPf9vYk8b2K3mN671TouVNvje6grFVEI="
      />
      <Layout
        profileImage="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
        name="Nicholas Moryl"
        headline="Leaving San Francisco"
        desc="Letting go with love."
        date="Nov 23"
        time="8 min read"
        button="Change"
        descimg="https://www.sftravel.com/sites/default/files/styles/hero/public/2022-10/baker-beach.jpg.webp?itok=AlgDdT1G"
      />
    </div>
  );
}

export default App;
