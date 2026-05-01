# Deploying platte.dev

The site runs as a Cloudflare Worker (Astro `@astrojs/cloudflare` adapter)
on the `platte.dev` apex via a Workers Custom Domain.

## One-time setup

1. **Authenticate wrangler.** `cf` (Cloudflare's new unified CLI) doesn't
   yet support deploying Workers as of v0.0.5 — it covers
   accounts/auth/zones/dns/registrar but not workers/pages. Use wrangler
   for the deploy itself:

   ```sh
   wrangler login
   ```

2. **Create the SESSION KV namespace.** The adapter auto-enables Astro
   sessions backed by Cloudflare KV. The id is committed in
   `wrangler.jsonc`; if you ever need to recreate it:

   ```sh
   wrangler kv namespace create SESSION
   ```

   Then paste the returned id into `wrangler.jsonc` under `kv_namespaces`.

3. **Custom domain.** `wrangler.jsonc` declares
   `routes: [{ pattern: "platte.dev", custom_domain: true }]`, so the
   first deploy provisions the domain automatically. The zone must
   already exist on the same Cloudflare account.

## Deploying

From the repo root:

```sh
npm run build
wrangler deploy
```

Run `wrangler deploy` from the **project root**, not from `dist/server/`.
The adapter writes a deploy redirect to `.wrangler/deploy/config.json`
that points wrangler at the built artifacts; running from `dist/server/`
collides with that redirect and fails with "do not share the same base
path."

## Notes

- `cf` for inspection: `cf auth whoami`, `cf zones list --name platte.dev`,
  `cf dns ...`. Useful sanity checks; not part of the deploy path today.
- Node version matters: wrangler and `cf` both require Node ≥20. The
  system `node` on this machine is v14; nvm's v24 is what works. The
  `cf` shebang resolves through `env node`, so make sure the right node
  is first on `PATH` when invoking it.
- `nodejs_compat` is required because Svelte SSR imports
  `node:async_hooks`. It's set in `wrangler.jsonc`.
- `workers_dev` is intentionally disabled so the only public URL is
  `platte.dev` (no `*.workers.dev` mirror).
