import './App.css';
import Card from './components/Card';

const card1 = {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: 'Go somewhere',
    buttonLink: '#',
};

const card2 = {
    title: 'Special title treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    buttonText: 'Click me',
    buttonLink: '#',
};

function App() {
    return (
        <>
            <Card content={card1}>
                <img
                    src="https://loremflickr.com/320/240?random=1"
                    alt="Random"
                />
            </Card>
            <Card content={card2} children={undefined}></Card>
        </>
    );
}

export default App;
