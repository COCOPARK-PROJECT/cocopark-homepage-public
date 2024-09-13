interface Props {
  open: boolean;
  onClose: () => void;
}
export default function CompetitionModal({ open, onClose }: Readonly<Props>) {
  if (!open) {
    return <></>;
  }

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal show d-block" role="dialog" onClick={onClose}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-0 custom-modal-body">
              <img
                src="/thumbnails/thumbnail_cocopark.png"
                alt="Popup"
                className="img-fluid"
                width={1000}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("/content-creator-competition", "_blank");
                  onClose();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
