# Tone

A working document. Things we're noticing about what makes the writing
land, and what makes it fall flat. Add to this when something clicks or
something grates.

## The core principle: collegial, not corrective

The reader is a peer, not a student. They're busy and competent. They're
reading because they want to think about something with us, not because
they need to be taught a lesson.

This sounds obvious until you start catching yourself doing the opposite.
It's surprisingly easy to slip into a register that puts the narrator
above the reader, especially when the topic is something we feel we
understand well.

## Diagnostic: does the prose move, or does it circle?

The clearest signal of tone trouble is **circling**. When a paragraph
restates the same point three or four different ways, the only reason to
do that is if we don't trust the reader to get it the first time. That
distrust comes through, even when we don't mean it to.

Good paragraphs move. They say something, then they say the next thing.
They trust that the reader caught the first thing.

**Working example:**

> When you see two functions that look alike, your first instinct should
> usually be to leave them alone. That's the short version of this post.
> The long version is about why, and about how the principle most of us
> think we're following actually says something pretty different from
> what we've turned it into.

Three sentences, three distinct moves: the advice, the meta-comment, the
promise of what's coming. Nothing repeats.

**Failing example:**

> Read it again. Knowledge. Not code. Not lines. Not "if you see the same
> three lines twice, extract a function." [...] The shorthand most of us
> learned — see similarity, extract function, ship — leaves out the hard
> part, which is figuring out whether the similarity actually represents
> shared knowledge or just a visual coincidence.

Same point made four times: *you've been misreading this*. The fragments
are the rhetorical equivalent of jabbing a finger at the page.

## Pronouns and positioning

"Most of us" and "we" are doing real work in the good paragraph. They
put the narrator inside the group of people who got DRY wrong. The
narrator is not standing outside the misunderstanding pointing at it —
they're inside the misunderstanding, walking the reader out alongside
themselves.

Watch for moments where "you" creeps in to mean "you, the reader, who
needs to learn this." That's the corrective register. Either switch to
"we" or rewrite so the implicit subject is nobody in particular.

## Avoid triangulating the reader between authorities

In the failing paragraph, the structure is: Hunt and Thomas (correct,
mildly exasperated) → reader (the one who got it wrong) → narrator
(explaining the gap). The reader gets cast as the slow student between
two adults.

Better: name the authorities, then stand next to the reader looking at
what they wrote. The narrator and reader are both trying to figure out
the same thing.

## The "Read it again" problem

Imperative sentences directed at the reader read as instructional. "Read
it again." "Notice that..." "Think about..." They're the verbal
equivalent of a teacher tapping the whiteboard.

Sometimes you need them. But every one is a small risk. Default to
showing the thing instead of telling the reader to look at it.

## Trust the quote

When we drop a quote (a definition, a Sandi Metz line), let it sit. The
reader can read. We don't need to follow it with "Read it again" or
"Notice the word X" or a four-fragment gloss on what it means. Often
the cleanest move is: quote, then move into a new thought that *uses*
the quote rather than explains it.

## Specific things to watch for

- **Stacked fragments used for emphasis.** "Knowledge. Not code. Not
  lines." Once in a piece, fine. Used as a rhetorical move whenever we
  want to make a point, it becomes a tic, and the tic reads as
  hectoring.
- **"You can hardly blame them" / "honestly" / "let's be real" type
  asides.** These can land warm or land smug depending on context. When
  they triangulate against an absent third party (juniors, bad
  engineers, the misguided), they tend smug.
- **Telling the reader what they think.** "You probably learned DRY as
  X." Maybe they did, maybe they didn't. Better: "DRY often gets taught
  as X."
- **The word "juniors" or "junior engineers" used as a foil.** Already
  flagged this in editing. Worth a permanent line in the document.

## Burstiness is good. Performed burstiness is not.

Sentence length variation is real and helpful. But there's a difference
between varied sentences that emerge from varied thoughts, and short
sentences deployed for percussive effect. The first reads as a real
voice. The second reads as someone trying to sound like a real voice.

The fragments in the failing paragraph are the second kind. They're not
shorter because the thoughts are shorter — they're shorter because we
wanted impact.

## Open questions

Things we haven't pinned down yet. Add to these as they come up.

- How much "I" is right? The current draft has a few "I think" moments.
  Are those landing as authentic or as hedging?
- Where's the line between confident and preachy? "That advice was true
  in 1999. It's truer now." feels confident. But it could read as
  preachy in a different context. What makes it work here?
- Humor. Almost none in the current piece. Should there be? What kind
  would fit?