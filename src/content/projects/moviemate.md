---
title: MovieMate
domain: Recommender system
description: Personalised movie recommender using SVD collaborative filtering with diversity reranking.
tech: [Python, SVD, Flask]
result: NDCG@10 0.775
category: ml-ai
featured: true
interactive: true
order: 3
hook: How do you recommend movies to someone you know nothing about yet?
---

## How it works

MovieMate turns "films I liked" into "films I'll probably like next". The hard parts are the cold
start — a user with no history — and not just repeating one genre.

![MovieMate recommendation pipeline](/diagrams/moviemate.svg)

## Design decisions

- **Partitioning:** a chronological `70/15/15` split so evaluation reflects future
  recommendations rather than random historical interpolation.
- **Model:** collaborative SVD. It hit `NDCG@10 = 0.775` and the lowest RMSE, beating content-based
  (`0.758`) and edging rule-based popularity (`0.771`) — a narrow margin that keeps popularity
  useful as a prior.
- **Diversity:** rerank with `alpha = 0.90`, lifting intra-list diversity from `0.648` to `0.666`
  at almost no NDCG cost (`0.775` → `0.773`).
- **Cold start:** a staged lifecycle — popularity prior at 0 ratings, then a gradual blend toward
  collaborative filtering — rather than forcing one model to solve every stage.

## Building it, step by step

### 1. Split the data so evaluation is honest

Ratings are ordered by timestamp and split 70/15/15, so the model is scored on ratings made
*after* everything it trained on.

> **Example:** a user's early ratings train the model; their later ratings become the held-out set
> to predict.

### 2. Model taste with SVD

The sparse user–item rating matrix is factorised into dense latent vectors for each user and film.

### 3. Handle cold start and diversify

New users fall back to a popularity prior, and a light diversity rerank spreads results across
genres.

## What I evaluated

| Metric | Result |
| --- | --- |
| NDCG@10 | `0.775` |
| Diversity alpha | `0.90` (ILD `0.666`) |
| Cold start | staged popularity → collaborative |
| Drift check | KS p = `0.808` (no retrain needed) |

## What I learned

One model shouldn't solve every stage. Evaluation should respect time, cold start is a lifecycle
problem, and diversity deserves an explicit reranking step rather than being assumed.
