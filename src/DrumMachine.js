import Drum from './Drum';
import DrumSet from './DrumSet';
import './DrumMachine.css';

export function DrumMachine() {
    return (
        <div className="container">
            <div className="drum-set">
                {
                    DrumSet.map(drumItem => 
                        <Drum key={drumItem.id} id={drumItem.id} label={drumItem.label} keyCode={drumItem.keyCode} sound={drumItem.sound}/>
                    )
                }
            </div>
            <div className="credicts">
                Developed by 
                <a href="https://github.com/thiagobitencourt/drum-machine" target="_blank">Thiago Bitencourt</a>
            </div>
        </div>
    );
}
