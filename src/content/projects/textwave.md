---
title: TextWave
domain: RAG question-answering
description: Retrieval-augmented question answering with chunking, vector search, and reranking.
tech: [Python, phi3, Docker]
result: Hit@5 0.932
category: ml-ai
featured: true
hook: Can a tiny local model answer questions with real evidence instead of guessing?
---

## The itch

Small language models are cheap and fast, but they hallucinate. I wanted to see if giving one a retrieval step — real context pulled from documents — could make it answer honestly.

## The build

I tuned sentence chunking, compared vector index types (brute-force vs HNSW vs LSH), picked between two small generator models, and added sequential reranking.

## The moment

Brute-force search beat the approximate indexes outright. And adding retrieved context helped the model on medium and hard questions — but slightly hurt short yes/no ones. Context is powerful, but not free.

## The result

Brute-force retrieval with sequential reranking lifted Hit@5 to 0.932, using a local model.

## What I learned

Retrieval quality is often the real ceiling, and grounding an LLM can help or hurt depending on the question — so it needs to be measured, not assumed.
