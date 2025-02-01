---
created: 2023-02-26T00:58+01:00
changed: 2025-02-01T22:08+01:00
publish: true
---

Obsidian plugin

- [Home - Developer Documentation](https://docs.obsidian.md/Home)
- [Incorrect daily notes retrieved from filename templates that generate subdirectories · Issue #21 · liamcain/obsidian-daily-notes-interface](https://github.com/liamcain/obsidian-daily-notes-interface/issues/21)
- [iiz00/obsidian-daily-note-outline: Add a custom view which shows outline of multiple daily notes with headings, links, tags and list items](https://github.com/iiz00/obsidian-daily-note-outline)
- [GitHub - obsidian-tools/obsidian-tools: An unofficial collection of tools that helps you build plugins for obsidian.md](https://github.com/obsidian-tools/obsidian-tools)
- [My migration from Journey app to Obsidian | Disordered Me](https://disordered.me/notes/my-migration-from-journey-app-to-obsidian/)

## Todo

- [x] update view when files change
- [x] update view when settings change
- [x] allow including days before and after to be included
- [x] include text content in view
- [x] markdown preview gets rendered twice
- [x] refresh view when date changes
- [x] update version
- [x] [Ability to go unlimited years back?](https://github.com/Kageetai/obsidian-plugin-journal-review/issues/2) ✅ 2023-10-29x
- [x] refresh view on day change ✅ 2024-03-09
- [ ] [support more than one note per day](https://github.com/Kageetai/obsidian-plugin-journal-review/issues/12)
	- daily note format with time
	- align with unique notes' creator core plugin?
	- might have to fork obsidian-daily-notes-interface
- [ ] [support week notes?](https://github.com/Kageetai/obsidian-plugin-journal-review/issues/3)
	- check whether weekly notes are active
	- fetch all weekly notes
	- include weekly notes in time span algorithm
	- same for monthly/quarterly/yearly notes?
- [ ] deep merge settings and default settings: [example](https://github.com/jose-elias-alvarez/obsidian-geocoding-properties/commit/5d76605c67884c53f6b823c0a839f581fd189ea4#diff-4fab5baaca5c14d2de62d8d2fceef376ddddcc8e9509d86cfa5643f51b89ce3dR156)
- [ ] [additional folders to check for daily notes](https://github.com/Kageetai/obsidian-plugin-journal-review/issues/7)
- [ ] parse first image from note and render
	- Regex to capture `![]()` images: `/!\[.*?\]\((.+?)\)/`
	- Example [GitHub - Erallie/diarian: All-in-one journaling toolkit.](https://github.com/Erallie/diarian?tab=readme-ov-file#notifications:~:text=If%20you%20have%20images%20attached%2C%20the%20first%20image%20you%20attached%20that%20day%20will%20show%20up%20on%20the%20tile%20of%20that%20day.)
- [ ] preview specific header in note
- [ ] preview max lines, instead of characters
- [x] minify production build, [example](https://github.com/SilentVoid13/Templater/commit/4f64ff90690361b0694086318ad4e297d77c6cb1) ✅ 2024-10-29

## Nice to Have

- [x] switch to Preact or SolidJS
- [x] [setting to disable "humanize"](https://github.com/Kageetai/obsidian-plugin-journal-review/issues/4#issuecomment-1658002960) ✅ 2023-10-29
- [-] Preview with custom date format
	- ~~not really how time span titles are rendered now~~
- [x] settings for unlimited time spans ✅ 2023-10-29
- [x] whole preview clickable ✅ 2023-10-29
- [x] render images in preview ✅ 2023-10-29
- [-] refresh view when daily note is opened
- [x] update readme with new settings 📅 2023-10-30 ✅ 2023-10-30
- [x] tablet doesn't show all notes? ✅ 2024-01-14
- [x] switch to Vite for bundling
	- maybe not possible, as Vite is meant for websites
	- also not needed, as vite uses esbuild under the hood anyway
- [x] automate release process with GH actions
	- [x] add tag, GH creates release
- [ ] better release process with [release-please](https://github.com/javalent/obsidian-leaflet/blob/main/.github/workflows/release-please.yml)
	- [chore: add release workflow · jose-elias-alvarez/obsidian-geocoding-properties@08aca4b · GitHub](https://github.com/jose-elias-alvarez/obsidian-geocoding-properties/commit/08aca4bc0cd32b674764d45151c7914ba6902dbc)
- [ ] pre-commit hook with [commitlint](https://github.com/alexgavrusev/obsidian-format-with-prettier/pull/8)
- [ ] render specific heading/block from note
	- [Option to recall memories and daily notes](https://github.com/Kageetai/obsidian-plugin-journal-review/discussions/122#discussioncomment-11972414)
- [ ] [Page Visibility API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)
- [x] notifications? ✅ 2024-03-05
	- `new Notice()` from `obsidian` package
	- last view day in data.json, compare when date changed and display notice
- [ ] go back to specific days?
	- [Display reviews based on the journal file open · Issue #66 · Kageetai/obsidian-plugin-journal-review](https://github.com/Kageetai/obsidian-plugin-journal-review/issues/66)
- [x] setting to remove `<quote>`, see [comment](https://github.com/Kageetai/obsidian-plugin-journal-review/issues/4#issuecomment-1896816938) ✅ 2024-03-05
- [-] use React to render settings
- [x] open in new tab ✅ 2024-01-14
- [x] configure call out style: [Callouts - Obsidian Help](https://help.obsidian.md/Editing+and+formatting/Callouts#Supported+types) ✅ 2023-11-13
- [x] disable callouts for previews entirely ✅ 2023-11-05
- [ ] unit tests, either testing-library or playwright
	- how to mock Obsidian API?
- [x] replace Preact with templating language?!
	- [EJS -- Embedded JavaScript templates](https://ejs.co/#install)
- [ ] use [MistCSS](https://typicode.github.io/mistcss/introduction.html)?
	- not very mature yet?
- [ ] try [Biome.js](https://biomejs.dev/)
- [ ] [Option to recall memories and daily notes · Kageetai/obsidian-plugin-journal-review · Discussion #122 · GitHub](https://github.com/Kageetai/obsidian-plugin-journal-review/discussions/122)
- [ ] fetch notes based on creation date, not note title?
	- noticed problem with time zones when being in Taiwan
		- my notes appeared for the wrong day

## Bugs

- [x] [1.5 years / 18 months doesn't seem to work](https://github.com/Kageetai/obsidian-plugin-journal-review/issues/4) ✅ 2024-01-15
- [x] [Recurring option doesn't do anything · Issue #11 · Kageetai/obsidian-plugin-journal-review](https://github.com/Kageetai/obsidian-plugin-journal-review/issues/11) ✅ 2024-01-14
- [x] [Showing duplicate entries · Issue #13 · Kageetai/obsidian-plugin-journal-review](https://github.com/Kageetai/obsidian-plugin-journal-review/issues/13) ✅ 2024-10-29
- [ ] [What if I have multiple Daily Notes from the same day? · Issue #12 · Kageetai/obsidian-plugin-journal-review](https://github.com/Kageetai/obsidian-plugin-journal-review/issues/12)
- [ ] [Journal 'Daily notes' appear only on one of three synced devices. · Issue #20 · Kageetai/obsidian-plugin-journal-review](https://github.com/Kageetai/obsidian-plugin-journal-review/issues/20)
