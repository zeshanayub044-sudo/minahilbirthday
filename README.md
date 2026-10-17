# MINAHIL — MADE WITH LOVE

A completely new eight-scene, luxury pink birthday experience for Minahil, from her boyfriend Muneeb. Birthday: October 19, 2026. Built only with HTML, CSS, vanilla JavaScript, inline SVG and native Canvas/Web Audio APIs.

## Open it
Open index.html directly in a current Chrome, Edge, Firefox or Safari browser. No installation, build, account, backend, font service, image downloads or animation libraries are required.

The current project is minahil-birthday/. The earlier twelve-world version remains separately in minahil-universe/. The original seven-scene files were backed up under archive/original-seven-scenes/.

## Eight surprises
1. A cream envelope, illustrated roses and a cherry-red wax seal. Open Your Surprise releases the seal, unfolds the flap and lifts the letter.
2. A satin-curtain birthday reveal, staggered name typography, heart rain and the signature rose-petal heart formation.
3. Five multi-layer SVG roses that bloom into a wrapped bouquet. Each rose opens a different message; the highlighted rose holds a secret.
4. Five original keepsakes: an opening gold locket, unfolding silk ribbon, perfume bottle, floral charm and miniature love note.
5. A textured love letter with a paragraph reveal and Read every word now option. The small red heart reveals an extra line. Tap the wax seal three times for another secret.
6. A three-tier illustrated cake with sugar roses, strawberry details, piped frosting, five candles, candle lighting, extinguishing, smoke and an animated slice on its own plate.
7. A dimensional red heart, the Send All My Love storm, replay, and Hold to Feel My Love. Hold using mouse, touch, stylus or the Space/Enter key; release reveals the personal message.
8. A heart-shaped floral wreath, signature heart wave, another celebration, final secret and full replay.

## The heart choreography
A single requestAnimationFrame clock owns all Canvas activity. The central celebration uses two Canvas layers and a native modal dialog so decorative hearts can pass in front of and behind the central message while the page remains protected from stray clicks.

The standard 4.4-second sequence contains: immediate response (0–180 ms), entry from the four edges, corners and button (180–1000 ms), curved/spiral choreography (1000–2200 ms), formation and a large dimensional heart (2200–3200 ms), then a graceful heart-and-rose-particle release (3200–4400 ms). Devices use either 94 or 208 choreographed hearts depending on width and reported hardware capacity. Particle objects for smaller effects are pooled and bounded.

Distinct presets include heartBurst, heartRain, heartStorm, heartOrbit, heartFormation, heartConfetti, heartTrail and heartPulse. The separate petal sequence assembles a heart, holds it, then opens outward to reveal Minahil's name. Skip is always available during longer animations. Repeated storm clicks cannot create overlapping instances.

Reduced-motion mode replaces the full-screen storm with a still heart and the complete message, dismissed with Keep exploring. All scene actions remain available. Animation pauses in background tabs, Canvas density is capped at 1.75 device pixels, and inactive scene CSS animations pause.

## Personalize
Edit birthdayConfig at the beginning of script.js:
- birthdayGirl, boyfriend, fatherName, birthdayDate and timeZone control personal details. Father name is available for respectful future copy; no message is attributed to him.
- romanticSignature changes the closing line.
- primaryPink, backgroundPink and heartRed change the main theme accents. Other palette variables are centralized at the top of style.css.
- messages.flowers, messages.keepsakes and messages.letter contain the personal messages. Use {name} and {boyfriend} in those strings.
- messages.finalSecret changes the P.S. message.
- enableHeartStorm, enableFloralAnimations, enableMusic and enableParticles control optional effects. Disabling the moving storm retains its accessible still-message alternative.

Other short scene paragraphs are in index.html. Preserve the data-name and data-boyfriend spans for automatic name substitution. No age or private relationship history is assumed.

## Optional sound
Without an audio file, the Sound off toggle enables gentle original procedural chimes only after it is pressed. For licensed music you supply, put an audio file in assets/optional-audio/ and set musicFile to its relative path, for example assets/optional-audio/your-music.mp3. Leaving it null causes no audio-file request. Sound pauses when the tab is hidden and does not automatically resume.

## Controls and accessibility
Every important action is a real button. Tab through the page and use Enter/Space to activate controls. On the hold button, keep Enter/Space pressed and release it to finish. The previous-scene button and small progress marks revisit discovered scenes. During scene transitions, navigation controls briefly disable to prevent accidental overlapping transitions.

Only the active scene is interactive and exposed to assistive technology. Headings receive focus on navigation; native dialogs trap focus, close with Escape, and restore their trigger. Full replay resets the envelope, garden, keepsakes, letter, seal taps, candles, cake slice, hold state, transient particles and discovered-scene navigation.

The page uses 100dvh with a fallback, safe-area padding and hidden page overflow. Each current-scene panel may scroll internally on short screens or with enlarged text. The love letter has its own reading panel.

## GitHub Pages
Upload index.html, style.css, script.js, README.md and any optional audio to the repository root. Under Settings > Pages, choose Deploy from a branch, main and / (root). No build command is needed. Wait for GitHub to report a successful deployment before sharing the Pages address.

The existing target repository is https://github.com/zeshanayub044-sudo/minahilbirthday. Its usual Pages URL, when enabled and successfully deployed, is https://zeshanayub044-sudo.github.io/minahilbirthday/.

Netlify and Cloudflare Pages can also serve the folder without a build step.

## Privacy
All interactions happen in the browser. No forms, analytics, backend, contact collection or messages to Muneeb are used. The love buttons create on-screen effects only.

## Verification performed
JavaScript syntax, unique IDs, all eight scenes, selector wiring and removal of the former dark palette passed. Development interaction contracts passed in both normal and reduced-motion modes, including repeated heart storms, pointer/keyboard hold, formation timing, one finite animation loop, secrets and full reset.

The actual browser journey was exercised on desktop and a 390×844 phone viewport, including all five keepsakes, the letter and seal secret, five lit/extinguished candles, slicing, the complete heart storm, keyboard hold, final secret, signature wave, sound toggle and replay. Additional 320×568 and 844×390 checks confirmed no horizontal page overflow and working internal scrolling for the letter and short layouts. Browser console checks reported no warnings or errors. No claim is made that every browser/device combination has been tested.
