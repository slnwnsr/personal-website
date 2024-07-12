import profilePic from './assets/rose.jpg'


export function Landing() {
    return (
        <>
        {/* to do: align left-aligned text block to center,
        make compatible with different browser sizes */}
        <head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');
            </style>
        </head>
        <header class="landing container">

            <h1 class="landing-text">Hello, I am</h1>
            <div class="center">
                <h1 class="landing-title">Sloane Wensauer</h1>
            </div>
        </header>
        </>

    );
}

export function Header() {

    return(
        <header>
            <h1>Personal Website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li>About</li>
                    <li>Bleh</li>
                    <li>Blah</li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}


export function Card() {
    return (
        <div class="card">
            <img class="card-image" src={profilePic} alt="Rose"></img>
            <h2 class="card-title">Me</h2>
            <p class="card-text">I am a student. I do things.</p>
        </div>
    );
}

export function Button(){
    return(
        <button class="button">Click Me</button>
    );
}


export function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Sloane Wensauer</p>
        </footer>
    );
}
