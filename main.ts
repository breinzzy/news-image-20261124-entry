// World in One Image — Tuesday 24 November 2026 (Node 22, stdlib only).
// The entry is the 1024x1024 front page in entry.png beside this file
// (34 dated stories, 7 regions, 14 fields; rendered deterministically
// from page-24nov.html, md5 33caf88ba0cd7bc7144e26d11bfdcd40);
// the program copies it to /output/entry.png. The gate takes a whole
// PNG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
