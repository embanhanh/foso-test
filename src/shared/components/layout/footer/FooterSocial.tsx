import { Facebook } from "lucide-react";

export function FooterSocial() {
  return (
    <div className="flex items-center gap-6">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="text-brand-100/70 hover:text-brand-300 transition-colors"
      >
        <Facebook
          className="w-5 h-5 fill-current border-none"
          strokeWidth={0}
        />
      </a>
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noreferrer"
        className="text-brand-100/70 hover:text-brand-300 font-medium text-lg flex items-center transition-colors"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.589 6.686a4.793 4.793 0 01-3.97-1.564 4.887 4.887 0 01-1.07-3.033h-3.414v13.682a3.868 3.868 0 01-3.867 3.867 3.867 3.867 0 01-3.867-3.867 3.867 3.867 0 013.867-3.867c.18 0 .355.013.527.038v-3.565a7.35 7.35 0 00-.527-.018 7.377 7.377 0 107.377 7.377V8.532a8.318 8.318 0 004.945 1.624V6.686z" />
        </svg>
      </a>
      <a
        href="https://zalo.me"
        target="_blank"
        rel="noreferrer"
        className="text-brand-100/70 hover:text-brand-300 transition-colors flex items-center mt-[-2px]"
      >
        <div className="border border-current rounded-full px-[6px] py-[4px] text-[10px] font-bold tracking-wider">
          Zalo
        </div>
      </a>
    </div>
  );
}
