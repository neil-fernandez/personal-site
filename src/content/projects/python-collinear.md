---
title: Collinear Points
domain: Computational geometry
description: Find every set of three or more points that lie on the same straight line.
tech: [Python, geometry]
category: fundamentals
featured: false
interactive: true
group: python
order: 3
hook: How do you detect which scattered points secretly line up?
steps:
  - Scatter points
  - Test every pair
  - Count points on the line
  - Draw each collinear set
---

## How it works

Three points are collinear when the area of the triangle they form is zero — equivalently, when the
cross product of two edges is zero. The demo checks every pair of points, collects every other point
that lies on their line, and keeps the sets of three or more.

## Building it, step by step

### 1. Scatter points

Points are placed in a plane with integer-style coordinates, like the classic assignment.

### 2. Check every pair

For each pair, the cross product with every other point tells whether it lies on the same line.

### 3. Report collinear sets

Sets of three or more collinear points are drawn as a line through the extremes, with the points
highlighted.

## What I learned

The naive approach is `O(n^3)` — checking every triple. Sorting points by slope from each anchor
brings it down, but the brute-force version is a clear reminder that the most expensive step in
geometry code is usually testing combinations.
