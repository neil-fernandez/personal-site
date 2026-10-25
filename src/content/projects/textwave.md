---
title: TextWave
domain: RAG question-answering
description: Retrieval-augmented question answering with chunking, vector search, reranking, and generation.
tech: [Python, phi3, Docker]
result: Hit@5 0.932
category: ml-ai
featured: true
interactive: true
order: 5
hook: Can a tiny local model answer questions with real evidence instead of guessing?
---

## How it works

TextWave answers questions from a document set by first *retrieving* relevant passages and then
letting a small language model answer from that evidence — retrieval-augmented generation.

![TextWave retrieval-augmented generation pipeline](/diagrams/textwave.svg)

## Design decisions

- **Chunking:** sentence chunking (5 sentences, 1 overlap) slightly improved Hit@5 over
  fixed-length (`0.923` vs `0.914`) and preserved sentence boundaries.
- **Embeddings & index:** `all-MiniLM-L6-v2` with brute-force cosine search. Brute force beat the
  approximate indexes (Hit@5 `0.923` vs HNSW `0.898` vs LSH `0.905`) and is still practical at
  this corpus size.
- **Generator:** `phi3:mini` over `qwen2.5:1.5b` — stronger on every answer-quality metric.
- **Reranking:** sequential reranking (TF-IDF first, then a cross-encoder) lifted Hit@5 to `0.932`.
- **Context count:** `m=1` by default. One chunk already retrieved the source for `87.3%` of
  questions, and extra chunks added prompt noise that reduced exact-match quality.

## Building it, step by step

### 1. Chunk and embed the corpus

Documents are split into sentence chunks and embedded into 384-dimension vectors.

### 2. Retrieve and rerank

Brute-force cosine search retrieves 20 candidates; sequential reranking reduces that to the final
top chunks.

> **Example:** "What is the refund policy?" retrieves the refund paragraph by vector similarity,
> not keyword luck.

### 3. Generate from the retrieved context

The top chunk is passed to `phi3:mini`, which writes an answer grounded in that passage.

## What I evaluated

| Metric | Result |
| --- | --- |
| Retrieval | Hit@5 `0.932` |
| Index | brute force beat HNSW / LSH |
| Generator | phi3:mini |
| RAG gain | exact `0.372` → `0.504` vs standalone |

## What I learned

Retrieval quality is the true ceiling, and grounding helps or hurts depending on the question —
medium and hard questions improved most, while some easy yes/no answers got slightly worse.
