---
title: IronClad
domain: Face identification
description: Face-recognition pipeline comparing embedding models, preprocessing, and gallery design under noise.
tech: [Python, vggface2, MTCNN]
result: Top-5 retrieval
category: ml-ai
featured: true
interactive: true
order: 3
hook: How good does face recognition stay when the photo is blurry or the light is bad?
---

## How it works

IronClad identifies a face by turning it into a compact embedding and searching a gallery of known
identities. The pipeline crops the face, embeds it, and returns a short ranked list of candidate
identities rather than a single guess.

![IronClad face identification pipeline](/diagrams/ironclad.svg)

## Design decisions

- **Embedding model:** `vggface2` over `casia-webface`. At baseline, vggface2 reached Rank-1 of
  `0.507` and MRR of `0.584` versus `0.093` / `0.136` for casia-webface — and it stayed stronger
  under every noise condition tested.
- **Preprocessing:** add MTCNN face cropping before embedding. It lifted vggface2 to Rank-1
  `0.860`, MRR `0.886`, and Top-5 `0.921` by removing background noise, and even rescued the
  weaker casia-webface (Rank-1 `0.093` → `0.816`).
- **Shortlist:** return **Top-5** candidate identities. Recall@N rose from `0.861` at N=1 to
  `0.922` at N=5, while going to N=20 recovered only 19 more correct queries at four times the
  review burden.
- **Gallery:** target **3** images per identity. In the paired-core analysis, Rank-1 climbed from
  `0.925` (1 image) to `0.980` (3 images), with little further gain at 5.

## Building it, step by step

### 1. Clean and partition the data

Hidden macOS files were removed, leaving 999 usable probe images and 2,261 gallery images across
999 shared identities. Environmental noise was applied only to probe images (blur radius 2/4,
brightness 0.7/0.5, resolution 112×112 / 80×80).

> **Example:** the gallery stays clean while the probe is degraded, so any drop in accuracy
> reflects probe quality rather than gallery drift.

### 2. Crop faces before embedding

MTCNN finds the largest face and crops it with a small margin. Both probe and gallery images are
then embedded and compared with cosine similarity.

### 3. Rank and return a shortlist

Image-level neighbours are aggregated into distinct identities by best cosine match, and the top
five are returned for review.

## What I evaluated

| Metric | Result |
| --- | --- |
| Baseline Rank-1 | vggface2 `0.507` vs casia `0.093` |
| Cropped Rank-1 | vggface2 `0.860` |
| Top-5 recall | `0.922` |
| Gallery target | 3 images (Rank-1 `0.980`) |
| Main risks | severe blur, low brightness |

## What I learned

Face identification is a pipeline, not a single model. Cropping, model choice, shortlist size, and
gallery policy each moved the numbers more than any one switch — and probe image quality is the
deployment risk to monitor first.
