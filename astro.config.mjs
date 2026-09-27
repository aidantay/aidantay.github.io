// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://aidantay.github.io",
  integrations: [
    starlight({
      title: "Dr. Aidan P. Tay",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/aidantay",
        },
        {
          icon: "open-book",
          label: "Google Scholar",
          href: "https://scholar.google.com/citations?user=ij2lpE8AAAAJ&hl=en",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],
});
