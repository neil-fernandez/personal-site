---
title: KMeans Clustering
domain: Unsupervised learning
description: An interactive k-means demo — place points, choose k, and watch the clusters converge.
tech: [Python, k-means]
category: fundamentals
featured: false
interactive: true
group: python
order: 1
hook: What happens when you let data sort itself into groups?
steps:
  - Place data points
  - Choose k centroids
  - Assign each point
  - Move centroids and repeat
---

## How it works

K-means groups points into `k` clusters by repeating two steps: assign every point to its nearest
centroid, then move each centroid to the mean of the points assigned to it. It is unsupervised —
nothing is labelled, and the structure emerges purely from distances.

## Building it, step by step

### 1. Choose k

The number of clusters is picked up front. Too few merges distinct groups; too many splits them.

### 2. Assign and move

Points take the colour of the nearest centroid, then each centroid slides to the middle of its
points. The assignment changes, so the centroids move again.

### 3. Converge

The loop stops when the centroids stop moving. The result is a local partition of the data.

## What I learned

K-means is simple but sensitive to its starting centroids and to `k`, and it measures distance in
straight lines — so its clusters are round-ish by design, which is worth remembering before reading
meaning into the output.
