interface PromptLaunchPanelProps {
  providerName: string
  resolvedPrompt: string
  launchUrl: string
  onLaunch: () => void
}

export const PromptLaunchPanel = ({
  providerName,
  resolvedPrompt,
  launchUrl,
  onLaunch,
}: PromptLaunchPanelProps) => (
  <section className="prompt-launch-panel">
    <div className="prompt-launch-panel__header">
      <h2>Launch preview</h2>
      <p>
        The current target is <strong>{providerName}</strong>.
      </p>
    </div>

    <label className="prompt-launch-panel__prompt">
      Resolved prompt
      <textarea readOnly value={resolvedPrompt} rows={10} />
    </label>

    <p className="prompt-launch-panel__link">
      Launch URL: <a href={launchUrl}>{launchUrl}</a>
    </p>

    <button type="button" onClick={onLaunch}>
      Go
    </button>
  </section>
)
