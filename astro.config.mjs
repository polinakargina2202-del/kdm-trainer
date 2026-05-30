// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://DEIN-USERNAME.github.io',
  base: '/kdm-trainer',
  integrations: [
    starlight({
      title: 'KDM Prüfungstrainer',
      description: 'AP Teil 2 · Kaufmann/-frau für Digitalisierungsmanagement · KLA Bremerhaven',
      defaultLocale: 'de',
      locales: { root: { label: 'Deutsch', lang: 'de' } },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DEIN-USERNAME/kdm-trainer' }],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: '🏠 Start',
          slug: 'index',
        },
        {
          label: '§12 Digitales Geschäftsmodell',
          collapsed: false,
          items: [
            { label: 'Übersicht', slug: 'p12' },
            { label: 'Projektmanagement', slug: 'p12/projektmanagement' },
            { label: 'Datenbanken & SQL', slug: 'p12/datenbanken-sql' },
            { label: 'Cloud & Servicemodelle', slug: 'p12/cloud-servicemodelle' },
            { label: 'RAID & Datensicherung', slug: 'p12/raid-backup' },
            { label: 'BPMN, EPK & ITSM', slug: 'p12/bpmn-itsm' },
            { label: 'IT-Sicherheit & Netzwerk', slug: 'p12/it-sicherheit' },
            { label: 'Softwaretesting & Debugging', slug: 'p12/softwaretesting' },
            { label: 'Datenschutz & DSGVO', slug: 'p12/dsgvo' },
            { label: 'App-Entwicklung & UI/UX', slug: 'p12/app-entwicklung' },
          ],
        },
        {
          label: '§13 Kaufmänn. Unterstützungsprozesse',
          collapsed: false,
          items: [
            { label: 'Übersicht', slug: 'p13' },
            { label: 'Vertragsrecht & Abnahme', slug: 'p13/vertragsrecht' },
            { label: 'Beschaffung & Wareneingang', slug: 'p13/beschaffung' },
            { label: 'Finanzierung & Tilgung', slug: 'p13/finanzierung' },
            { label: 'Kalkulation & Kostenrechnung', slug: 'p13/kalkulation' },
            { label: 'Rechnungswesen & Bilanz', slug: 'p13/rechnungswesen' },
          ],
        },
        {
          label: '§14 Wirtschafts- und Sozialkunde',
          collapsed: false,
          items: [
            { label: 'Übersicht', slug: 'wiso' },
            { label: 'BBiG & Ausbildungsrecht', slug: 'wiso/bbig' },
            { label: 'Arbeitsrecht & Kündigung', slug: 'wiso/arbeitsrecht' },
            { label: 'Betriebsverfassung & JAV', slug: 'wiso/betriebsverfassung' },
            { label: 'Tarifvertrag & Arbeitskampf', slug: 'wiso/tarifvertrag' },
            { label: 'GmbH & Rechtsformen', slug: 'wiso/rechtsformen' },
            { label: 'Leitungssysteme & Organisation', slug: 'wiso/organisation' },
            { label: 'AGG & Gleichbehandlung', slug: 'wiso/agg' },
            { label: 'Sozialversicherung & Rente', slug: 'wiso/sozialversicherung' },
            { label: 'VWL: Konjunktur & Markt', slug: 'wiso/vwl' },
            { label: 'Umweltschutz & Arbeitsschutz', slug: 'wiso/umwelt' },
          ],
        },
      ],
    }),
  ],
});
