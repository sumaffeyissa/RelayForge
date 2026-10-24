# RelayForge

RelayForge is an open-source, full-stack integration reliability platform designed to accept events, record them durably, deliver them to configured destinations, handle retries and failures, and expose an operational dashboard.

## Architecture & Monorepo Structure

RelayForge uses a `pnpm` monorepo workspace:

- `apps/web`: Next.js (App Router), React, TypeScript frontend dashboard.
- `apps/api`: NestJS, TypeScript backend service.

```text
RelayForge/
├── .github/workflows/ci.yml   # Continuous integration pipeline
├── apps/
│   ├── api/                   # NestJS backend API (Port 3001)
│   └── web/                   # Next.js frontend (Port 3000)
├── .env.example               # Environment variable templates
├── pnpm-workspace.yaml        # Workspace configuration
└── tsconfig.base.json         # Strict TypeScript shared configuration
```

## Prerequisites

- **Node.js**: `v22.x` or `v24.x`
- **pnpm**: `v9.x` or higher (`v12.x` supported)
- **Git**

## Getting Started

1. **Clone the repository and install dependencies**:

   ```bash
   pnpm install
   ```

2. **Copy environment variables**:

   ```bash
   cp .env.example .env
   ```

3. **Start the development servers**:

   ```bash
   # Start all applications in parallel:
   pnpm dev

   # Or start individual services:
   pnpm dev:api   # API runs on http://localhost:3001
   pnpm dev:web   # Web runs on http://localhost:3000
   ```

4. **Verify Service Health**:
   - Web application: [http://localhost:3000](http://localhost:3000)
   - API health endpoint: [http://localhost:3001/health](http://localhost:3001/health)

## Available Scripts

| Script              | Description                                  |
| :------------------ | :------------------------------------------- |
| `pnpm dev`          | Starts all applications in development mode  |
| `pnpm dev:api`      | Starts the NestJS API in watch mode          |
| `pnpm dev:web`      | Starts the Next.js frontend                  |
| `pnpm build`        | Builds both apps for production              |
| `pnpm lint`         | Runs ESLint across all apps                  |
| `pnpm type-check`   | Type-checks all applications with TypeScript |
| `pnpm test`         | Runs unit tests across all applications      |
| `pnpm format:check` | Verifies code formatting via Prettier        |
| `pnpm format`       | Formats code via Prettier                    |
