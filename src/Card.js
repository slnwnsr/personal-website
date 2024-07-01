import profilePic from './assets/rose.jpg'

function Card() {
    return (
        <div class="card">
            <img class="card-image" src={profilePic} alt="Rose"></img>
            <h2 class="card-title">Me</h2>
            <p class="card-text">I am a student. I do things.</p>
        </div>
    );
}

export default Card
