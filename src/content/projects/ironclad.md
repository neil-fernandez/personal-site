---
title: IronClad
domain: Face identification
description: Face-recognition pipeline comparing embedding models and preprocessing under noise.
tech: [Python, vggface2, MTCNN]
result: Top-5 retrieval
category: ml-ai
featured: true
hook: How good does face recognition stay when the photo is blurry or the light is bad?
---

## The itch

Face recognition feels like a solved problem until you feed it a real photo — blurry, dark, or noisy. The question I wanted to answer: does the choice of model and preprocessing hold up when image quality drops?

## The build

I compared two embedding models (vggface2 and casia-webface) and tested whether face-detection-based cropping with MTCNN before embedding made retrieval better.

## The moment

vggface2 beat casia-webface at baseline *and* under every noise scenario I tested. MTCNN cropping improved Rank-1 and mean reciprocal rank — but only when the gallery still had enough usable images per person.

## The result

The strongest setup: vggface2 embeddings, MTCNN cropping, top-5 candidate retrieval, and about three gallery images per identity.

## What I learned

Headline accuracy matters less than robustness to image quality. Blur and low brightness are where face-ID systems actually win or lose in the real world.
