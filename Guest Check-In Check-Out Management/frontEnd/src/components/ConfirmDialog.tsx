interface Props {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog = ({ message, onConfirm, onCancel }: Props) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <p>{message}</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel} className="cancel">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmDialog;
