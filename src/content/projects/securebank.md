---
title: SecureBank
domain: Fraud detection
description: Fraud-detection workflow over three gatekeeper data sources with secure SQL handling.
tech: [Python, pandas, SQL]
result: SQLi defense
category: ml-ai
featured: true
interactive: true
order: 4
hook: Can you catch fraud across three siloed datasets without leaking customer data?
---

## How it works

Fraud signals were spread across three separate sources — customer records, transactions, and
fraud labels — that could not simply be joined together. SecureBank brings them into one
detection workflow while keeping sensitive data safe.

![SecureBank fraud detection pipeline](/diagrams/securebank.svg)

## Design decisions

- **Secure by construction:** the join uses parameterised queries with SQL-injection defense, so
  data can't be exfiltrated through query manipulation.
- **Data hygiene:** raw data sources are kept out of version control; only the pipeline code is
  shared.
- **Access control:** the design separates who can read what, so sensitive fields are not exposed
  to every stage of the pipeline.

## Building it, step by step

### 1. Ingest three siloed sources

Customer, transaction, and fraud labels each lived behind a separate "gatekeeper". The first step
is loading all three consistently.

> **Example:** a flagged transaction only means something once the customer record *and* the fraud
> label are joined to it.

### 2. Join without leaking data

Instead of dumping everything into one open table, the join uses hardened SQL and keeps raw files
out of git.

### 3. Detect fraud across the join

With the data joined safely, the workflow surfaces suspicious activity under access controls.

## What I evaluated

| Aspect | Result |
| --- | --- |
| Sources | customer · transactions · fraud |
| Defence | SQL-injection hardening |
| Hygiene | raw sources kept out of git |

## What I learned

Privacy and security are not bolted on at the end — they are design constraints that shape the
pipeline, the queries, and where data is allowed to live.
