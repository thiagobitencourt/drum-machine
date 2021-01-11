import Drum from './Drum';
import DrumSet from './DrumSet';

export function DrumMachine() {
    return (
        <div>
            {
                DrumSet.map(drumItem => 
                    <Drum key={drumItem.id} id={drumItem.id} label={drumItem.label} keyCode={drumItem.keyCode} sound={drumItem.sound}/>
                )
            }
        </div>
    );
}
