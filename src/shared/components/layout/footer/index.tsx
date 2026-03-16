import { FooterWatermark } from "./FooterWatermark";
import { FooterLogo } from "./FooterLogo";
import { FooterSitemap } from "./FooterSitemap";
import { FooterContact } from "./FooterContact";
import { FooterBooking } from "./FooterBooking";
import { FooterSocial } from "./FooterSocial";
import { FooterCopyright } from "./FooterCopyright";

export async function Footer() {
  return (
    <footer className="relative bg-brand-900 overflow-hidden py-12 px-8 md:py-16 md:px-24 z-20">
      <FooterWatermark />

      <div className="mx-auto flex flex-col min-h-[500px] justify-between relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-16 lg:gap-24">
          <FooterLogo />

          {/* RIGHT SECTION: Sitemap & Contact */}
          <div className="flex flex-col w-full lg:w-3/5 gap-16">
            <FooterSitemap />

            {/* CONTACT & Oval Button Block */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              <FooterContact />
              <FooterBooking />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Social & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mt-20">
          <FooterSocial />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}
