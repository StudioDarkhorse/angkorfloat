"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter, routing } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  // Ricava programmaticamente i locale definiti nel routing, ma per ora filtriamo solo 'en' e 'kh' come richiesto.
  // In futuro ti basterà rimuovere il filter() per mostrare automaticamente tutte le lingue in routing.locales.
  const availableLocales = routing.locales.filter(l => l === 'en' || l === 'kh');

  const onSelectChange = (nextLocale: string) => {
    if (nextLocale === locale) return;
    
    startTransition(() => {
      // useRouter e usePathname di next-intl gestiscono automaticamente 
      // il cambio di prefisso preservando la rotta attuale
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="flex gap-2 items-center text-current">
      {availableLocales.map((loc, idx) => (
        <span key={loc} className="flex items-center">
          <button
            disabled={isPending}
            onClick={() => onSelectChange(loc)}
            className={`font-josefin text-sm tracking-widest uppercase transition-colors ${
              locale === loc 
                ? 'font-bold text-custom-blue dark:text-custom-almond' 
                : 'text-custom-blue/75 dark:text-custom-almond/80 hover:text-custom-blue dark:hover:text-custom-almond'
            }`}
          >
            {loc}
          </button>
          {idx < availableLocales.length - 1 && (
            <span className="mx-2 h-3 w-[1px] bg-custom-blue/30 dark:bg-custom-almond/30" aria-hidden="true" />
          )}
        </span>
      ))}
    </div>
  );
}
