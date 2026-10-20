---
title: MovieMate
domain: Recommender system
description: Personalised movie recommender using SVD collaborative filtering with diversity reranking.
tech: [Python, SVD, Flask]
result: NDCG@10 0.775
category: ml-ai
featured: true
hook: How do you recommend movies to someone you know nothing about yet?
---

## The itch

Recommendations are easy when you have history. The hard part is the cold start: a brand-new user with no ratings, and no signal to lean on.

## The build

I split the data chronologically (70/15/15) so evaluation reflected the future, then compared SVD collaborative filtering against a simpler rule-based baseline, and added diversity reranking on top.

## The moment

SVD reached NDCG@10 of 0.775 — but the margin over a plain popularity baseline was surprisingly narrow. A good reminder not to over-engineer before checking the simple thing.

## The result

SVD as the default, a popularity prior for cold start, and light diversity reranking (alpha 0.90) that raised diversity with almost no accuracy cost.

## What I learned

Don't force one model to solve every stage. Cold start and diversity deserve explicit treatment rather than assuming the base model handles them.
