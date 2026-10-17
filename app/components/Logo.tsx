export function Logo({ className = "" }: { className?: string }) {
  // ถ้ามีไฟล์โลโก้ PNG ให้วางที่ public/logo.png แล้วเปลี่ยนตรงนี้เป็น <Image src="/logo.png" ... />
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="h-3.5 w-3.5 rounded-full bg-brand shadow-[0_0_18px_var(--brand)]"
      />
      <span className="font-heading text-xl font-semibold tracking-tight">venuee</span>
    </span>
  );
}
