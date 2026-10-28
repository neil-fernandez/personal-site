---
title: LFSR Image Encryption
domain: Cryptography
description: XOR-encrypt an image with a linear-feedback shift register keystream and decrypt it back.
tech: [Python, LFSR]
category: fundamentals
featured: false
interactive: true
group: python
order: 2
hook: Can a handful of shift-register bits turn a photo into pure noise?
steps:
  - Load an image
  - Generate an LFSR keystream
  - XOR each byte
  - XOR again to decrypt
---

## How it works

A linear-feedback shift register (LFSR) produces a long, pseudo-random bit sequence from a small
seed. Each pixel byte is XOR-ed with the keystream to scramble it, and XOR-ing again with the same
keystream restores the original — encryption and decryption are the same operation.

## Building it, step by step

### 1. Read bytes

The image is converted to grayscale so each pixel is a single byte from 0–255.

### 2. Step the register

The LFSR shifts its state and feeds a few tapped bits back in, producing the next keystream byte.

### 3. XOR to encrypt and decrypt

The plaintext and keystream are XOR-ed. Repeating the XOR with the same seed undoes it exactly.

## What I learned

An LFSR is a stream cipher, not a modern secure cipher — its output is statistically uniform but
linear, so the sequence is predictable from a short run of output. It is a great way to see how a
keystream works, and why real systems use much stronger constructions.
