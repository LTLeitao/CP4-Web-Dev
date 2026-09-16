export default function ActionControls({ onSkip, onLike }) {
  return (
    <div className="action-controls">
      <button onClick={onSkip} className="btn-action btn-skip">
        X
      </button>
      <button onClick={onLike} className="btn-action btn-like">
        V
      </button>
    </div>
  );
}