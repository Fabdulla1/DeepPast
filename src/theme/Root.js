import React from 'react';

export default function Root({children}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Set initial dark theme preference if no theme is stored
              try {
                if (!localStorage.getItem('theme')) {
                  localStorage.setItem('theme', 'dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch (e) {
                // Fallback if localStorage is not available
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            })();
          `,
        }}
      />
      {children}
    </>
  );
}