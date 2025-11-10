'use client';
import { jsx as _jsx } from "react/jsx-runtime";
const formatPhoneNumber = (value) => {
    const digits = value.replace(/[^0-9]/g, '');
    return digits.startsWith('00') ? digits.substring(2) : digits;
};
export default function WhatsAppButton({ phoneNumber }) {
    const rawNumber = phoneNumber || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
    const formatted = rawNumber ? formatPhoneNumber(rawNumber) : '';
    if (!formatted) {
        return null;
    }
    return (_jsx("a", { href: `https://wa.me/${formatted}`, target: "_blank", rel: "noopener noreferrer", className: "fixed bottom-5 left-5 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:scale-105 transition-all", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", className: "w-6 h-6", "aria-hidden": "true", children: _jsx("path", { d: "M12.04 2c-5.51 0-9.98 4.47-9.98 9.98 0 1.76.46 3.47 1.33 4.99L2 22l5.18-1.35a9.94 9.94 0 004.86 1.24h.01c5.5 0 9.97-4.47 9.97-9.98S17.54 2 12.04 2zm0 18.17h-.01c-1.57 0-3.11-.42-4.46-1.22l-.32-.19-3.07.8.82-2.99-.21-.31a8.26 8.26 0 01-1.28-4.41c0-4.56 3.71-8.27 8.28-8.27a8.24 8.24 0 018.27 8.27c0 4.56-3.71 8.27-8.27 8.27zm4.57-6.2c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.17-.3.18-.55.06-.25-.12-1.05-.39-2.01-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.31.37-.46.12-.15.15-.25.23-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.43-.15 0-.32-.02-.49-.02s-.45.06-.68.32c-.23.25-.89.87-.89 2.12 0 1.25.91 2.45 1.04 2.62.12.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" }) }) }));
}
