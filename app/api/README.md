# Route Handlers

Server-side API endpoints (route.ts files) that live inside the app dir instead of a separate backend. Not a page group — nothing here renders UI.

When to use: form submissions, webhooks, anything that must run server-side and doesn't need a full backend service yet. If the API surface grows large enough to need its own deployable, promote it out of app/api and into services/ or a separate service.
