# Chronos

> Temporal event orchestration for the real world.

Chronos is a stateful event orchestration platform that turns real-world events into time-aware workflows.

Instead of building automations around:

```text
Event → Action
```

Chronos manages:

```text
Event
  ↓
Context
  ↓
Decision
  ↓
Action
  ↓
Wait
  ↓
Observe
  ↓
Transition
  ↓
Action ...
```

It keeps track of what happened, what state a workflow is in, what should happen next, and what happens if the expected event never arrives.

---

## Why Chronos?

Most event-driven systems are built around immediate reactions:

```text
WHEN X HAPPENS
→ DO Y
```

Real-world processes are rarely that simple.

A workflow may need to:

- react to an event
- inspect context
- wait for another event
- branch based on what happens next
- timeout when nothing happens
- perform an action
- verify the result
- continue through multiple states

Chronos treats time, state, and future events as first-class concepts.

---

## How it works

```text
                         EVENT SOURCES
                              │
              ┌───────────────┼───────────────┐
              │               │               │
             Ring           Future          Future
              │             Source          Source
              └───────────────┼───────────────┘
                              ▼
                     ┌────────────────┐
                     │ Event Gateway  │
                     └───────┬────────┘
                             ▼
                     ┌────────────────┐
                     │ Event Pipeline │
                     └───────┬────────┘
                             ▼
                  ┌──────────────────────┐
                  │    Chronos Engine    │
                  │                      │
                  │  Context             │
                  │  State               │
                  │  Conditions          │
                  │  Transitions         │
                  │  Scheduling          │
                  └──────────┬───────────┘
                             ▼
                     ┌────────────────┐
                     │  Action Layer  │
                     └───────┬────────┘
                             ▼
                          OUTCOME
                             │
                             └──────→ New Event
```

The engine is source-agnostic.

Ring is the first integration, but Ring is not the product. Chronos is the orchestration layer that sits between events and actions.

---

## Core concepts

### Events

An event represents something that happened.

```json
{
  "id": "evt_123",
  "source": "ring",
  "type": "motion.detected",
  "timestamp": "2026-09-23T12:00:00Z",
  "subject": {},
  "context": {},
  "payload": {}
}
```

Events are immutable historical facts.

### Workflow state

State represents where a workflow currently is.

```text
TRIGGERED
   ↓
ACTIVE
   ↓
WAITING
   ↓
VERIFYING
   ↓
COMPLETED
```

### Transitions

Transitions determine how a workflow moves between states.

```text
Current State
      +
New Event
      +
Context
      ↓
  Transition
      ↓
  Next State
```

This gives Chronos a deterministic execution model.

---

## AI + Chronos

AI is used to understand intent and generate workflows, not to control execution directly.

```text
User Intent
     ↓
    AI
     ↓
Workflow Proposal
     ↓
Validation
     ↓
Chronos Engine
     ↓
Deterministic Execution
```

In other words:

AI interprets. Chronos executes.

This keeps the execution path predictable, inspectable, and controllable.

---

## Ring integration

Ring provides the first connection between Chronos and the physical world.

```text
Ring Event
    ↓
Webhook
    ↓
Event Gateway
    ↓
Chronos
    ↓
Workflow Execution
    ↓
Action
```

The core engine does not depend on Ring-specific logic, allowing additional event sources to be added later.

---

## Execution timeline

A major part of Chronos is understanding why something happened.

Eventually every workflow execution will produce a timeline such as:

```text
12:00:01  Event received
12:00:02  Workflow started
12:00:02  State → ACTIVE
12:00:03  Condition evaluated
12:00:03  Waiting for event
12:00:17  Event received
12:00:17  State → VERIFYING
12:00:18  Action executed
12:00:19  State → COMPLETED
```

This enables debugging, observability, and eventually workflow replay.

---

## Tech stack

### Frontend

- React
- Vite
- TypeScript
- DaisyUI
- Wouter
- SWR

### Backend

- Python
- FastAPI
- uv

### Cloud / next phases

- AWS
- AWS CDK
- API Gateway
- Lambda
- SQS
- DynamoDB
- EventBridge

Infrastructure will be introduced incrementally rather than coupling the initial application to AWS.

---

## Repository structure

```text
chronos/
├── apps/
│   ├── api/
│   │   ├── main.py
│   │   ├── tests/
│   │   ├── README.md
│   │   └── pyproject.toml
│   └── web/
│       ├── src/
│       ├── index.html
│       ├── package.json
│       └── vite.config.ts
├── docs/
│   └── README.md
├── .devcontainer/
├── .gitignore
├── AGENTS.md
├── LICENSE
├── README.md
└── SETUP.md
```

The repository starts intentionally small.

New architectural boundaries such as engine, services, and models will be introduced when the corresponding functionality actually exists.

---

## Development roadmap

### Phase 1 — Foundation

- repository structure
- React/Vite application
- FastAPI application
- dev container
- local run flow

### Phase 2 — Event model

- event schema
- event ingestion
- event validation
- event persistence

### Phase 3 — Workflow model

- workflow definition
- workflow execution
- states
- transitions
- conditions
- actions

### Phase 4 — Chronos engine

- event → state evaluation
- transition engine
- action execution
- waiting
- timeouts
- scheduling

### Phase 5 — Ring

- Ring authentication
- Ring webhook integration
- Ring event normalization
- end-to-end event execution

### Phase 6 — AI

- Bedrock integration
- natural-language workflow creation
- workflow validation
- AI-assisted workflow editing

### Phase 7 — Observability

- execution timeline
- decision tracing
- workflow replay
- debugging interface

### Phase 8 — Infrastructure

- AWS CDK
- service architecture
- API Gateway
- Lambda
- SQS
- DynamoDB
- GitHub OIDC
- production deployment

---

## Engineering principles

**Events are immutable.**

Historical events represent things that happened and should not be modified.

**State is explicit.**

A workflow's current state should be represented directly rather than hidden inside application logic.

**AI proposes. Chronos executes.**

AI-generated workflows must be validated before execution.

**Time is a first-class concept.**

Waiting, deadlines, delays, and timeouts are fundamental workflow operations.

**Everything should be explainable.**

For every transition, we should eventually be able to answer:

```text
What happened?
Why did Chronos react?
What state was the workflow in?
Why did it transition?
What action was executed?
What happened afterward?
```

**Build the engine before overbuilding the infrastructure.**

The core orchestration model should work locally before being distributed across AWS services.

---

## Current status

🚧 Early development

Chronos is currently in the foundation phase.

The immediate goal is to establish the repository, development environment, frontend, and backend before implementing the orchestration engine.

---

## The goal

Chronos should ultimately answer one question reliably:

> Given what just happened, what should happen next — and how do we keep track until the workflow is complete?

---

## License

TBD

## Local run

### Frontend

```bash
cd apps/web
npm install
npm run dev -- --host 0.0.0.0
```

### Backend

```bash
cd apps/api
python -m pip install fastapi uvicorn pytest httpx
python -m uvicorn main:app --host 0.0.0.0 --port 8000
```

### Health check

```bash
curl http://localhost:8000/api/health
```

Expected response:

```json
{"status":"ok"}
```

---

## Docs and phase-two planning

The project includes a dedicated docs area for the next planning layer:

- [docs/README.md](docs/README.md)

This is where large design work such as AWS CDK and service setup will live once we move into phase two.
