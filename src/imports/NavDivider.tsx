export default function NavDivider() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[8px] relative size-full" data-name="Nav divider">
      <div className="h-px relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}