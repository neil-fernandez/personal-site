---
title: Luhn Checksum
domain: Algorithms
description: Validate card numbers with the Luhn checksum and compute the missing check digit.
tech: [Python, algorithms]
category: fundamentals
featured: false
interactive: true
group: python
order: 4
hook: What makes a mistyped card number fail before anyone checks it against a bank?
steps:
  - Take the number
  - Double every second digit
  - Sum the digits
  - Check the total is a multiple of 10
---

## How it works

The Luhn algorithm catches transcription errors. From the right, every second digit is doubled; any
doubled value over 9 has 9 subtracted. If the total is a multiple of 10, the number is structurally
valid.

## Building it, step by step

### 1. Process from the right

Starting at the last digit, alternate doubling every second digit as you move left.

### 2. Reduce doubled digits

Doubled digits of 5–9 become two-digit numbers, so 9 is subtracted to keep a single digit.

### 3. Sum and verify

The final digit is chosen so the whole sum is divisible by 10 — which is how a missing check digit
can be reconstructed.

## What I learned

A checksum is a cheap, deterministic guard that catches most single-digit and adjacent-transposition
errors before any expensive lookup happens. It validates structure, not whether an account exists.
