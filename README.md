# MINAHIL — A Universe Made Just For You

A twelve-chapter birthday gift from Muneeb to Minahil, for October 19, 2026. Original inline SVG artwork, CSS environments, one Canvas particle renderer, and optional native Web Audio chimes. No frameworks, installation, build, backend, CDN, fonts, or external services are required.

## Open the experience
Open index.html directly in a modern browser. Or serve this directory with any static host. The previous seven-chapter version remains in the separate minahil-birthday directory in the local workspace.

## The twelve worlds
1. A dimensional heart portal with a skippable entrance and a Karachi-date countdown.
2. A personalized star-stroke constellation, five message stars, and a secret moon.
3. A rose garden that blooms into a heart, with butterflies, compliments, and a golden secret rose.
4. A wax-sealed stationery invitation that opens on tap.
5. Six dimensional floating illustrated objects, message dialogs, arrow controls, and horizontal swipe selection.
6. A five-flower bouquet builder: choose three or more, wrap it, or rebuild it.
7. Three ornamental vault compartments; discovering all three reveals a fourth message.
8. A sealed love letter with a gradual reveal, an instant-reveal option, an internally scrollable reading panel, and a keep/reopen interaction.
9. An animated coin and wishing well, with an optional private wish. Save and delete are explicit actions.
10. A three-tier rose cake: light the candles, blow them out, celebrate, and cut a slice.
11. A finite Canvas fireworks show with heart, rose, and halo patterns, followed by a point-lit personalized birthday greeting. A skip control and static reduced-motion version are included.
12. A floral celestial finale, discovered-world navigator, final secret star, and complete replay.

## Personalize
At the very beginning of script.js, edit birthdayConfig:
- birthdayGirl, boyfriend, fatherName: personal details. No age is assumed. The father name is available for future family copy; no message is attributed to him.
- birthdayDate: YYYY-MM-DD, and timeZone: Asia/Karachi. The countdown never blocks access or becomes negative.
- websiteName and finalSignature: title and closing line.
- messages.stars, messages.reasons, messages.vault, messages.letter: editable messages. Use {name} and {boyfriend} where needed.
- musicEnabled, particlesEnabled, fireworksEnabled, enableEasterEggs, persistProgress: optional features.
- photos: six optional local image paths, aligned with the love constellation objects. Null uses original illustrations. Missing optional photos fall back to the original artwork.
Other scene paragraphs can be edited in index.html. Keep the data-name and data-boyfriend spans to preserve automatic name substitution.

## Optional music and images
The default experience uses soft procedural chimes only after the visitor explicitly enables sound. Add audio you own or have permission to use under assets/audio/, then set musicFile to its relative path, for example assets/audio/our-music.mp3. No file is requested when musicFile is null. Sound pauses when the browser tab is hidden and does not restart without a gesture.

Place optional personal photos in assets/images/ and add relative paths to photos. The website ships with no stock images or broken media placeholders. assets/decorative/ is available for future original decorations.

## Privacy and saved progress
Only discovered chapter numbers, the last chapter, and found secret IDs are stored automatically when persistProgress is enabled. On refresh, the visitor can continue or restart; chapter interactions can be played again when revisiting.

A wish is never sent to Muneeb, GitHub, or any server. Text in the wish field is not stored unless Save on this device is clicked. Forget my saved wish removes it from that browser. A saved wish is retained across replay; only that explicit forget action removes it. Ordinary browser storage clearing also removes it. localStorage can be unavailable in some direct-file/private modes; the journey remains usable and save failures are explained.

## Accessibility and performance
Each scene has a semantic heading and inactive scenes are inert and hidden from assistive technology. Navigation restores focus to the active heading. Dialogs trap focus through the native dialog element, close with Escape, and restore the triggering control. Every important interaction is a visible keyboard/touch button. Essential content is never dependent on sound or a gesture.

Reduced motion disables decorative CSS motion and replaces fireworks with a static greeting while preserving interactions. Main-page scrolling is locked; a current chapter can scroll internally on short screens or with enlarged text. Canvas pixel ratio is capped at 1.7, effects are capped, animation pauses in hidden tabs, and scene transitions clean up transient work.

## Deploy to GitHub Pages
1. Upload the contents of this directory (index.html, style.css, script.js, README.md, and any optional assets) to the repository root.
2. In the repository's Settings > Pages, choose Deploy from a branch, select main, and / (root), then save.
3. Wait for GitHub's deployment to finish and open the published URL.

For zeshanayub044-sudo/minahilbirthday, the usual Pages address is https://zeshanayub044-sudo.github.io/minahilbirthday/ once Pages is enabled and deployment succeeds. A repository upload alone does not enable Pages.

Netlify and Cloudflare Pages can also serve this directory without a build command.

## Verification
JavaScript syntax and dependency-free interaction contracts are checked separately from visual browser checks. The workspace verification/check-universe.cjs runner exercises the complete sequence, including one active scene, inactive-scene inertness, modal messages, secrets, bouquet rebuild, vault unlock, letter keep/reopen, explicit wish save/delete, lighting/extinguishing candles, cake slicing, static sky, chapter map, and replay. It is a development check, not a website dependency or a substitute for visual browser QA.

The opening scene was loaded in the local browser and produced no console warnings or errors. Browser automation subsequently became unavailable, so full desktop/mobile visual and interaction checks could not be completed in that browser. The runtime site itself requires no Node.js.
