export default function GHLForm({ title = "Get a Free Quote" }: { title?: string }) {
  return (
    <div className="w-full rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/5">
      <div style={{ minHeight: 910 }} className="w-full overflow-hidden rounded-xl">
        <iframe
          src="https://api.opslyautomations.com/widget/form/wARuKO91TRqaTo9FxUKO"
          style={{ width: "100%", height: "910px", border: "none", borderRadius: "8px" }}
          id="inline-wARuKO91TRqaTo9FxUKO"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form 3"
          data-height="910"
          data-layout-iframe-id="inline-wARuKO91TRqaTo9FxUKO"
          data-form-id="wARuKO91TRqaTo9FxUKO"
          title={title}
        />
      </div>
    </div>
  );
}
