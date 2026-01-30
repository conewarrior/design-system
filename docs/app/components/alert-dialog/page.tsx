export default function AlertDialogPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Alert Dialog</h1>
        <p className="text-lg text-muted-foreground">
          Alert Dialog component from the design system.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`npm install @design-geniefy/ui`}</code></pre>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <pre className="bg-muted rounded-md p-4 overflow-x-auto"><code>{`import { AlertDialog } from '@design-geniefy/ui';`}</code></pre>
        <p className="text-sm text-muted-foreground mt-2">
          See the component source for available props and variants.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Example</h2>
        <div className="rounded-lg border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Component examples and interactive demos will be added here.
          </p>
        </div>
      </section>
    </div>
  );
}
