import { whatsappLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi Nearwaley! I'd like to know more.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nearwaley on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.84-1.32l-.35-.21-3.6.94.96-3.5-.23-.36a9.46 9.46 0 0 1-1.45-5.05c0-5.23 4.26-9.49 9.5-9.49a9.43 9.43 0 0 1 6.71 2.78 9.43 9.43 0 0 1 2.78 6.72c0 5.23-4.26 9.49-9.47 9.49zm8.08-17.57A11.35 11.35 0 0 0 12.04.5C5.74.5.62 5.62.62 11.92c0 2.01.53 3.98 1.53 5.71L.5 23.5l6.01-1.58a11.4 11.4 0 0 0 5.53 1.41h.01c6.3 0 11.42-5.12 11.42-11.42 0-3.05-1.19-5.92-3.35-8.08z" />
      </svg>
    </a>
  );
}
