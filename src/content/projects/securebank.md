---
title: SecureBank
domain: Fraud detection
description: Fraud-detection workflow over three gatekeeper data sources, with secure SQL handling.
tech: [Python, pandas, SQL]
result: SQLi defense
category: ml-ai
featured: true
hook: Can you catch fraud across three siloed datasets without leaking customer data?
---

## The itch

Three different "gatekeepers" each held a slice of the picture — customer details, transactions, and fraud labels — and none of them could be joined carelessly. The question: can you bring them together to find fraud without leaking sensitive data along the way?

## The build

I combined the customer, transaction, and fraud datasets into a single detection workflow, with secure SQL (including injection defense) and raw sources deliberately kept out of version control.

## The moment

Security stopped being a checklist item. Protecting the data shaped the pipeline from the start — who can read what, and where raw files are allowed to live.

## The result

A fraud-detection workflow over the joined data with secure access controls and injection-hardened queries.

## What I learned

Privacy and security aren't afterthoughts you bolt on at the end — they're design constraints that shape how the whole system gets built.
