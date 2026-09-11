1. Edit=>  :ID + Enter || focus on note and press `Ctrl + E`
2. New=> Ctrl + i
3. Switch between notes=> TAB
4. Note Structure=> Title= git
		[code1]=>  git init
					[ENTER]
					{ENTER]
		[code2]=> git add .
					[ENTER]
					{ENTER]
		[code3]=> git commit -m "comment" ↓
					[ENTER]
					continue [code3]
Description:
	- baraye neveshat code badi bayad 2×ENTER zad(eyne iA Writer)
	- age ye code tollani bud auto be satr badi mire. vali agar khastim dasti khodemun edame code ro tu satr badi 					benevisim  1×ENTER bayad zad. 

5. Comment: Dar balaye sar har note mitavan ba `# + [space] + text` coment nevesht.
6. Multi Note Selection: Dar gesmate bala samte rast yek button bename: `Select Mode` darim. aval bayad TRUE kard bad note ha va khat haaye afghori (---) ra entekhab va ba zadan kilid DELETE yekja pak kard.
7. Collapse/Expand => ← collapse / → expand (plain arrow keys, no modifier; provided that focus is on a copy button or the title of that note).
8. Hide All/Show All notes => Ctrl + Alt + ← or the fold-icon button in the search bar / Ctrl + Alt + →.
9. Mouse users can also click a title to fold/unfold it; when a note is folded, TAB focuses its title with a clear purple highlight so you always SEE where the focus is, and → re-opens it.
10. Live Search: while typing, any matching section auto-expands so you can see the highlighted match; when the search narrows or is cleared, sections return to the state they had before searching.
11. Enter = Best Match: after typing a query, pressing Enter focuses the command with the MOST highlighted words (the best overlap with your text), not just the first result. e.g. `git comm` focuses `git commit -m "comment"` straight away. TAB / Shift+TAB then move to the next / previous command.
12. Substring Search: matches are found by ANY part of a word, so `tree` finds `worktree` and `ignore` finds `gitignore` — you no longer have to remember how a word starts.
13. Row-level Filtering: only the command rows that actually match the query stay visible inside each section (e.g. `igno` in section `git` shows ONLY the gitignore row, not the whole section). If a word matches the section TITLE itself, every row of that section stays visible (e.g. `gitig` = title `git` + rows, so all git commands still show).
14. Divider (H Line): a line containing only `---` inside a note renders as a thin horizontal divider with a small gap, separating sub-groups of commands within the SAME note. It is stored as a `---` entry, so edits/re-sorts keep its position. It has no id and no copy button — to delete one, tick its checkbox in Select mode and press Delete. It is never copied or counted.
15. Labels: write `label: command` (e.g. `account 1: 123...`) and the part before the first `: ` renders as a black chip. Labels are NEVER copied - pressing the copy button still copies only the command itself. Search matches both the label and the command.