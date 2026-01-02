# DSA Engineering

A disciplined, pattern-driven approach to mastering **Data Structures & Algorithms** using **TypeScript** and **LeetCode**.

This repository is not a dump of solutions.  
It is a **system** for building algorithmic thinking, recall speed, and interview readiness.

---

## Objectives

- Master all core DSA patterns
- Develop fast problem recognition
- Write clean, explainable solutions
- Build a public, reviewable proof of competence

---

## Core Principles

1. **Patterns over problems**
2. **Consistency beats intensity**
3. **Clarity beats cleverness**
4. **Repetition builds intuition**
5. **Public work compounds learning**

---

## Repository Structure

```

dsa-engineering/
│
├── README.md
├── progress.md
│
├── patterns/
│   ├── arrays/
│   ├── two-pointers/
│   ├── sliding-window/
│   ├── hash-map/
│   ├── stack/
│   ├── binary-search/
│   ├── linked-list/
│   ├── trees/
│   ├── graphs/
│   ├── heap/
│   ├── backtracking/
│   ├── greedy/
│   └── dynamic-programming/
│
├── leetcode/
│   ├── easy/
│   ├── medium/
│   └── hard/
│
└── notes/
├── pattern-index.md
├── mistakes.md
└── templates.ts

```

---

## How Problems Are Solved

Each problem must include:

- Identified pattern
- Time & space complexity
- Final optimized solution
- One-line insight

### Example Header

```ts
/**
 * LeetCode 3 – Longest Substring Without Repeating Characters
 * Pattern: Sliding Window
 * Time: O(n)
 * Space: O(k)
 * Insight: Expand window, shrink only when constraint breaks.
 */
```

---

## Language & Standards

* **Language:** TypeScript, Javascript and Python
* **Style:** Clear > clever
* **No unnecessary abstractions**
* **Readable under interview pressure**
  
    ### Language Policy

    Primary language:
    - TypeScript

    Secondary languages:
    - JavaScript
    - Python

    Rules:
    - Every problem must be solved in TypeScript
    - Secondary languages are optional and used only for comparison or speed
    - Folder structure remains pattern-first, not language-first

  ### Completed Patterns
  - Array Traversal
  - Hash Map (Complement Lookup)
  - Two Pointers

---

## Daily Practice Rules

### Weekdays

* 1 Medium problem
* 1 Easy or review problem
* Commit immediately

### Weekends

* Re-solve 3 old problems **without looking**
* Update `notes/mistakes.md`

---

## Tracking Progress

### `progress.md`

Tracks weekly volume and pattern coverage.

Example:

```
Week 3
- Sliding Window: 6
- Hash Map: 4
Key Issue:
- Incorrect window shrink condition
```

### `mistakes_lessons.md`

Tracks **root causes only**.

Example:

```
- Off-by-one error in binary search bounds
- Forgot to handle duplicate keys in map
```

---

## Commit Rules

* One problem = one commit
* Clear commit messages

Example:

```
feat(sliding-window): longest substring without repeating characters
```

---

## Sharing & Visibility

* This repo is public by design
* Used for:

  * Interview preparation
  * Recruiter review
  * Knowledge reinforcement

Optional:

* Weekly LinkedIn or X updates summarizing learned patterns
* GitHub Gists for reusable templates

---

## Target Outcome (2026)

* 300–400 problems solved
* Confident whiteboard + live coding performance

---

## Disclaimer

This repository prioritizes **thinking quality**, not leaderboard scores.
If a solution cannot be explained simply, it is incomplete.

---

## Status

🚧 In active development — 2026

