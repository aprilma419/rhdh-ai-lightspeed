import svgPaths from "./svg-jvwbymlq3i";

function IconAndTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Icon and title">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#151515] text-[16px] text-ellipsis whitespace-nowrap">Document</p>
    </div>
  );
}

function Actions() {
  return <div className="content-stretch flex items-center justify-end shrink-0" data-name="Actions" />;
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <div className="relative shrink-0 size-[24px]" data-name="Caret">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="🖼️ Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14.1172">
            <path d={svgPaths.p27412380} fill="var(--fill-0, #6A6E73)" id="ð¼ï¸ Icon" />
          </svg>
        </div>
      </div>
      <IconAndTitle />
      <Actions />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col h-[21px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Red_Hat_Text:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#151515] text-[14px] w-full">Help me document my code</p>
    </div>
  );
}

function IconAndTitle1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Icon and title">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#151515] text-[16px] text-ellipsis whitespace-nowrap">Debug</p>
    </div>
  );
}

function Actions1() {
  return <div className="content-stretch flex items-center justify-end shrink-0" data-name="Actions" />;
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <div className="relative shrink-0 size-[24px]" data-name="Caret">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="🖼️ Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9997 12.7983">
            <path d={svgPaths.p1d4f9780} fill="var(--fill-0, #6A6E73)" id="ð¼ï¸ Icon" />
          </svg>
        </div>
      </div>
      <IconAndTitle1 />
      <Actions1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col h-[21px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Red_Hat_Text:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#151515] text-[14px] w-full">Help me find a bug in my code</p>
    </div>
  );
}

function FlatCard() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[97px] items-start left-[308px] p-[16px] rounded-[16px] top-[85px] w-[250px]" data-name="Flat Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Header1 />
      <Content1 />
    </div>
  );
}

function IconAndTitle2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Icon and title">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] font-medium leading-[24px] overflow-hidden relative shrink-0 text-[#151515] text-[16px] text-ellipsis whitespace-nowrap">Troubleshoot</p>
    </div>
  );
}

function Actions2() {
  return <div className="content-stretch flex items-center justify-end shrink-0" data-name="Actions" />;
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <div className="relative shrink-0 size-[24px]" data-name="Caret">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="🖼️ Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9997 12.7983">
            <path d={svgPaths.p1d4f9780} fill="var(--fill-0, #6A6E73)" id="ð¼ï¸ Icon" />
          </svg>
        </div>
      </div>
      <IconAndTitle2 />
      <Actions2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col h-[21px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Red_Hat_Text:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#151515] text-[14px] w-full">Fix a problem with my application</p>
    </div>
  );
}

function FlatCard1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[97px] items-start left-[574px] p-[16px] rounded-[16px] top-[85px] w-[250px]" data-name="Flat Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Header2 />
      <Content2 />
    </div>
  );
}

function WelcomeMsg() {
  return (
    <div className="absolute contents left-[42px] top-0" data-name="welcome msg">
      <p className="absolute font-['Red_Hat_Display:Medium',sans-serif] font-medium leading-[24px] left-[42px] overflow-hidden text-[#06c] text-[40px] text-ellipsis top-0 whitespace-nowrap">Hello, Rachael</p>
      <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[97px] items-start left-[42px] p-[16px] rounded-[16px] top-[84px] w-[250px]" data-name="Flat Card">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Header />
        <Content />
      </div>
      <FlatCard />
      <FlatCard1 />
      <p className="absolute font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[24px] left-[42px] overflow-hidden text-[#151515] text-[24px] text-ellipsis top-[40px] whitespace-nowrap">How can I help you today?</p>
    </div>
  );
}

function CircleInfoSolid() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="circle-info-solid 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_5593)" id="circle-info-solid 1">
          <path d={svgPaths.p14080980} fill="var(--fill-0, #707070)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_5593">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Footnote1() {
  return (
    <div className="content-stretch flex items-start justify-center relative self-stretch shrink-0 w-[960px]" data-name="Footnote">
      <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[4px] relative shrink-0" data-name="Footnote">
        <div className="flex flex-col font-['Red_Hat_Text:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[18px]">Lightspeed uses AI. Check for mistakes.</p>
        </div>
        <CircleInfoSolid />
      </div>
    </div>
  );
}

function Footnote() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start justify-center left-0 top-[353.5px] w-[876px]" data-name="Footnote">
      <Footnote1 />
    </div>
  );
}

function ChatContent() {
  return (
    <div className="absolute contents left-0 top-[353.5px]" data-name="chat content">
      <Footnote />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[4px] pt-[8px] px-[16px] top-[4px] w-[760px]" data-name="Input">
      <p className="flex-[1_0_0] font-['Red_Hat_Text:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#707070] text-[16px]">Enter a prompt for Lightspeed</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
        <div className="absolute inset-1/4" data-name="Vector">
          <div className="absolute inset-[-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.pe763897} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[109px] left-[45px] rounded-[24px] top-[215px] w-[768px]" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
      <Input />
      <div className="absolute bottom-[6px] content-stretch flex gap-[8px] items-center left-[6px]" data-name="Input Action / Add">
        <Button />
        <div className="-translate-x-1/2 absolute bg-[#3f3f46] content-stretch flex items-center justify-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[-24px]" data-name="Tooltip">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Add</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="microphone">
        <div className="absolute inset-[8.33%_37.5%_41.67%_37.5%] rounded-[5px]" data-name="Rectangle">
          <div aria-hidden="true" className="absolute border-[#6a7282] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[5.75px]" />
        </div>
        <div className="absolute bottom-1/4 left-[20.83%] right-[20.83%] top-[41.67%]" data-name="Rectangle">
          <div className="absolute inset-[-11.25%_-6.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1667 8.16667">
              <path d={svgPaths.p1d763e00} id="Rectangle" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[8.33%] left-[37.5%] right-[37.5%] top-3/4" data-name="Rectangle">
          <div className="absolute inset-[-22.5%_-15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 4.83333">
              <path d={svgPaths.p13f6b480} id="Rectangle" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="send">
        <div className="absolute inset-[13.54%_5.21%_13.54%_9.38%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0832 14.5831">
            <path d={svgPaths.p3eea9c00} fill="var(--fill-0, #6A7282)" id="Subtract" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ActionsGroup() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center right-[70px] rounded-[999px] top-[278px]" data-name="Actions Group">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Input Action / Speak">
        <Button1 />
        <div className="-translate-x-1/2 absolute bg-[#3f3f46] content-stretch flex items-center justify-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[-24px]" data-name="Tooltip">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Speak</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Input Action / Send">
        <Button2 />
        <div className="-translate-x-1/2 absolute bg-[#3f3f46] content-stretch flex items-center justify-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[-24px]" data-name="Tooltip">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Send</p>
        </div>
      </div>
    </div>
  );
}

function IconWrapper() {
  return <div className="absolute left-[172px] size-[21px] top-[288px]" data-name="IconWrapper" />;
}

function ModelSelector() {
  return (
    <div className="absolute contents left-[172px] top-[288px]" data-name="model selector">
      <IconWrapper />
      <div className="absolute left-[176px] size-[14px] top-[291.5px]" data-name="fa-angle-down">
        <div className="absolute inset-[29.17%_16.67%_27.78%_16.67%]" data-name="angle-down">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 6.02771">
            <path clipRule="evenodd" d={svgPaths.p1794ab00} fill="var(--fill-0, #6A7282)" fillRule="evenodd" id="angle-down" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ModelSelect() {
  return (
    <div className="absolute contents left-[100px] top-[288px]" data-name="model select">
      <ModelSelector />
      <p className="absolute font-['Red_Hat_Display:Medium',sans-serif] font-medium h-[20px] leading-[21px] left-[100px] text-[#6a7282] text-[14px] top-[288.5px] w-[72px]">llama 3.1.8b</p>
    </div>
  );
}

function MsgBar() {
  return (
    <div className="absolute contents left-[45px] top-[215px]" data-name="msg bar">
      <InputContainer />
      <ActionsGroup />
      <ModelSelect />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <WelcomeMsg />
      <ChatContent />
      <MsgBar />
    </div>
  );
}