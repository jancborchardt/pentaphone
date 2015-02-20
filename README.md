# pentaphone
Browser-based music performance tool using React.js and the Web Audio API

## To Do

* DONE Skeletal index.html with React components
* DONE Setup NPM
* Create GH page to play on
* Build process compiles JSX into dir for GH page
* Element that changes state based on key being pressed
* Play note based on state
* The pentatonic scale combined with I, IV, V chords
* LH plays the "shifters" (ctrl, alt, cmd? q, a, z? a, s, d?) which plays each of the chords (open, closed or root notes) and adjusts the pentatonic to match the chord
* RH plays the notes: spacebar, j, k, l, ; which are the I, II, III, V and VI
* Select waveform for tone
* Visual elements on the page trigger by the playing: shifter changes palette, notes splash complementary colors across screen
* Select palette for visuals
* Pressing a shifter changes the pentatonic, which stays there until shifted again, but stops playing the chord when you lift off the key, allowing chords rhythms
* Rhythm section: drums and bass
* Select the key signature (bass adjusts)
* Add basic effects, ADSR, etc
* Number keys trigger rhythms, allowing shifts within songs
* Rhythms trigger visuals, too
* Choose I, IV, V or vi, ii, iii (with associated pentatonic)
* Instructions show on page, but can be toggled on/off: effects happen behind