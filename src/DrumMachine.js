import Drum from './Drum';
import DrumSet from './DrumSet';
import './DrumMachine.css';

export function DrumMachine() {
    const drumPadPressed = (label) => {
        document.getElementById('display').innerText = `Key pressed: ${label}`;
    }

    return (
        <div id="drum-machine" className="container">
            <div className="drum-set">
                {
                    DrumSet.map(drumItem => 
                        <Drum
                            key={drumItem.id}
                            id={drumItem.id}
                            label={drumItem.label}
                            keyCode={drumItem.keyCode}
                            sound={drumItem.sound}
                            pressed={(label) => drumPadPressed(label)}
                        />
                    )
                }
            </div>
            <div id="display"></div>
            <div className="credicts">
                Developed by 
                <a href="https://github.com/thiagobitencourt/drum-machine" rel="noreferrer" target="_blank">Thiago Bitencourt</a>
            </div>
        </div>
    );
}
