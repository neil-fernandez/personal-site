---
title: TechTrack
domain: Object detection
description: Object-detection system comparing YOLO models, NMS tuning, and robustness analysis.
tech: [Python, YOLO]
result: Recall under blur
category: ml-ai
featured: true
hook: What actually breaks an object detector once it leaves the lab?
---

## The itch

Object detectors look great on clean benchmark images. I wanted to know what happens when the real world gets in the way — and which failure to worry about most.

## The build

I compared two YOLO models, tuned the non-maximum-suppression threshold, and stressed the system with different kinds of noise.

## The moment

Heavy Gaussian blur caused the biggest drop in recall and mean average precision, while reducing brightness barely mattered. That single result changed where the effort should go.

## The result

The recommended setup: the stronger model, an NMS IoU threshold of 0.5, and explicit monitoring for blur.

## What I learned

Robustness analysis — not just accuracy — is what tells you whether a model will survive deployment.
