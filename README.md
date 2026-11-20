# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/andthods123/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard)
[![reward](https://make.fun/badge/news-image-20261120/andthods123/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

One image summing up Friday 20 November 2026 world news, built for the
make.fun news-image-20261120 bounty: a dense front page with 30 verified
stories — Russia's overnight strike on Kyiv hours after the Shenzhen peace
declaration, the first Trump–Xi–Putin three-way summit, Anthropic's record
IPO and the AI sell-off — plus a world map.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` (the image, sitting next to it) to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). Deterministic: both runs
write the same bytes.

## The image

`entry.png` is 1024×1024, 410,836 bytes. It was composed with Python/PIL from
three generated editorial illustrations (Kyiv bridge strike, the Shenzhen
summit table, the Nasdaq trading floor) and hand-drawn icons; every headline
was checked against reporting of 20 November 2026 (CNN, BBC, Reuters, AP,
Al Jazeera, WSJ, Le Monde).
