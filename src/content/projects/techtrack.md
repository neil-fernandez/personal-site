---
title: TechTrack
domain: Object detection
description: YOLO object-detection system evaluated across model selection, NMS tuning, and robustness.
tech: [Python, YOLO]
result: Recall under blur
category: ml-ai
featured: true
interactive: true
order: 1
hook: What actually breaks an object detector once it leaves the lab?
---

## How it works

TechTrack detects objects in images with a YOLO model, then evaluates the whole system — model
choice, post-processing, and robustness — rather than just reporting a single accuracy number.

![TechTrack object detection pipeline](/diagrams/techtrack.svg)

## Design decisions

- **Model:** Model 2 over Model 1. On the full 9,525-image dataset it improved mAP@0.5 from
  `0.493` to `0.530`, precision `0.753` → `0.789`, and recall `0.396` → `0.448`.
- **Sampling:** a seeded 5,000-image sample (18,964 objects, all 20 classes, distribution cosine
  similarity `0.999813`) made the follow-up experiments tractable without distorting the class mix.
- **NMS threshold:** `0.5`. It lifted mAP@0.5 from `0.487` (at 0.4) to `0.494` while keeping
  retained detections reasonable; looser thresholds added boxes without quality.
- **Robustness:** heavy Gaussian blur is the main risk (recall `0.460` → `0.142`, mAP `0.494` →
  `0.202` at kernel 25), while brightness reduction matters least (recall `0.445`).

## Building it, step by step

### 1. Compare models at a fixed operating point

Holding score threshold (`0.5`), NMS (`0.4`), and matching IoU (`0.5`) constant isolates the
difference between the two models.

### 2. Tune NMS

Reapplying NMS at thresholds `0.2`–`0.7` showed `0.5` gives the best mAP/volume balance.

### 3. Stress-test the detector

Blur, vertical flip, and brightness were applied one at a time with annotations kept aligned.

> **Example:** three overlapping boxes around one car collapse to a single confident box after NMS.

## What I evaluated

| Metric | Result |
| --- | --- |
| Model | Model 2 (mAP@0.5 `0.530`) |
| NMS IoU | `0.5` (mAP `0.494`) |
| Blur (kernel 25) | recall `0.142`, mAP `0.202` |
| Brightness 50% | recall `0.445`, mAP `0.464` |

## What I learned

Object-detection quality is a whole-system property: model selection, sampling, post-processing,
and robustness each changed the result — and the detector's weak spots (blur, rare classes) are
what to monitor in production.
