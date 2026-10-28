---
title: Byte Frequency Analysis
domain: Cryptanalysis
description: Count character frequencies to reveal structure in text and guess a Caesar shift.
tech: [Python, data analysis]
category: fundamentals
featured: false
interactive: true
group: python
order: 5
hook: Why is the letter E the cryptanalyst's first foothold?
steps:
  - Read the text
  - Count each letter
  - Rank by frequency
  - Compare to English and guess the shift
---

## How it works

In natural language, some symbols appear far more often than others — in English, "E" leads by a wide
margin. Counting bytes or letters and ranking them exposes that distribution, which is the first
step in breaking a simple substitution or Caesar cipher.

## Building it, step by step

### 1. Count symbols

Every letter is tallied, ignoring case and non-letters.

### 2. Rank by frequency

The tallies are sorted so the dominant symbols rise to the top.

### 3. Guess the shift

If the most common letter is assumed to encode "E", the difference in positions is the Caesar shift.

## What I learned

Frequency analysis works because plaintext is not random. The same idea applies to raw bytes — a
known file format leaves a statistical fingerprint — which is why real encryption must produce output
indistinguishable from noise.
