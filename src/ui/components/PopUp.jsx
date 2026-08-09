export function PopUp({ children, isOpen, onClose, className = "", ...props }) {
  if (!isOpen) return null;

  const IconClose = <svg class="humbleicons hi-times" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g stroke="currentColor" stroke-linecap="round" stroke-width="1"><path d="M6 18 18 6M18 18 6 6" /></g></svg>

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div
        className="w-full max-w-[28rem] rounded-lg bg-white shadow-shadowPrimary
                   animate-[popup_0.2s_ease]"
      >
        <div className="justify-self-end m-2 cursor-pointer" onClick={onClose}>
          {IconClose}
        </div>
        {children}
      </div>
    </div>
  );
}